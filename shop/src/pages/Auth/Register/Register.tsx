import React from "react";
import './Register.css';
import { Link } from "react-router-dom";
function Register(){
    return(
        <div className="register-page">
            <div className="form-signup">
                <div className="headit">
                <h4>Sign Up</h4>
                </div>
                <div className="form">
                    <form className="signUp-form" id="signUp-form">
                        <input type="text" placeholder="User Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm password"/>
                        <input
                        className="subbt"
                        type="submit"
                        value="Sign Up"
                        style={{ border: "none" }}
                        />
                    </form>
                    <Link className="link-login" to="/login">Have an account ? Sign in !</Link>
                </div>
            </div>
        </div>
    )
};
export default Register;
