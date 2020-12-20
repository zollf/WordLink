import { observable, action, makeObservable } from "mobx";

class GlobalStore {
  currentPage: string = 'menu';
  previousPage: string = 'menu';

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      previousPage: observable,
      setCurrentPage: action
    });
  }

  setCurrentPage = (page: string) => {
    this.previousPage = this.currentPage;
    this.currentPage = page;
  }
}

const global = new GlobalStore();
export default global;