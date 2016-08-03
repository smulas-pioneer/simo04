import * as React from 'react';
import * as model from '../common/interfaces'
import {connect} from 'react-redux';
import * as Redux from 'redux';
import * as Actions from '../actions';
import {getListItems} from '../reducers'

export interface ListItemProps {
    items?: { id: string, name: string, checked: boolean }[];
    products?: model.Product[];
    dispatch?: Redux.Dispatch<any>;
}

const ListItems: React.StatelessComponent<ListItemProps> = (props) => {
    return <div>
        <h2>Current List</h2>
        <ul className='list'>
            {props.items.map((p, i) => {
                return <li key={i} className={p.checked && 'checked'}>
                    {p.id} - {p.name}
                    {'   '}
                    <a onClick= {_ => { props.dispatch(Actions.removeListItem(p.id)) } }>[remove]</a>
                    {'   '}
                    <a onClick= {_ => { props.dispatch(Actions.toggleListItem(p.id)) } }>[toggle]</a>
                </li>
            }) }
            { props.products.length &&
            <li>
                <select onChange={()=>{console.log('hello')}}>
                    <option>...choose a value</option>
                    {
                        props.products.map((p,i)=>{
                            return <option key={i} value={p.id}>
                                {p.name}
                                </option>
                        })
                    }
                </select>
            </li>
            }
        </ul>
    </div>
}

const mapStateToProps = (s: model.StoreModel) => {
    return {
        items: getListItems(s),
        products: s.products
    }
};

export default connect(mapStateToProps)(ListItems);
