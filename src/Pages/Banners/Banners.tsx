import React, { FC, ChangeEvent, useState, useRef } from "react";
import BannerTask from "../../Components/BannerTask";
import { IBanner } from "../../Interfaces/Interfaces";
import "../../App.css";
import './Banners.css';
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    useDisclosure,
} from "@chakra-ui/react";

const Banners: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = useRef<any>();
    const finalRef = useRef<any>();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>('');
    const [linkURL, setLinkURL] = useState<string>('');
    const [todoList, setTodoList] = useState<IBanner[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "title") {
            setTitle(event.target.value);
        } else {
            setDescription(event.target.value);
            setLinkURL(event.target.value)
        }
    };

    const addtitle = (): void => {
        const newTitle = { bannerTitle: title, bannerDescription: description, bannerLink: linkURL };
        setTodoList([...todoList, newTitle]);
        setTitle("");
        setDescription('');
    };

    const completeBanner = (titleNameToDelete: string): void => {
        setTodoList(
            todoList.filter((title) => {
                return title.bannerTitle !== titleNameToDelete;
            })
        );
    };

    return (
        // <div className="App">
        //     <div className="header">
        //         <div className="inputContainer">
        //             <Button onClick={onOpen}>+ Add</Button>
        //         </div>
        //         <div className="modaContainer">
        //             <Modal
        //                 initialFocusRef={initialRef}
        //                 finalFocusRef={finalRef}
        //                 isOpen={isOpen}
        //                 onClose={onClose}
        //             >
        //                 <ModalOverlay />
        //                 <ModalContent>
        //                     <ModalHeader>New Banner</ModalHeader>
        //                     <ModalCloseButton />
        //                     <ModalBody pb={6}>
        //                         <FormControl>
        //                             <input
        //                                 type="text"
        //                                 placeholder="Title ..."
        //                                 name="Title"
        //                                 value={title}
        //                                 onChange={handleChange}
        //                             />
        //                         </FormControl>

        //                         <FormControl mt={4}>
        //                             <input
        //                                 type="text"
        //                                 placeholder="Description ..."
        //                                 name="Description"
        //                                 value={description}
        //                                 onChange={handleChange}
        //                             />
        //                         </FormControl>

        //                         <FormControl mt={4}>
        //                             <input
        //                                 type="text"
        //                                 placeholder="http://"
        //                                 name="Link (URL)"
        //                                 value={description}
        //                                 onChange={handleChange}
        //                             />
        //                         </FormControl>
        //                     </ModalBody>

        //                     <ModalFooter>
        //                         <Button
        //                             onClick={addtitle}
        //                             colorScheme="blue"
        //                             mr={3}
        //                         >
        //                             Save
        //                         </Button>
        //                         <Button onClick={onClose}>Cancel</Button>
        //                     </ModalFooter>
        //                 </ModalContent>
        //             </Modal>
        //         </div>
        //     </div>
        //     <div className="todoList">
        //         <SimpleGrid columns={2} spacing={10}>
        //             {todoList.map((title: IBanner, key: number) => {
        //                 return (
        //                     <Box bg="blue" height="100px">
        //                         <BannerTask
        //                             key={key}
        //                             banner={title}
        //                             completeBanner={completeBanner}
        //                         />
        //                     </Box>
        //                 );
        //             })}
        //         </SimpleGrid>
        //     </div>
        // </div>

        <Container>
            <Flex>
                <Center></Center>
            </Flex>
        </Container>
    );
};

export default Banners;
