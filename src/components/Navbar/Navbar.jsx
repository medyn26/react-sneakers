import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu";
import "./Navbar.css";

import logo from "../../assets/images/logo.png";
function Navbar() {
    return <header className="navbar container">
        <nav className="navbar-nav container">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar-title">
                <h1>REACT SNEAKERS</h1>
                <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="navbar-right">
                <li>
            <LuShoppingCart/>
            <p>1205 руб.</p>
            </li>
            <li>
            <LuHeart/>
            <p>Закладки</p>
            </li>
            <li>
            <LuUserCircle/>
            <p>Профиль</p>
            </li>
            </div>
        </nav>
    </header>;
}

export default Navbar;