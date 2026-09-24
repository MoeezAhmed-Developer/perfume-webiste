import { useState } from "react";
import style from "../css/header.module.css";

function Header() {
  const [display, setDisplay] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.siteLogo}>
        <a href="/">Perfume Store</a>
      </div>
      <nav>
        {display && (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Perfumes</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        )}
      </nav>
      <button className={style.humberger} onClick={() => setDisplay(!display)}>
        ---
      </button>
      {/* <i className="uil uil-bars"></i> */}
    </header>
  );
}

export default Header;
