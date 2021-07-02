export type Movie = {
    id?:string | string[],
    title?:string | string[], 
    poster_path?:string | string[]
    movie?: any,
    type?:string
  }

export type Props = {
    children?: React.ReactNode,
};

export type State={
  wishlist: any,
  done:any
  addMovie?:(movie:{})=>void,
  removeMovie?: (id: string) => void,
  addToDone?: (movie: {}) => void,
  moveToWishlist?: (movie: {}) => void,
  removeFromDone?:(id: string) => void
}

export type Theme = {
  theme:string
}