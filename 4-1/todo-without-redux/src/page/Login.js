import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { login } from './../services/API.js';
import './../Login.css';
import { alertText } from '../dom';
class Login extends Component {
    state = {
        auth: false
    }
    login = () => {
        alertText("Sending....");
        login({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        }).then(object => {
            console.log(object);
            if(object.success){
               localStorage.name=object.data.user;
                this.setState(
                    {
                        auth: true
                    }
                );
            }else{
                alertText(object.message,true);
            }
        }
            );
    }
    render() {
        if (this.state.auth) {
            return <Redirect to="/home" />;
        } else
            return (
                <div className="login-page">
                    <div id="login-form">
                        <img src="img/logo.png" />
                        <input id="email" placeholder="@username" />
                        <input id="password" placeholder="@password" type="password" />
                        <button onClick={this.login}>Let's go!</button>
                        <p>Do you have an account?
                <Link to="/signup"> Sign Up</Link>
                        </p>
                    </div>
                </div>
            )
    }
}

export default Login;