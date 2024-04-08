// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './LoginPage';
import FormPage from './FormPage';
import ReviewPage from './ReviewPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/form" element={<FormPage/>}/>
          <Route path="/review" element={<ReviewPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
