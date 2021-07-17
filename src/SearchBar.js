import React, { useState } from "react";
import { Link } from "react-router-dom";
//
export default function SearchBar({ result }) {
  const [search, setSearch] = useState("");
  // return  return  return  return  return  return  return
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {result
        .filter((users) => users.first_name.includes(search))
        .map((users) => (
          <div className="onlymessage">
            <Link to={`/user`}>
              <li>{users.first_name}</li>
            </Link>
          </div>
        ))}
    </div>
  );
}
