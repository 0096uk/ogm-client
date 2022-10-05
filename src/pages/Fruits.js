import "../css/Home.css";
import Product from "../component/Product";
import { url } from "../common/constants";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";

import { toast } from 'react-toastify';

function Fruits() {
  const [{ fruits }, dispatch] = useStateValue();
  const [allFruits, setAllFruits] = useState([]);

  useEffect(() => {
    console.log(`all fruits loaded`);
    if (allFruits == 0) getFruits();
  }, []);

  const getFruits = () => {
    axios.get(url + "/products/fruits").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setAllFruits(result.data);
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
          {allFruits.map((fruit, index) => {
            return <Product product={allFruits[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Fruits;
