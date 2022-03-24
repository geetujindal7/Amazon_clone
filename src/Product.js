import React from 'react';
import "./product.css";
import {useStateValue} from './StateProvider';

function Product({id, title, image, price})
{

    

  const [{basket}, dispatch] = useStateValue()
    const addTobasket = () =>
    {

            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                    id: id,
                    title: title,
                    image:image,
                    price:price,
                }
            })

    }


    return(
            <div className="product">
            <div className="product_info ">
            <strong>{title}</strong>
        <p className="product_price"></p>
        <small>₹</small>
        <strong>{price}</strong>
        </div>

        <img className="product_img" src={image} alt=""></img>
        <button className="product_button" onClick={addTobasket}> Add to basket</button>
        </div>
       
    )
}
export default Product;