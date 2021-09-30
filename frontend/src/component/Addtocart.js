import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { cartDetail } from '../store/actions/cartDetail'
import { useHistory } from "react-router-dom"

const Addtocart = ({ price, product }) => {
    const dispatch = useDispatch()
    const [Quantity, setQuantity] = useState("1");
    const jwtToken = localStorage.getItem('token')
    const {id, email} = JSON.parse(localStorage.getItem('userInfo'))
    const addtoCart = async () => {
        const getSession = JSON.parse(sessionStorage.getItem(product.id))
        
        const payload = {
            Quantity: parseInt(Quantity),
            total: price * Quantity,
            product: product,
            id
        }
        await axios.post('http://localhost:4000/addTocart',{
            payload,
            headers: {
                "Content-type": "application/json",
                 "Authorization": `Bearer ${jwtToken}`,
            },
        })
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
                </div>
            </div>
        </>
    )
}
export default Addtocart