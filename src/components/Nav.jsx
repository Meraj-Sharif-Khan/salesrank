import React, { useState } from "react";
import { Link } from "react-router-dom";
import toggler from "../assets/icons/toggler.svg";
import brangIcon from "../assets/icons/brand.svg";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="nav fixed top-0 bg-white left-1/2 transform -translate-x-1/2 z-50 font-[Plus_Jakarta_Sans]">
        <div className="nav__brand">
          <a href="/">
            <img src={brangIcon} alt="Slothui Logo" />
          </a>
        </div>
        <div
          onClick={handleToggle}
          className={`collapsible  ${toggle ? "collapsible--expanded" : ""}`}
        >
          <div className="collapsible__toggler">
            <img src={toggler} alt="Toggler Icon" />
          </div>
          <div className="collapsible__group bg-white">
            <ul className="nav__list">
              <li className="nav__list-item">
                <Link to="home" className="font-semibold text-sm">
                  Home
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="about" className="font-semibold text-sm">
                  About
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="pricing" className="font-semibold text-sm">
                  pricing
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="consulting" className="font-semibold text-sm">
                  Consulting
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="aicoach" className="font-semibold text-sm">
                  Ai Coach
                </Link>
              </li>
            </ul>
            <button className="text-base cursor-pointer font-bold border px-[35px] py-[13px] border-[#010205] rounded-full h-min">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
