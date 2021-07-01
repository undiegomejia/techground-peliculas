import React, { useContext } from 'react'
import { Context } from '../contexts/Context';

export const SearchCard = ({ movie }: any) => {
  const {} = useContext(Context);

    return (
        <div className="card m-3 text-center">
      <div className="card-header">
        <h6 className="title">{movie.title}</h6>
      </div>
        <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <button
            className="btn btn-info"
          >Watch Later <span role="img">⌚</span>
          </button>

          <button
            className="btn btn-success"
          >Done! <span role="img">😎</span>
          </button>
        </div>
    </div>
    )
}
