import React, { useContext } from 'react'
import { AppContext } from '../contexts/Context';

import {Movie} from '../types/Types'


export const SearchCard = ({movie}:Movie ) => {
  const {addMovie, wishlist} = useContext(AppContext);

  
  let onList = wishlist.find((o:any)=>o.id === movie.id) 

  const disableListButton = onList ? true : false

  const add = ()=>{
    if(addMovie){
      addMovie(movie) 
    }else{
      return
    }
  }

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
            disabled={disableListButton}
            onClick={()=>add()}
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
