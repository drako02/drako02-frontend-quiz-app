import { createGlobalStyle } from "styled-components";
import light1 from "./assets/images/pattern-background-desktop-light-top-left.svg";
import light2 from "./assets/images/pattern-background-desktop-light_bottom-right.svg";
import dark1 from "./assets/images/pattern-background-desktop-dark_top_left.svg.svg";
import dark2 from "./assets/images/pattern-background-desktop-dark_bottom_right.svg";

const breakpoints = { tablet: "1200px", mobile: "480px" };

const GlobalStyles = createGlobalStyle`
    body{
        height: 105vh;
        font-family: 'Rubik', serif;
        background-color: ${(props) => props.theme.colors.background};
        background-size: cover;
        background-image: ${(props) => props.theme.img.background};
        background-repeat: no-repeat;
        background-position: left top, right bottom;
        transition: all 0.3s ease;

        @media(max-width: ${breakpoints.tablet}){
            background-image: ${(props) => props.theme.img.backgroundTablet};
            background-position: 0% 0%;
            height: 100vh;
        }
        @media(max-width: ${breakpoints.tablet}) and (orientation: landscape){
            height: 120vh;
        }
        @media(max-width: ${breakpoints.mobile}) and (orientation: landscape){
            background-image: ${(props) => props.theme.img.backgroundMobile};
            height: 180vh;
            background-position: 0% 0%;
        }
        @media(max-width: ${breakpoints.mobile}){
            background-image: ${(props) => props.theme.img.backgroundMobile};
            background-position: 0% 0%;
            height: 100vh;
        }
        @media(max-height: 450px){
            height: 180vh;
        }

    }
`;

export default GlobalStyles;
