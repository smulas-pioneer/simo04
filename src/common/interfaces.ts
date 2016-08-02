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