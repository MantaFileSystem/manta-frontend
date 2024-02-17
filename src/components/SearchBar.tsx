import { Search } from "react-bootstrap-icons";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchBar">
      <div>
        <Search size={15} />
      </div>
      <input
        type="text"
        placeholder="Search File/CID"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
