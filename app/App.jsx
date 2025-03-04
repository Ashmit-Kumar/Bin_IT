import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from "../src/jsx/AboutPage/about.jsx";
import Login from '../src/jsx/RegistrationPages/login.jsx';
import SignUp from '../src/jsx/RegistrationPages/signup';
import Faqs from '../src/jsx/CommunityPages/faqs';
import News from '../src/jsx/NewsPage/news';
import Events from '../src/jsx/CommunityPages/events.jsx';
import Home from '../src/jsx/HomePage/home';
import NotFound from '../src/jsx/Commen-Components/NotFound.jsx';
import EventParticipate from '../src/jsx/CommunityPages/event-participation.jsx';
import EventCreate from '../src/jsx/CommunityPages/event-create.jsx';
import ReportPage from '../src/jsx/ReportPage/report.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/participate-event" element={<EventParticipate />} />
                <Route path="/create-event" element={<EventCreate />} />
                <Route path="/submit-report" element={<ReportPage totalPages={4} />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;