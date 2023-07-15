import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Welcome/>}/>
      </Routes>
    </div>
  );
}

export default App;
