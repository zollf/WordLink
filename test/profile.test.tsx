import React from 'react';
import useWithStores from './useWithStores';

import { Profile } from '../src';

import renderer from 'react-test-renderer';

const component = useWithStores(<Profile />);

describe('<Profile/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});