import React from 'react';
import ReactStars from "react-rating-stars-component";
import wish from "../../images/wishlist.svg";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import addcart from "../../images/add-cart.svg";
import { TbCurrencyTaka } from 'react-icons/tb';
const ProductCard = ({product , handleAddProduct}) => {
    const { img, name, seller, price,star } = product;
    console.log(product);

    return (
        <div>
            <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={img} alt="" />
            
          </div>
          <div className="product-details">
            <h6 className="brand">{seller}</h6>
            <h5 className="product-title">
              {name}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={star}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price"><TbCurrencyTaka className='tk' size={25}/>{price}Price</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img onClick={() => handleAddProduct(product)} src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        
      </div>
            
      
    );
};

export default ProductCard;