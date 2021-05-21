import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/src/stores/mocks/GlobalMock';
import GameMock from 'app/src/stores/mocks/GameMock';

import CircleButton from '..';

const onPress = jest.fn();

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <CircleButton overrideCallback={onPress} symbol="exit" />
  </Provider>
);

describe('<CircleButton />', () => {
  let wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click works correctly', () => {
    wrapper.root.findByProps({ 'data-test-id': 'circle-button' }).props.onPress();
    expect(onPress).toBeCalled();
  });

  it('default calls menu', () => {
    wrapper = renderer.create(
      <Provider global={GlobalMock} gameStore={GameMock}>
        <CircleButton />
      </Provider>,
    );
    wrapper.root.findByProps({ 'data-test-id': 'circle-button' }).props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled();
  });
});
