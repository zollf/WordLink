import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';
import GameMock from '../../../stores/mocks/GameMock';
import { getLevel } from '../../../data';

import Game from '../';

import renderer from 'react-test-renderer';

GameMock.id = 1;
GameMock.difficulty = 'easy';
GameMock.inGame = true;

const game = getLevel('easy')![1].game;
GameMock.game = game;
GameMock.currentWord = game.start;
GameMock.path = [game.start];

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <Game />
  </Provider>
);

describe('<Game />', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});