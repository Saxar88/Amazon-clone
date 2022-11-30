import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./UserMenu.css";
import { useStateValue } from "../hooks/StateProvider";
import { useOnHoverOutside } from "../hooks/useOnHoverOutside";
import { auth } from "../hooks/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function UserMenu() {
  const [{ user }, dispatch] = useStateValue();

  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div
      className="header--option"
      ref={dropdownRef}
      onMouseOver={() => setMenuDropDownOpen(true)}
    >
      <span className="header--optionLineOne">
        {user ? "Hello," : "Hello, sign in"}
      </span>
      <span className="header--optionLineTwo">
        Account & Lists <FontAwesomeIcon icon={faCaretDown} />
      </span>
      {isMenuDropDownOpen && (
        <div className="userMenu--container">
          <div className="userMenu--content">
            {user ? (
              <div />
            ) : (
              <div className="userMenu--signIn">
                <Link to={"/signin"}>
                  <button className="userMenu--signInButton">Sign in</button>
                </Link>
                <p>
                  New customer? <a href="">Start here.</a>
                </p>
              </div>
            )}
            <div className="userMenu--columns">
              <div className="userMenu--menuColumn">
                <p className="title">Your Lists</p>
                <a href="">Find a Gift</a>
                <a href="">Create a List</a>
                <a href="">Save Items form the Web</a>
                <a href="">Wedding List</a>
                <a href="">Baby Wishlist</a>
                <a href="">Discover Your Style</a>
                <a href="">Explore Showroom</a>
              </div>
              <div className="listBorder"></div>
              <div className="userMenu--menuColumn">
                <p className="title">Your Account</p>
                <a href="">Your Account</a>
                <a href="">Your Orders</a>
                <a href="">Your Dash Buttons</a>
                <a href="">Your Lists</a>
                <a href="">Your Recommendations</a>
                <a href="">Your Subscribe & Save Items</a>
                <a href="">Your Pets</a>
                <a href="">Memberships & Subscriptions</a>
                <a href="">Register for a free business account</a>
                <a href="">Manage Your Content and Devices</a>
                <a href="">My Prime Music</a>
                <a href="">Your Music</a>
                <a href="">Your Amazon Drive</a>
                <a href="">Your Prime Video</a>
                <a href="">Your Kindle Unlimited</a>
                <a href="">Your Watchlist</a>
                <a href="">Your Video Purchases & Rentals</a>
                <a href="">Your Games & Software Library</a>
                <a href="">Your Android Apps & Devices</a>
                {user ? (
                  <div className="userMenu--signOut">
                    <a href="">Switch Accounts</a>
                    <a href="" onClick={handleAuthenticaton}>
                      Sign out
                    </a>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
