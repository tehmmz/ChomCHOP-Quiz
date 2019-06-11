import React from 'react';
import ReactDOM from 'react-dom';
import './MyStyle.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ProductReducer from './Component/productReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(ProductReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
