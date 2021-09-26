import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Edu7App } from './Edu7App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';

ReactDOM.render(
 <Provider store={store}>
   <Edu7App />,
 </Provider>,
 
  document.getElementById('root')
);
