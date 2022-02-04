import React from "react";
import { IBanner } from "../Interfaces/Interfaces";
import { Button, Icon, Box, useToast, VStack, Image } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import "../Pages/Banners/Banners.css";

interface Props {
    banner: IBanner;
    completeBanner(BannerNameToDelete: string): void;
}

const BannerTask = ({ banner, completeBanner }: Props) => {
    const toast = useToast();

    const deleteBanner = () => {
        completeBanner(banner.bannerTitle);
        toast({
            title: "Banner Deleted.",
            description: `You have deleted ${banner.bannerTitle} banner.`,
            status: "error",
            duration: 9000,
            isClosable: true,
        });
    };
    return (
        <Box maxW="sm" display="flex" p={4} borderRadius="md" bg="pink">
            {/* <div className="content"> */}

            {/* <Box>
                    Title : <span>{banner.bannerTitle}</span>
                    Description : <span>{banner.bannerDescription}</span>
                    Link : <span>{banner.bannerLink}</span>
                </Box> */}
            <Box p={2}>
                <Image src="https://bit.ly/2Z4KKcF" alt="Testing out images" />
                <Box p={2} h="25px" bg="crimson" color="white">
                    Title : {banner.bannerTitle}
                </Box>
                <Box p={2} h="25px" bg="crimson" color="white">
                    Description : {banner.bannerDescription}
                </Box>
                <Box p={2} h="25px" bg="crimson" color="white">
                    Link : {banner.bannerLink}
                </Box>
            </Box>
            {/* </div> */}

            <div className="buttonContainer">
                <Button
                    mt={4}
                    bg="#2f90ed"
                    onClick={() => {
                        completeBanner(banner.bannerTitle);
                    }}
                >
                    <EditIcon w={15} h={15} color="white" /> Edit
                </Button>
                <Button mt={4} bg="red" onClick={deleteBanner}>
                    <DeleteIcon w={15} h={15} color="white" /> Remove
                </Button>
            </div>
            {/* </div> */}
        </Box>
    );
};

export default BannerTask;
