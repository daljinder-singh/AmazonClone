import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SaveproductList = () => {
    const [selectedProduct, setselectedProduct] = useState([])
    const filterProduct = useSelector((state) => state.product_list.filterProduct);
    useEffect(() => {
        const ObjKey = Object.keys(sessionStorage)
        ObjKey.forEach(item => {
            const sessionItem = JSON.parse(sessionStorage.getItem(item))
            setselectedProduct(oldObj => [...oldObj, sessionItem])
        })
    }, [])

    return (
        <div>
            {
                filterProduct.length > 0 ? filterProduct.map((item, key) => {
                    return (
                        <div className="card mx-5 my-5" key={key} onClick={(e) => cardInfo(key)} >
                            <img className="card-img-top" src={item.image} alt="Card image cap " />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">rate: {item.rating.rate}</p>
                                <p className="card-text">${item.price}</p>
                            </div>
                        </div>
                    )
                }) : (
                    selectedProduct.length > 0 ?
                    selectedProduct.map(({ Quantity, total, product }, key) => {
                        return <div className="card mx-5 my-5" key={key} onClick={(e) => cardInfo(key)} >
                            <img className="card-img-top" src={product.image} alt="Card image cap " />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">rate: {product.rating.rate}</p>
                                <p className="card-text">Quantity: {Quantity}</p>
                                <p className="card-text">${total}</p>
                            </div>
                        </div>
                    }) : <h1>have not any item</h1>
                )
            }
        </div>
    )
}
export default SaveproductList