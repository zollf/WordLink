import easy from '../data/easy';
import medium from '../data/medium';
import hard from '../data/hard';

const getLevel = (level: string) : Games => {
  switch (level) {
    case 'easy':
      return easy;
    case 'medium':
      return medium;
    case 'hard':
      return hard;
    default:
      return {} as Games;
  }
};

export default getLevel;