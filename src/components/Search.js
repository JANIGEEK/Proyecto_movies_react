import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function Search() {
    const [searchText,setSearchText]=useState("");
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/?search="+searchText)
    }

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control me-sm-2"
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
