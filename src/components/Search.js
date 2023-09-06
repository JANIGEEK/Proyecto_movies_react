import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


function Search() {
  const [query,setQuery] = useSearchParams();
  const search = query.get("search");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search||"");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate("/?search=" + searchText);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-sm-2"
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) =>setSearchText(e.target.value)}
          
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
