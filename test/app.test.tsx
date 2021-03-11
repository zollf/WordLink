import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore there are two app file names [json, tsx], todo: work-around
import App from '../App.tsx';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

const component = <App />;

jest.mock('app/stores', () => {
  const global = require('app/stores/Global');
  const game = require('app/stores/Game');
  global._ready = true;
  global.onStartingPage = true;

  return {
    global: global,
    gameStore: game,
  };
});

describe('<App/>', () => {
  let wrapper!: ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
