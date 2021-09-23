import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList, FilterProduct } from '../store/actions/product_list'

export const Searchbox = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state?.product_list.product);
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])
    const arrFilter = []
    
    useEffect(() => {
         search.length > 0 ? dispatch(FilterProduct(filter)) 
         : dispatch(FilterProduct([]))  
     }, [search])

     useEffect(()=>{
            selector?.map((value)=> {
                if( value.category.indexOf(search) === -1 ) return;
               arrFilter.push(value)
        })  
        setFilter(arrFilter)
     },[search])

    const searchBtn = (e) => {
        e.preventDefault()
        setSearch(search)
    }

    return (
        <div>
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value.trim())}
                />
                <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={searchBtn}
                >Search</button>
            </form>
        </div>
    )
}
