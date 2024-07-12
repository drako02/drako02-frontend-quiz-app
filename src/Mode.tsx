import React from "react";
import light from './assets/images/icon-sun-dark.svg';
import dark from './assets/images/icon-moon-dark.svg'

import styled from "styled-components";
import {LayoutProps} from "./Layout";

const breakpoints = {tablet: '1200px', mobile: '480px'};

const ModeContainer = styled.div`
    //position: absolute;
    display: flex;
    width: 12.5%;
    height: 63%;
    //left: 81%;
    //top: 10%;
    border-style: none;
    flex-direction: row;

    @media(max-width: ${breakpoints.tablet}){
        width: 16%;
        height: 50%;
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 21%;
        height: 28%;
        margin-right: 6.4%;
    }

    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
    }
`;

const Light = styled.img.attrs(props =>({src: props.theme.img.lightIcon}))`
    padding: 0;
    margin-right: auto;
    
`;

const Dark = styled.img.attrs(props =>({src: props.theme.img.darkIcon}))`
    padding: 0;
    margin-left: auto;
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 38%;
    height:100%;
    margin: 0 auto;
`;

const SwitchInput = styled.input`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;  // Ensure it can receive clicks and focus
    cursor: pointer;
    
    

`;

const RoundSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #a729f5;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    
    &:before{
        position: absolute;
        content: "";
        height: 71.4%;
        width: 41.6%;
        left: 8%;
        bottom: 15%;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    
    ${SwitchInput}:checked + &{
        background-color: #a729f5;
    }

    ${SwitchInput}:checked + &:before{
        -webkit-transform: translateX(93%);
        -ms-transform: translateX(93%);
        transform: translateX(93%);
    }
    
    ${SwitchInput}:focus + &{
            box-shadow: 0 0 5px 2px #a729f5;
            outline: none;
    }
`;


function Mode({ toggleTheme, isDarkMode }:LayoutProps) {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            toggleTheme();
        }
    }
    return(
        <ModeContainer>
            <Light ></Light>
            <Switch>
                <SwitchInput type="checkbox" checked = {isDarkMode} onChange = {toggleTheme} tabIndex={0} onKeyDown = {handleKeyDown}></SwitchInput>
                <RoundSlider></RoundSlider>
            </Switch>
            <Dark></Dark>
        </ModeContainer>
    );
}


export default Mode;