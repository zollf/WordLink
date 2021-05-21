import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/src/stores/mocks/GlobalMock';
import GameMock from 'app/src/stores/mocks/GameMock';

import LetterSelection from '..';

const component = (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <LetterSelection />
  </Provider>
);

describe('<LetterSelection />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click works correctly', () => {
    wrapper.root.findAllByProps({ 'data-test-id': 'selectable-letter' })[0].props.onPress();
    expect(GameMock.setSelectedLetter).toBeCalled();
  });

  it('there is a selected letter', () => {
    GameMock.selectedLetter = 'A';
    wrapper = renderer.create(component);
    expect(wrapper.root.findByProps({ 'data-test-selected': true })).toBeDefined();
  });
});
