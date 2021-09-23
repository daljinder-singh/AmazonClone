import { CARTDETAIL } from "../actions/cartDetail";

const initial_state = {
    addToCartDetail:[]
}

const cartDetails = (state = initial_state, action) => {
    switch (action.type) {
        case CARTDETAIL:
            return {
                ...state,
                addToCartDetail: [...state.addToCartDetail, action.payload.payload]
              
            }
        default:
            return {
                ...state
            }
    }
}
export default cartDetails