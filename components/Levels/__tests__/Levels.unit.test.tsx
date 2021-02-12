import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/stores/mocks/GlobalMock';
import GameMock from 'app/stores/mocks/GameMock';

import Levels from '../';

GlobalMock.currentDifficultyOpen = 'easy';

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <Levels />
  </Provider>
);

describe('<Levels />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click works correctly', () => {
    wrapper.root.findAllByProps({ 'data-test-id': 'level-card' })[0].props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled();
    expect(GameMock.loadGame).toBeCalled();
  });
});
