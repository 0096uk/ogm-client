import "../css/Home.css";
import Product from "../component/Product";
import { url } from "../common/constants";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";
import { toast } from 'react-toastify';

function Home() {
  const [{ products }, dispatch] = useStateValue();
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = () => {
    axios.get(url + "/products").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setAllProducts(() => result.data);
        dispatch({
          type: "SET_PRODUCTS",
          products: result.data,
        });
      } else {
        toast.error("error while loading products");
      }
    });
  };


  useEffect(() => {
    console.log(`all products loaded`);
    if (allProducts == 0) 
    getProducts();
  },[]);

 

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="/images/background.jpg" alt="" />
        <div className="home__grid">
          {allProducts.map((product, index) => {
            return <Product product={allProducts[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
