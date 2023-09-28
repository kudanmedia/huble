import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navigation = () => {
  return (
    <>
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
            <img src={logo} alt="Logo" className="h-1/4 w-1/4" />
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-primary hover:text-primary/90 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/hero"
            className="text-primary hover:text-primary/90 transition duration-300"
          >
            Hero
          </Link>
          <Link
            to="/calculator"
            className="text-primary hover:text-primary/90 transition duration-300"
          >
            Calculator
          </Link>
          <Link
            to="/documentation"
            className="text-primary hover:text-primary/90 transition duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
    <div>
        <Outlet />
    </div>
    </>
  );
};

export default Navigation;