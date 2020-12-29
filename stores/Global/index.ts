import { observable, action, makeObservable } from "mobx";
class GlobalStore {
  currentPage = 'menu';
  previousPage = 'menu';
  currentDifficultyOpen = '';

  currentGameNumber = 0;
  currentGameDifficulty = '';

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      previousPage: observable,
      currentDifficultyOpen: observable,
      setCurrentDifficultyOpen: action,
      setCurrentPage: action,
      getDifficultyColor: action,
      currentGameNumber: observable,
      currentGameDifficulty: observable,
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

  loadGame = (gameId: number, difficulty: string) => {
    this.currentGameNumber = gameId;
    this.currentGameDifficulty = difficulty;
    this.setCurrentPage('game');
  }
}

const global = new GlobalStore();
export { GlobalStore };
export default global;