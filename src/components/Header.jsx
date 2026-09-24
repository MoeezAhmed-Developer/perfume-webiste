import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../css/header.module.css";

function Header() {
  const [display, setDisplay] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.siteLogo}>
        <Link to="/">Perfume Store</Link>
      </div>
      <nav>
        <ul className={display ? style.showMenu : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/perfumes">Perfumes</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/order">Track Order</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <div className="site-icons">
          <button>
            <i className="uil uil-home"></i>
          </button>
          <button>
            <i className="uil uil-home"></i>
          </button>
          <button>
            <i className="uil uil-home"></i>
          </button>
        </div> */}
      </nav>
      <button className={style.humberger} onClick={() => setDisplay(!display)}>
        {display ? (
          <i className="uil uil-multiply"></i>
        ) : (
          <i className="uil uil-bars"></i>
        )}
      </button>
    </header>
  );
}

export default Header;
