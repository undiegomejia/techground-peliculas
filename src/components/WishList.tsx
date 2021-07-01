import React, { useContext } from "react";
import { Context } from '../contexts/Context';

import { MovieCard } from "./MovieCard";

export const WishList = () => {
  const { wishlist } = useContext(Context);

    return (
        <div className="row">
        <div className="col-lg-12 p-3">
          <h3>Movie Wish List</h3>
        </div>
        {wishlist.length} {wishlist.length === 1 ? "Movie" : "Movies"}
        <div>
        {wishlist.length > 0 ? (
          <div className="movie-grid">
            {wishlist.map((movie:any) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
        </div>
      </div>
    )
}
