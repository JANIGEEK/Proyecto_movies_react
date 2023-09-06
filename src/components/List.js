import React, { useEffect, useState } from "react";
import { get } from "../utils/Api";
//import movies from "./movies.json"
import { Card } from "./Card";
import Spinner from "./Spinner";
import { useSearchParams } from "react-router-dom";




export function List() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //let movies=[]
  const [query]=useSearchParams();
  const search=query.get("search");
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl=search?"&s="+search:"&s=iron man";
    get(searchUrl).then((data) => {
      setMovies(data.Search);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="row mt-5">
      {movies.map((movie) => {
        return <Card movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
}
