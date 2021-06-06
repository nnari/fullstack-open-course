import React, { useState } from "react";
const App = () => {
  const [people, setPeople] = useState([
    { name: "Tatu Pesonen", number: "045 12312321312" },
  ]);
  const [filter, setFilter] = useState("");
  const [newPerson, setNewPerson] = useState({});

  const handleFilterChange = (event) => setFilter(event.target.value);

  /*
  Generic over field that you want to set. 
  Optionally you could get the current ID of the field or some other 
  attribute and use it as the key selector. 
  */
  const handleNewPersonChange = (event, field) =>
    setNewPerson((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

  const handlePeopleAdd = (event) => {
    event.preventDefault();
    // Check whether the people array already contains user with the same name
    if (
      people.some((p) => p.name.toLowerCase() === newPerson.name.toLowerCase())
    ) {
      alert(`${newPerson.name} is already in the phonebook.`);
      return;
    }

    // Copy instead of reference
    setPeople((prev) => [...prev, { ...newPerson }]);
    setNewPerson({ name: "", number: "" });
  };

  const peopleToShow = filter
    ? people.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    : people;

  return (
    <>
      <h1>Phonebook</h1>
      <FilterForm filter={filter} onChangeHandler={handleFilterChange} />
      <AddPersonForm
        addHandler={handlePeopleAdd}
        changeHandler={handleNewPersonChange}
        person={newPerson}
      />
      <PhoneBook people={peopleToShow} />
    </>
  );
};

const FilterForm = ({ filter, onChangeHandler }) => (
  <>
    <h2>Filter numbers</h2>
    Filter selection: <input value={filter} onChange={onChangeHandler} />
  </>
);

const PhoneBook = ({ people }) => (
  <>
    <h2>Numbers</h2>
    <div>
      {people.map((p) => (
        <p key={p.name}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  </>
);

const AddPersonForm = ({ addHandler, changeHandler, person }) => (
  <>
    <h2>Add new person</h2>
    <form>
      <div>
        name:{" "}
        <input
          value={person.name}
          onChange={(event) => changeHandler(event, "name")}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={person.number}
          onChange={(event) => changeHandler(event, "number")}
        />
      </div>
      <div>
        <button onClick={addHandler}>add</button>
      </div>
    </form>
  </>
);

export default App;
