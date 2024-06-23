// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import HelloPage from './components/Login';
import Signup from './components/Signup';
import ViewMatches from './components/ViewMatches';
import Matches from './components/Matches';
import Sidebar from './components/Sidebar';
import EditProfile from './components/EditProfile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/roomie-match" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/viewmatches" element={<ViewMatches />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/explore" element={<Matches />} />
            </Routes>
        </Router>
    );
};

export default App;

/*<Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router> */