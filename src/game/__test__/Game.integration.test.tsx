import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';
import GameMock from '../../../stores/mocks/GameMocks';

import Game from '../';

import renderer from 'react-test-renderer';

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

  it('loaded game matches snapshot', () => {
    wrapper.update(component);

    expect(wrapper).toMatchSnapshot();
  });
});