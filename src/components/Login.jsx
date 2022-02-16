import React from "react";
import "../styles/login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="formLogin">
        <div>
          <img src="/assets/imglogin.jpg" className="img" />
        </div>
        <div style={{marginTop: 36}}>
          <div className="signIn">
            <span className="textSignIn">Sign In</span>
            <div className="icon">
              <a href="#" className="iconFacebook">
                <span className="fa fa-facebook"></span>
              </a>
              <a href="#" className="iconFacebook">
                <span className="fa fa-twitter"></span>
              </a>
            </div>
          </div>
          <form action="#" className ="signin-form">
            <div className ="form-group mb-3">
              <label className ="label" for="name">
                Username
              </label>
              <input
                type="text"
                className ="form-control"
                placeholder="Username"
                required=""
              />
            </div>
            <div className ="form-group mb-3">
              <label className ="label" for="password">
                Password
              </label>
              <input
                type="password"
                className ="form-control"
                placeholder="Password"
                required=""
              />
            </div>
            <div className ="form-group">
              <button
                type="submit"
                className ="form-control btn btn-primary rounded submit px-3 btnlogin"
              >
                Sign In
              </button>
            </div>
            <div className ="form-group d-md-flex remember">
              <div className ="w-50 text-left">
                <label className ="checkbox-wrap checkbox-primary mb-0">
                  <input type="checkbox" checked="" />
                  <span className="textremember">Remember Me</span>
                </label>
              </div>
              <div className ="w-50 text-md-right forgot">
                <a href="#">Forgot Password</a>
              </div>
            </div>
          </form>
          <p className ="text-center member">Not a member? <NavLink to="/signin" data-toggle="tab" href="#signup" className="action">Sign Up</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
