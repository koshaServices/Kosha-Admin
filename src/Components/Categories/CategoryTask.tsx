import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import { ICategory } from "../../Interfaces/Interfaces";

interface Props {
    category: ICategory;
    completeCategory(CategoryNameToDelete: string): void;
}

const CategoryTask = ({ category, completeCategory }: Props) => {
    return (
        // <div className="catList">
                <div style={{color:'black'}}>{category.categoryIcon}{" "}{category.categoryName}</div>
                //<div className="catName"></div>
           
        // </div>
    );
};

export default CategoryTask;