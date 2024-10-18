import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Welcomepage from "./components/WelcomePage/Welcomepage.jsx";
import Loginscreen from "./components/LoginScreen/Loginscreen.jsx";
function App() {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        {/* These Routes stores all the pages that make up the app, only one page will be displayed at a time depending on the url*/}
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/login" element={<Loginscreen />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
