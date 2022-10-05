import React, { useState } from "react";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../common/constants";
import { isTemplateElement } from "@babel/types";
import { toast } from 'react-toastify';

import "../css/Subtotal.css";

function Subtotal() {
  const navigate = useNavigate();
  //  const [{ basket, user }, dispatch] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue();

  var total1 = getBasketTotal(basket);

  const checkout = (e) => {
    //   e.preventDefault();
    //   if (user == null) {
    //     alert("Login first to place an order");
    //     history.push("/login");
    //   } else {
    //     const order_item = basket.map(selectFew);

    //     function selectFew(product) {
    //       const { id, quantity } = product;
    //       const productId = id;
    //       return { productId, quantity };
    //     }

    //     const data = {
    //       userId: user.userId,
    //       total: total1,
    //       order_item: order_item,
    //     };

    //     axios.post(url + "/orders/addorder", data).then((response) => {
    //       const result = response.data;
    //       console.log(result);
    //       if (result.status == "success") {
    //         alert("Order placed successfully");
    //        {/* dispatch({
    //          type: "EMPTY_BASKET",
    //         });
    //       history.push("/");*/}
    //       } else {
    //         alert("Something went wrong please try again");
    //       }
    //     });
    if (user == null) {
      toast.error("Login first to place an order");
      navigate('/login');
    }
    else if(!user.city && !user.address)
      toast.error("please click on your account to add address before checkout")
    else navigate('/userinvoice');

    

  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={checkout} disabled={basket.length === 0 ? true : false} style={basket.length === 0 ? {opacity:0.5}: {color:1}}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
