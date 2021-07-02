import React, { createContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";

import {State, Props} from '../types/Types'

const initialState:State = {
    wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist") || '{}')
    : [],
    done: localStorage.getItem("done")
    ? JSON.parse(localStorage.getItem("done") || '{}')
    : []
  };

export const AppContext = createContext(initialState);

export const ContextProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    localStorage.setItem("done", JSON.stringify(state.wishlist));
  }, [state]);

  const addMovie = (movie:{}) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: movie });
  };

  const removeMovie = (id:any) => {
    dispatch({ type: "REMOVE_FROM_LIST", payload: id });
  };

  const addToDone = (movie:{}) => {
    dispatch({ type: "ADD_TO_DONE", payload: movie });
  };

  const moveToWishlist = (movie:{}) => {
    dispatch({ type: "MOVE_TO_WISHLIST", payload: movie });
  };

  const removeFromDone = (id:any) => {
    dispatch({ type: "REMOVE_FROM_DONE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        done: state.done,
        wishlist: state.wishlist,
        addToDone,
        addMovie,
        removeMovie,
        moveToWishlist,
        removeFromDone

      }}
    >
      {children}
    </AppContext.Provider>
  );
 }