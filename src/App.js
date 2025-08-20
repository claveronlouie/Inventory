import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";

function App() {
  const container = {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    minHeight: "100vh",
    background: "#f7f7fb",
    display: "flex",
    flexDirection: "column",
  };

  const shell = {
    maxWidth: 920,
    margin: "0 auto",
    padding: "24px 20px 48px",
    flex: 1,
  };

  const header = {
    background: "white",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    margin: "16px 0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const brand = { fontSize: 18, fontWeight: 700 };
  const hint = { fontSize: 13, opacity: 0.7 };

  return (
    <div style={container}>
      <div style={shell}>
        <Router>
          <header style={header}>
            <div style={brand}>My Inventory</div>
            <div style={hint}>Practice</div>
          </header>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </div>

      {}
      <Footer />
    </div>
  );
}

export default App;
