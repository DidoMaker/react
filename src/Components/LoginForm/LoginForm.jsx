import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                 <h1>Login</h1>
                 <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                 </div>
                 <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>

                 </div>
                 <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                    <a href="#">forgot password</a>
                 </div>
                 <button type="submit">login</button>
                 
                 <div className="register-link">
                    <p>Don't have account? <a href="#">Register</a></p>
                 </div>
                 <div className="another-account">
                    <span className="text center">Or login with</span>
                 </div>
                 <div className="social-link">
                     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"></link>
                     <i class="fa-brands fa-google-plus-g google"></i>
                     <i class="fa-brands fa-facebook-f facebook"></i>
                 </div> 
            </form>
        </div>
    );
};
export default LoginForm;