import React, { useEffect, useState } from "react";
import { get } from "../utils/Api";
//import movies from "./movies.json"
import { Card } from "./Card";

export function List() {
  const [movies, setMovies] = useState([]);

  //let movies=[]

  useEffect(() => {
    get("&s=iron man").then((data) => {
      setMovies(data.Search);
      
    });
  }, []);
  return (
    <div className="row mt-5">
      {movies.map((movie) => {
        return <Card movie={movie} key={movie.imdbID} />;
      })}
    </div>
  );
}
