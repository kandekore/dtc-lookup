// SearchResults.jsx
import React from 'react';

function SearchResults({ dtc }) {
  if (!dtc || !dtc.number || !dtc.description) {
    return <p>No results</p>;
  }

  return (
    <div>
      <p>Number: {dtc.number}</p>
      <p>Description: {dtc.description}</p>
    </div>
  );
}

export default SearchResults