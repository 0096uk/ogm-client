import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";
import { url } from "../common/constants";

import "../css/EmployeeLogin.css";
import { ButtonToolbar } from "react-bootstrap";
import { toast } from 'react-toastify';

function SupplierLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ supplier }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    axios
      .post(url + "/supplier/authenticate", data)
      .then((response) => {
        const result = response.data;
        console.log("this is supplier data");
        console.log(result);
        if (result.status === "success") {
          dispatch({
            type: "SET_SUPPLIER",
            supplier: result.data,
          });
          navigate('/supplier');
        } else {
          toast.error("Wrong credentials please try again");
        }
      });
  };
  return (
    <div className="container-fluid login bg-image">
      <img className="home__image1" src="/images/background.jpg" alt="" />
      <Link to="/">
        <img className="login__logo" src="/images/green_mart_logo.jpg" />
      </Link>

      <div className="login__container">
        <h1>Supplier Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //pattern="[0-9_]{4,15}"
            required
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SupplierLogin;
