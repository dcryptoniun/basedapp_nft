import React from "react";
import Footer from "./component/Footer";
import Navebar from "./component/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="w-screen h-screen text-black dark:text-white flex flex-col bg-[#ECF2FF] dark:bg-[#0f172a]">
      <Navebar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
