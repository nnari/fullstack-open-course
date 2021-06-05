import React, { useState } from "react";
const App = () => {
  const [people, setPeople] = useState([
    { name: "Tatu Pesonen", number: "045 12312321312" },
  ]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => setFilter(event.target.value);

  // State container for the new input
  const [newPerson, setNewPerson] = useState({});

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
    if (people.some((p) => p.name === newPerson.name)) {
      alert(`${newPerson.name} is already in the phonebook.`);
      return;
    }

    // Copy instead of reference
    setPeople((prev) => [...prev, { ...newPerson }]);
    setNewPerson({ name: "", number: "" });
  };

  // Lastly create the filter
  const peopleToShow = filter
    ? people.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    : people;

  // Prettier keeps adding these {" "} for spaces in JSX...

  return (
    <>
      <div>
        Filter selection: <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input
            value={newPerson.name}
            onChange={(event) => handleNewPersonChange(event, "name")}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newPerson.number}
            onChange={(event) => handleNewPersonChange(event, "number")}
          />
        </div>
        <div>
          <button onClick={handlePeopleAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {peopleToShow.map((p) => (
          <p key={p.name}>
            {p.name} {p.number}
          </p>
        ))}
      </div>
    </>
  );
};

export default App;
