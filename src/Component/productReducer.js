
const ProductReducer = (state = [], action) => {

    switch (action.type) {
        case "FETCH_PRODUCT":
            return [
                ...state,
                ...action.data
            ]
        default:
            return state;
    }

}

export default ProductReducer;