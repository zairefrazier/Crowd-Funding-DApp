import React from "react";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-black min-h-screen flex flex-row">
      <div className="sm:flew hidden mr-10 relative">
        Sidebar

      </div>
      <p className="font-xl font-bold">Test</p>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        Navbar
      </div>
    </div>
  )
}
export default App