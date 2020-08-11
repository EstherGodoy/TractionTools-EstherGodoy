import { observable, runInAction, decorate } from "mobx";
import axios from "axios";

class Store {
  apiUrl = "https://api.thecatapi.com/v1/images/search?category_ids=14";
  apiKey = "57bec5b1-4ec4-4e55-8da6-c82a6cb58efa";
  catCount = 0;
  myFamily = [];

  fetchCats = async (limit, pageCount) => {
    //set params
    let apiUrlParams = this.apiUrl + "&limit=" + limit + "&page=" + pageCount + "&order=DESC";

    try {
      const response = await axios.get(apiUrlParams, {
        headers: { "x-api-key": this.apiKey },
      });

      //set cat count
      this.catCount = response.headers["pagination-count"];

      return response.data;
    } catch (error) {
      console.log("cat fetch unsuccessful", error);
    }
  };

  addToFamily = async (cat) => {
    //check to see if cat is already in family
    let alreadyAdded = this.myFamily.some((e) => e.id === cat.id);

    //if not, add to fam
    if (!alreadyAdded) this.myFamily.push(cat);
  };

  removeFromFamily = async (cat) => {
    //finds cat index
    var removeIndex = this.myFamily.map(function (e) {return e.id;}).indexOf(cat.id);

    //then removes it
    this.myFamily.splice(removeIndex, 1);
  };

  getFamily = async () => {
    return this.myFamily;
  };
}

export default Store;
