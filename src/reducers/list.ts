import {ReducerHost, Action} from '../helper/reduxHelper';
import * as model from '../common/interfaces';

let host = new ReducerHost<model.ListItem[]>([]);

host.register('ADD_LISTITEM', (s: model.ListItem[] = [], a: Action<string>) => {
    return s.filter(p => p.id !== a.payload).concat([{ id: a.payload, checked: false }]);
});

host.register('REMOVE_LISTITEM', (s: model.ListItem[] = [], a: Action<string>) => {
    return s.filter(p => p.id !== a.payload);
});

host.register('TOGGLE_LISTITEM', (s: model.ListItem[] = [], a: Action<string>) => {
    const item = s.filter(p => p.id == a.payload)[0];
    if (item) {
        return s.filter(p => p.id !== a.payload).concat(Object.assign(item,{checked: !item.checked}));
    } else {
        return s;
    }

});

export default host.reducer();

