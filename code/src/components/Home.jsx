import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Our Police Portal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/manualFIR">Manual FIR</Link>
            </li>
            <li>
              <Link to="/firPhotocopy">FIR Photocopy</Link>
            </li>
            <li>
              <Link to="/ipcLaws">IPC Laws</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
