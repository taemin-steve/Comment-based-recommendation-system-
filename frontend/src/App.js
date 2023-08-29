import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Recommend from "./pages/Recommend";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Recommend" element={<Recommend />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
