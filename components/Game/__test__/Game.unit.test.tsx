import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/stores/mocks/GlobalMock';
import GameMock from 'app/stores/mocks/GameMock';
import { getLevel } from 'app/data';

import Game from '../';

import renderer, { act } from 'react-test-renderer';

GameMock.gameId = 1;
GameMock.difficulty = 'easy';
GameMock.inGame = true;

const game = getLevel('easy')![1].game;
GameMock.game = game;
GameMock.currentWord = game.start;
GameMock.path = [game.start];

const component = () => (
  <Provider global={GlobalMock} gameStore={GameMock}>
    <Game />
  </Provider>
);

describe('<Game />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    GameMock.completed = false;
    wrapper = renderer.create(component());
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('exit modal open', () => {
    act(() => wrapper.root.findByProps({ 'data-test-id': 'circle-button' }).props.onPress());
    expect(wrapper.root.findByProps({ 'data-test-id': 'exit' })).toBeDefined();
  });

  it('closes exit modal', () => {
    act(() => wrapper.root.findByProps({ 'data-test-id': 'circle-button' }).props.onPress());
    act(() => wrapper.root.findAllByProps({ 'data-test-id': 'circle-button' })[0].props.onPress());
    expect(wrapper.root.findAllByProps({ 'data-test-id': 'exit' })).toHaveLength(0);
  });

  it('calls exit', () => {
    act(() => wrapper.root.findByProps({ 'data-test-id': 'circle-button' }).props.onPress());
    act(() => wrapper.root.findAllByProps({ 'data-test-id': 'button' })[0].props.onPress());
    expect(GameMock.clearGame).toBeCalled();
    expect(GlobalMock.setCurrentPage).toBeCalled();
  });

  it('game is completed', () => {
    expect(wrapper.root.findByProps({ 'data-test-id': 'control-buttons' })).toBeDefined();
    GameMock.completed = true;
    wrapper = renderer.create(component());
    expect(wrapper.root.findByProps({ 'data-test-id': 'completed' })).toBeDefined();
  });
});
