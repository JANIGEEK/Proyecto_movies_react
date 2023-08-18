import React from "react"
import movie from "./movie.json"

export function MovieDetails(){
    const imageUrl="https:image.tmbd.org/t/p/w500" + movie.poster_path
    return (
    <div className="container p-5  m-5 d-flex justify-content-around align-content-center flex-wrap">
        <img src={imageUrl} alt={movie.title} className="col-6"/>
        <div className="col-6">
            <p><strong>Title: </strong>{movie.title}</p>
            <p><strong>Genres: </strong>{movie.genres.map((genre)=>genre.name).join(", ")}</p>
            <p><strong>Description: </strong>{movie.overview}</p>
        </div>
    </div>
    )
}