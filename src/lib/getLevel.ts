const getLevel = (level: string) => {
  switch (level) {
    case 'easy':
      return require('app/data/levels/easy.json');
    case 'medium':
      return require('app/data/levels/medium.json');
    case 'hard':
      return require('app/data/levels/hard.json');
    default:
      return {};
  }
};

export default getLevel;
