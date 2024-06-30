import React from 'react';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Layout from "./Layout";
import HTMLQuiz from "./pages/HTMLQuiz";
import Start from './StartPage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Start/>}/>
                    <Route path="pages/HTMLQuiz" element={<HTMLQuiz/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
