import React from "react";
import Logo from "../img/Logo.png";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const handleGetProject = () => {
    navigate('/registration');
  };

  return (
    <nav className="border border-gray-250 rounded-full p-2 md:p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-4" />
      </div>
      <div className="flex space-x-4">
        <button className="border border-gray-300 hover:bg-black text-black hover:text-white font-semibold py-2 px-4 rounded-full md:py-3 md:px-6" onClick={handleGetProject}>
          Get Project
        </button>
        <button className="border border-gray-300 hover:bg-black text-black hover:text-white font-semibold py-2 px-4 rounded-full md:py-3 md:px-6">
          Onboard Talent
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
