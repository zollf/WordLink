import { action, makeObservable, observable, flow } from 'mobx';
import _getData from 'app/lib/getData';

class GlobalStore {
  _ready = false;

  currentPage = 'menu';
  previousPage = 'menu';
  currentDifficultyOpen = '';
  onStartingPage = true; // Always on starting page on initial load
  userInfo: UserData | Record<string, never> = {};

  constructor() {
    makeObservable(this, {
      _ready: observable,
      currentPage: observable,
      previousPage: observable,
      currentDifficultyOpen: observable,
      onStartingPage: observable,
      userInfo: observable,

      getDifficultyColor: action,
      setCurrentDifficultyOpen: action,
      setCurrentPage: action,
      setStartingPage: action,
      setUserInfo: action,
    });
  }

  init = flow(function* (this: GlobalStore) {
    const data = yield _getData();
    if (data.success) {
      this.setUserInfo(data.value);
      this._ready = true;
    }
  });

  setCurrentPage = (page: string) => {
    this.previousPage = this.currentPage;
    this.currentPage = page;
  };

  setCurrentDifficultyOpen = (difficulty: string) => (this.currentDifficultyOpen = difficulty);
  setStartingPage = (onPage: boolean) => (this.onStartingPage = onPage);
  setUserInfo = (info: UserData) => (this.userInfo = info);

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
