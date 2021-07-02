import React, { useContext } from "react";
import { AppContext } from '../contexts/Context';

import { MovieCard } from "./MovieCard";

export const Done = () => {
  const { done } = useContext(AppContext);

    return (
        <div className="row">
        <div className="col-lg-12 p-3">
          <h3>Done List</h3>
        </div>
        {done.length} {done.length === 1 ? "Movie" : "Movies"}

        {done.length > 0 ? (
          <div className="row">
            {done.map((movie:any) => (
              <div key={movie.tile} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 p-1 text-center">
                <MovieCard movie={movie} key={movie.id} type="done" />
              </div>
            ))}
          </div>
        ) : (
          <h2>No movies here <span role="img">😥</span></h2>
        )}
      </div>
    )
}
