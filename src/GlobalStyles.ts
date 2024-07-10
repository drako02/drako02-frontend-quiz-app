import {createGlobalStyle} from "styled-components";
import light1 from "./assets/images/pattern-background-desktop-light-top-left.svg";
import light2 from "./assets/images/pattern-background-desktop-light_bottom-right.svg";
import dark1 from "./assets/images/pattern-background-desktop-dark_top_left.svg.svg";
import dark2 from "./assets/images/pattern-background-desktop-dark_bottom_right.svg";

const GlobalStyles = createGlobalStyle`
    body{
        font-family: 'Rubik', serif;
        background-color: ${props => props.theme.colors.background};
        background-size: cover;
        background-image: ${props => props.theme.img.background};
        background-repeat: no-repeat;
        background-position: left top, right bottom;
        //transition: all 0.3s ease;
    }
`;

export default GlobalStyles;