import React from "react";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
