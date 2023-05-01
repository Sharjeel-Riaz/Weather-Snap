/* This component provides a search bar that allows users to search for cities based on
their name, using the AsyncPaginate third-party component. */

// Imported modules
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../src/api";

// Main method
export const Search = ({ onSearchChange }) => {
  // Initializing hooks
  const [search, setSearch] = useState(null);

  /* Method that loads options for the AsyncPaginate component based on the user's
  search input. */
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        /* This code maps the response data from the Geo API to an array of options for
        the AsyncPaginate component. */
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // Use of AsyncPaginate component
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
