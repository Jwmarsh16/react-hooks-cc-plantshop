
import React, { useState } from "react";

function Search({ onSearch }) {
const [search, setSearch] = useState("")



const handleText = (e) => {
  const value = (e.target.value);
  console.log("Input Value:", value);
  setSearch(value);
  onSearch(value);
};

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text" value={search} onChange={handleText}
        id="search"
        placeholder="Type a name to search..."
        
      />
    </div>
  );
}

export default Search;
