import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {
    DASHBOARD,
    PRODUCTS,
    ORDERS 
} from "../utils/consts";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <Link to={DASHBOARD} className="logo-text">Pizzafy.</Link>
            </div>
            <nav className="sidebar-nav">
                <Link to={DASHBOARD} className="sidebar-nav__link">
                    Главная
                </Link>
                <Link to={PRODUCTS} className="sidebar-nav__link">
                    Товары
                </Link>
                <Link to={ORDERS} className="sidebar-nav__link">
                    Заказы
                </Link>
                <Link to={DASHBOARD} className="sidebar-nav__link">
                    Помощь
                </Link>
            </nav>
            <p className="sm-text">&copy;2025, Pizzafy. Все права защищены</p>
        </div>
    );
}

export default Sidebar;
