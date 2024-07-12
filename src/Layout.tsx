import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import Mode from "./Mode";
import styled from "styled-components";
import iconCSS from './assets/images/icon-css.svg';
import iconHTML from './assets/images/icon-html.svg';
import iconJS from './assets/images/icon-js.svg';
import iconAccess from './assets/images/icon-accessibility.svg';



const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const breakpoints = {tablet: '1200px', mobile: '480px'};

export const SubjectContainer = styled.div`
    position: absolute;
    display: flex;
    width: 80%;
    height: 7%;
    left: 9.7%;
    top: 8.6%;
    border-style: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media(max-width: ${breakpoints.tablet}){
        top: 4%;
        left: 8.4%;
        height: 5.1%;
        width: 83%;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
        height: 5.1%;
        width: 83%;
    }
    @media(max-width: ${breakpoints.mobile}){
        top: 0;
        left: 0;
        width: 100%;
        height: 9%;
    }
`;
export const Subject = styled.div`
    display: flex;
    width: 29%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    gap: 9.5%;

    @media(max-width: ${breakpoints.tablet}){
        width: 40%;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 45%;
        height: 56%;
        margin-left: 6.4%;
    }
`;
export const SubjectText = styled.span`
    font-family: "Rubik Medium", Arial, sans-serif;
    font-size: 28px;
    color: ${props => props.theme.colors.font};
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
        font-size: 18px;
    }
    @media(max-width: ${breakpoints.mobile}){
        font-size: 18px;
    }

`;

export const SubjectIcon = styled.div<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  height: 100%;
  width: 16%;
  border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    img{
        height: 71%;
        width: 71%;
    }

    @media(max-width: ${breakpoints.tablet}){
        width: 21%;
    }
    @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
    }
    @media(max-width: ${breakpoints.mobile}){
        width: 24%;
        height: 100%;
    }
`;

export interface LayoutProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}



const Layout = ({ toggleTheme, isDarkMode }: LayoutProps) => {
    // const[tile, setTitle] = useState("");
    const location = useLocation();

    const renderQuizSubject = () => {
        // const icon = () => {
        //     return(
        //         <SubjectIcon src={content.imgSrc} bgColor={content.color} />
        //     );
        // };
        switch (location.pathname){
            case "/pages/HTMLQuiz":
                return {title: "HTML", imgSrc:iconHTML, color:"#fff1e9",
                    icon: function subIcon()  {return(
                        <SubjectIcon  bgColor={content.color}> <img src={content.imgSrc}/> </SubjectIcon>
            )}
                };
            case "/pages/CSSQuiz":
                return {title: "CSS", imgSrc:iconCSS, color:"#e0fdef",
                    icon: function subIcon()  {return(
                        <SubjectIcon  bgColor={content.color}> <img src={content.imgSrc}/> </SubjectIcon>
                    )}
                };
            case "/pages/JavascriptQuiz":
                return {title: "JavaScript", imgSrc:iconJS, color:"#ebf0ff",
                    icon: function subIcon()  {return(
                        <SubjectIcon  bgColor={content.color}> <img src={content.imgSrc}/> </SubjectIcon>
                    )}
                };
            case "/pages/AccessibilityQuiz":
                return {title: "Accessibility", imgSrc:iconAccess, color:"#f6e7ff",
                    icon: function subIcon()  {return(
                        <SubjectIcon  bgColor={content.color}> <img src={content.imgSrc}/> </SubjectIcon>
                    )}
                };
            default:
                return {title: "",  color: "", icon: function empty()  {return(
                        <></>
                    );
                    }};
        }
    };

    const content = renderQuizSubject();
    return (
        <Container>
            <SubjectContainer>
                <Subject>
                    <>
                        {content.icon()}
                        <p> <SubjectText> {content.title} </SubjectText> </p>
                    </>
                </Subject>
               <Mode toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </SubjectContainer>
            <Outlet/>
        </Container>
    );
}

export default Layout;