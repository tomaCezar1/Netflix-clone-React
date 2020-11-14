import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../Styles/Tabs.css';
import {FaGlobe, FaSortDown} from 'react-icons/fa';

class Footer extends Component {
    state = {
        langContent: false
    }

    handleToggle = (e) => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        });
    }

    handleBlur = () => {
        console.log('blur');
        this.setState({
            langContent: !this.state.langContent
        })
    }

    render() {
        return (
            <div className='footer-container'>
                <p>Questions? <span>Call 1-800-000</span></p>
                <div className="footer-columns">
                    <ul>
                        <li><Link to=''>FAQ</Link></li>
                        <li><Link to=''>Investor Relations</Link></li>
                        <li><Link to=''>Ways To Watch</Link></li>
                        <li><Link to=''>Information</Link></li>
                    </ul>
                    <ul>
                        <li><Link to=''>Help Center</Link></li>
                        <li><Link to=''>Jobs</Link></li>
                        <li><Link to=''>Terms of Use</Link></li>
                        <li><Link to=''>Contact Us</Link></li>
                    </ul>
                    <ul>
                        <li><Link to=''>Account</Link></li>
                        <li><Link to=''>Redeem Gift Cards</Link></li>
                        <li><Link to=''>Privacy</Link></li>
                        <li><Link to=''>Speed Test</Link></li>
                    </ul>
                    <ul>
                        <li><Link to=''>Media Center</Link></li>
                        <li><Link to=''>Buy Gift Cards</Link></li>
                        <li><Link to=''>Cookie preferences</Link></li>
                        <li><Link to=''>Legal Notices</Link></li>
                    </ul>
                    <div className="lang-btn"
                         onClick={this.handleToggle}>
                        <FaGlobe/>
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <FaSortDown onBlur={this.handleBlur}/>
                    </div>
                </div>
                {this.state.langContent && (
                    <div className="toggle-language">
                        <ul>
                            <li>English</li>
                        </ul>
                        <ul>
                            <li>Francais</li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Footer;