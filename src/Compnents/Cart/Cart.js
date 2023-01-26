import React from 'react';
import './Cart.css'



const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const total = cart.reduce((total,prd) => total + prd.price,0);
    let total =0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 12.99;
    if(total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }

const vat = total * 0.08;


    return (
        <div>
          <h4>Order Summary</h4> 
           <p>Items Ordered: {cart.length}</p>
           <p>Total Price: {total}</p>
           <p><small>Vat: {vat}</small></p>
           <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total: {total + shipping + vat}</p>
            <button className='review-button'>Review Cart</button>
        </div>
    );
};

export default Cart;