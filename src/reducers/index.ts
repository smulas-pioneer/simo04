
import * as Redux from 'redux';
import products from './products';
import list from './list';
import * as model from '../common/interfaces';

//Root Reducer

export default Redux.combineReducers({
    products,
    list
});


export const getListItems = (state: model.StoreModel) => {
    return state.list.map(l => {
        const p = state.products.filter(p => p.id === l.id)[0];
        return p ? Object.assign({}, p, { checked: l.checked }) : null;
    }).filter(k=>k != null).sort((a,b)=>a.name.localeCompare(b.name));
}