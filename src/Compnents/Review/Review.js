import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart,clearLocalShoppingCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useNavigate } from 'react-router-dom';




const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useNavigate();


    const handleProceedCheckout = () =>{
        
        history("/shipment");


    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts =  productKeys.map( key => {
            const product = fakeData.find( ps => ps.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt="" />
    }

    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pc => <ReviewItem 
                        key={pc.key}
                        removeProduct={removeProduct}

                        
                        product={pc}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='main-button' onClick={handleProceedCheckout}>Check Out</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;