import { Container, Box, Spacer, SimpleGrid } from "@chakra-ui/react";
import React from "react";

function Products() {
    return (
            <Box flex="1" p="20" bg="blue.400">
                <div className="topButtons">
                    <span
                        style={{
                            fontWeight: 700,
                            color: "white",
                            background: "blue",
                            borderRadius: 5,
                            margin: 5,
                            padding: 5,
                        }}
                    >
                        + Product
                    </span>

                    <span
                        style={{
                            fontWeight: 700,
                            color: "white",
                            background: "blue",
                            borderRadius: 5,
                            margin: 5,
                            padding: 5,
                        }}
                    >
                        + Category
                    </span>
                </div>
                <Spacer />
                <SimpleGrid columns={4} spacing={10}>
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
            </Box>
    );
}

export default Products;
