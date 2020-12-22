import { observable, action, makeObservable } from "mobx";
class GlobalStore {
  currentPage = 'menu';
  previousPage = 'menu';
  currentDifficultyOpen = '';

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      previousPage: observable,
      currentDifficultyOpen: observable,
      setCurrentDifficultyOpen: action,
      setCurrentPage: action,
      getDifficultyColor: action,
    });
  }

  setCurrentPage = (page: string) => {
    this.previousPage = this.currentPage;
    this.currentPage = page;
  };

  setCurrentDifficultyOpen = (difficulty: string) => {
    this.currentDifficultyOpen = difficulty;
  };

  getDifficultyColor = (difficulty: string) => {
    const color: Colors = {
      'easy' : 'green',
      'medium': 'orange_2',
      'hard': 'red',
      '' : 'lightGrey',
    };
    return color[difficulty];
  };
}

const global = new GlobalStore();
export default global;