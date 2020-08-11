// src/App.js

import React, { Component } from 'react';
import Product from './components/product';
import { Provider } from 'mobx-react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Store from './store';
import { decorate, observable, action } from 'mobx';
import Home from './components/views/home';
import Auth from './components/auth/auth';
import Callback from './callback/callback';
import './app.css';


decorate(Store, {
  products: observable,
  addToCart: action,
  increaseQuantityInCart: action,
  decreaseQuantityInCart: action,
  removeFromCart: action,
  currentCart: observable,
  loading: observable
});

const shoppingStore = new Store();

// src/App.js

class App extends Component {
  render() {
    return (
      <Provider store={shoppingStore}>
        <Auth />
        <div className='container'>
          <Route
            exact
            path='/callback'
              render={() => <Callback auth={this.props.auth} />}
          />
          <Route
            exact
            path='/'
            render={() => (
              <Home
                history={this.props.history}
                auth={this.props.auth}
              />
            )}
          />
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
