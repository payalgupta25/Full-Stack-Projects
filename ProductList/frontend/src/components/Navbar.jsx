import React from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";

const Navbar = () => {
  const [isLightMode, setIsLightMode] = React.useState(true);

  const toggleColorMode = () => {
    setIsLightMode(!isLightMode);
    document.body.style.backgroundColor = isLightMode ? "#121212" : "#ffffff";
    document.body.style.color = isLightMode ? "#ffffff" : "#121212";
  };

  return (
    <div style={styles.navbar}>
      {/* Brand Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          Product Store 🛒
        </Link>
      </div>

      {/* Navigation Buttons */}
      <div style={styles.buttons}>
        {/* Create Button */}
        <Link to="/create" style={styles.link}>
          <button style={styles.iconButton}>
            <FiPlusSquare size={20} />
          </button>
        </Link>

        {/* Theme Toggle Button */}
        <button style={styles.iconButton} onClick={toggleColorMode}>
          {isLightMode ? <IoMoon size={20} /> : <LuSun size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#6200ea",
    color: "white",
    borderRadius: "5px",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  iconButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontSize: "16px",
  },
};
