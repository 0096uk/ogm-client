import React, { useState } from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../component/StateProvider";
import { logoUrl , url } from "../common/constants";
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user, basket }, dispatch] = useStateValue();
  // const [{ basket }, setBasket] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(url + "/user/authenticate1", data)
      .then((response) => {
        const result = response.data;
        //console.log(result);
        //console.log(response.data.data.jwtToken);
        if (result.status === "success") {
          dispatch({
            type: "SET_USER",
            user: result.data,
          });

          localStorage.setItem("jwtToken", response.data.data.jwtToken);

          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.data.jwtToken}`

          if (result.data.cartDto != null) {
            dispatch({
              type: "SET_BASKET",
              basket: result.data.cartDto.cartItemDtoList,
            });
          }
          navigate('/');
        }
        else if(result.status === "error")
        {
          toast.error("Wrong credentials please try again");
        }
        
        // console.log(result.status)
        // console.log(response.status)
        
        // if(result.status==="error"){
        //   toast.error("Wrong credentials please try again");
        // }
      }).catch((error) => {
        console.log(error)
        if(error){
          toast.error("Wrong credentials please try again");
        }
      });
  };

  const register = (e) => {
    navigate('/signup');
  };

  return (
    <div className="login container-fluid bg-image">
      <img
        class="home__image"
        src="/images/background.jpg"
        alt=""
        style={{ marginTop: 0, marginBottom: "-1000px" }}
      />
      <Link to="/">
        <img className="login__logo" src={logoUrl} />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //pattern="[0-9_]{4,15}"
            required
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <button onClick={register} className="login__registerButton">
          Create your Green Mart Account
        </button>
      </div>
    </div>
  );
}

export default Login;
