import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
