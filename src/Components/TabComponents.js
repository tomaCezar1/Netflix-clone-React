import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Door from '../Tabs/DoorSVG';
import Devices from '../Tabs/DevicesSVG';
import Prices from "../Tabs/PricesSVG";
import '../Tabs/Tabs.css';
// Tab Components
import TabComponentOne from "./TabComponentOne";
import TabComponentTwo from "./TabComponentTwo";

class TabComponents extends Component {
    state = {
        isActiveIndex: 0
    }

    changeIndex = (tabIndex) => {
        this.setState({isActiveIndex: tabIndex})
    }

    render() {
        return (
            <div>
                <Tabs className='tabs'>
                    <TabList className='tab-nav-container'>
                        <Tab className={`${this.state.isActiveIndex === 0 ? 'active' : null} tab`}
                             key={0}
                             onClick={() => this.changeIndex(0)}
                             selectedIndex={this.state.isActiveIndex}
                        >
                            <Door/>
                            <p>Cancel Anytime</p>
                        </Tab>
                        <Tab className={`${this.state.isActiveIndex === 1 ? 'active' : null} tab`}
                             key={1}
                             onClick={() => this.changeIndex(1)}
                        >
                            <Devices/>
                            <p>Watch Anywhere</p>
                        </Tab>
                        <Tab className={`${this.state.isActiveIndex === 2 ? 'active' : null} tab`}
                             key={2}
                             onClick={() => this.changeIndex(2)}>
                            <Prices/>
                            <p>Affordable Prices</p>
                        </Tab>
                    </TabList>
                    <TabPanel/>
                    <TabComponentOne/>
                    <TabPanel/>
                    <TabPanel/>
                    <TabComponentTwo/>
                    <TabPanel/>
                </Tabs>
            </div>
        );
    }
}

export default TabComponents;