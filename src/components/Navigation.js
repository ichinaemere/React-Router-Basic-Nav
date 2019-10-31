import React from 'react';
import {Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to="/">Home
        <div>
          {/* <a href="">Home</a> */}
        </div>
        </Link>
        <Link to='/about'>About
        <div>
          {/* <a href="">About</a> */}
        </div>
        </Link>
        <Link to='/contact'>Contact
        <div>
          {/* <a href="">Contact</a> */}
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
