import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import LevelCard from '../';

import renderer from 'react-test-renderer';

const number = "1";
const level: Level = {
  title: 'hello',
  game: {
    start: 'FORTY',
    end: 'FIFTY',
    path: 5,
  }
}

const component = (
  <Provider global={GlobalMock}>
    <LevelCard level={level} number={number} difficulty="easy"/>
  </Provider>
);

describe('<LevelCard/>', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('function clicks correctly', () => {
    wrapper.root.findByProps({"data-test-id": `card-${number}`}).props.onPress();
    //todo
  });
});