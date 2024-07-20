import "./App.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Refer from "./pages/Refer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Refer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
