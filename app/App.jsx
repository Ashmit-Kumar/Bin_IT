import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from "../src/jsx/AboutPage/about.jsx";
import Faqs from '../src/jsx/CommunityPages/faqs';
import News from '../src/jsx/NewsPage/news';
import Home from '../src/jsx/HomePage/home';
import NotFound from '../src/jsx/Commen-Components/NotFound.jsx';
import ReportPage from '../src/jsx/ReportPage/report.jsx';
import Ngo from '../src/jsx/RegistrationPages/ngo.jsx';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/submit-report" element={<ReportPage totalPages={4} />} />
            <Route path="/ngo-registration" element={<Ngo />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default App;
