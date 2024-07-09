/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Dasboard from './components/Dasboard';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div >
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid"> 
        <Link to="./" className="navbar-brand" >Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              < Link to='./about' className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              < Link to="./dashboard" className="nav-link" Link="#">Dashboard</Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/dashboard" element={<Dasboard />} />
 </Routes>
<footer></footer>
 </div>
    </Router>
  );
}

export default App;
