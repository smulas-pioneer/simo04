import {Action,actionCreator} from '../helper/reduxHelper';
import * as model from '../common/interfaces';

let productId = 0;

export const addProduct = (name:string) =>{
    return actionCreator<model.Product>('ADD_PRODUCT',{
        name:name,
        id: (++productId).toString()
    } );
}

export const removeProduct = (id:string) => {
    return actionCreator<string>('REMOVE_PRODUCT',id);
}

export const addListItem = (id: string) => actionCreator<string>('ADD_LISTITEM',id);

export const removeListItem = (id: string) => actionCreator<string>('REMOVE_LISTITEM',id);

export const toggleListItem = (id: string) => actionCreator<string>('TOGGLE_LISTITEM',id);
