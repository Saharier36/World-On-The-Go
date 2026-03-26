import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  // console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital[0]}</p>
      <p>
        Area: {country.area.area.toLocaleString()} km²{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <p>Population: {country.population.population.toLocaleString()}</p>
      <p>Continents: {country.continents.continents[0]}</p>
      <button onClick={handleVisited} className="btn">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
