import React from "react";
import { Link } from "react-router-dom";

export function Card({movie}){
    return (
        <div className="col-md-3 my-2">
            <Link to={"/details/"+ movie.id}>
            <div className="card">
                
                <img src={movie.poster_path} alt={movie.title} className="card-img-top" width="50"/>
                <div className="card-body">
                    <h3>{movie.title}{movie.vote_average}</h3>
                    <p>{movie.popularity}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}