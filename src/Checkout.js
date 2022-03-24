import React from 'react';
import "./Checkout.css"
import Subtotal from './Subtotal';

function Checkout() {
    return(
        <div className="checkout">
        <div className="checkout_left">
            <h3 className="checkout_title">
                Your Shopping Basket
            </h3>
        </div>
        <div className="checkout_right">
           <Subtotal />
        </div>
        </div>
    )
    
}

export default Checkout;