import './Header.scss';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import headerImg from "../../assets/logo/InStock-Logo.svg";

function Header({ inventoryPage }) {

    //set active class for header warehouses or inventory link
    //add active class after page has loaded
    // setTimeout(()=>{
    //     const pageUrl = window.location.href;
    //     if (pageUrl.includes('inventory')) {
    //         document.querySelector('.header__inventory-button').classList.add('active')
    //         document.querySelector('.header__warehouse-button').classList.remove('active')
    //     } else {
    //         document.querySelector('.header__warehouse-button').classList.add('active')
    //         document.querySelector('.header__inventory-button').classList.remove('active')
    //     }
    // }, 1000)

    // attempt 2
    // useEffect(() => {
	// 	        const pageUrl = window.location.href;
    //     if (pageUrl.includes('inventory')) {
    //         document.querySelector('.header__inventory-button').classList.add('active')
    //         document.querySelector('.header__warehouse-button').classList.remove('active')
    //     } else {
    //         document.querySelector('.header__warehouse-button').classList.add('active')
    //         document.querySelector('.header__inventory-button').classList.remove('active')
    //     }
	// }, []);

    return(

    <header className="header">
        <Link to="/"><img className="header__img" src={headerImg} alt="instock arrow logo" /></Link>
        <div className="header__buttons">
            <Link to="/"><button className="header__warehouse-button"><h3>Warehouses</h3></button></Link>
            <Link to="/inventory"><button className="header__inventory-button"><h3>Inventory</h3></button></Link>
        </div>
    </header>

    )
}

export default Header;