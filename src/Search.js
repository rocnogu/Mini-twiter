import React, { useState } from "react";
import { Link } from "react-router-dom";
//
const Search = ({ result }) => {
  const [search, setSearch] = useState("");
  // return  return  return  return  return  return  return
  return (
    <div className="searchusers">
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {result
        .filter((user) => user.first_name.includes(search))
        .map((user) => (
          <div className="allusers">
            <Link to={`/user`}>
              <li>{user.first_name}</li>
            </Link>
          </div>
        ))}
    </div>
  );
};
export default Search;
