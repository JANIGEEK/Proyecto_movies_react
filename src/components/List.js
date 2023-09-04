import React, { useEffect, useState } from "react";
import { get } from "../utils/Api";
//import movies from "./movies.json"
import { Card } from "./Card";
import Spinner from "./Spinner";

export function List() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //let movies=[]

  useEffect(() => {
    setIsLoading(true);
    get("&s=iron man").then((data) => {
      setMovies(data.Search);
      setIsLoading(false);
    });
  }, []);

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
