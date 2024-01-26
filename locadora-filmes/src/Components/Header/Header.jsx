import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
        <header>
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="favoritos" to="favoritos">Meus Favoritos</Link>
        </header>
  )
}

export default Header