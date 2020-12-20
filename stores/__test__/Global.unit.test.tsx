import { global } from '../index';

describe('Global Store', () => {
  it('set current page works correctly', () => {
    global.setCurrentPage('index');
    expect(global.currentPage).toBe('index');
  });
});

