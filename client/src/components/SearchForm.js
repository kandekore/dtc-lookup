import React from "react";

function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="code" placeholder="Enter DTC code" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
