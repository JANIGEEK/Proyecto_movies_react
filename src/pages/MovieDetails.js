import React, { useEffect, useState } from "react";
//import movie from "./movie.json";
import { useParams } from "react-router-dom";
import { get } from "../utils/Api";

export function MovieDetails() {

  
  const {Id}  = useParams();

  const [movie, setMovie] = useState(null);
  //console.log(Id);

  useEffect(() => {
    get("&i=" + Id).then((data) => {
      setMovie(data);
      console.log(data)
    });
  }, [Id]);

  if (!movie){
    return null
  }

  return (
    <div className="container p-5  m-5 d-flex justify-content-around align-content-center flex-wrap">
      <img src={movie.Poster} alt={movie.Title}  />
      <div className="col-6">
        <p>
          <strong>Title: </strong>
          {movie.Title}
        </p>
        <p>
          <strong>Duration: </strong>
          {movie.Runtime}
        </p>
        <p>
          <strong>Year: </strong>
          {movie.Year}
        </p>
        <p>
          <strong>Type: </strong>
          {movie.Type}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.Genre}
        </p>
        <p>
          <strong>Rated: </strong>
          {movie.Rated}
        </p>
        <p>
          <strong>Director: </strong>
          {movie.Director}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.Plot}
        </p>
      </div>
    </div>
  );
}
