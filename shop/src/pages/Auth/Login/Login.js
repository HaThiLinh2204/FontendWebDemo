import React from "react";
import "./Login.css";
import {TiSocialTwitter, TiSocialFacebook, TiSocialGooglePlus} from "react-icons/ti"
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-page">
      <div className="login-account">
        <div className="signform">
          <div className="left">
            <Link  className='bts-a' to='/register' style={{ float: "right", marginRight: "35px", fontSize: "0.9em" }}>Don't have an account? Sign up!</Link>

            <div className="bts">
              <a href="" className="fblogin social">
                <TiSocialFacebook style={{fontSize:'20px',paddingRight:'10px'}}/>
                <span>Sign in with Facebook</span>
              </a>
              <a href="" className="twlogin social">
                <TiSocialTwitter style={{fontSize:'20px',paddingRight:'10px'}}/>
                <span>Sign in with Twitter</span>
              </a>
              <a href="#" className="gplogin social">
                <TiSocialGooglePlus style={{fontSize:'20px',paddingRight:'10px'}}/>
                <span>Sign in with Google</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="headit">
              <h4>Login To Your Account</h4>
            </div>
            <div className="form">
              <form className="login-form" id="login-form">
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <input
                  className="subbt"
                  type="submit"
                  value="Sign In"
                  style={{ border: "none" }}
                />
              </form>
              <input type="checkbox" id="remember" name="remember" />
              <span style={{ color: "#b6b6b6", fontSize: "0.9em" }}>
                {" "}
                Remember Me
              </span>
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
