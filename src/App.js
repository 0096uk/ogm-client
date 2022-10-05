import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Fruits from "./pages/Fruits";
import AddFruits from "./pages/AddFruits";
import AddVegetables from "./pages/AddVegetables";
import Vegetables from "./pages/Vegetables";
import EmployeeLogin from "./pages/EmployeeLogin";
import ChangePassword from "./pages/ChangePassword";
import SupplierLogin from "./pages/SupplierLogin";
import WishList from "./pages/WishList";
import EmployeeSignup from "./pages/EmployeeSignup";
import AdminDashBoard from "./pages/AdminDashBoard";
import Signout from "./component/Signout";

import UserProfileView from "./pages/UserProfileView";
import SupplierSignup from "./pages/SupplierSignup";
import EmployeeDashBoard from "./pages/EmployeeDashBoard";
import SupplierDashBoard from "./pages/SupplierDashBoard";
import ChangeSupplierPassword from "./pages/ChangeSupplierPassword";
import ChangeEmployeePassword from "./pages/ChangeEmployeePassword";
import EmployeeOrderList from "./component/EmployeeOrderList";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import UserInvoice from "./pages/UserInvoice";
import AddUserPayment from "./pages/AddUserPayment";
import UsersList from "./component/UsersList";
import SuppliersList from "./component/SupplierList";
import EmployeesList from "./component/EmployeeList";
import FruitsList from "./component/FruitList";
import VegetablesList from "./component/VegetablesList";
import OrderList from "./pages/OrderList" ;

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<><Header /><Login /></>} />   
          <Route path='/signup' element={<><Header /><Signup /></>} />
          <Route path='/employeelogin' element={<><Header /><EmployeeLogin /></>} />
          <Route path='/employeesignup' element={<><EmployeeSignup /><AdminDashBoard /></>} />
          <Route path='/suppliersignup' element={<><SupplierSignup /><AdminDashBoard /></>} />
          <Route path='/aboutus' element={<><Header /><AboutUs /></>} />
          <Route path='/contactus' element={<><Header /><ContactUs /></>} />
          <Route path='/supplierlogin' element={<><Header /><SupplierLogin /></>} />
          <Route path='/wishlist' element={<><Header /><WishList /></>} />
          <Route path='/employee' element={<EmployeeDashBoard />} />
          <Route path='/supplier' element={<SupplierDashBoard />} />
          <Route path='/admin' exact element={<AdminDashBoard />} />
          <Route path='/userinvoice' element={<UserInvoice />} />
          <Route path='/adduserpayment' element={<><Header /><AddUserPayment /></>} />
          <Route path='/fruits' element={<><Header /><Fruits /></>} />
          <Route path='/vegetables' element={<><Header /><Vegetables /></>} />
          <Route path='/users' element={<><UsersList /><AdminDashBoard /></>} />
          <Route path='/employees' element={<><EmployeesList /><AdminDashBoard /></>} />
          <Route path='/suppliers' element={<><SuppliersList /><AdminDashBoard /></>} />
          <Route path='/fruitslist' element={<><FruitsList /><AdminDashBoard /></>} />
          <Route path='/vegetableslist' element={<><VegetablesList /><AdminDashBoard /></>} />
          <Route path='/signout' element={<><Header /><Signout /></>} />
          <Route path='/addproducts' element={<><AddFruits /><SupplierDashBoard /></>} />
          <Route path='/employeeorderlist' element={<><EmployeeOrderList /><EmployeeDashBoard /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/changepassword' element={<><Header /><ChangePassword /></>} />
          <Route path='/changesupplierpassword' element={<><ChangeSupplierPassword /><SupplierDashBoard /></>} />
          <Route path='/changeemployeepassword' element={<><ChangeEmployeePassword /><EmployeeDashBoard /></>} />
          <Route path='/userProfileView' element={<><Header /><UserProfileView /></>} />
          <Route path='/orders' element={<> <Header /><OrderList /></>} />
          <Route path='/' element={<><Header /><Home /><Footer /></>} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
