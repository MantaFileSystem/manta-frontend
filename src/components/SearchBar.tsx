import { Search } from "react-bootstrap-icons";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchBar">
      <Search
        size={15}
        style={{ left: "8px", right: "8px" }}
        className="search-icon"
      />

      <input
        type="text"
        placeholder="Search File/CID"
        value={query}
        onChange={handleChange}
        style={{}}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
