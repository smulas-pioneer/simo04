import * as React from 'react';
import * as model from '../common/interfaces'
import {connect} from 'react-redux';
import * as Redux from 'redux';
import * as Actions from '../actions';

export interface ProductListProps {
    products?: model.Product[],
    dispatch?: Redux.Dispatch<any>
}

const ProductList: React.StatelessComponent<ProductListProps> = (props) => {
    let input: HTMLInputElement;

    const addProduct = () => {
        if (input.value) {
            props.dispatch(Actions.addProduct(input.value));
            input.value = '';
            input.focus();
        }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode == 13) {
            addProduct();
        }
    }
    return <div>
        <h2>Product Database</h2>
        <ul className='list'>
            {props.products.map((p, i) => {
                return <li key={i}>{p.id} - {p.name}
                    {'   '}
                    <a onClick= {_ => { props.dispatch(Actions.removeProduct(p.id)) } }>[remove]</a>
                </li>
            }) }
        </ul>
        <hr/>
        Add New: {' '}         
        <input  type='text'
            ref={e => input = e  }
            onKeyDown = {handleKeyDown}
            autoFocus = {true}
            />
        <button onClick ={addProduct}>Add</button>

    </div>
}

const mapStateToProps = (s: model.StoreModel) => {
    return {
        products: s.products
    }
};

export default connect(mapStateToProps)(ProductList);
