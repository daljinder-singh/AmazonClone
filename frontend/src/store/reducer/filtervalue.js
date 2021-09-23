import { FILTERVALUE } from "../actions/filtervalue";
const initial_state = {
    filterData : []
}

const filters = (state = initial_state, action) =>{
    switch(action.type){
        case FILTERVALUE:
            return{
                ...state,
                filterData: action.payload
            }
        default:
            return{
                ...state
            }
    }
}