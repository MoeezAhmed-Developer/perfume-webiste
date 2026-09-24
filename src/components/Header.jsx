import style from "../css/header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.siteLogo}>
        <a href="/">Perfume Store</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Perfumes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
