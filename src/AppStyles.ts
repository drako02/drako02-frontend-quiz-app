import React from "react";
import styled from "styled-components";

const breakpoints = {tablet: '1200px', mobile: '480px'};


export const StartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Menu = styled.div`
  position: absolute;
  top: 23%;
  left: 9.7% ;
  //transform:translate(-50% , -50%);
  width: 81%;
  height: 54%;
  display: flex;
  justify-content: space-between;

    @media(max-width: ${breakpoints.tablet}){
        width: 83%;
        height: 70%;
        top: 14%;
        left: 8%;
        flex-direction: column;
        justify-content: space-between;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){

    }
    @media(max-width: ${breakpoints.mobile}){
        width: 100%;
        height: 91%;
        left: 0;
        top: 9%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const Welcome = styled.div`
  width: 42%;
  height: fit-content;
  margin: 0;
  padding: 0;
    
    @media(max-width: ${breakpoints.tablet}){
        width: 73%;
        //height: 29%;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 87%;
        height: 25%;
        margin-top: 4.3%;
    }
`;

export const WelcomeText = styled.p`
  margin: 0;
  padding: 0;
`;

export const MainText = styled.span`
  margin: 0;
  padding: 0;
  display: block;
  font-family: "Rubik Regular", serif;
  font-size: 64px;
  color: ${props => props.theme.colors.font};
  -webkit-text-stroke: 1px black;
  white-space: nowrap;
  line-height: 100%;

    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
        -webkit-text-stroke: 0px transparent;
        font-family: "Rubik Light", serif;
        font-size: 40px;
    }

    @media(max-width: ${breakpoints.mobile}){
        -webkit-text-stroke: 0px transparent;
        font-family: "Rubik Light", serif;
        font-size: 40px;
    }
    
`;

export const SupText = styled.span`
  display: block;
    font-family: "Rubik Medium", serif;
    white-space: nowrap;
  font-size: 64px;
  color: ${props => props.theme.colors.font};;
  margin: 0;
  padding: 0;
  line-height: 100%;

    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
        font-family: "Rubik Medium", serif;
        font-size: 40px;
    }

    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Medium", serif;
        font-size: 40px;
    }
`;

export const SubText = styled.span`
  font-family: 'Rubik Regular', serif;
  font-style: italic;
  font-size: 16px;
  color: ${props => props.theme.colors.subFont};
  display: block;
  margin-top: 8%;
  line-height: 150%;

    @media(max-width: ${breakpoints.tablet}){
        margin-top: 0;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
        font-family: "Rubik Regular", serif;
        font-size: 14px;
        font-style: italic;
        margin-top: 8%;
    }

    @media(max-width: ${breakpoints.mobile}){
        font-family: "Rubik Regular", serif;
        font-size: 14px;
        font-style: italic;
        margin-top: 8%;
    }

`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  margin: 0;
  gap: 4%;

    @media(max-width: ${breakpoints.tablet}){
        width: 100%;
        height: 61.5%;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){

    }
    @media(max-width: ${breakpoints.mobile}){
        width: 87%;
        height: 39%;
        margin-top: 4.3%;
    }

    
`;

export const OptionButton = styled.button`
  background-color: ${props => props.theme.colors.button};
  font-family: "Rubik Medium", serif;
  font-size: 28px;
   text-decoration: none;
  color: ${props => props.theme.colors.font};;
  text-align: left;
  flex: 1;
  width: 100%;
  height: 21%;
  border-width: 0;
  border-radius: 24px;
  box-shadow: ${props => props.theme.colors.buttonShadow};
  display: flex;
  align-items: center;

    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
        height: 22%;
        font-family: "Rubik Medium", serif;
        font-size: 18px;
        border-radius: 12px;
    }
    @media(max-width: ${breakpoints.mobile}){
        height: 22%;
        font-family: "Rubik Medium", serif;
        font-size: 18px;
        border-radius: 12px;
    }

`;

export const ButtonIcon = styled.img<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  height: 58%;
  width: 10%;
  border-radius: 8px;
  margin-left: 4%;
  margin-right: 8%;
`;

