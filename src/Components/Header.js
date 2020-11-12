import React, {Component} from 'react';
import logo from '../content/svg/logo.svg';
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

class Header extends Component {
    render() {
        return (
            <div>

                <HeaderComponent className="header-container">
                    <div className='top-header-container'>
                        <Logo src={logo} alt="netflix"/>
                        <Link className="sign-in-btn" to='/'>Sign In</Link>
                    </div>
                    <div className='header-content'>
                        <Title>Unlimited TV shows.</Title>
                        <Subtitle>Watch Anywhere. Cancel Anytime.</Subtitle>
                        <Button><Link to=''/></Button>
                    </div>
                </HeaderComponent>
            </div>
        );
    }
}

export default Header;

const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HeaderComponent = styled.div`
    .sign-in-btn {
        position: absolute;
        right: 0;
        margin: 1rem 0.7rem;
        padding: 0.4rem 1rem;
        font-weight: 400;
        border-radius: 0.2rem;
        font-size: 1rem;
        background: var(--red);
        cursor: pointer;
        color: var(--white);
        // translate: transform(-50%, 50%);
        transition: background 0.13s ease-in;
        &:hover {
        background: var(--red-hover);
        
        //optional styling
        // background: var(--white);
        // color: var(--red);
        }
    }
    
    .top-header-container {
        position: relative;
        height: 10rem;
    }
    
    .header-content{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        z-index: 4;
    }
    
`;

const Title = styled.h1`
    margin: 0 0 1.rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 5.2rem;
    text-align: center;
`;

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.8rem;
    text-align: center;
    margin: 0 0 1.8rem;
`;