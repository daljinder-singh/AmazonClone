import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';

export default function Cart() {
    const state = useSelector(state => state.cartDetails.addToCartDetail)
    let initialValue = 0

    return (
        <>
            <Link to='/saveproductList'>
                <i className="bi bi-cart-check-fill"
                    style={{ color: "white", cursor: 'pointer' }}>
                    {
                        state.reduce(function (previousValue, currentValue) {
                            return previousValue + parseInt(currentValue.Quantity)
                        }, initialValue)
                    }

                </i>
            </Link>
        </>
    )
}
