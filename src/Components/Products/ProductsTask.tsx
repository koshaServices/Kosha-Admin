import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { IShop } from "../../Interfaces/Interfaces";
import { Icon } from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";

interface Props {
    product: IShop;
    completeProduct(ProductNameToDelete: string): void;
}

const ProductsTask = ({ product, completeProduct }: Props) => {
    return (
        <div className="task">
            <div className="">
                <div className="itemImg">Image Att.</div>
                <div
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignContent: "center",
                    }}
                >
                    Product : {product.itemName}
                </div>

                <div
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignContent: "center",
                    }}
                >
                    Category : {product.itemCategory}
                </div>

                <div
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignContent: "center",
                    }}
                >
                    Price : ${product.itemPrice}
                </div>

                <div
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignContent: "center",
                    }}
                >
                    Quantity : {product.itemQuantity}
                </div>
            </div>

            <div className="buttonContainer">
                <button
                    className="editBtn"
                    onClick={() => {
                        completeProduct(product.itemName);
                    }}
                >
                    <Icon as={FaPencilAlt} w={15} h={15} color="blue" />
                    {/* <EditIcon w={15} h={15} color="white" /> Edit */}
                </button>
                <button
                    className="deleteBtn"
                    onClick={() => {
                        completeProduct(product.itemName);
                    }}
                >
                    <DeleteIcon w={15} h={15} color="white" />
                </button>
            </div>
        </div>
    );
};

export default ProductsTask;
