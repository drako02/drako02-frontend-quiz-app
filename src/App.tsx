import React from 'react';
import styled from "styled-components";
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
      <StartContainer>
          <Mode/>
          <Menu>
              <Welcome>
                  <WelcomeText>
                      <MainText> Welcome to the </MainText>
                      <SupText> Frontend Quiz! </SupText>
                      <SubText> Pick a subject to get started </SubText>
                  </WelcomeText>
              </Welcome>
              <OptionsContainer>
                  <OptionButton> <ButtonIcon src={iconHTML} bgColor="#fff1e9"/> HTML </OptionButton>
                  <OptionButton> <ButtonIcon src={iconCSS} bgColor="#e0fdef"/> CSS </OptionButton>
                  <OptionButton> <ButtonIcon src={iconJS} bgColor="#ebf0ff"/> Javascript </OptionButton>
                  <OptionButton> <ButtonIcon src={iconAccess} bgColor="#f6e7ff"/> Accessibility </OptionButton>
              </OptionsContainer>
          </Menu>
      </StartContainer>
    );
}




export default Start;
