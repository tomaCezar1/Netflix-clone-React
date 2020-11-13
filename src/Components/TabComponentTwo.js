import React from 'react';
import Button from "./Button";
import styled from 'styled-components';
import img1 from '../content/images/tab-tv.png';
import img2 from '../content/images/tab-tablet.png';
import img3 from '../content/images/tab-macbook.png';
import '../Styles/Tabs.css';

function TabComponentTwo(props) {
    return (
        <TabContainer>
            <div className="tab-content" style={props.visible ? null : none}>
                <div className="tab-top-content">
                    <p>
                        Watch TV shows and movies anytime, anywhere.
                    </p>
                    <Button small/>
                </div>
                {/*Bottom Content*/}
                <div className="tab-bottom-pics">
                    <div>
                        <img src={img1} style={{width: '19rem'}} alt=""/>
                        <h3>Watch on your own TV</h3>
                        <p>Smart TVs, Xbox, Playstation, Apple TV...</p>
                    </div>
                    <div>
                        <img src={img2} style={{
                            width: '18.75rem',
                            paddingTop: '0.625rem'
                        }} alt=""/>
                        <h3>Watch on your own TV</h3>
                        <p>Smart TVs, Xbox, Playstation, Apple TV...</p>
                    </div>
                    <div>
                        <img src={img3} style={{
                            width: '19rem',
                            paddingTop: '0.625rem',
                            paddingBottom: '0.625rem'
                        }} alt=""/>
                        <h3>Watch on your own TV</h3>
                        <p>Smart TVs, Xbox, Playstation, Apple TV...</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

export default TabComponentTwo;

const none = {
    display: 'none'
}

const TabContainer = styled.div`
    background: var(--deep-dark);
    
    .tab-content {
        display: grid;
        grid-template-columns: (12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }
    
    p {
      grid-column: 1 / 8;  
    }
`;