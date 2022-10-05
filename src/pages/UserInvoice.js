import React, { useState } from "react";
import { Link, useNavigate, Route, Navigate } from "react-router-dom";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import "../css/Login.css";
import "../css/Userinvoice.css";
import { url } from "../common/constants";
import { useStateValue } from "../component/StateProvider";
import { useEffect } from "react";
import Login from "./Login";
import AddUserPayment from "./AddUserPayment";
import { getBasketTotal } from "../component/reducer";
import { toast } from "react-toastify";
import { imageurl } from "../common/constants";

function UserInvoice() {
  const navigate = useNavigate();
  const [{ user, basket }, dispatch] = useStateValue();
  var total1 = getBasketTotal(basket);

  const checkout = async () => {
    // console.log("inside 1")
    // debugger;
    if (user == null) {
      toast.error("Login first to place an order");
      navigate("/login");
    } else {
      const order_item = basket.map(selectFew);

      // console.log("inside 2")
      // debugger;
      function selectFew(product) {
        const { id, quantity } = product;
        const productId = id;
        return { productId, quantity };
      }

      const data = {
        userId: user.userId,
        total: total1,
        order_item: order_item,
      };

      try {
        const response = await axios.post(url + "/orders/addorder", data);
        const result = response.data;

        if (result.status == "success") {
          toast.success("Order placed successfully");

          dispatch({
            type: "EMPTY_BASKET",
          });
        } else {
          toast.error("Something went wrong please try again");

          dispatch({
            type: "EMPTY_BASKET",
          });
        }
      } catch (err) {
        toast.error("Something went wrong please try again");

        dispatch({
          type: "EMPTY_BASKET",
        });
      }
    }
  };

  const print = (e) => {
    e.preventDefault();
    window.print();
  };

  let total = 0;
  const cancelOrder = () => {
    navigate("/");
  };

  const cashOnDelivery = async () => {
    checkout();
    alert("confirm your order will be placed");
    navigate("/");
  };

  const addPayment = () => {
    navigate("/adduserpayment");
    <AddUserPayment total1={total} />;
  };
  return (
    <div class="container-fluid">
      {user ? null : <Navigate to="/login" />}
      <div id="ui-view" data-select2-id="ui-view">
        <div>
          <div class="card">
            <div class="card-header">
              <strong>Order Summary</strong>
              <a
                class="btn btn-sm btn-primary float-right mr-1 d-print-none"
                href="#"
                onClick={print}
                data-abc="true"
              >
                <i class="fa fa-print"></i> Print
              </a>
            </div>
            <div class="card-body">
              <div class="row mb-4">
                <div class="col-sm-4">
                  <h6 class="mb-3">From:</h6>
                  <div>
                    <strong>Green Mart, Pune</strong>
                  </div>
                  <div>Shivaji Nagar, Pune</div>
                  <div>Maharshtra,India, 415003</div>
                  <div>Email: greenmartltd@gmail.com</div>
                  <div>Phone: 8407985072</div>
                </div>
                <div class="col-sm-4">
                  <h6 class="mb-3">To:</h6>
                  <div>
                    <strong>
                      {user?.firstName} {user?.lastName}
                    </strong>
                  </div>
                  <div>
                    {user?.address}, {user?.city}{" "}
                  </div>
                  <div>
                    {user?.country}, {user?.pincode}
                  </div>
                  <div>Email:{user?.email}</div>
                  <div>Phone: {user?.phone}</div>
                </div>
                <div class="col-sm-4">
                  <h6 class="mb-3">Details:</h6>
                  <strong>
                    {" "}
                    <div>Order Id: 12365422</div>
                  </strong>
                  <div>Date here</div>

                  <div>28/03/2021</div>
                </div>
              </div>
              <div class="table-responsive-sm">
                <table class="table  table-hover table-active">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Image</th>
                      <th class="center">Quantity</th>
                      <th class="right">Unit Cost</th>
                      <th class="right">Total</th>
                    </tr>
                  </thead>
                  {
                    <tbody>
                      {basket.map((ord, index) => (
                        <tr key={index}>
                          <td class="left">{ord.name}</td>
                          <td class="left">
                            <div>
                              <img
                                class="invoice_image"
                                src={imageurl + ord.thumbnailString}
                                alt=""
                              />
                            </div>
                          </td>
                          <td class="center">{ord.quantity}</td>
                          <td class="right">₹{ord.price}</td>
                          <td
                            hidden={(total = total + ord.quantity * ord.price)}
                          ></td>
                          <td class="right">₹{ord.quantity * ord.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </table>
              </div>
              <div class="row">
                <div class="col-lg-4 col-sm-5">
                  We are transparent in our nature. And if you are facing any
                  problems, just let us know. We will never disappoint you.
                </div>
                <div class="col-lg-4 col-sm-5 ml-auto">
                  <table class="table table-hover table-clear table-active">
                    <tbody>
                      <tr>
                        <td class="left">
                          <strong>Subtotal</strong>
                        </td>
                        <td class="right">{total}</td>
                      </tr>

                      <tr>
                        <td class="left">
                          <strong>GST (4%)</strong>
                        </td>
                        <td class="right">₹{(total * 4) / 100}</td>
                      </tr>
                      <tr>
                        <td class="left">
                          <strong>Total</strong>
                        </td>
                        <td class="right">
                          <strong>₹{total + (total * 4) / 100}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <form method="get">
                    <Button
                      class="btn btn-danger"
                      data-abc="true"
                      onClick={cancelOrder}
                    >
                      <i class="fa "></i> Cancel Order
                    </Button>{" "}
                    <span></span>
                    <Button
                      class="btn btn-success"
                      data-abc="true"
                      type="submit"
                      onClick={() => cashOnDelivery()}
                    >
                      <i class="fa "></i> Cash On delivery
                    </Button>{" "}
                    <span></span>
                    <Button
                      class="btn btn-success"
                      data-abc="true"
                      type="submit"
                      onClick={() => addPayment()}
                    >
                      <i class="fa "></i> Make Payment
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInvoice;
