import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "../css/Dashboard.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import { NavDropdown, Dropdown, Container } from "react-bootstrap";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import Header from "../component/Header";
import AddFruits from "./AddFruits";
import ChangeSupplierPassword from "../pages/ChangeSupplierPassword";
import { useStateValue } from "../component/StateProvider";

const SupplierDashBoard = () => {
  const [{ supplier }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const push = () => {
    dispatch({
      type: "SET_SUPPLIER",
      supplier: null,
    });
    navigate('/');
  };

  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }, []);

  return (
    <div>
    {supplier ? null : <Navigate to='/supplierlogin'  replace={true} />}
        <div>
          <div className="sidebar open">
            <div className="logo-details">
              <i className="bx bx-menu"></i>
              <span className="logo_name">Green Mart Supplier</span>
            </div>
            <ul className="nav-links">
              <li>
                <div className="iocn-link">
                  <Link>
                    <i>
                      <LocalHospitalOutlinedIcon />
                    </i>
                    <span className="link_name">Products</span>
                  </Link>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/addproducts">Add Products</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/changesupplierpassword">
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">Change Password</span>
                </Link>
              </li>

              <li>
                <div className="profile-details">
                  <div className="profile-content">
                    <img
                      src="./images/green_mart_logo.jpg"
                      alt="profileImg"
                    ></img>
                  </div>
                  <div className="name-job">
                    <div className="profile_name">{supplier?.firstName}</div>
                    <div className="job">Supplier</div>
                  </div>
                  <i className="bx bx-log-out" onClick={push}></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default SupplierDashBoard;
