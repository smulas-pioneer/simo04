import {ReducerHost, Action} from '../helper/reduxHelper';
import * as model from '../common/interfaces';

let host = new ReducerHost<model.Product[]>();

host.register('ADD_PRODUCT',(s:model.Product[] = [],a:Action<model.Product>) =>{
    return s.concat(a.payload);
});

host.register('REMOVE_PRODUCT',(s:model.Product[] = [],a:Action<string>) =>{
    return s.filter(p=>p.id !== a.payload);
});

export default host.reducer();

