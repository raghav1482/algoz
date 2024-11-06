import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components
import Navbar from './components/Navbar';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import ChapterNavigation from './components/ChapterNavigation';
import Content from './components/Content';
import PageNotFound from './components/PageNotFound'; // Create a 404 page or any fallback page
import "./App.css";
import Temp from './components/Temp';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Header />
                    <div style={{border:'2px solid #bef0f9', borderRadius:'10px', width:'100%', backgroundColor:'white', flex:1, margin:'auto'}}>
                        <TabNavigation />
                        <div className="content-section">
                            <Routes>
                                <Route path="/" element={<Content />} />
                                <Route path="/dashboard" element={< Temp route={'dashboard'}/>} />
                                <Route path="/learn" element={< Temp route={'learn'}/>} />
                                <Route path="/forums" element={< Temp route={'forums'}/>} />
                                <Route path="/contest" element={< Temp route={'contest'}/>} />
                                <Route path="/lead" element={< Temp route={'leaderboard'}/>} />
                                <Route path="/upskill" element={<Content />} />
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
