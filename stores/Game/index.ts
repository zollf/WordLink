import { observable, action, makeObservable } from "mobx";
import dictionary from '../../data/dictionary/dictionary';

class GameStore {
  inGame = false;
  gameId = 0;
  difficulty = '';
  game = {
    start: 'forty',
    end: 'fifty',
    path: 5,
  }
  path: string[] = [];
  currentWord = '';
  
  constructor() {
    makeObservable(this, {
      loadGame: action,
      startGame: action,
      inGame: observable,
      gameId: observable,
      path: observable,
      getNewLetters: action,
      isWord: action,
      difficulty: observable,
    });
  }

  /**
   * Loads the game file into the store
   * @param gameId 
   * @param difficulty 
   */
  loadGame = (gameId: number, difficulty: string) => {
    this.gameId = gameId;
    this.difficulty = difficulty;

    // Load Game TODO
    this.game = this.game;
  };

  /**
   * Starts the game
   */
  startGame = () => {
    this.inGame = true;
    this.currentWord = this.game.start;
  };

  /**
   * Finds all letters from the branching words
   * @param word , the word we want to branch off
   * @return letters , of all the new branching words
   */
  getNewLetters = (): string[] => {
    const letters: string[] = [];
    const wordArr = this.currentWord.toUpperCase().split('');
    wordArr.forEach((_, i: number): void => {
      for (let j = 0; j < 26; j++) {
        const newLetter = String.fromCharCode(j + 65);
        const temp = wordArr[i];
        wordArr[i] = newLetter;
        if (this.isWord(wordArr.join('')) && !letters.includes(newLetter)) {
          letters.push(newLetter);
        }
        wordArr[i] = temp;
        
      }
    });
    return letters;
  };

  /**
   * Checks if a word is a valid word
   * @param word , word to check if it is within the dictionary 
   * @return if the word is included in the dictionary
   */
  isWord = (word: string): boolean => {
    return !!dictionary[word];
  };
}

const gameStore = new GameStore();
export { GameStore };
export default gameStore;