import React, { useState } from "react";
const App = () => {
  const [people, setPeople] = useState([{ name: "Tatu Pesonen" }]);

  // State container for the new input
  const [newName, setNewName] = useState("test");

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handlePeopleAdd = (event) => {
    event.preventDefault();
    // Check whether the people array already contains user with the same name
    if (people.some((p) => p.name === newName)) {
      alert(`${p.name} is already in the phonebook.`);
      return;
    }
    setPeople((prev) => [...prev, { name: newName }]);
    setNewName("");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button onClick={handlePeopleAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {people.map((p) => (
          <p key={p.name}>{p.name}</p>
        ))}
      </div>
    </>
  );
};

export default App;
