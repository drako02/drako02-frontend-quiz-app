import React from "react";
import light from './assets/images/icon-sun-dark.svg';
import dark from './assets/images/icon-moon-dark.svg'

import styled from "styled-components";



const ModeContainer = styled.div`
    position: absolute;
    display: flex;
    width: 9%;
    height: 4%;
    left: 81%;
    top: 10%;
    border-style: none;
    flex-direction: row;    
`;

const Light = styled.img`
    padding: 0;
    margin-right: auto;
`;

const Dark = styled.img`
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
    width: 0;
    height: 0;
`;

const RoundSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
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
        -webkit-transform: translateX(92%);
        -ms-transform: translateX(92%);
        transform: translateX(92%);
    }
`;


function Mode() {
    return(
        <ModeContainer>
            <Light src={light} ></Light>
            <Switch>
                <SwitchInput type="checkbox" ></SwitchInput>
                <RoundSlider></RoundSlider>
            </Switch>
            <Dark src={dark}></Dark>
        </ModeContainer>
    );
}


export default Mode;