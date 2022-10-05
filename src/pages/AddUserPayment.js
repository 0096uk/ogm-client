import axios from "axios";
import { useState } from "react";
import { useStateValue } from "../component/StateProvider";
import { useNavigate, Navigate } from "react-router-dom";
import { url } from "../common/constants";
import { getBasketTotal } from "../component/reducer";
import { toast } from "react-toastify";

import "../css/Login.css";
const AddUserPayment = ({ total1 }) => {
  const navigate = useNavigate();
  const [{ user, basket }, dispatch] = useStateValue();
  const [paymentType, setPaymentType] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [ccv, setCcv] = useState("");
  var total1 = getBasketTotal(basket);

  const cancelPayment = () => {
    navigate("/");
  };
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

  const addPayment = () => {
    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "*/*",
      },
    };

    const body = {
      userId: user.userId,
      paymentType: paymentType,
      cardNo: cardNo,
    };
    axios
      .post(url + "/user/addUserPayment", body, axiosConfig.headers)
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status === "success") {
          toast.success("payment done successfully");
          checkout();
          alert("confirm your order will be placed")
          navigate("/");
        }
      });
  };

  return (
    <div className="login">
      {user ? null : <Navigate to="/login" replace={true} />}
      <h1>Order Payment</h1>
      <table>
        <th>
          <div className="login__container">
            <h3>Payment Details</h3>
            <label>Name</label>
            <input
              defaultValue={user?.firstName}
              type="text"
              className="form-control"
            />
            <label>Last name</label>
            <input
              defaultValue={user?.lastName}
              type="text"
              className="form-control"
            />
            <label>Payment type</label>
            <input
              onChange={(e) => {
                setPaymentType(e.target.value);
              }}
              placeholder="card"
              type="text"
              className="form-control"
            />
            <label>Card Number</label>
            <input
              onChange={(e) => {
                setCardNo(e.target.value);
              }}
              type="text"
              className="form-control"
            />
            <label>CVV</label>
            <input
              onChange={(e) => {
                setCcv(e.target.value);
              }}
              type="text"
              className="form-control"
            />
            <br />
            <button className="btn btn-success" onClick={() => addPayment()}>
              Confirm Payment
            </button>
            <br />
            <button className="btn btn-danger" onClick={() => cancelPayment()}>
              Cancel Payment
            </button>
          </div>
        </th>
      </table>
    </div>
  );
};

export default AddUserPayment;
