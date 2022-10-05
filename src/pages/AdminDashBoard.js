import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "../css/Dashboard.css";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io";
import { NavDropdown, Dropdown, Container } from "react-bootstrap";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import Header from "../component/Header";
import AddFruits from "./AddFruits";
import EmployeeSignup from "./EmployeeSignup";
import EmployeeLogin from "./EmployeeLogin";
import { useStateValue } from "../component/StateProvider";
import EmployeesList from "../component/EmployeeList";
import UsersList from "../component/UsersList";
import FruitsList from "../component/FruitList";
import VegetablesList from "../component/VegetablesList";
import SuppliersList from "../component/SupplierList";
import Home from "./Home";
import { useNavigate , Navigate} from "react-router-dom";
import SupplierSignup from "./SupplierSignup";

const AdminDashBoard = () => {
  const [{ employee }, dispatch] = useStateValue();
  const navigate = useNavigate();

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

  const push = () => {
    dispatch({
      type: "SET_EMPLOYEE",
      employee: null,
    });
    navigate('/');
  };

  return (
    <div>
   {employee ? null : <Navigate to='/employeelogin' replace={true}/>}
        <div>
          <div className="sidebar open">
            <div className="logo-details">
              <i className="bx bx-menu"></i>
              <span className="logo_name">Green Mart Admin</span>
            </div>
            <ul className="nav-links">
              {/* <li>
                <Link to="/greenMartRevenue">
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">Dashboard</span>
                </Link>
              </li> */}
              <li>
                <div className="iocn-link">
                  <Link>
                    <i className="bx bx-collection"></i>
                    <span className="link_name">Users</span>
                  </Link>

                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/users">Users List</Link>
                  </li>
                </ul>
              </li>

              <li>
                <div className="iocn-link">
                  <Link>
                    <i className="bx bx-collection"></i>
                    <span className="link_name"> Employees</span>
                  </Link>

                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/employeesignup">Add Employee</Link>
                  </li>
                  <li>
                    <Link to="/employees">Employee List</Link>
                  </li>
                </ul>
              </li>
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
                    <Link to="/fruitslist">Fruits List</Link>
                  </li>

                  <li>
                    <Link to="/vegetableslist">Vegetable List</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <Link>
                    <i className="bx bx-pie-chart-alt-2"></i>
                    <span className="link_name">Supplier</span>
                  </Link>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/suppliersignup">Add Supplier</Link>
                  </li>
                  <li>
                    <Link to="/suppliers">Supplier List</Link>
                  </li>
                </ul>
              </li>

              {/* <li>
                <div className="iocn-link">
                  <Link>
                    <i className="bx bx-pie-chart-alt-2"></i>
                    <span className="link_name">Total Details</span>
                  </Link>

                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/supplierside">Supplier Side</Link>
                  </li> 

                  <li>
                    <Link to="/greenMartRevenue">Green Mart Revenue</Link>
                  </li>
                </ul>
              </li> */}

              <li>
                <div className="profile-details">
                  <div className="profile-content">
                    <img
                      src="./images/green_mart_logo.jpg"
                      alt="profileImg"
                    ></img>
                  </div>
                  <div className="name-job">
                    <div className="profile_name">{employee?.firstName}</div>
                    <div className="job">Admin</div>
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

export default AdminDashBoard;
