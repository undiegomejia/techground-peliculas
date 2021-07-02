export type Movie = {
    id?:string | string[],
    title?:string | string[], 
    poster_path?:string | string[]
    movie?:any,
    type?:string
  }
  
export type Props = {
    children?: React.ReactNode,
};

export type State={
  wishlist:any,
  addMovie?:({})=>void,
  removeMovie?:(id:string)=>void
}