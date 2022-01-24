import React, { FC, ChangeEvent, useState, useRef } from "react";
import BannerTask from "../../Components/BannerTask";
import { IBanner, IVisible } from "../../Interfaces/Interfaces";
import "../../App.css";
import "./Banners.css";
import {
    Box,
    Container,
    Flex,
    Icon,
    Modal,
    SimpleGrid,
    useDisclosure,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const Banners = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [linkURL, setLinkURL] = useState<string>("");
    const [bannerList, setBannerList] = useState<IBanner[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "title") return setTitle(event.target.value);

        if (event.target.name === "description")
            return setDescription(event.target.value);

        if (event.target.name === "linkURL")
            return setLinkURL(event.target.value);
    };

    const addtitle = (): void => {
        const newTitle = {
            bannerTitle: title,
            bannerDescription: description,
            bannerLink: linkURL,
        };
        setBannerList([...bannerList, newTitle]);
        setTitle("");
        setDescription("");
    };

    const completeBanner = (titleNameToDelete: string): void => {
        setBannerList(
            bannerList.filter((title) => {
                return title.bannerTitle !== titleNameToDelete;
            })
        );
    };

    return (
        <Container>
            <div className="contentGuides">
                <div>Banners</div>
                <button onClick={onOpen}>+ Add</button>
            </div>
            <Flex>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <div className="modalContainer">
                        <div className="modalTitle">
                            Description
                            <input
                                type="text"
                                placeholder="Title ..."
                                name="title"
                                value={title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modalTitle">
                            Description
                            <input
                                type="text"
                                placeholder="Description ..."
                                name="description"
                                value={description}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modalTitle">
                            Link (URL)
                            <input
                                type="text"
                                placeholder="http:// ..."
                                name="linkURL"
                                value={linkURL}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="modalButtons">
                            <div className="modalClose" onClick={onClose}>
                                Close
                            </div>
                            <div className="modalSend" onClick={addtitle}>
                                <Icon as={FaSave} /> Save Banner
                            </div>
                        </div>
                    </div>
                </Modal>

                <Box flex="1">
                    <SimpleGrid columns={2} spacing={5}>
                        {bannerList.map((title: IBanner, key: number) => {
                            return (
                                <Box>
                                    <BannerTask
                                        key={key}
                                        banner={title}
                                        completeBanner={completeBanner}
                                    />
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            </Flex>
        </Container>
    );
};

export default Banners;
