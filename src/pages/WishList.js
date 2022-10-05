import React from "react";
import CheckoutProduct from "../component/CheckoutProduct";
import Subtotal from "../component/Subtotal";
import { useStateValue } from "../component/StateProvider";
import "../css/Checkout.css";

const WishList = () => {
  const [{ wishlist, user }, addwish] = useStateValue();

  return (
    <div className="checkout container-fluid ">
      {/* <img
        class="home__image bg-image"
        src="/images/background.jpg"
        alt=""
        style={{ marginTop: 0, marginBottom: "-1000px", zIndex: "1" }}
      /> */}

      <div className="checkout__left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping wishlist</h2>

          {wishlist.map((item) => (
            <CheckoutProduct
            id={item.id}
            name={item.name}
            thumbnailString={item.thumbnailString}
            price={item.price}
            quantity={item.quantity}
            from="mywishlist"
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
