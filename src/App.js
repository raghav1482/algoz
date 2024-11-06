
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import ChapterNavigation from './components/ChapterNavigation';
import Content from './components/Content';
import "./App.css";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="main-content">
                <Header />
                <div style={{border:'2px solid #bef0f9',borderRadius:'10px',width:'100%',backgroundColor:'white',flex:1,margin:'auto'}}>
                <TabNavigation />
                <div className="content-section">
                    <ChapterNavigation />
                    <Content />
                </div>
                </div>
            </div>
        </div>
    );
};

export default App;
