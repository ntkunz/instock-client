import './Header.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import headerImg from "../../assets/logo/InStock-Logo.svg";


import { useLocation } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Header({ inventoryPage }) {

    let location = useLocation();
    const [pageUrl, setPageUrl] = useState('warehouse')

    // useEffect(() => {
    //     console.log(location)
    //   }, [location]);

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
    // let pageUrl = window.location.href;
    // useEffect(() => {
	// 	        // let pageUrl = window.location.href;
    //     if (pageUrl.includes('inventory')) {
    //         document.querySelector('.header__inventory-button').classList.add('active')
    //         document.querySelector('.header__warehouse-button').classList.remove('active')
    //     } else {
    //         document.querySelector('.header__warehouse-button').classList.add('active')
    //         document.querySelector('.header__inventory-button').classList.remove('active')
    //     }
	// }, [pageUrl]);

    return(

    <header className="header">
        <Link to="/"><img className="header__img" src={headerImg} alt="instock arrow logo" /></Link>
        <div className="header__buttons">
            <Link to="/"><button className={pageUrl === 'warehouse' ? "header__warehouse-button--active" : "header__warehouse-button"}><h3>Warehouses</h3></button></Link>
            <Link to="/inventory"><button className={pageUrl !== "warehouse" ? "header__inventory-button--active" : "header__inventory-button"}><h3>Inventory</h3></button></Link>
        </div>
    </header>
    // <header className="header">
    //     <Link to="/"><img className="header__img" src={headerImg} alt="instock arrow logo" /></Link>
    //     <div className="header__buttons">
    //         <Link to="/"><button className="header__warehouse-button"><h3>Warehouses</h3></button></Link>
    //         <Link to="/inventory"><button className="header__inventory-button"><h3>Inventory</h3></button></Link>
    //     </div>
    // </header>

    )
}

export default Header;