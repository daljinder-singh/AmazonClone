import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartDetail } from '../store/actions/cartDetail'

const Addtocart = (props) => {
    const dispatch = useDispatch()
    const [Quantity, setQuantity] = useState("1"); 
    const buyNow = () =>{
        console.log(props.price*Quantity)
    }
    const payload = {
        Quantity,
        productKeyvalue: props.productDetail
    }
    const addtoCart = () =>{
        dispatch(cartDetail({payload}))
    }
    return (
        <>
            <div className="cards mx-5 my-5">
                <div className="card-body">
                <label>Quantity: </label>
                <select value={Quantity} onChange={(e) => setQuantity(event.target.value) }>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                    <div>
                        <button onClick = {addtoCart}>Add to Cart</button>
                    </div>
                    <div>
                        <button onClick = { buyNow }>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addtocart