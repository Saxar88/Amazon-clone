import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../hooks/StateProvider";
import SearchMenu from "./SearchMenu";
import UserMenu from "./UserMenu";

function Header() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="header">
      <div className="top-nav">
        <Link to="/">
          <img className="header--logo" src="images/logo-w.png" alt="logo" />
        </Link>
        <div className="header--location">
          <FontAwesomeIcon icon={faLocationDot} className="header--dot" />
          <div className="header--group">
            <span className="header--optionLineOne">
              {user ? `Deliver to ${user.email}` : `Deliver to`}
            </span>
            <span className="header--optionLineTwo">Romania</span>
          </div>
        </div>
        <div className="header--search">
          <SearchMenu />
          <input className="header--searchInput" type="text" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="header--searchIcon"
          />
        </div>
        <div className="header--nav">
          <UserMenu />
          <Link
            to={user ? "/order-history" : "/signin"}
            style={{ textDecoration: "none" }}
          >
            <div className="header--option">
              <span className="header--optionLineOne">Returns</span>
              <span className="header--optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="header--optionBasket">
              <div className="header--group">
                <span className="header--optionLineTwo header--basketCount">
                  {basket.length}
                </span>
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  className="header--basketIcon"
                />
              </div>
              <div className="header--basket">
                <span className="header--optionLineOne">Shopping-</span>
                <span className="header--optionLineTwo">Basket</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="header--menu">
          <FontAwesomeIcon icon={faBars} className="header--menuIcon" />
          <p>All</p>
        </div>
        <p className="header--menuItem">Best Sellers</p>
        <p className="header--menuItem">Amazon Basics</p>
        <p className="header--menuItem">Gift Ideas</p>
        <p className="header--menuItem">Customer Service</p>
        <p className="header--menuItem">Music</p>
        <p className="header--menuItem">Today's Deals</p>
        <p className="header--menuItem">New Releases</p>
        <p className="header--menuItem">Kindle Books</p>
        <p className="header--menuItem">Books</p>
        <p className="header--menuItem">PC & Video Games</p>
        <p className="header--menuItem">Vouchers</p>
        <p className="header--menuItem">Gift Cards & Top Up</p>
        <p className="header--menuItem">Toys & Games</p>
        <p className="header--menuItem">Electronics</p>
        <p className="header--menuItem">Fashion</p>
        <p className="header--menuItem">Home & Garden</p>
        <p className="header--menuItem">PC</p>
      </div>
    </div>
  );
}

export default Header;
