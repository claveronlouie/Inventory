import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const card = {
    background: "white",
    borderRadius: 16,
    padding: 28,
    boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const title = { fontSize: 28, marginBottom: 8 };
  const subtitle = { color: "#666", marginBottom: 24 };

  const button = {
    display: "inline-block",
    padding: "12px 18px",
    background: "#3b82f6",
    color: "white",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <div style={card}>
      <h1 style={title}>Welcome to My Inventory</h1>
      <p style={subtitle}>
        Track items and quantities in a simple dashboard.
      </p>
      <Link to="/login" style={button}>Go to Login</Link>
    </div>
  );
};

export default LandingPage;
