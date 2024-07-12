import { createGlobalStyle } from "styled-components";


const breakpoints = { tablet: "1200px", mobile: "480px" };

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Rubik Regular';
        font-weight: 400;
        src: url("assets/font1/rubik_regular_webfont.woff") format('woff');
    }

    @font-face {
        font-family: 'Rubik Light';
        font-weight: 400;
        src: url("assets/font1/rubik_light_webfont.woff2") format('woff2'), url("assets/font1/rubik_light_webfont.woff") format('woff')
    }

    @font-face {
        font-family: 'Rubik Medium';
        font-weight: 400;
        src: url("assets/font1/rubik_medium_webfont.woff2") format('woff2'), url("assets/font1/rubik_medium_webfont.woff") format('woff')
    }

    body {
        height: 105vh;
        font-family: 'Rubik Regular', Arial , sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        background-size: cover;
        background-image: ${(props) => props.theme.img.background};
        background-repeat: no-repeat;
        background-position: left top, right bottom;
        transition: all 0.3s ease;

        @media (max-width: ${breakpoints.tablet}) {
            background-image: ${(props) => props.theme.img.backgroundTablet};
            background-position: 0% 0%;
            height: 100vh;
        }
        @media (max-width: ${breakpoints.tablet}) and (orientation: landscape) {
            height: 120vh;
        }
        @media (max-width: ${breakpoints.mobile}) and (orientation: landscape) {
            background-image: ${(props) => props.theme.img.backgroundMobile};
            height: 180vh;
            background-position: 0% 0%;
        }
        @media (max-width: ${breakpoints.mobile}) {
            background-image: ${(props) => props.theme.img.backgroundMobile};
            background-position: 0% 0%;
            height: 100vh;
        }
        @media (max-height: 450px) {
            height: 190vh;
        }

    }
`;

export default GlobalStyles;
