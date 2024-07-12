import React from 'react';
import styled from "styled-components";
import {Routes, Route, Link} from "react-router-dom";
import iconCSS from './assets/images/icon-css.svg';
import iconHTML from './assets/images/icon-html.svg';
import iconJS from './assets/images/icon-js.svg';
import iconAccess from './assets/images/icon-accessibility.svg';
import Mode from './Mode';

import {
    ButtonIcon,
    MainText,
    Menu,
    OptionButton,
    OptionsContainer,
    StartContainer,
    SubText,
    SupText,
    Welcome,
    WelcomeText
} from "./AppStyles";


function Start() {
    return (
        <Menu>
            <Welcome>
                <MainText> Welcome to the </MainText>
                <SupText> Frontend Quiz! </SupText>
                <SubText> Pick a subject to get started </SubText>
            </Welcome>
            <OptionsContainer>
                <OptionButton as={Link} to="./pages/HTMLQuiz"> <ButtonIcon  bgColor="#fff1e9"> <img src={iconHTML}/> </ButtonIcon> HTML </OptionButton>
                <OptionButton as={Link} to="./pages/CSSQuiz"> <ButtonIcon bgColor="#e0fdef"> <img src={iconCSS} /> </ButtonIcon> CSS </OptionButton>
                <OptionButton as={Link} to="./pages/JavascriptQuiz"> <ButtonIcon bgColor="#ebf0ff"> <img src={iconJS} /> </ButtonIcon> Javascript </OptionButton>
                <OptionButton as={Link} to="./pages/AccessibilityQuiz"> <ButtonIcon bgColor="#f6e7ff"> <img src={iconAccess}/> </ButtonIcon> Accessibility </OptionButton>
            </OptionsContainer>
        </Menu>
    );
}




export default Start;