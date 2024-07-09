import React from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Layout from "./Layout";
import HTMLQuiz from "./pages/HTMLQuiz";
import CSSQuiz from "./pages/CSSQuiz";
import JavaScriptQuiz from "./pages/JavascriptQuiz";
import AccessibilityQuiz from "./pages/AccessibilityQuiz";
import Start from './StartPage';
import GlobalStyles from "./GlobalStyles";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Start/>}/>
                    <Route path="pages/HTMLQuiz" element={<HTMLQuiz/>}/>
                    <Route path="pages/CSSQuiz/" element={<CSSQuiz/>}/>
                    <Route path="pages/JavascriptQuiz" element={<JavaScriptQuiz/>}/>
                    <Route path="pages/AccessibilityQuiz" element={<AccessibilityQuiz/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
