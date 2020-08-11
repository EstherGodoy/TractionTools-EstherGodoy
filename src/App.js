import React, { Component } from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
import Store from "./store";
import { decorate, observable, action } from "mobx";
import Home from "./components/views/page-home";
import "./styles/app.scss";

decorate(Store, {
  catCount: observable,
  myFamily: observable,
  addToFamily: action,
  getFamily: action,
  removeFromFamily: action,
});

const catsStore = new Store();

class App extends Component {
  render() {
    return (
      <Provider store={catsStore}>
        <BrowserRouter>
          <div className="container">
            <Route
              exact
              path="/"
              render={() => <Home history={this.props.history} />}
            />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
