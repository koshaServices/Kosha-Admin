import React from "react";
import "./Cart.css";

import { Container, Flex } from "@chakra-ui/react";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";

function Cart() {
    return (
        <Container>
            <Flex color="white">
                <Categories />

                <Products />
            </Flex>
        </Container>
    );
}

export default Cart;
