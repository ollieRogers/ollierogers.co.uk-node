import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.png";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <a href="/" className="image avatar">
          <img src={avatar} alt="" />
        </a>
        <h1>
          <strong>I'm Ollie</strong>, Front End Developer, & Designer, based in
          Bournemouth, UK
        </h1>
      </div>
      <Footer />
    </header>
  );
};

export default Header;
