import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Container,
    Icon,
    useDisclosure,
    Modal,
    useToast,
    MenuButton,
    Button,
    Menu,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import {
    Select,
    CreatableSelect,
    AsyncSelect,
    OptionBase,
    GroupBase,
} from "chakra-react-select";
import React, { ChangeEvent, useState } from "react";
import { FaShower } from "react-icons/fa";
import { ICategory } from "../../Interfaces/Interfaces";
import { CategoryCollection, IconsCollection } from "./CategoryCollection";
import CategoryTask from "./CategoryTask";

interface IconOption extends OptionBase {
    icon: any;
    value: any;
}

const Categories: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [categoryList, setCategoryList] = useState(CategoryCollection);
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);

    const [categoryName, setCategoryName] = useState<string>("");
    const [categoryIcon, setCategoryIcon] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "categoryName")
            return setCategoryName(event.target.value);
        if (event.target.name === "categoryIcon")
            return setCategoryIcon(event.target.value);
    };

    const toast = useToast();

    const addCategory = (): void => {
        const newName = {
            categoryName: categoryName,
            categoryIcon: categoryIcon,
        };

        try {
            setCategoryList([...categoryList, newName]);
            setCategoryIcon("");
            setCategoryName("");
            toast({
                title: "Category Saved.",
                description: "You've successfuly created a new category.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            onClose();
        } catch (e) {
            alert("Failed to add new category");
        }
    };

    const completeCategory = (categoryNameToDelete: string): void => {
        setCategoryList(
            categoryList.filter((title) => {
                return title.categoryName !== categoryNameToDelete;
            })
        );
    };

    return (
        <>
            <Center w="300px" bg="green.500">
                <div
                    className="categoriesNav"
                    style={{
                        marginTop: 60,
                        padding: 5,
                    }}
                >
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
                            onClick={onOpen}
                            style={{
                                color: "white",
                                background: "cyan",
                                borderRadius: 5,
                                cursor: 'pointer'
                            }}
                        >
                            Manage All
                        </span>
                    </div>

                    <div
                        // style={{
                        //     flexDirection: "column",
                        //     justifyContent: "space-around",
                        //     marginTop: 30,
                        //     padding: 5,
                        // }}
                    >
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <div className="modalContainer">
                                <div className="catIcon">
                                    {/* <input
                                        type="text"
                                        placeholder="Icon"
                                        name="categoryIcon"
                                        value={categoryIcon}
                                        onChange={handleChange}
                                    /> */}

                                    {/* <Menu>
                                        <MenuButton
                                            as={Button}
                                            rightIcon={<ChevronDownIcon />}
                                        >
                                            <Icon as={FaShower} />
                                        </MenuButton>
                                        <MenuList>
                                            {IconsCollection.map(
                                                (item: any) => {
                                                    return (
                                                        <MenuItem>
                                                            <Icon
                                                                as={item.icon}
                                                            />
                                                        </MenuItem>
                                                    );
                                                }
                                            )}
                                        </MenuList>
                                    </Menu> */}

                                    <Select<
                                        IconOption,
                                        true,
                                        GroupBase<IconOption>
                                    >
                                        id="icon"
                                        name="icon"
                                        options={IconsCollection}
                                        placeholder="Icon"
                                        closeMenuOnSelect={false}
                                        size="sm"
                                    />
                                </div>

                                <div className="catName">
                                    <input
                                        type="text"
                                        placeholder="Category Name"
                                        name="categoryName"
                                        value={categoryName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="modalButtons">
                                    <div
                                        className="modalClose"
                                        onClick={onClose}
                                    >
                                        X
                                    </div>
                                    <div
                                        className="modalAdd"
                                        onClick={addCategory}
                                    >
                                        Save
                                    </div>
                                </div>
                            </div>
                        </Modal>

                        {categoryList.map((title: ICategory, key: number) => {
                            return (
                                <div style={{ marginBottom: 15 }}>
                                    {/* <span className="categoryItem"> */}
                                    <CategoryTask
                                        key={key}
                                        category={title}
                                        completeCategory={completeCategory}
                                    />
                                    {/* </span> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Center>
        </>
    );
};

export default Categories;
