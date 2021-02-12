import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/stores/mocks/GlobalMock';
import GameMock from 'app/stores/mocks/GameMock';

import CurrentWord from '../';

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <CurrentWord />
  </Provider>
);

describe('<CurrentWord />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click works correctly', () => {
    wrapper.root.findAllByProps({ 'data-test-id': 'letter' })[0].props.onPress();
    expect(GameMock.changeLetter).toBeCalled();
  });
});
