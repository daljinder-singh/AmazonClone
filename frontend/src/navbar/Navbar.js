import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { Searchbox } from './Searchbox'
import Switch from './Switchs'
 
const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white font-weight-bold " to="/">amazon</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                                <Searchbox />
                            </li>
                            <li className="nav-item mx-5">
                                <Cart />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch />
        </>
    )
}

export default Navbar;