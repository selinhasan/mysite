import React, { useRef } from "react";

const Sidenav = () => {
  const sidenavRef = useRef(null);

  const openNav = () => {
    if (sidenavRef.current) {
      sidenavRef.current.style.width = "250px";
    }
  };

  const closeNav = () => {
    if (sidenavRef.current) {
      sidenavRef.current.style.width = "0";
    }
  };

  return (
    <div>
      <div id="main" onClick={openNav}>
        ...
      </div>

      <div id="mySidenav" className="sidenav" ref={sidenavRef}>
        <a href="#home" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Sidenav;



