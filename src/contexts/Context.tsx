import React, { createContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";

type Props = {
    children?: React.ReactNode;
};

interface Actions {
  wishlist: any,
  addToWish():()=>void,
}

const initialState = {
    wishlist: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist") ?? '')
      : []
  };

export const Context = createContext(initialState);

export const ContextProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state]);

  const addToWish = (movie:any) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: movie });
  };

  return (
    <Context.Provider
      value={{
        wishlist: state.wishlist
      }}
    >
      {children}
    </Context.Provider>
  );
 }