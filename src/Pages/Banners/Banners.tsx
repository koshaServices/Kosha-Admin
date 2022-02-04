import React, { FC, ChangeEvent, useState, useRef } from "react";
import BannerTask from "../../Components/BannerTask";
import { IBanner, IVisible } from "../../Interfaces/Interfaces";
import "./Banners.css";
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Icon,
    Modal,
    SimpleGrid,
    useDisclosure,
    useToast,
    Button,
    Center,
    Textarea,
    Spacer,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";
import { firestore } from "../../APIs/firebase";
import { doc } from "@firebase/firestore";
import { setDoc } from "firebase/firestore";

const Banners = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [linkURL, setLinkURL] = useState<string>("");
    const [bannerList, setBannerList] = useState<IBanner[]>([]);

    const toast = useToast();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "title") return setTitle(event.target.value);

        if (event.target.name === "linkURL")
            return setLinkURL(event.target.value);
    };

    const handleDescription = (
        event: ChangeEvent<HTMLTextAreaElement>
    ): void => {
        if (event.target.name === "description")
            return setDescription(event.target.value);
    };

    const addtitle = (): void => {
        const newTitle = {
            bannerTitle: title,
            bannerDescription: description,
            bannerLink: linkURL,
        };
        try {
            setBannerList([...bannerList, newTitle]);
            setTitle("");
            setDescription("");
            toFireStoreDB();
            toast({
                title: "Banner Saved.",
                description: "You've successfuly created a new Banner.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            onClose();
        } catch (e) {
            alert("Banner not added");
        }
    };

    const completeBanner = (titleNameToDelete: string): void => {
        setBannerList(
            bannerList.filter((title) => {
                return title.bannerTitle !== titleNameToDelete;
            })
        );
    };

    const storageLocation = "Banners";

    const toFireStoreDB = async () => {
        const _banner = doc(firestore, `/Admin/Banner/Banners/${title}`);

        const bannerData = {
            title: title,
            url: linkURL,
            description: description,
        };

        try {
            await setDoc(_banner, bannerData);

            setTitle("");
            setDescription("");
            setLinkURL("");
        } catch (error) {
            console.log(error);
            alert(`Banner not saved :\n  ${error}`);
        }
    };

    return (
        <>
            <Box bg="crimson" color="white">
                {/* <div className="contentGuides">
                        <div>Banners</div>
                        <Heading as='h3' size='md'>Banners</Heading>
                        <Button mt={4} onClick={onOpen} bg="#2f90ed">
                            + Add
                        </Button>
                    </div> */}

                <Flex>
                    <Heading as="h3" size="md">
                        Banners
                    </Heading>
                    <Spacer />
                    <Button mt={4} onClick={onOpen} bg="#2f90ed">
                        + Add
                    </Button>
                </Flex>

                <Flex>
                    <div>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <Center>
                                <Box
                                    p={4}
                                    w="50%"
                                    borderRadius="md"
                                    color="white"
                                    bg="teal"
                                >
                                    <Box textAlign="center">
                                        <Heading>Add Banner</Heading>
                                    </Box>

                                    <Box my={4} textAlign="left">
                                        <form>
                                            <FormControl>
                                                <FormLabel>Title</FormLabel>
                                                <Input
                                                    type="text"
                                                    placeholder="Title ..."
                                                    name="title"
                                                    value={title}
                                                    onChange={handleChange}
                                                />
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel htmlFor="description">
                                                    Description
                                                </FormLabel>
                                                <Textarea
                                                    id="description"
                                                    type="text"
                                                    placeholder="Description ..."
                                                    name="description"
                                                    value={description}
                                                    onChange={handleDescription}
                                                    resize={"vertical"}
                                                />
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>
                                                    Link (URL)
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    placeholder="http:// ..."
                                                    name="linkURL"
                                                    value={linkURL}
                                                    onChange={handleChange}
                                                />
                                            </FormControl>

                                            <div className="modalButtons">
                                                <Button
                                                    mt={4}
                                                    onClick={onClose}
                                                    bg="red"
                                                >
                                                    close
                                                </Button>
                                                <Button
                                                    mt={4}
                                                    type="submit"
                                                    onClick={addtitle}
                                                    bg="#2f90ed"
                                                >
                                                    <Icon as={FaSave} /> Save
                                                    Banner
                                                </Button>
                                            </div>
                                        </form>
                                    </Box>
                                </Box>
                            </Center>
                        </Modal>
                    </div>

                    <Box flex="1">
                        <Center>
                            <SimpleGrid columns={2} spacing={2}>
                                {bannerList.map(
                                    (title: IBanner, key: number) => {
                                        return (
                                            <Box>
                                                <BannerTask
                                                    key={key}
                                                    banner={title}
                                                    completeBanner={
                                                        completeBanner
                                                    }
                                                />
                                            </Box>
                                        );
                                    }
                                )}
                            </SimpleGrid>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Banners;
