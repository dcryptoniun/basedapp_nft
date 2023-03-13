import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import {  Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";


function Navebar() {
  
  return (
   
    <nav className=" h-16 bg-transparent flex justify-between shadow-xl fixed w-screen">
      <div className="mx-2 p-2 flex justify-start items-center">
      <Link to="/" className="text-2xl text-cyan-400 mx-2 px-2">
            Logo
          </Link>
      </div>
      <div className=" flex flex-row ">
        <div className="flex  justify-around items-center px-4">
          <Link to="/" className=" mx-2 px-2">
            Home
          </Link>
          <Link to="/contact" className=" mx-2 px-2">
            Contact
          </Link>
          <Web3NetworkSwitch />
          <Web3Button />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
    
  );
}

export default Navebar;
