import React, { Component } from "react";
import { Provider } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
import CatsStore from "./store";
import { decorate, observable, action } from "mobx";
import Home from "./components/views/page-home";
import "./styles/app.scss";

decorate(CatsStore, {
  catCount: observable,
  myFamily: observable,
  addToFamily: action,
  getFamily: action,
  removeFromFamily: action,
});

const catsStore = new CatsStore();

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

export default (App);
