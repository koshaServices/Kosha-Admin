import {
    Container,
    Box,
    Spacer,
    SimpleGrid,
    useDisclosure,
    Modal,
    Icon,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { FaSave } from "react-icons/fa";
import { IShop } from "../../Interfaces/Interfaces";
import ProductsTask from "./ProductsTask";
import "../../Pages/Banners/Banners.css";

const Products = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [modalOpen, setModalOpen] = useState<boolean>(false)

    const [itemName, setItemName] = useState<string>("");
    const [itemCategory, setItemCategory] = useState<string>("");
    const [itemPrice, setItemPrice] = useState<number>(0);
    const [itemQuantity, setItemQuantity] = useState<number>(0);
    const [productList, setProductList] = useState<IShop[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "itemName")
            return setItemName(event.target.value);
        if (event.target.name === "itemCategory")
            return setItemCategory(event.target.value);
        if (event.target.name === "itemPrice")
            return setItemPrice(event.target.valueAsNumber);
        if (event.target.name === "itemQuantity")
            return setItemQuantity(event.target.valueAsNumber);
    };

    const addProduct = (): void => {
        const newName = {
            itemName: itemName,
            itemCategory: itemCategory,
            itemPrice: itemPrice,
            itemQuantity: itemQuantity,
        };
        try{
        setProductList([...productList, newName]);
        setItemName("");
        setItemCategory("");
        setItemPrice(0);
        setItemQuantity(0);
        onClose();
        }catch(e){
            alert('Failed to upload product')
        }
    };

    const completeProduct = (itemNameToDelete: string): void => {
        setProductList(
            productList.filter((title) => {
                return title.itemName !== itemNameToDelete;
            })
        );
    };

    return (
        <Box 
        // flex="1" 
        p="20" bg="blue.400">
            <div className="topButtons">
                <span
                    onClick={onOpen}
                    style={{
                        fontWeight: 700,
                        color: "white",
                        background: "blue",
                        borderRadius: 5,
                        margin: 5,
                        padding: 5,
                        cursor: 'pointer'
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
                        cursor: 'pointer'
                    }}
                >
                    + Category
                </span>
            </div>
            <Spacer />

            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="modalContainer" style={{marginTop: 5}}>
                    <div className="modalTitle">
                        Name
                        <input
                            type="text"
                            placeholder="Name ..."
                            name="itemName"
                            value={itemName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="modalTitle">
                        Category
                        <input
                            type="text"
                            placeholder="Category..."
                            name="itemCategory"
                            value={itemCategory}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="modalTitle">
                        Price :
                        <input
                            type="number"
                            name="itemPrice"
                            value={itemPrice}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="modalTitle">
                        Quantity :
                        <input
                            type="number"
                            name="itemQuantity"
                            value={itemQuantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="modalButtons">
                        <div className="modalClose" onClick={onClose}>
                            Close
                        </div>
                        <div className="modalSend" onClick={addProduct}>
                            <Icon as={FaSave} /> Save
                        </div>
                    </div>
                </div>
            </Modal>

            <SimpleGrid columns={4} spacing={10}>
                {productList.map((title: IShop, key: number) => {
                    return (
                        <Box>
                            <ProductsTask
                                key={key}
                                product={title}
                                completeProduct={completeProduct}
                            />
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Box>
    );
};

export default Products;
