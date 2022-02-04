import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Navigation from "./Navigation/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Banners from "./Pages/Banners/Banners";
import Cart from "./Pages/Cart/Cart";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <>
            {/* <ChakraProvider> */}
                <BrowserRouter>
                    <Navigation />

                    {/* <Switch> */}
                    <Route component={Banners} exact path={["/", "/Banners"]} />
                    <Route component={Cart} exact path={"/Cart"} />
                    {/* </Switch> */}
                </BrowserRouter>
            {/* </ChakraProvider> */}
        </>
    );
}

export default App;
