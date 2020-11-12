import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Door from '../Tabs/DoorSVG';
import Devices from '../Tabs/DevicesSVG';
import Prices from "../Tabs/PricesSVG";
import '../Tabs/Tabs.css';
// Tab Components
import TabComponentOne from "./TabComponentOne";
import TabComponentTwo from "./TabComponentTwo";
import TabComponentThree from "./TabComponentThree";

class TabComponents extends Component {
    state = {
        tabIndex: 0,
        isVisible: true
    }

    changeIndex = (tabIndex) => {
        this.setState({tabIndex: tabIndex})
    }

    render() {
        return (
            <div>
                <Tabs
                    className='tabs'
                    // selectedIndex={this.state.tabIndex}
                    // onSelect={tabIndex => this.setState({tabIndex})}
                >
                    <TabList className='tab-nav-container'>
                        <Tab className={`${this.state.tabIndex === 0 ? 'active' : null} tab`}
                             key={0}
                             onClick={() => this.changeIndex(0)}
                             // selectedIndex={this.state.tabIndex}
                        >
                            <Door/>
                            <p>Cancel Anytime</p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'active' : null} tab`}
                             key={1}
                             onClick={() => this.changeIndex(1)}
                        >
                            <Devices/>
                            <p>Watch Anywhere</p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'active' : null} tab`}
                             key={2}
                             onClick={() => this.changeIndex(2)}
                        >
                            <Prices/>
                            <p>Affordable Prices</p>
                        </Tab>
                    </TabList>
                    {/*Tab Content*/}
                    <TabPanel/>
                        <TabComponentOne visible={this.state.tabIndex === 0 ? true: null}/>
                    <TabPanel/>
                    <TabPanel/>
                        <TabComponentTwo visible={this.state.tabIndex === 1 ? true: null}/>
                    <TabPanel/>
                    <TabPanel/>
                    <TabComponentThree visible={this.state.tabIndex === 2 ? true: null}/>
                    <TabPanel/>
                </Tabs>
            </div>
        );
    }
}

export default TabComponents;