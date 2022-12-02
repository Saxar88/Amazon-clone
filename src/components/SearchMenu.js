import React, { useState, useRef } from "react";
import "./SearchMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

function SearchMenu() {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnClickOutside(dropdownRef, closeMenu);

  return (
    <div className="search--menu">
      <button ref={dropdownRef} onClick={() => setMenuDropDownOpen(true)}>
        All{" "}
        <FontAwesomeIcon
          icon={faCaretDown}
          className="search--menuCaret"
        ></FontAwesomeIcon>
      </button>
      {isMenuDropDownOpen && (
        <ul className="search--menuList">
          <li>All Departments</li>
          <li>Alexa Skills</li>
          <li>Amazon Devices</li>
          <li>Amazon Global Store</li>
          <li>Amazon Warehouse</li>
          <li>Apparel</li>
          <li>Apps & Games</li>
          <li>Audible Audiobooks</li>
          <li>Automotive</li>
          <li>Baby</li>
          <li>Books</li>
          <li>Camera & Photo</li>
          <li>CDs & Vinyl</li>
          <li>Classical Music</li>
          <li>Computers & Accessories</li>
          <li>Digital Music</li>
          <li>DVD & Blu-ray</li>
          <li>Electronics & Photo</li>
          <li>Fashion</li>
          <li>&nbsp;&nbsp;Women</li>
          <li>&nbsp;&nbsp;Men</li>
          <li>&nbsp;&nbsp;Girls</li>
          <li>&nbsp;&nbsp;Boys</li>
          <li>&nbsp;&nbsp;Baby</li>
          <li>Garden & Outdoors</li>
        </ul>
      )}
    </div>
  );
}

export default SearchMenu;
