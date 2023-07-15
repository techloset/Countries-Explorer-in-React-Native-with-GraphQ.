
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "./schema";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [getCountryDetails, { loading, error, data }] =
    useLazyQuery(GET_COUNTRY_DETAILS);
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    getCountryDetails();
  }, [getCountryDetails]);

  useEffect(() => {
    if (data && data.countries) {
      const country = data.countries.find(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      );
      setCountryDetails(country);
    }
  }, [data, countryName]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 flex  flex-col my-20">
      <h1 className="text-4xl font-bold mb-4">Country Detail: {countryName}</h1>
      {countryDetails ? (
        <div className="bg-gray-300 shadow rounded p-6">
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {countryDetails.capital}
          </p>
          <p>
            <span className="font-semibold">Currency:</span>{" "}
            {countryDetails.currency}
          </p>
          <p>
            <span className="font-semibold">Emoji:</span> {countryDetails.emoji}
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {countryDetails.languages
              .map((language) => language.name)
              .join(", ")}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {countryDetails.phone}
          </p>
          <p>
            <span className="font-semibold">Continent:</span>{" "}
            {countryDetails.continent.name}
          </p>
          <p>
            <span className="font-semibold">Country Code:</span>{" "}
            {countryDetails.code}
          </p>
        </div>
      ) : (
        <div className="text-center">No data available</div>
      )}
    </div>
  );
};

export default CountryDetail;
