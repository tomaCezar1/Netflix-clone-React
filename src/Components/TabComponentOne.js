import React from 'react';
import Img from '../content/images/tab-1-pic.png';
import '../Tabs/Tabs.css';
import Button from "./Button";

function TabComponentOne(props) {
    return (
        <div className='tab-content-container' style={props.visible ? null: none}>
            <div className="tab-content">
                <div>
                <p style={{ textAlign: 'left'}}>
                    If Netflix isn't for you - No commitment.
                    Cancel anytime.
                </p>
                <Button small>
                    Try it now.
                </Button>
                </div>
                <img src={Img} alt=""/>
            </div>
        </div>
    );
}

export default TabComponentOne;

const none = {
    display: 'none'
}