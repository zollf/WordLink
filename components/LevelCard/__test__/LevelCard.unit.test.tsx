import React from 'react';
import useWithStores from '../../../test/useWithStores';

import LevelCard from '../';

import renderer from 'react-test-renderer';

const number = "1";
const level: Level = {
  title: 'hello',
  difficulty: 'easy',
  game: {
    start: 'FORTY',
    end: 'FIFTY',
    path: 5,
  }
};

const component = useWithStores(<LevelCard level={level} number={number} difficulty="easy"/>);

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