import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom" 
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../../store/actions/product_list'
import './dashboard.css'

 const Dashboard = () =>{
    const dispatch = useDispatch()
    const selctor = useSelector((state) => state.product_list.product);
    const history = useHistory()
    
     useEffect(() => {
        dispatch(ProductList())
     }, [])

    const cardInfo =(key) =>{
     const filtercard = selctor[key]
     history.push(`/product?key=${key}&id=${filtercard.id}&title=${filtercard.title}&category=${filtercard.category}`)
    }
     return(
        <>
         <main className = 'main'>
        {
            selctor && selctor.map((item, key) =>{
                return(
                    <div className="card mx-5 my-5" key = {key} onClick = {(e) => cardInfo(key)} >
                        <img className="card-img-top" src={item.image} alt="Card image cap " />
                         <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">rate: {item.rating.rate}</p>
                        <p className="card-text">${item.price}</p>
                        </div>
                    </div>
                )
            })
        }
        </main>
        </>
     )
 }
 export default Dashboard