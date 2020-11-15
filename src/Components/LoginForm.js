import React, {Component} from 'react';
import Button from "./Button";
import '../Styles/Tabs.css';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className='input-container'>
                            <div className="input-container-elements">
                                <input className='input-empty' type="email" required/>
                                <label>Email or Phone Number</label>
                            </div>
                            <div className="input-container-elements">
                                <input className='input-empty' type="password" required/>
                                <label>Password</label>
                            </div>
                            <div className="input-container-elements button-flex">
                                <Button>Sign Up now</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;