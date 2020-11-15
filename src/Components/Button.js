import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import '../Styles/Tabs.css';

function Button(props) {
    return (
        <div>
            <button
                className={`try-button ${props.small ? 'small' : "null"}`}
                style={style}
                onClick={props.onClickError}
            >
                {props.children}
                <FaAngleRight className='angle-btn' style={angleStyle}/>
            </button>
        </div>
    );
}

const style = {
    color: "white",
    fontSize: '2rem',
    background: "var(--red)",
    outline: "none",
    padding: '1.5rem',
    borderRadius: '0.19rem',
    textAlign: 'center',
    border: "none",
    transition: "background 0.17s ease",
    cursor: 'pointer',
    zIndex: '4',
    display: 'flex',
    flexDirection: 'row'
};

const angleStyle = {
    textAlign: 'center',
    verticalAlign: 'center',
    margin: 'auto',
    marginLeft: '0.4rem'
}

export default Button;
