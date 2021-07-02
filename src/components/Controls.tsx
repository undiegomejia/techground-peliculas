import React, { useContext } from 'react'
import { AppContext } from '../contexts/Context';

export const Controls = ({movie, type}:any) => {
    const {addMovie, removeMovie} = useContext(AppContext);

    const add = ()=>{
        if(addMovie){
          addMovie(movie) 
        }else{
          return
        }
      }

      const remove = (id:any)=>{
        if(removeMovie){
            removeMovie(id) 
        }else{
          return
        }
      }

    return (
        <div className="row">
            {type === "wishlist" && (
        <>
          <button className="btn" onClick={() => add()}>
            Add Movie
          </button>

          <button
            className="btn"
            onClick={() => remove(movie.id)}
          >
            Remove Movie
          </button>
        </>
      )}
        </div>
    )
}
