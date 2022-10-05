import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";
import { url } from "../common/constants";

import "../css/Login.css";

import { toast } from 'react-toastify';

function ChangePassword() {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const changePassword = (e) => {
    e.preventDefault();
    const data = {
      currentPassword: currentPassword,
      newPassword: newPassword,
      email: user.email,
    };

    axios.put(url + "/user/updatepassword", data).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        toast.success("Password Changed Successfully");
        navigate('/');
      } else {
        console.log(data);
        toast.error("Wrong credentials please try again");
      }
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/images/green_mart_logo.jpg" />
      </Link>

      <div className="login__container">
        <h1>Change Password</h1>

        <form>
          <h5>Current Password</h5>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <h5>New Password</h5>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={changePassword}
            className="login__signInButton"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
