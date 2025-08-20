import React from "react";

const Footer = () => {
  const style = {
    position: "fixed",    // 👈 stays fixed
    bottom: 0,            // 👈 at bottom
    left: 0,
    width: "100%",        // full width
    textAlign: "center",
    padding: "12px",
    background: "#ffffff",
    borderTop: "1px solid #e5e7eb",
    color: "#666",
    fontSize: "14px",
    zIndex: 1000
  };

  return (
    <footer style={style}>
    <h1>Mark Louie Claveron, Jhoyet Laygo, Raymond Belen, Chrisjerico Lucanas, John Marion Broso, Irish Villamor</h1>
    </footer>
  );
};

export default Footer;
