import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"; 
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal({price}) {
    console.log("price",price)

    const [{basket}, dispatch] = useStateValue()

    return(
        
        <div className="Subtotal">




        <CurrencyFormat 
            renderText = {(value) => (
                <>
                <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
              
                </>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}

            
       />
             <button>Proceed to checkout</button>
        </div>
    )
    
}
export default Subtotal;