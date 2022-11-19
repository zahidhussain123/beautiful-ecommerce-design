import React, { useState } from "react";
import css from "./header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        <div className={css.menu}>
          <ul
            className={css.menu}
            style={{ display: showMenu ? "inherit" : "none" }}
          >
            <li>Brands</li>
            <li>Collections</li>
            <li>Sales</li>
            <li>New</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
