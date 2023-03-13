import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navebar from "./component/Navbar";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div className="w-screen h-screen text-black dark:text-white flex flex-col bg-[#ECF2FF] dark:bg-[#0f172a]">
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
