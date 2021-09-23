import { PRODUCTLIST, FILTERPRODUCT } from "../actions/product_list";

const initial_state = {
    product: undefined,
    filterProduct: [],
}

const products = (state = initial_state, action) => {
    switch (action.type) {
        case PRODUCTLIST:
            return {
                ...state,
                product: action.payload
            }
            case FILTERPRODUCT:
            return {
                ...state,
                filterProduct: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default products;