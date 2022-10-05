import axios from "axios";
import { useState } from "react";
//import { Link, useNavigate } from "react-router-dom";

import { url } from "../common/constants";

import "../css/Login.css";

import { toast } from 'react-toastify';

const SupplierSignup = () => {
  //const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const submitData = () => {
    const data = new FormData();
    data.append("email", email);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("password", password);
    data.append("phone", phone);

    console.log(data);
    axios.post(url + "/supplier/signup", data).then((response) => {
      const result = response.data;
      if(result.status === "error")
        toast.error("error occured please provide correct details");
      else
      {
        toast.success("Supplier added successfully");
        
      }
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Supplier sign up</h3>
        <label>FirstName</label>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>LastName</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <label>phone</label>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          className="form-control"
        />
        <button className="btn btn-success" onClick={submitData}>
          submit
        </button>
      </div>
    </div>
  );
};

export default SupplierSignup;
