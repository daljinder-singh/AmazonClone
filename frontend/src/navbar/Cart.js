import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';

export default function Cart() {
    const [cartQuantity, setcartQuantity] = useState([])
    const addToCartDetail = useSelector(state => state.cartDetails.addToCartDetail)
    useEffect(() => {
        const Objkey = Object.keys(sessionStorage);
        Objkey?.forEach(item => {
            const getSession = JSON.parse(sessionStorage.getItem(item))
            setcartQuantity(oldVal => [...oldVal, getSession.Quantity])
        })
        return () => setcartQuantity('')
    }, [addToCartDetail])

    return (
        <>
            <Link to={cartQuantity.length > 0 ? '/saveproductList' : '/'}>
                <i className="bi bi-cart-check-fill"
                    style={{ color: "white", cursor: 'pointer' }}>
                    {
                        cartQuantity.reduce((a, b) => a + b, 0)
                    }

                </i>
            </Link>
        </>
    )
}
