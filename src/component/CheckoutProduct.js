import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { imageurl } from "../common/constants";

function CheckoutProduct({
  id,
  thumbnailString,
  name,
  price,
  hideButton,
  quantity,
  from,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const [{ wishlist, user }, addwish] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const removewishlist = () => {
    // remove the item from the basket
    addwish({
      type: "REMOVE_FROM_WISHLIST",
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img
        className='checkoutProduct__image'
        src={imageurl + thumbnailString}
      />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct_name'>{name}</p>
        <p className='checkoutProduct__quantity'>
          <strong>{quantity} kg </strong>
        </p>
        <p className='checkoutProduct__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <button onClick={from === "mywishlist" ?  removewishlist: removeFromBasket}>{from === "mywishlist" ?  "Remove From Wishlist" : "Remove From Basket"}</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
