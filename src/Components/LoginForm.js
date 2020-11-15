import React, {Component} from 'react';
import Button from "./Button";
import '../Styles/Tabs.css';
import {Link} from 'react-router-dom';

const regexp = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const initState = {
    checked: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
};

class LoginForm extends Component {

    state = initState;

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    //Validation functions
    validate = () => {
        let inputError = false
        const errors = {
            emailError: "",
            passwordError: ""
        }

        if (!this.state.email) {
            inputError = true;
            errors.emailError = 'Please enter a valid email'
        } else if (!this.state.email.match(regexp)) {
            inputError = true;
            errors.emailError = (
                <span style={{color: 'red'}}>Your email address must be valid</span>
            )
        }

        if (this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = 'Your password must contain at least 4 characters.'
        }

        this.setState({
            ...errors
        });

        return inputError;
    };

    onSubmit = e => {
        e.preventDefault();

        const err = this.validate();
        if (!err) {
            this.setState({initState});
        }
    };

    handlerCheckBox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className='input-container'>
                            <div className="input-container-elements">
                                <input
                                    onChange={this.handleEmailChange}
                                    className='input-empty'
                                    type="email"
                                    required
                                />
                                <label>Email or Phone Number</label>
                                <span>{this.state.emailError}</span>
                            </div>
                            <div className="input-container-elements">
                                <input
                                    onChange={this.handlePasswordChange}
                                    className='input-empty'
                                    type="password"
                                    required
                                />
                                <label>Password</label>
                                <span>{this.state.passwordError}</span>
                            </div>
                            <div className="input-container-elements button-flex">
                                <Button
                                    small
                                    onClickError={e => this.onSubmit(e)}>Sign Up
                                </Button>
                            </div>
                        </div>
                        <label className='checkbox-container'>
                            Remember me
                            <input type="checkbox"
                                   defaultChecked={this.state.checked}
                                   onChange={this.handlerCheckBox}
                            />
                            <span className="checkmark"> </span>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;