import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import DashBoard from './DashBoard';

const RouterConfig= () => {
  return (
    <div className='w-full'>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/dashboard" element={<DashBoard />}/>
          
        </Routes>
      </Router>
      </div>
  )
}

export default RouterConfig;