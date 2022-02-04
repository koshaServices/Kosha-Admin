import { Container, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
// import { Container, Div1, Div2 } from "./NavBarStyles";
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
    // const [value, setValue] = useSytate();
    return (
            <div className="navbar">
                <div className="navCategory">
                    <NavLink to={"/"} className="active-nav-item">
                        <Image src='koshalogo.png' alt='Logo' />
                    </NavLink>
                </div>

                <div className="nav-item">
                    <NavLink to={"/Banners"} className="active-nav-item">
                        <NavItem navText="Banners" icon="bag" id="store" />
                    </NavLink>

                    <NavLink to={"/Cart"} className="active-nav-item">
                        <NavItem navText="Cart" icon="cart" id="cart" />
                    </NavLink>
                </div>
            </div>
    );
};

export default Navigation;
