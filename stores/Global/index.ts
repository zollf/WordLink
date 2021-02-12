import { action, makeObservable, observable } from 'mobx';
class GlobalStore {
  currentPage = 'menu';
  previousPage = 'menu';
  currentDifficultyOpen = '';
  onStartingPage = true; // Always on starting page on initial load

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      previousPage: observable,
      currentDifficultyOpen: observable,
      onStartingPage: observable,

      getDifficultyColor: action,
      setCurrentDifficultyOpen: action,
      setCurrentPage: action,
      setStartingPage: action,
    });
  }

  setCurrentPage = (page: string) => {
    this.previousPage = this.currentPage;
    this.currentPage = page;
  };

  setCurrentDifficultyOpen = (difficulty: string) => (this.currentDifficultyOpen = difficulty);
  setStartingPage = (onPage: boolean) => (this.onStartingPage = onPage);

  getDifficultyColor = (difficulty: string) => {
    const color: Colors = {
      easy: 'green',
      medium: 'orange',
      hard: 'red',
      '': 'lightGrey',
    };
    return color[difficulty];
  };
}

const global = new GlobalStore();
export { GlobalStore };
export default global;
