
import * as Redux from 'redux';
import products from './products';
import list from './list';

//Root Reducer

export default Redux.combineReducers({
    products,
    list
});
