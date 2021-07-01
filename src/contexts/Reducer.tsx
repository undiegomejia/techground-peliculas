export const Reducer = (state:any, action:any) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [action.payload, ...state.wishlist]
            };
            default:
                return state;
    }
}