import { observable, action, makeObservable } from "mobx";
import { dictionary, getLevel } from '../../data';

class GameStore {
  gameId = 0;
  difficulty = '';
  inGame = false;
  loaded = false;
  error = false;
  game?: Game;
  
  currentWord = '';
  selectedLetter = '';
  stepNumber = 0;
  path: string[] = [];
  visited = {};

  constructor() {
    makeObservable(this, {
      inGame:             observable,
      gameId:             observable,
      path:               observable,
      difficulty:         observable,
      selectedLetter:     observable,
      currentWord:        observable,
      stepNumber:         observable,
      loaded:             observable,
      error:              observable,

      getNewLetters:      action,
      isWord:             action,
      loadGame:           action,
      startGame:          action,
      setSelectedLetter:  action,
      changeLetter:       action,
      resetCurrentWord:   action,
      undo:               action,
      clearGame:          action,
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

    this.game = getLevel(difficulty)[gameId].game;

    if (this.game && this.game.start && this.game.end) {
      this.loaded = true;
    } else {
      this.error = true;
    }
  };

  /**
   * Starts the game
   */
  startGame = () => {
    if (this.game) {
      this.inGame = true;
      this.currentWord = this.game.start;
      this.path.push(this.currentWord);
      this.visited[this.currentWord] = true;
    } else {
      // log error
    }
  };

  /**
   * Finds all letters from the branching words
   * @param word , the word we want to branch off
   * @return letters , of all the new branching words
   */
  getNewLetters = (): string[] => {
    const letters: string[] = [];
    const wordArr = this.currentWord.split('');
    wordArr.forEach((_, i: number): void => {
      for (let j = 0; j < 26; j++) {
        const newLetter = String.fromCharCode(j + 65);
        const temp = wordArr[i];
        wordArr[i] = newLetter;
        if (this.isWord(wordArr.join('')) && !letters.includes(newLetter)) {
          letters.push(newLetter.toUpperCase());
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
    return !!dictionary[word.toUpperCase()];
  };

  setSelectedLetter = (letter: string) => {
    if (this.selectedLetter === letter) {
      this.selectedLetter = '';
    } else {
      this.selectedLetter = letter;
    }
  };


  /**
   * Change the letter from the current selected letter
   * @param index 
   */
  changeLetter = (index: number) => {
    if (this.selectedLetter) {
      const newWordArr = this.currentWord.split("");
      newWordArr[index] = this.selectedLetter;
      const newWord = newWordArr.join("");

      // The new word is a valid word and has not been visited
      if (this.isWord(newWord) && !this.visited[newWord]) {
        // Add to path
        this.path.push(newWord);
        this.stepNumber++;

        // Replace Current word with the newly made word
        this.currentWord = newWord;

        // Reset current selected letter
        this.selectedLetter =  '';

        // Add to visited
        this.visited[newWord] = true;
      }
    }
  };

  /**
   * Resets the word back to starting
   */
  resetCurrentWord = () => {
    this.stepNumber = 0;
    this.currentWord = this.path[this.stepNumber];
    this.path = [this.currentWord];
    this.visited = {};
  };

  /**
   * Undo the current step, move back one in the path
   */
  undo = () => {
    if (this.stepNumber > 0) {
      this.visited[this.path[this.stepNumber]] = false; 
      this.stepNumber--;
      this.currentWord = this.path[this.stepNumber];
      this.path.pop();
    }
  };

  /**
   * Clears the game, force reset
   */
  clearGame = () => {
    this.inGame = false;
    this.path = [];
    this.loaded = false;
    this.error = false;
    this.stepNumber = 0;
    this.visited = {};
  };
}

const gameStore = new GameStore();
export { GameStore };
export default gameStore;