import React, { useState, useEffect } from "react";

const App = () => {
  const URL = "https://restcountries.eu/rest/v2/all";

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => setFilter(event.target.value);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = filter
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      )
    : countries;

  const maxMatches = 10;
  const filteredComponents = () => {
    if (filteredCountries.length === 1)
      return <DetailedCountryInfo country={filteredCountries[0]} />;
    else if (filteredCountries.length < maxMatches)
      return filteredCountries.map((c) => <div>{c.name}</div>);
    else return "Too many matches, please narrow down your search.";
  };

  return (
    <>
      <SearchForm filterValue={filter} onChangeHandler={handleFilterChange} />
      {filteredComponents()}
    </>
  );
};

const DetailedCountryInfo = ({ country }) => (
  <>
    <h1>{country.name}</h1>
    <div>Capital: {country.capital}</div>
    <div>Population: {country.population}</div>
    <LanguagesList languagesArray={country.languages} />
    <img src={country.flag} style={{ width: "150px" }} />
  </>
);

const LanguagesList = ({ languagesArray }) => (
  <>
    <h2>Languages</h2>
    <ul>
      {languagesArray.map((l) => (
        <li>{l.name}</li>
      ))}
    </ul>
  </>
);

const SearchForm = ({ onChangeHandler, filterValue }) => (
  <form>
    <div>
      Search countries: <input value={filterValue} onChange={onChangeHandler} />
    </div>
  </form>
);

const Country = ({ country }) => <p>{country.name}</p>;

export default App;
