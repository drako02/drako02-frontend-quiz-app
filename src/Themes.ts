import {ThemeProvider} from "styled-components";
import {useState} from "react";
import light1 from "./assets/images/pattern-background-desktop-light-top-left.svg";
import light2 from "./assets/images/pattern-background-desktop-light_bottom-right.svg";
import dark1 from "./assets/images/pattern-background-desktop-dark_top_left.svg";
import dark2 from "./assets/images/pattern-background-desktop-dark_bottom_right.svg";



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
        background: `url(${light1}), url(${light2})`
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
         background: `url(${dark1}), url(${dark2})`
     }
};



