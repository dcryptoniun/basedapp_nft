import React, { useState, useEffect } from "react";
import Logo from "./Image/logo.png";
import confi from "./config/Config.json";
import Abi from "./config/Abi.json";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { ethers } from "ethers";
// import { wagmi } from 'wagmi';

// const contract = new ethers.Contract(contractAddress, Abi);
function Home() {
  const { address, isConnected } = useAccount();
  const contractAddress = confi.CONTRACT_ADDRESS;
  const [cost, setCost] = useState("");
  const [count, setCount] = useState(1);
  // const [totalSupply, setTotalSupply] = useState('');

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const { data: minted } = useContractRead({
    address: contractAddress,
    abi: Abi,
    functionName: "totalSupply",
    watch: true,
    // onSuccess(data) {
    //   console.log("Success", data);
    // },
    // onError(error) {
    //   console.log("Error", error);
    // },
    // onSettled(data, error) {
    //   console.log("Settled", { data, error });
    // },
  });

  const { data: totalSupply } = useContractRead({
    address: contractAddress,
    abi: Abi,
    functionName: "maxSupply",
    watch: false,
  });
  const { data: mintcost } = useContractRead({
    address: contractAddress,
    abi: Abi,
    functionName: "cost",
    watch: true,
  });
  const mintprice = String(mintcost * count);
  

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: Abi,
    functionName: "mint",
    args: [count],
    overrides: {
      from: address,
      value: mintprice,
    },
  });
  const { data,  write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <div className=" flex flex-col justify-center md:space-y-5  items-center h-screen ">
      <div className="hidden md:block ">
        <h1 className="text-3xl dark:text-teal-300 font-bold font-mono ">
          XYZ NFT Collection
        </h1>
      </div>
      <div className="flex w-full mt-28 md:mt-0  bg-black/5 dark:bg-white/5 max-w-sm md:max-w-3xl md:h-80  flex-col md:flex-row justify-center md:justify-between p-5 items-center rounded-3xl">
        <div className="block my-5 md:hidden ">
          <h1 className="text-3xl dark:text-teal-300 font-bold font-mono ">
            XYZ NFT Collection
          </h1>
        </div>
        <div className="flex relative flex-col md:float-left rounded-2xl m-1 bg-pink-900 max-w-md h-auto p-5 tracking-tight md:tracking-wide leading-5">
          <img src={Logo} height={150} width={150} alt="logo" />
        </div>
        <div className=" flex-grow w-full items-center text-center justify-center max-w-md h-auto m-1 p-5 flex-col rounded-2xl ">
          <div>
            <h3 className="text-lg">Cost : {`${mintcost / 1e18}`} Matic/NFT</h3>

            <h2 className=" text-2xl">
              Minted : {`${minted}`}/{`${totalSupply}`}
            </h2>

            <span>Click Mint to mint your NFT</span>
            <div id="counter" className="p-5 space-x-4">
              <button
                className="font-bold outline w-6 h-6  rounded text-center hover:text-teal-400 hover:bg-teal-400/10 shadow-md  shadow-black dark:shadow-white hover:shadow-emerald-500 "
                onClick={handleDecrement}
              >
                -
              </button>
              <span className=" font-bold text-teal-400 font-mono text-xl">
                {count}
              </span>
              <button
                className="font-bold outline w-6 h-6 rounded text-center hover:text-teal-400 hover:bg-teal-400/10 shadow-md  shadow-black dark:shadow-white hover:shadow-emerald-500"
                onClick={handleIncrement}
              >
                +
              </button>
              
            </div>
            {isConnected ? (
              <div>
                <div>
                  <button
                    className="font-bold w-1/2 h-auto p-2 rounded outline hover:text-teal-400 hover:bg-teal-400/10 shadow-md  shadow-black dark:shadow-white hover:shadow-emerald-500 "
                    disabled={!write || isLoading}
                    onClick={() => write?.()}
                  >
                    {isLoading ? 'Minting...' : 'MINT ⟩⟩'}
                  </button>
                  {isLoading && <div> minting... please Check your Wallet</div>}
                  {isSuccess && (
                    <div>
                      <h1>Successfully minted your NFT</h1>
                      <div>
                        <a
                          href={`https://mumbai.polygonscan.com//tx/${data?.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-500 p-1"
                        >
                          view on Polygon scan 
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <Web3Button icon="hide" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
