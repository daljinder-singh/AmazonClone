import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SaveproductList = () => {
    const selector = useSelector(state => state.cartDetails.addToCartDetail)
    const filterProduct = useSelector((state) => state.product_list.filterProduct);
    let holder = []

    // var result = selector.reduce((unique, o) => {
    //     console.log(unique , o)
    //     if(!unique.some(obj => obj.product === o.product)) {
    //       unique.push(o);
    //     }
    //     return unique;
    // },[]);
    selector.map(item =>{
        console.log(item.product[0].id)
        if(item.product === selector.product){
            console.log(item.product)
        }
    })
  

        // selector?.forEach(product =>{
        //     const data = holder.find(i => i.product === product.product )
            
        //     if(!data){
        //         holder.push({Quantity: product.Quantity,total: product.total, product: product.product})
        //     }else{
        //         data.total = parseInt(data.total) + parseInt(product.total);
        //         data.Quantity = parseInt(data.Quantity) + parseInt(product.Quantity);
        //     }
        // })
    return (
        <div>
            {
                    filterProduct.length > 0 ? filterProduct.map((item, key) =>{
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
                    }) :
                 holder.map(({Quantity, total, product },key) => {
                    return <div className="card mx-5 my-5" key={key} onClick={(e) => cardInfo(key)} >
                        <img className="card-img-top" src={product.image} alt="Card image cap " />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">rate: {product.rating.rate}</p>
                            <p className="card-text">Quantity: {Quantity}</p>
                            <p className="card-text">${total}</p>
                        </div>
                    </div>
                 })
                
            }
        </div>
    )
}
export default SaveproductList