import { getLevel } from './';

const isUpperCase = (str: string) => {
  return str === str.toUpperCase();
};

describe('Level Data', () => {
  it('data is all uppercase', () => {
    const levels = ['easy', 'medium', 'hard'];
    levels.forEach((l: string) => {
      const level = getLevel(l);
      expect(level).not.toBeUndefined();
      if (level) {
        Object.keys(level).forEach((key: string) => {
          expect(isUpperCase(level[key].game.start)).toBe(true);
          expect(isUpperCase(level[key].game.end)).toBe(true);
        });
      }
    });
  });
});
