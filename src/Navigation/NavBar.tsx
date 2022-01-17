import React, { useState } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./Navigation.css";

// import Services from "../Screens/Services/Services";
// import Shop from "../Screens/Shop/Shop";
// import Indoors from "../Screens/Services/Indoors/Indoors";
// import Account from "../Screens/Account/Account";
// import { AddBanner } from "../apis/banners/Banner";
// import { usersApi } from "../apis/UsersApi";
// import { APIS } from "../apis/API";

interface NavItemProps {
    navText: string;
    icon: string;
    id: string;
}
const NavItem = (props: NavItemProps) => {
    const { navText, icon, id } = props;

    return (
        <div id={id} className={`nav-item`}>
            {/* <p className="uk-text-center">
                <span data-uk-icon={`icon: ${icon}; ratio:1`}></span>
            </p> */}

            <p>{navText}</p>
        </div>
    );
};

const Navigation = () => {
    const [value, setValue] = useState();

    return (
        <header className="navbar">
            <NavLink to={"/"} className="active-nav-item">
                <NavItem navText="LoGO" icon="home" id="home" />
            </NavLink>

            <div className="navCategory">
                <NavLink to={"/Banners"} className="active-nav-item">
                    <NavItem navText="Banners" icon="bag" id="store" />
                </NavLink>

                <NavLink to={"/Cart"} className="active-nav-item">
                    <NavItem navText="Cart" icon="cart" id="cart" />
                </NavLink>
            </div>
        </header>
    );
};

export default Navigation;
