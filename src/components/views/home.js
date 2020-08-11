import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from '../common/header';
import Main from '../common/main';

@inject('store')
@observer

class View extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cats: [],
    }
  }

  //retrieves paginated cats, either from local memory OR from api.

  fetchCats = async (limit, offset, pageCount) => {
    let cats = this.state.cats;

    //load cats from local memory
    if (offset < cats.length) {
      console.log('loading from cache');
      let cachedCats = cats.slice(offset, offset + limit);

      return cachedCats;
    }
    //fetch cats from local api
    else {
      console.log('fetching from api');
      let newCats = await this.props.store.fetchCats(limit, pageCount);

      newCats.map((cat, index) => {
        cats.push(cat);
      });

      this.setState({cats: cats});

      return newCats;
    }
  }

  login = () => {
    this.props.store.auth0.loginWithRedirect();
  }

  logout = () => {
    this.props.store.auth0.logout();
  }

  render() {
    console.log('home', this.props.store.auth0);
    return (
      <React.Fragment>
        <Header login={this.login} logout={this.logout} auth={this.props.store.authenticated} />
        <Main fetchCats={this.fetchCats} catCount={this.props.store.catCount}/>
      </React.Fragment>
    )
  }
}

export default observer(View);
