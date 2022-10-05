import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, Route } from "react-router-dom";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";

import { url } from "../common/constants";
import { useStateValue } from "../component/StateProvider";

import Login from "./Login";

import { toast } from 'react-toastify';

import "../css/Login.css";

function UserProfileView() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  if (user == null) {
    toast.error("Please log in first ");
    navigate('/login');
  }
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const getAllfromdb = () => {
    const body = { userId: user?.userId };
    console.log(body);
    axios.post(url + "/user/userbyid", body).then((resp) => {
      const result = resp.data;
      if (result) {
        console.log("user by id");
        console.log(result);
        setEmail(resp.data.email);
        setPhone(resp.data.phone);
        setName(resp.data.firstName);
        setPassword(resp.data.password);
        setLastName(resp.data.lastName);
        setAddress(resp.data.address);
        setCity(resp.data.city);
        setCountry(resp.data.country);
        setPincode(resp.data.pincode);
      } else {
        toast.error("error while loading data ");
      }
    });
  };
  useEffect(() => {
    getAllfromdb();
  }, []); //[] means onLoad

  const EditProfile = () => {
    const body = {
      userId: user?.userId,
      firstName: name,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      password: password,
      city: city,
      country: country,
      pincode: pincode,
    };
    axios
      .post(url + "/user/addAddress", body)
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status === "success") {
          dispatch({
            type: "SET_USER",
            user: result.Data,
          });
          //history.push("/");
        }
      });
  };

  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        flexWrap: "wrap",
        zIndex: 300,
      }}
    >
      <img
        class="home__image"
        src="/images/background.jpg"
        alt=""
        style={{ marginTop: 0, marginBottom: "-1000px" }}
      />
      <h1 style={{ zIndex: 100, textAlign: "center", color: "white" }}>
        User Profile
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: " space-evenly",
          alignContent: "center",
        }}
      >
        <div
          className="login__container"
          style={{ zIndex: 100, width: "300px" }}
        >
          <h3>User Details</h3>
          <h6>Name : {user?.firstName}</h6>
          <h6>Surname : {user?.lastName}</h6>
          <h6>email : {user?.email}</h6>
          <h6>phone : {user?.phone}</h6>
          <h6>Address : {user?.address}</h6>
          <h6>City : {user?.city}</h6>
          <h6>Country : {user?.country}</h6>
          <h6>Pincode : {user?.pincode}</h6>
        </div>
        <div className="login__container" style={{ width: "650px" }}>
          <h3 style={{ zIndex: 100 }}>Update Details </h3>
          <Row>
            <Col>
              <label>Name</label>
              <input
                defaultValue={user?.firstName}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </Col>
            <Col>
              <label>Last name</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                defaultValue={user?.lastName}
                type="text"
                className="form-control"
              />
            </Col>
          </Row>

          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={user?.email}
            type="text"
            className="form-control"
          />
          <label>Phone</label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            defaultValue={user?.phone}
            type="text"
            className="form-control"
          />
          <label>Address</label>
          <textarea
            defaultValue={user?.address}
            rows="3"
            cols="40"
            name="description"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></textarea>
          <Row>
            <Col>
              <label>City</label>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                defaultValue={user?.city}
                type="text"
                className="form-control"
              />
            </Col>

            <Col>
              <label>Pincode</label>
              <input
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                defaultValue={user?.pincode}
                type="text"
                className="form-control"
              />
            </Col>
            <Col>
              <label>Country</label>
              <input
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                defaultValue={user?.country}
                type="text"
                className="form-control"
              />
            </Col>
          </Row>
          <br />
          <button className="btn btn-success" onClick={EditProfile}>
            Update Profile
          </button>
          <Link to="/changepassword">Change Password</Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfileView;
