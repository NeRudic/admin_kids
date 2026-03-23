import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { NewClientModalContext } from "./context/NewClientModalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import NewFamily from "./components/newFamily/NewFamily";

export default function App() {
  const { isOpen, modalHandler } = useContext(NewClientModalContext);

  return (
    <>
      <Router>
        <Header />
        <div className="main_wrapper">
          <div
            className={isOpen ? "overlay" : "none"}
            onClick={isOpen ? modalHandler : undefined}
          >
            <NewFamily />
          </div>
        </div>

        <div className="wrapper max-w-[1200px]">
          <Routes>
            {/*
        <Route path="/families" element={<Families/>}>
        <Route path="/visits" element={<Visits/>}>
        <Route path="/story" element={<Story>}> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}
