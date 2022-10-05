import axios from "axios";
import { useState } from "react";
import { useStateValue } from "../component/StateProvider";
import { useNavigate } from "react-router-dom";
import { url } from "../common/constants";

import "../css/Login.css";
import { toast } from 'react-toastify';

const AddFruits = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  //const url = "http://localhost:8080";
  const navigate = useNavigate();
  const [{ supplier }, dispatch] = useStateValue();

  const submitData = () => {
    if (supplier == null) {
      toast.error("Login First to add products");
      navigate('/supplierlogin');
    } else {
      const data = new FormData();
      data.append("supplierId", supplier.supplierId);
      data.append("name", name);
      data.append("description", description);
      data.append("price", price);
      data.append("thumbnail", thumbnail);
      data.append("category", category);
      data.append("initialQuantity", quantity);
      data.append("presentQuantity", quantity);

      axios.post(url + "/products/add", data).then((response) => {
        const result = response.data;
        if (result.status === "success") toast.success("Product Added Successfully");
        navigate('/supplier');
      });
    }
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h3>Add Product</h3>
        <label>Product Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <label>Product Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <label>Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type='number'
          className='form-control'
        />

        <label>Category</label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className='form-control'
        >
          <option value='fruits'> </option>
          <option value='vegetables'>Vegetables</option>
          <option value='fruits'>Fruits</option>
        </select>

        <label>Quantity</label>
        <input
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          type='number'
          className='form-control'
        />
        <label>thumbnail</label>
        <input
          accept='image/*'
          onChange={(e) => {
            setThumbnail(e.target.files[0]);
          }}
          type='file'
          className='form-control'
        />
        <button className='btn btn-success' onClick={submitData}>
          submit
        </button>
      </div>
    </div>
  );
};

export default AddFruits;
