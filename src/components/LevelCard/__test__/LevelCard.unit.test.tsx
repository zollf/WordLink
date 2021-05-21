import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/src/stores/mocks/GlobalMock';
import GameMock from 'app/src/stores/mocks/GameMock';

import LevelCard from '..';

const number = '1';
const level: Level = {
  title: 'hello',
  difficulty: 'easy',
  game: {
    start: 'FORTY',
    end: 'FIFTY',
    path: 5,
  },
};

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <LevelCard level={level} number={number} difficulty="easy" />
  </Provider>
);

describe('<LevelCard/>', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('function clicks correctly', () => {
    wrapper.root.findAllByProps({ 'data-test-id': `level-card` })[0].props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled();
    expect(GameMock.loadGame).toBeCalled();
  });
});
