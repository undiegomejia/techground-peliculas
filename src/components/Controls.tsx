import React, { useContext } from 'react'
import { AppContext } from '../contexts/Context';

export const Controls = ({ movie, type }: any) => {
  const {
    moveToWishlist,
    removeMovie,
    addToDone,
    removeFromDone
  } = useContext(AppContext);

  const add = () => {
    if (moveToWishlist) {
      moveToWishlist(movie)
    } else {
      return
    }
  }

  const remove = (id: any) => {
    if (removeMovie) {
      removeMovie(id)
    } else {
      return
    }
  }
  
  const addDone = () => {
    if (addToDone) {
      addToDone(movie)
    } else {
      return
    }
  }

  const removeDone = (id: any) => {
    if (removeFromDone) {
      removeFromDone(id)
    } else {
      return
    }
  }

  

  return (
    <div className="row">
      {type === "wishlist" && (
        <>
          <button className="btn" onClick={() => addDone()}>
            Add to Done
          </button>

          <button
            className="btn"
            onClick={() => remove(movie.id)}
          >
            Remove Movie
          </button>
        </>
      )}

{type === "done" && (
        <>
          <button className="btn" onClick={() => add()}>
            Add to WishList
          </button>

          <button
            className="btn"
            onClick={() => removeDone(movie.id)}
          >
            Remove Movie
          </button>
        </>
      )}
    </div>
  );
};
