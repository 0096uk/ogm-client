import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import UserProfileView from "../pages/UserProfileView";

import "../css/Footer.css";

function Footer() {
  const [{ employee, supplier, user }, dispatch] = useStateValue();
  return (
    <div className="footer">
      <div className="footer__nav">
        <Link to="/employeelogin">
          <div className="footer__option">
            {!user && (
              <span className="footer__optionLine">Employee SignIn</span>
            )}
          </div>
        </Link>

        <Link to="/supplierlogin">
          <div className="footer__option">
            {!user && (
              <span className="footer__optionLine">Supplier SignIn</span>
            )}
          </div>
        </Link>

        <Link to="/aboutus">
          <div className="header__option">
            <span className="header__optionLineTwo">About Us</span>
          </div>
        </Link>

        <Link to="/contactus">
          <div className="header__option">
            <span className="header__optionLineTwo">Contact Us</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
