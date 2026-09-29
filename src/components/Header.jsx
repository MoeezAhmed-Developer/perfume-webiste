import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../css/header.module.css";
import "../css/header.css";

function Header() {
  const [display, setDisplay] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.siteLogo}>
        <Link to="/">Perfume Store</Link>
      </div>
      <nav>
        <div className={style.rightSide}>
          <ul className={display ? style.showMenu : ""}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/perfumes">Perfumes</NavLink>
            </li>
            <li>
              <NavLink to="/collections">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/order">Track Order</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className={style.siteIcons}>
            <button>
              <i className="uil uil-search"></i>
            </button>
            <button>
              <i className="uil uil-user"></i>
            </button>
            <button>
              <i className="uil uil-shopping-bag"></i>
            </button>
            <span className={style.count}>0</span>

            <button
              className={style.humberger}
              onClick={() => setDisplay(!display)}
            >
              {display ? (
                <i className="uil uil-multiply"></i>
              ) : (
                <i className="uil uil-bars"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
