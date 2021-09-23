import axios from "axios"

export const PRODUCTLIST = "PRODUCT_LIST"
export const FILTERPRODUCT = "FILTER_PRODUCT"
export const ProductList = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            dispatch({ 
                type: PRODUCTLIST,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export const FilterProduct = (payload) =>{
    console.log(payload)
    return{
        type: FILTERPRODUCT,
        payload
    }
}