import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

import "../css/Login.css";
import { url } from "../common/constants";

import { toast } from 'react-toastify';

function Signout() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  var total1 = getBasketTotal(basket);
  const signout = (e) => {
    //  const [{ basket, user }, dispatch] = useStateValue();
    localStorage.clear();
    e.preventDefault();
    if (user == null) {
      toast.error("Login first to place an order");
      navigate('/login');
    } else {
      const order_item = basket.map(selectFew);

      function selectFew(product) {
        const { id, quantity } = product;
        const productId = id;
        return { productId, quantity };
      }

      const data = {
        userId: user.userId,
        total: total1,
        cart_item: order_item,
      };

      axios.post(url + "/cart/addcart", data).then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status == "success") {
          toast.success("Order placed successfully");
          navigate('/');
        } else {
          toast.error("Something went wrong please try again");
        }
      });
    }
  };

  
  return (
    <div>
      <h1>Thank You For Using Our Services</h1>
      <Link to='/login'>
        <button className='login__signInButton' onClick={signout}>
          Login Again
        </button>
      </Link>
    </div>
  );
}

export default Signout;
