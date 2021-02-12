import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/stores/mocks/GlobalMock';
import GameMock from 'app/stores/mocks/GameMock';

import Completed from '../';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <Completed />
  </Provider>
);

describe('<Completed />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls clear game', () => {
    wrapper.root.findByProps({ 'data-test-id': 'exit-button' }).props.onPress();
    expect(GameMock.clearGame).toBeCalled();
  });

  it('set current page to menu', () => {
    wrapper.root.findByProps({ 'data-test-id': 'exit-button' }).props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled();
  });
});
