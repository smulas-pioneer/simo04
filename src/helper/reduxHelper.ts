import * as Redux from 'redux';

export class ReducerHost<T> {

    private handlers: { [type: string]: (state: T, action: Action<any>) => T };

    public register(actionType: string, reducer: (state: T, action: Redux.Action) => T) {
        this.handlers[actionType] = reducer;
    }

    public reducer = () => {
        return (state: T, action: Action<any>) => {
            const reducer = this.handlers[action.type];
            if (reducer) {
                return reducer(state, action);
            } else {
                return state;
            }
        }
    }

}

export function reducer<T>(handlers: { [type: string]: (state: T, action: Action<any>) => T }) {
    return () => {
        return (state: T, action: Action<any>) => {
            const reducer = handlers[action.type];
            if (reducer) {
                return reducer(state, action);
            } else {
                return state;
            }
        }
    }
}

export interface Action<T> extends Redux.Action {
    payload: T
}

export function actionCreator<T>(type: string, payload: T) {
    return {
        type,
        payload
    }
}






let host = new ReducerHost<model.Product[]>();

host.register('ADD_PRODUCT', (s: model.Product[], a: Action<model.Product>) => {
    return s.concat(a.payload);
});

export default host.reducer();




