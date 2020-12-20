import { observable, action, makeObservable } from "mobx";

class GlobalStore {
  currentPage: string = 'menu';

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      setCurrentPage: action
    });
  }

  setCurrentPage = (page: string) => {
    console.log('hello');
    this.currentPage = page;
  }
}

const global = new GlobalStore();
export default global;