import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { store } from './components/Store/store';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Products from './components/Public/Product';
import Home from './components/Public/Home'
import Navbar from './components/Public/Navbar';
import CategoryExplorer from './components/Public/CategorySearch';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar/>  
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/products" component={Products}/>
          <Route path="/categories" component={CategoryExplorer}/>
          <Route path="/catalogo" component={Products}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
