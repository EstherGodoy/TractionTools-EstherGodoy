import createAuth0Client from '@auth0/auth0-spa-js';
import {Component} from 'react';
import {inject } from 'mobx-react';
@inject('store')

class Auth extends Component{

  async componentWillMount(){
    let auth0 = await createAuth0Client({
        domain: 'dev-ggf-3ctc.us.auth0.com',
        client_id: 'lOU29iCa5EMCQLbl5rBGwcaV8UUxMR88',
        redirect_uri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    this.props.store.initialize(auth0);
    this.props.store.setLoader(false);
  }

  render(){
    return(null);
  }
}

export default Auth;
