import React from "react";
import { Link } from "react-router-dom";

export function Card({movie}){
    

    return (
        <div className="col-md-3 my-2">
            <Link to={"/details/"+ movie.imdbID}>
            <div className="card">
                
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="40"/>
                <div className="card-body">
                    <h3>{movie.Title}</h3>
                    <h4>{movie.Year}</h4>
                    <p>{movie.type}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}