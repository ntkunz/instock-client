import './Header.scss';
import { NavLink, Link } from "react-router-dom";
import headerImg from "../../assets/logo/InStock-Logo.svg";

function Header() {

    return(

    <header className="header">
        <Link to="/"><img className="header__img" src={headerImg} alt="instock arrow logo" /></Link>
        <div className="header__buttons">
            <NavLink to="/warehouses" className={({ isActive }) => 
                isActive ? "header__warehouse-button--active" : "header__warehouse-button"
                }><h3>Warehouses</h3></NavLink>
            <NavLink to="/inventory" className={({ isActive }) => 
                isActive ? "header__inventory-button--active" : "header__inventory-button"
                }><h3>Inventory</h3></NavLink>
        </div>
    </header>
    )
}

export default Header;
