export interface StoreModel {
    products?: Product[];
    list?: ListItem[];
}

export interface Product {
    id: string;
    name: string;
}

export interface ListItem {
    id: string;
    checked: boolean;
}

export const TYPES = {
    ADD_PRODUCT:'ADD_PRODUCT'
}