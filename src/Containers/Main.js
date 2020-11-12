import React, {Component} from 'react';
import Header from "../Components/Header";
import TabComponents from "../Components/TabComponents";

class Main extends Component {
    render() {
        return (
            <>
                <Header/>
                <div style={containerStyle} className='container'>
                    <TabComponents/>
                </div>
            </>
        );
    }
}

export default Main;

const containerStyle = {
    width: '80%',
    margin: "0 auto"
}