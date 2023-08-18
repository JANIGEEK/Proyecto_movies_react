import React from "react";
import movies from "./movies.json"
import {Card} from    "./Card"


export function List(){
return(
    
        
    <div className="row mt-5">
      {movies.map((movie,i) => {
        return <Card movie={movie} key={i}/>;
      })}
    </div>
);
}
