import React from 'react';
import Body from "../../assets/Body/Body.jsx";
import Dashboard from "../../assets/Dashboard/Dashboard.jsx";
import Aside from "../../assets/Aside/Aside.jsx";

const Home = () => {
    return (
        <div className='wrapper' style={{backgroundColor: '#263238', color: '#fff'}}>
                <Dashboard />
                <Aside />
        </div>
    );
};

export default Home;