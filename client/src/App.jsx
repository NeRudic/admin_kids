import "./App.css";
import Header from "./components/header/Header";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import AddFamily from "./pages/AddFamily";

// let counter = 0;

export default function App() {
  // const [blogCounter, setBlogCounter] = useState(counter);
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-family" element={<AddFamily />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
