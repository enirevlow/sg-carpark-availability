import React, { useState, useEffect } from "react";

const SearchForm = ({ setQueryParam }) => {
  const handleChange = (e) => {
    setQueryParam(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SearchForm;
