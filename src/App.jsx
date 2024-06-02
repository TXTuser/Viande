import { useState } from "react";
import viteLogo from "/vite.svg";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import FullMenu from "./pages/FullMenu/FullMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<FullMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
