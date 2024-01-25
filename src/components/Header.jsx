import React from "react";

const headerStyle = {
  backgroundColor: "#fff",
  color: "#333",
  padding: "10px 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "24px",
};

const navStyle = {
  listStyle: "none",
  display: "flex",
};

const navItemStyle = {
  margin: "0 10px",
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Magazin Încălțăminte</div>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>Acasă</li>
          <li style={navItemStyle}>Bărbați</li>
          <li style={navItemStyle}>Femei</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
