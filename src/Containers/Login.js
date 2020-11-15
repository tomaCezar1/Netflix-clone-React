import React, {Component} from 'react';
import logo from '../content/svg/logo.svg';
import LoginForm from "../Components/LoginForm";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer";
import '../Styles/Tabs.css';

class Login extends Component {
    render() {
        return (
            <div className='main-login-container'>
                <div className="login-header">
                    <Link to='/'>
                        <img src={logo} alt="log" className='logo'/>
                    </Link>
                </div>
                <LoginForm/>
                <div className="login-footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Login;