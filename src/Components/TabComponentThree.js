import React from 'react';
import Button from "./Button";
import {FaCheck, FaTimes} from 'react-icons/fa';
import '../Styles/Tabs.css';

function TabComponentThree(props) {
    return (
        <div style={props.visible ? null : none}>
            <div className="tab-top-content" >
                <p className='text-align-center'
                   style={{marginRight: '0.3rem'}}
                >Choose One Netflix plan.</p>
                <Button small/>
            </div>
            <div className="tab-bottom-content">
                <table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly Price</td>
                            <td>$9.99</td>
                            <td>$13.99</td>
                            <td>$14.99</td>
                        </tr>
                        <tr>
                            <td>HD Available</td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                            <td>Ultra HD Available</td>
                            <td><FaTimes/></td>
                            <td><FaTimes/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                            <td>Screens at the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Watch on any device</td>
                            <td><FaCheck/></td>
                            <td><FaCheck/></td>
                            <td><FaCheck/></td>
                        </tr>
                        <tr>
                            <td>Unlimited Movies</td>
                            <td><FaCheck/></td>
                            <td><FaCheck/></td>
                            <td><FaCheck/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TabComponentThree;

const none = {
    display: 'none'
}