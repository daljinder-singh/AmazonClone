import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartDetail } from '../store/actions/cartDetail'
import { useHistory } from "react-router-dom" 
const arr = []
const Addtocart = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [Quantity, setQuantity] = useState("1"); 
    
    const buyNow = () =>{
        history.push('/login')
        console.log(props.price*Quantity)
    }
    const addtoCart = () =>{
        const payload = {
            Quantity: parseInt(Quantity),
            total: props.price*Quantity,
            product: props.product
        }
        arr?.forEach(item =>{
            if(payload?.product?.id === item?.product?.id){
                payload.total = item?.total + payload?.total,
                payload.Quantity = parseInt(item?.Quantity) + parseInt(payload?.Quantity)
                
            }else{
                arr.push(payload)
            }
        })
        arr.push(payload)
        console.log('payload',payload)
        
        dispatch(cartDetail({payload})) 
    }

    return (
        <>
            <div className="cards mx-5 my-5">
                <div className="card-body">
                <label>Quantity: </label>
                <select value={Quantity} onChange={(e) => setQuantity(e.target.value) }>
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