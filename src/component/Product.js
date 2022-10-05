import React, { useState } from "react";

import { useStateValue } from "./StateProvider";

import { imageurl } from "../common/constants";

import "../css/Product.css";

import { toast } from 'react-toastify';

function Product({ product }) {
  const [{ basket }, dispatch] = useStateValue();
  const [{ wishlist }, addwish] = useStateValue();

  const [quantity, setQuantity] = useState(1);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.productId,
        name: product.name,
        thumbnailString: product.thumbnailString,
        price: product.price,
        quantity: quantity,
      },
    });
  };
  const addToWishList = () => {
    addwish({
      type: "WISHLIST",
      item: {
        id: product.productId,
        name: product.name,
        thumbnailString: product.thumbnailString,
        price: product.price,
      },
    });
  };

  return (
    <div className='product'>
      <p>
        <strong>{product.name}</strong>, {product.description}
      </p>
      <p>
        {product.presentQuantity > 0 ? `In Stock - ${product.presentQuantity}`: <strong style={{color:'red'}}>out of stock</strong>}
      </p>
      <span className='product__price'>
        <small>₹</small>
        <strong>{product.price}</strong>
      </span>

      <img src={imageurl+product.thumbnailString} alt={product.name} />
      <input
        type='number'
        min='1'
        max={product.presentQuantity + 1}
        defaultValue='1'
        onChange={(e) => {

          if(product.presentQuantity === 0)
          {
            toast.dark(`${product.name} is out of stock`);
            setQuantity(0);
          }
          else if(e.target.value > product.presentQuantity)
              toast.dark(`please select quantity upto ${product.presentQuantity}`)
          else if(e.target.value <= product.presentQuantity)
            setQuantity(e.target.value)}}
      />
      <button onClick={addToBasket} disabled={product.presentQuantity === 0 ? true : false}  style={product.presentQuantity === 0 ? {opacity:0.5}: {color:1}}>Add to Basket</button>
      <button onClick={addToWishList}>Add to Wishlist</button>
    </div>
  );
}

export default Product;
