import React from "react";
import "./Cart.css";

import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";

function Cart() {
    return (
        <>
            <Flex color="white">
                <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                >
                    <GridItem rowSpan={1} colSpan={1} bg="tomato">
                        <Categories />
                    </GridItem>
                    <GridItem colSpan={4} bg="tomato">
                        <Products />
                    </GridItem>
                </Grid>
            </Flex>
        </>
    );
}

export default Cart;
