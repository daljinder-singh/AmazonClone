import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartDetail } from '../store/actions/cartDetail'
import { useHistory } from "react-router-dom"
const arr = []
const Addtocart = ({ price, product }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [Quantity, setQuantity] = useState("1");

    const buyNow = () => {
        history.push('/login')
        console.log(price * Quantity)
    }
    const addtoCart = () => {
        const getSession = JSON.parse(sessionStorage.getItem(product.id))
        const payload = {
            Quantity: parseInt(Quantity),
            total: price * Quantity,
            product: product
        }
        if (getSession?.product?.id === product.id) {
            payload.total = payload.total + getSession.total,
                payload.Quantity = payload.Quantity + getSession.Quantity

            sessionStorage.setItem(product.id, JSON.stringify(payload));
        } else {
            sessionStorage.setItem(product.id, JSON.stringify(payload));
        }
        dispatch(cartDetail(payload))
    }

    return (
        <>
            <div className="cards mx-5 my-5">
                <div className="card-body">
                    <label>Quantity: </label>
                    <select value={Quantity} onChange={(e) => setQuantity(e.target.value)}>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div>
                        <button onClick={addtoCart}>Add to Cart</button>
                    </div>
                    <div>
                        <button onClick={buyNow}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addtocart