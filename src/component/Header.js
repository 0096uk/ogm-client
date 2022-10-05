import React from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { url } from "../common/constants";

import "../css/Header.css";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [{ wishlist, user1 }, addwish] = useStateValue();
  const address = "";

  const email = localStorage.getItem("email");

  const navigate = useNavigate();
  //  const [{ basket, user }, dispatch] = useStateValue();
  //const [{ basket, user }, dispatch] = useStateValue();

  var total1 = getBasketTotal(basket);

  const signin = (e) => {
    navigate('/login');
  };

  const orders = (e) => {
    if (user == null) {
      toast.success("Login to see your orders");
      navigate('/login');
    } else navigate('/orders');
  };

  const signout = (e) => {
    localStorage.clear();
    e.preventDefault();
    navigate('/');
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
        cItem: order_item,
      };

      axios.post(url + "/cart/addcart", data).then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status == "success") {
          toast.success("cart updated successfully");
          dispatch({
            type: "SET_USER",
            user: null,
          });
          navigate('/');
        } else {
          toast.error("Something went wrong please try again");
        }
      });
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='/images/green_mart_logo.jpg' />
      </Link>
      {/* ------------------ trying to add field like 'amazon' delivery city n pin code  ---------------------------------- */}
      <div>
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Deliver to {!user ? "Guest" : user.name}
          </span>
          <span className='header__optionLineTwo'>
            {!user
              ? "city/pincode "
              : !user.city
              ? "city/pincode "
              : user.city.concat(" / ", user.pincode)}
          </span>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <Link to='/userProfileView'>
        <div className='footer__option'>
          <span className='footer__optionLine'> Your Account</span>
        </div>
      </Link>

      <Link to='/fruits'>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Fruits</span>
        </div>
      </Link>

      <Link to='/vegetables'>
        <div className='header__option'>
          <span className='header__optionLineTwo'>Vegetables</span>
        </div>
      </Link>

      {/*----------------------- wish list---------------------  */}
      <Link to='/wishlist'>
        <div className='header__optionBasket'>
          <img className='header__wishlist' src='/images/wishist_logo.png' />
          <span className='header__optionLineTwo'>Wishlist</span>
          <span className='header__optionLineTwo header__basketCount'>
            {wishlist?.length}
          </span>
        </div>
      </Link>

      {/* ----------------------------------------- */}

      <div className='header__nav'>
        <div className='header__option' onClick={!user ? signin : signout}>
          <span className='header__optionLineOne'>
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className='header__optionLineTwo'>
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>

        <Link to='/signup'>
          <div className='header__option'>
            {!user && <span className='header__optionLineTwo'>SignUp</span>}
          </div>
        </Link>

        <div className='header__option' onClick={orders}>
          <span className='header__optionLineTwo'>Orders</span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
