import React from "react";
import "./Cart.css";

import {
    Box,
    Center,
    Container,
    Flex,
    SimpleGrid,
    Spacer,
} from "@chakra-ui/react";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products/Products";

function Cart() {
    return (
        <Container>
            {/* <div className="cartContainer">
                <div className="categoryNav">
                    <div className="categoryNavButton">
                        <div className="pageName">Page Name</div>
                        <div className="addItem">+ Add</div>
                    </div>
                    <div className="categoriesNav">
                        <span className="categoryItem">Bathroom</span>
                        <span className="categoryItem">Kitchen</span>
                        <span className="categoryItem">Indoors</span>
                        <span className="categoryItem">Office</span>
                    </div>
                </div>
                <div className="storeDisplay">
                    <div className="topButtons">
                        <span>Button1</span>
                        <span>Button2</span>
                    </div>

                    <div className="itemContainer">
                        <SimpleGrid columns={2} spacing={10}>
                            <Box bg="tomato" height="80px">
                                1
                            </Box>
                            <Box bg="tomato" height="80px">
                                2
                            </Box>
                            <Box bg="tomato" height="80px">
                                3
                            </Box>
                            <Box bg="tomato" height="80px">
                                4
                            </Box>
                            <Box bg="tomato" height="80px">
                                5
                            </Box>
                        </SimpleGrid>
                    </div>
                </div>
            </div> */}

            <Flex color="white">

                <Categories/>

                <Products/>
            </Flex>
        </Container>
    );
}

export default Cart;
