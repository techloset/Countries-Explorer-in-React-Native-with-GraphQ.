import React, { useState } from "react";
import { GET_COUNTRIES } from "./schema";
import { useLazyQuery } from "@apollo/client";

const CountryList = () => {
  const [getCountries, { loading, error, data }] = useLazyQuery(GET_COUNTRIES);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    getCountries();
  }, [getCountries]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.countries) {
    return <div>No data available</div>;
  }

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Countries List</h1>
      <div className="mb-4 w-[50%]">
        <label htmlFor="filter" className="mr-2">
          Filter Country:
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search country..."
          className="border border-gray-300 rounded px-4 py-2 w-[50%]"
        />
      </div>
      {filteredCountries.length === 0 ? (
        <div className="text-red-500">No matching countries found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCountries.map((country) => (
            <div
              key={country.name}
              className="border border-gray-300 rounded p-4 flex flex-col items-center"
            >
              <p className="mb-2">
                CName:
                <span className="text-xl font-bold"> {country.name}</span>
              </p>

              <p className="mb-2">
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>

              <p className="mb-2">
                <span className="font-semibold">Currency:</span>{" "}
                {country.currency}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryList;
