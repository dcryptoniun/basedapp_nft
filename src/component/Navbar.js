import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

function Navebar() {
 
  return (
    <nav className=" h-auto p-2 bg-transparent flex flex-col md:flex-row justify-center md:justify-between shadow-xl fixed w-screen">
      <div className="mx-2 p-2 flex justify-center md:justify-start items-center">
        <Link to="/" className=" text-2xl text-cyan-400 mx-2 px-2">
          Logo
        </Link>
        <div className="block md:hidden"><ThemeSwitch /></div>
        
      </div>
      <div className=" flex flex-col md:flex-row ">
        <div className="flex p-2 justify-around items-center px-4">
          <Link to="/" className="mx-2 px-2 p-1 hover:text-teal-400 hover:outline rounded">
            Home
          </Link>
          <Link
            to="/contact"
            className=" mx-2 px-2 p-1 hover:text-teal-400 hover:outline rounded"
          >
            Contact
          </Link>
          </div>
          <div className="relative p-2 flex justify-around">
          <div className=" mx-1 px-1">
            <Web3NetworkSwitch />
          </div>
          <div className=" mx-1 px-1">
            <Web3Button />
          </div> <div className="hidden md:block"><ThemeSwitch /></div>
          </div>

         
        
      </div>
    </nav>
  );
}

export default Navebar;
