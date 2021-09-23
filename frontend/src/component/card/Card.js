import React, { useEffect, useState } from 'react'
import queryString from "query-string";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";
import { ProductList } from '../../store/actions/product_list'
import Addtocart from '../Addtocart';
import './card.css'

const Card = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const { id, key } = queryString.parse(location.search)
    useEffect(() => {
      dispatch(ProductList())
    }, [location])
    const selctor = useSelector((state) => state?.product_list?.product?.[key]);
    return (
        <>
            <div className="card mx-5 my-5">
                <img className="card-img-top" src={selctor?.image} alt="Card image cap " style={{ width: '200px' }} />
                <div className="card-body">
                    {/* <h5 className="card-title">{selctor?.description}</h5> */}
                    <h5 className="card-title">{selctor?.title}</h5>
                    <p className="card-text">rate: {selctor?.rating.rate}</p>
                    <p className="card-text">${selctor?.price}</p>
                </div>
            </div>
            <Addtocart price = {selctor?.price} product = {selctor} />
        </>
    )
}
export default Card