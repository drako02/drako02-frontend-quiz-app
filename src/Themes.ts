import {ThemeProvider} from "styled-components";
import {useState} from "react";
import light1 from "./assets/images/pattern-background-desktop-light-top-left.svg";
import light2 from "./assets/images/pattern-background-desktop-light_bottom-right.svg";
import dark1 from "./assets/images/pattern-background-desktop-dark_top_left.svg";
import dark2 from "./assets/images/pattern-background-desktop-dark_bottom_right.svg";
import lightMobile from "./assets/images/pattern-background-mobile-light.svg";
import darkMobile from "./assets/images/pattern-background-mobile-dark.svg";
import lightTablet from "./assets/images/pattern-background-tablet-light.svg";
import darkTablet from "./assets/images/pattern-background-tablet-dark.svg";

import light_light from './assets/images/icon-sun-dark.svg';
import dark_light from './assets/images/icon-moon-dark.svg'
import light_dark from './assets/images/icon-sun-light.svg';
import dark_dark from './assets/images/icon-moon-light.svg';




export const LightMode = {
    colors: {
        background: '#f4f6fa',
        font: '#313E51',
        subFont: '#626c7f',
        button: '#ffffff',
        tracker:'#ffffff',
        buttonShadow: 'box-shadow: 0 16px 40px rgba(143, 160, 193, 0.14)'
    },

    img: {
        background: `url(${light1}), url(${light2})`,
        backgroundMobile:`url(${lightMobile})`,
        backgroundTablet:`url(${lightTablet})`,
        lightIcon: light_light,
        darkIcon: dark_light
    }
};

 export const DarkMode = {
    colors: {
        background: '#313e51',
        font: '#ffffff',
        subFont: '#abc1e1',
        button: '#3b4d66',
        tracker:'#3b4d66',
        buttonShadow: 'box-shadow: 0 16px 40px rgba(49, 62, 81, 0.14)'
    },

     img: {
         background: `url(${dark1}), url(${dark2})`,
         backgroundMobile:`url(${darkMobile})`,
         backgroundTablet:`url(${darkTablet})`,
         lightIcon: light_dark,
         darkIcon: dark_dark
     }
};



