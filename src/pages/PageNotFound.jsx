import { Link } from "react-router-dom";
import style from "../css/404.module.css";

export default function PageNotFound() {
  return (
    <div className={style.container}>
      <i></i>
      <h1>404 - Page Not Found</h1>
      <p>Which page you are looking it's not exist. or move been trash.</p>
      <Link to="/">Back To Home</Link>
    </div>
  );
}
