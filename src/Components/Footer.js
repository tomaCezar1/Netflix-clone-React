import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <p>Questions? Call <Link to=''>Call 1-800-000</Link></p>
                <div className="footer-columns">
                    <ul>
                        <li><Link to=''>FAQ</Link></li>
                        <li><Link to=''>Investor Relations</Link></li>
                        <li><Link to=''>Ways To Watch</Link></li>
                        <li><Link to=''>Corporate Information</Link></li>
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
                </div>
            </div>
        );
    }
}

export default Footer;