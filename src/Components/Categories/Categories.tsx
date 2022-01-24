import { Box, Center, Container } from "@chakra-ui/react";
import React from "react";

const Categories = () => {
    return (
        <Container>
            <Center w="300px" bg="green.500">
                <div className="categoriesNav">
                    <div className="">
                        <span
                            style={{
                                color: "white",
                                background: "cyan",
                                borderRadius: 5,
                            }}
                        >
                            Categories
                        </span>

                        <span
                            style={{
                                color: "white",
                                background: "cyan",
                                borderRadius: 5,
                            }}
                        >
                            Manage All
                        </span>
                    </div>
                    <span className="categoryItem">Bathroom</span>
                    <span className="categoryItem">Kitchen</span>
                    <span className="categoryItem">Indoors</span>
                    <span className="categoryItem">Office</span>
                </div>
            </Center>
        </Container>
    );
};

export default Categories;
