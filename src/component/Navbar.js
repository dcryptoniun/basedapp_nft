import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import config from "../config/Config.json";
import ScanLogo from "../Image/matic_logo.svg";
import openseaLogo from "../Image/opensea_logo.svg";
// import { useAccount, useDisconnect } from "wagmi";

function Navebar() {
  // const { disconnect } = useDisconnect();
  const scanLink = config.SCAN_LINK;
  const openseaLink = config.MARKETPLACE_LINK;
  return (
    <nav className="z-10 backdrop-blur-2xl h-auto p-2 bg-transparent flex flex-col md:flex-row justify-center md:justify-between shadow-xl fixed w-screen">
      <div className="mx-2 p-2 flex justify-center md:justify-start items-center">
        <Link to="/" className=" text-2xl text-cyan-400 mx-2 px-2">
          Logo
        </Link>
        <div className="block md:hidden">
          <ThemeSwitch />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row ">
        <div className="flex p-2 justify-around items-center px-4">
          <Link
            to="/"
            className="mx-2 px-2 p-1 hover:text-teal-400 hover:border-b-4 border-teal-500 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </Link>
          <Link
            to={openseaLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" mx-2 px-2 p-1 hover:border-b-4 border-teal-500 rounded-xl "
          >
            <img src={openseaLogo} alt="scanlink" width={30} height={10} />
          </Link>

          <Link
            to={scanLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" mx-2 px-2 p-1 hover:border-b-4 border-teal-500 rounded-xl "
          >
            <img src={ScanLogo} alt="scanlink" width={30} height={10} />
          </Link>
          <div className="relative p-2 flex justify-around">
            <div className=" hidden md:block mx-1 px-1">
              <Web3NetworkSwitch />
            </div>
            <div className=" mx-1 px-1  ">
              <Web3Button icon="hide" />
            </div>
            {/* <div className=" mx-1 px-1 ">
              <button onClick={() => disconnect()}>Disconnect</button>
            </div> */}

            <div className="hidden md:block hover:border-b-4 border-teal-500 rounded-xl">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navebar;
