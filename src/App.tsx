import React, {useState} from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Layout from "./Layout";
import HTMLQuiz from "./pages/HTMLQuiz";
import CSSQuiz from "./pages/CSSQuiz";
import JavaScriptQuiz from "./pages/JavascriptQuiz";
import AccessibilityQuiz from "./pages/AccessibilityQuiz";
import Start from './StartPage';
import GlobalStyles from "./GlobalStyles";
import {DarkMode, LightMode} from "./Themes";
import { ThemeProvider } from 'styled-components';


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    return (
        <ThemeProvider theme={isDarkMode ? DarkMode : LightMode}>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}>
                        <Route index element={<Start/>}/>
                        <Route path="pages/HTMLQuiz" element={<HTMLQuiz/>}/>
                        <Route path="pages/CSSQuiz/" element={<CSSQuiz/>}/>
                        <Route path="pages/JavascriptQuiz" element={<JavaScriptQuiz/>}/>
                        <Route path="pages/AccessibilityQuiz" element={<AccessibilityQuiz/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
