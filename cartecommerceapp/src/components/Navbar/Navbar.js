import React, { useContext } from 'react'
import { ProductContext } from '../../store/ProductContextProvider'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {

    const { cart } = useContext(ProductContext);
    
    return (
        <React.Fragment>

            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="container">
                    <a className="navbar-brand">Shopping</a>
                    <Link className="btn btn-primary" to="/cart"> Cart {cart.length>0 ? "- " + cart.length : null} </Link>
                </div>
            </nav>


            
        </React.Fragment>
    )
}

export default Navbar
