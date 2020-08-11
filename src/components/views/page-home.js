import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable, toJS } from "mobx";
import Header from "../common/header";
import CatListings from "../cats/cat-listings";

@inject("store")
@observer

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
      myFamily: [],
      showFamily: false,
    };
  }

  componentDidMount() {
    this.getFamily();
  }

  //retrieves paginated cats, either from local memory OR from api.
  fetchCats = async (limit, offset, pageCount) => {
    let cats = this.state.cats;

    //load cats from local memory
    if (offset < cats.length) {
      console.log("loading from cache");
      let cachedCats = cats.slice(offset, offset + limit);

      return cachedCats;
    }
    //fetch cats from local api
    else {
      console.log("fetching from api");
      let newCats = await this.props.store.fetchCats(limit, pageCount);

      newCats.map((cat, index) => {
        cats.push(cat);
      });

      this.setState({ cats: cats });

      return newCats;
    }
  };

  addToFamily = (cat) => {
    this.props.store.addToFamily(cat);
  };

  removeFromFamily = (cat) => {
    this.props.store.removeFromFamily(cat);
  };

  getFamily = async () => {
    let family = await this.props.store.getFamily();
    this.setState({ myFamily: toJS(family)});
  };

  showFamily = () => {
    this.setState({ showFamily: !this.state.showFamily });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          familyCount={this.state.myFamily.length}
          familyVisible={this.state.showFamily}
          myFamily={this.state.myFamily}
          getFamily={this.getFamily}
          removeFromFamily={this.removeFromFamily}
          showFamily={this.showFamily}
        />
        <CatListings
          addToFamily={this.addToFamily}
          catCount={this.props.store.catCount}
          fetchCats={this.fetchCats}
          myFamily={this.state.myFamily}
          getFamily={this.getFamily}
          removeFromFamily={this.removeFromFamily}
        />
      </React.Fragment>
    );
  }
}

export default observer(View);
