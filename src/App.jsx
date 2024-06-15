import Table from './pages/Table/Table'
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
          <Route path="/reservations" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
