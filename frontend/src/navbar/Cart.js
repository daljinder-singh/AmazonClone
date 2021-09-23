import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';

export default function Cart() {
    const state = useSelector(state => state.cartDetails.addToCartDetail.Quantity)
    return (
        <>
       <i className="bi bi-cart-check-fill" style = {{color: "white"}}>
           {state}
       </i>
        </>
    )
}
