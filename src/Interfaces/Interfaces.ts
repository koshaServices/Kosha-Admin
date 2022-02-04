export interface IBanner{
    bannerTitle: string;
    bannerDescription: string;
    bannerLink: string;
}

export interface IShop{
    itemName: string;
    itemCategory: string;
    itemPrice: number;
    itemQuantity: number;
}

export interface ICategory{
    categoryName: string;
    categoryIcon: string;
}

export interface IVisible{
    visible: boolean;
}