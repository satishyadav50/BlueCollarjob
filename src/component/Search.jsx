import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <form onSubmit={handleSubmit} className="nav-search-box">
      <input
        type="text"
        placeholder="Search job title or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
