import React from 'react';
import Button from "./Button";

function TabComponentTwo(props) {
    return (
        <div>
            <div className="tab-content">
                <div className="tab-top-content">
                    <p>
                        Watch TV shows and movies anytime, anywhere.
                    </p>
                    <Button small/>
                </div>
            </div>
        </div>
    );
}

export default TabComponentTwo;