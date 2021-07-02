export const Reducer = (state:any, action:any) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [action.payload, ...state.wishlist]
            };
            case "REMOVE_FROM_LIST":
            return {
                ...state,
                wishlist: state.wishlist.filter((movie:any)=>movie.id !== action.payload)
            };
            default:
                return state;
    }
}