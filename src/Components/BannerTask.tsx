import React from "react";
import { IBanner } from "../Interfaces/Interfaces";
import { Icon } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

interface Props {
    banner: IBanner;
    completeBanner(BannerNameToDelete: string): void;
}

const BannerTask = ({ banner, completeBanner }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{banner.bannerTitle}</span>
                <span>{banner.bannerDescription}</span>
                <span>{banner.bannerLink}</span>
            </div>

            <div className="buttonContainer">
                <button
                    className="editBtn"
                    onClick={() => {
                        completeBanner(banner.bannerTitle);
                    }}
                >
                    <EditIcon w={15} h={15} color="white" />
                </button>
                <button
                    className="deleteBtn"
                    onClick={() => {
                        completeBanner(banner.bannerTitle);
                    }}
                >
                    <DeleteIcon w={15} h={15} color="white" />
                </button>
            </div>
        </div>
    );
};

export default BannerTask;
