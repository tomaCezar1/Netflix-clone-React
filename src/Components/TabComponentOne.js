import React from 'react';
import Img from '../content/images/tab-1-pic.png';
import '../Tabs/Tabs.css';
import Button from "./Button";

function TabComponentOne(props) {
    return (
        <div className='tab-content-container'>
            <div className="tab-content">
                <div>
                <span>
                    No commitment. Cancel online anytime.
                </span>
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