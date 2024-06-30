import React from "react";
import styled from "styled-components";

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
`;

export const Welcome = styled.div`
  width: 42%;
  height: fit-content;
  margin: 0;
  padding: 0;
`;

export const WelcomeText = styled.p`
  margin: 0;
  padding: 0;
`;

export const MainText = styled.span`
  margin: 0;
  padding: 0;
  font-family: "Rubik Regular", serif;
  font-size: 64px;
  color: #313E51;
  -webkit-text-stroke: 1px black;
  white-space: nowrap;
  line-height: 64px;
`;

export const SupText = styled.span`
  font-family: "Rubik Medium", serif;
  font-size: 64px;
  color: #313E51;
  margin: 0;
  padding: 0;
  line-height: 64px;
`;

export const SubText = styled.span`
  font-family: 'Rubik Regular', serif;
  font-style: italic;
  font-size: 16px;
  color: #626c7f;
  display: inline-block;
  margin-top: 8%;
  line-height: 150%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  margin: 0;
  gap: 4%;
`;

export const OptionButton = styled.button`
  background-color: #ffffff;
  font-family: "Rubik Medium", serif;
  font-size: 28px;
  color: #4d5869;
  flex: 1;
  width: 100%;
  height: 21%;
  border-width: 0;
  border-radius: 24px;
  box-shadow: 0 16px 40px rgb(143, 160, 193, 0.15);
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.img<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  height: 58%;
  width: 10%;
  border-radius: 8px;
  margin-left: 4%;
  margin-right: 8%;
`;

