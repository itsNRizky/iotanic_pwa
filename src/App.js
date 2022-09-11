import React from "react";
import { Routes, Route } from 'react-router-dom'
import AddDevice from "./pages/AddDevice";


import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import List from "./pages/List";
import Monitor from "./pages/Monitor";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {

  return (
    <div className="App overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/monitor/add" element={<AddDevice />} />
        <Route path="/list" element={<List />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
