import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { NavbarContainer } from "./global-styles";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <NavbarContainer>
      <div>
        <Link to={"/"}>
          <p>
            Google Search
            <i className="fas fa-search"></i>
          </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <span>
              Light <i className="fa-solid fa-sun"></i>
            </span>
          ) : (
            <span>
              Dark <i className="fa-solid fa-moon"></i>
            </span>
          )}
        </button>
      </div>
      <Search />
    </NavbarContainer>
  );
};

export default Navbar;
