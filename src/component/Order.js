
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useState } from "react";
import "../css/EmployeeOrder.css";
import { useStateValue } from "./StateProvider";
import { url } from "../common/constants";
import {Navigate} from "react-router-dom";
import { imageurl } from "../common/constants";

function Order({ order }) {
  const [{ user }, dispatch] = useStateValue();

  const [orderStatus, setorderStatus] = useState(order.status);
  const orderDelivered = () => {
    const data = {
      orderId: order.orderId,
    };
    axios.get(url + "/updateOrderStatus/" + order.orderId + "/" + 1);
  };

  return (
    <div className="order">
    {user ? null : <Navigate to='/login'/>}
      <span className="order__info ">
        <strong>Customer Name :</strong> {user.firstName} {user.lastName}{" "}
        <div>
          <strong>Delivery Status : </strong>{" "}
          {orderStatus ? "Delivered" : "Not - Delivered"}
        </div>
        <div>
          <strong>Total :</strong> {order.total} ₹
        </div>
        <div>
          <strong> Address :</strong> {user.address} , {user.city} ,{" "}
          {user.pincode} ,<strong> Phone :</strong> {user.phone}
        </div>
        <div>
          {" "}
          <strong>Delivery Date : </strong> {order.deliveryDate}
        </div>
      </span>
      <table border="1">
        <th>Product Name</th>
        <th>Product Quantity (Kg)</th>
        <th>Image</th>
        {order.orderItemDtoList.map((product) => {
          return (
            <tr>
              <td>{product.productName}</td>
              <td>{product.quantity}</td>
              <td>
                <img
                  src={imageurl + product.productThumbnail}
                  className="small"
                />
              </td>
            </tr>
          );
        })}
      </table>
      {/* <button
        onClick={() => {
          const url = "http://localhost:8080/employee/updateOrderStatus";
          axios.put(url + "/" + order.orderId + "/" + 1).then((response) => {
            const result = response.data;
            if (result.status === "success") {
              //setdelUser(result.data)
              alert("order delivered successfully");
              setorderStatus(1);
            }
            //  order.status = 1;
          });
        }}
      >
        Deliver
      </button> */}
    </div>
  );
}

export default Order;
