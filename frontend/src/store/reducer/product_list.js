import { PRODUCTLIST } from "../actions/product_list";

const initial_state = {
    product: undefined
}

const products = (state = initial_state, action) => {
    switch (action.type) {
        case PRODUCTLIST:
            return {
                ...state,
                product: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default products;