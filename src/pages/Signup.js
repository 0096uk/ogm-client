import axios from "axios";
import { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { logoUrl } from "../common/constants";
import { toast } from 'react-toastify';
import { url } from "../common/constants";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // const url = "http://localhost:8080";

  const submitData = () => {
    const data = new FormData();

    data.append("email", email);
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("password", password);
    data.append("phone", phone);

    // console.log(data);
    axios.post(url + "/user/signup", data).then((response) => {
      const result = response.data;
      if(result.status === "error")
        toast.error("error occured please provide correct details");
      else
      {
        toast.success("signup successful");
        navigate('/login');
      }
      
    });
  };

  return (
    <div className="container-fluid login bg-image">
      <img class="home__image1" src="/images/background.jpg" alt="" />{" "}
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logoUrl} />
      </Link>

      <div className='login__container'>
        <h3>Sign Up</h3>
        <label>FirstName</label>
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <label>LastName</label>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <label>email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <label>password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <label>phone</label>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type='text'
          className='form-control'
        />
        <button className='btn btn-success' onClick={submitData}>
          submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default Signup;
