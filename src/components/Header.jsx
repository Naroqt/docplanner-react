import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header>
      <a href="#">
        <img
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="docplanner logo"
          class="docplanner-logo"
        />
      </a>
      <Navbar />
    </header>
  );
};
export default Header;
