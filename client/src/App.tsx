import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useNewClientModal } from "./context/NewClientModalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewFamily from "./components/newFamily/NewFamily";

export default function App() {
  const { isOpen, newClientModalHandler } = useNewClientModal();

  return (
    <>
      <Router>
        <Header />
        <div className="main_wrapper">
          <div
            className={isOpen ? "overlay" : "none"}
            onClick={isOpen ? newClientModalHandler : undefined}
          >
            <NewFamily newClientModalHandler={newClientModalHandler} />
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
