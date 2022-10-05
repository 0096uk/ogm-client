import axios from "axios";
import { useState } from "react";
import "../css/Login.css";

import { url } from "../common/constants";



const AddVegetables = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  //const url = "http://localhost:8080";

  const submitData = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("thumbnail", thumbnail);
    data.append("category", category);
    data.append("quantity", quantity);

    axios.post(url + "/fruits/add", data).then((response) => {
      const result = response.data;
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Add Vegetables</h3>
        <label>FruitName</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>Category</label>
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>Quantity</label>
        <input
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          type="number"
          className="form-control"
        />
        <label>thumbnail</label>
        <input
          accept="image/*"
          onChange={(e) => {
            setThumbnail(e.target.files[0]);
          }}
          type="file"
          className="form-control"
        />
        <button className="btn btn-success" onClick={submitData}>
          submit
        </button>
      </div>
    </div>
  );
};

export default AddVegetables;
