import easy from '../data/easy';
import medium from '../data/medium';
import hard from '../data/hard';

const getLevel = (level: string) => {
  switch (level) {
    case 'easy':
      return easy;
    case 'medium':
      return medium;
    case 'hard':
      return hard;
    default:
      return {};
  }
};

export default getLevel;
