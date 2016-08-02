import {ReducerHost, Action} from '../helper/reduxHelper';
import * as model from '../common/interfaces';

let host = new ReducerHost<model.ListItem[]>();

host.register('ADD_LISTITEM', (s: model.ListItem[] = [], a: Action<string>) => {
    return s.concat([{ id: a.payload, checked: false }]);
});

host.register('REMOVE_LISTITEM', (s: model.ListItem[] = [], a: Action<string>) => {
    return s.filter(p => p.id !== a.payload);
});

export default host.reducer();

