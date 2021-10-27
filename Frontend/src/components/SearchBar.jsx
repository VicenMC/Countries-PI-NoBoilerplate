import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ busqueda }) {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    busqueda(e.target[0].value);
    setSearch("");
  };

  const handleChange = async (e) => {
    e.preventDefault();
    busqueda(e.target.value)
    await setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="searchSpace">
        <input
          className="search"
          type="text"
          name="pais"
          placeholder="Enter country to search"
          value={search}
          autocomplete="off"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}
