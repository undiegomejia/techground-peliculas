import React, { createContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";

import {State, Props} from '../types/Types'

const initialState:State = {
    wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist") || '{}')
    : []
  };

export const AppContext = createContext(initialState);

export const ContextProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state]);

  const addMovie = (movie:{}) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: movie });
  };

  const removeMovie = (id:any) => {
    dispatch({ type: "REMOVE_FROM_LIST", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        wishlist: state.wishlist,
        addMovie,
        removeMovie
      }}
    >
      {children}
    </AppContext.Provider>
  );
 }