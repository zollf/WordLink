import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/stores/mocks/GlobalMock';
import GameMock from 'app/stores/mocks/GameMock';

import ControlButtons from '../';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <ControlButtons />
  </Provider>
);

describe('<ControlButtons />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls undo', () => {
    wrapper.root.findByProps({ 'data-test-id': 'undo' }).props.onPress();
    expect(GameMock.undo).toBeCalled();
  });

  it('calls reset', () => {
    wrapper.root.findByProps({ 'data-test-id': 'reset' }).props.onPress();
    expect(GameMock.resetCurrentWord).toBeCalled();
  });
});
