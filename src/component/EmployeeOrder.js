import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useState } from "react";
import "../css/EmployeeOrder.css";
import { useStateValue } from "./StateProvider";
import { url } from "../common/constants";
import { imageurl } from "../common/constants";

import { toast } from 'react-toastify';

function EmployeeOrder({ order }) {
  const [orderStatus, setorderStatus] = useState(order.status);
  const orderDelivered = () => {
    const data = {
      orderId: order.orderId,
    };
    axios.get(url + "/updateOrderStatus/" + order.orderId + "/" + 1);
  };

  return (
    <div className='order'>
      <span className='order__info'>
        <strong>
          Customer : {order.firstName} {order.lastName}{" "}
        </strong>
        <div>
          <strong>
            Delivery Status : {orderStatus ? "Delivered" : "Not - Delivered"}
          </strong>
        </div>
        <div>
          Address : {order.address} , {order.city} , {order.pincode} , Phone :{" "}
          {order.phone}
        </div>
        <div>Delivery Date : {order.deliveryDate}</div>
      </span>
      <table border='1'>
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
                  className='small'
                />
              </td>
            </tr>
          );
        })}
      </table>
    { !orderStatus && <button
        onClick={() => {
          const url1 = url + "/employee/updateOrderStatus";
          axios.put(url1 + "/" + order.orderId + "/" + 1).then((response) => {
            const result = response.data;
            if (result.status === "success") {
              //setdelUser(result.data)
              toast.success("order delivered successfully");
              setorderStatus(1);
            }
            //  order.status = 1;
          });
        }}
      >
        Deliver
      </button> }
    </div>
  );
}

export default EmployeeOrder;
