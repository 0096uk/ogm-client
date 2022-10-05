import "../css/Home.css";
import Product from "../component/Product";
import { url } from "../common/constants";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";
import { toast } from 'react-toastify';

function Vegetables() {
  const [{ vegetables }, dispatch] = useStateValue();
  const [allVegetables, setAllVegetables] = useState([]);

  useEffect(() => {
    console.log(`all vegatables loaded`);
    if (allVegetables == 0) getVegetables();
  }, []);

  const getVegetables = () => {
    axios.get(url + "/products/vegetables").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setAllVegetables(result.data);
        dispatch({
          type: "SET_PRODUCTS",
          products: result.data,
        });
      } else {
        toast.error("error while loading producs");
      }
    });
  };

  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='/images/background.jpg' alt='' />
        <div className='home__row'>
          {allVegetables.map((vegetable, index) => {
            return <Product product={allVegetables[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Vegetables;
