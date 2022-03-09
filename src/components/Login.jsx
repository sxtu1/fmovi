import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

const Login = () => {
    return (
        <div className="login-wrapper" id="login-content">
            <div className="login-content">
                <a href="/" className="close">x</a>
                <h3>Login</h3>
                <form method="post" action="login.php">
                    <div className="row">
                        <label htmlFor="username">
                            Username:
                            <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required="required" />
                        </label>
                    </div>
                    <div className="row">
                        <label htmlFor="password">
                            Password:
                            <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required="required" />
                        </label>
                    </div>
                    <div className="row">
                        <div className="remember">
                            <div>
                                <input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
                            </div>
                            <a href="/">Forget password ?</a>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className="row">
                    <p>Or via social</p>
                    <div className="social-btn-2">
                        <a className="fb" href="/"><IoLogoFacebook />Facebook</a>
                        <a className="tw" href="/"><IoLogoTwitter />twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
