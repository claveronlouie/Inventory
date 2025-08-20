import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const card = {
    background: "white",
    borderRadius: 16,
    padding: 28,
    boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
    maxWidth: 520,
    margin: "0 auto",
  };

  const title = { fontSize: 24, marginBottom: 18 };

  const formRow = { display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 };
  const label = { fontSize: 14, fontWeight: 600 };
  const input = {
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: 14,
  };
  const button = {
    padding: "12px 16px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 6,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    if (email === "admin" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Use email: admin, password: admin123");
    }
  };

  return (
    <div style={card}>
      <h2 style={title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={formRow}>
          <label htmlFor="email" style={label}>Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
            required
          />
        </div>

        <div style={formRow}>
          <label htmlFor="password" style={label}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={input}
            required
          />
        </div>

        <button type="submit" style={button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
