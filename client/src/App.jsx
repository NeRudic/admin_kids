import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/*
        <Route path="/families" element={<Families/>}>
        <Route path="/visits" element={<Visits/>}>
        <Route path="/story" element={<Story>}> */}
        </Routes>
      </Router>

      <div className="wrapper max-w-[1200px]"></div>
    </>
  );
}
