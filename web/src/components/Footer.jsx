import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "var(--light-gray)" }}>
      <p style={{ textAlign: "center", color: "var(--primary-dark)" }}>
        © {new Date().getFullYear()} Mon Site de Festivals
      </p>
    </footer>
  );
};

export default Footer;
