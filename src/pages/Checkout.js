import React from "react";
import "../css/Checkout.css";
import Subtotal from "../component/Subtotal";
import { useStateValue } from "../component/StateProvider";
import CheckoutProduct from "../component/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <img className="home__image" src="/images/background.jpg" alt="" /> */}
        <div className='checkout'>
          <div className='checkout__left'>
            <div>
              <h3>Hello, {user?.email}</h3>
              <h2 className='checkout__title'>Your shopping Basket</h2>

              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  name={item.name}
                  thumbnailString={item.thumbnailString}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>

          <div className='checkout__right'>
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
