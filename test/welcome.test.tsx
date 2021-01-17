import React from 'react';
import useWithStores from './useWithStores';

import { Welcome } from '../src';

import renderer from 'react-test-renderer';

const component = useWithStores(<Welcome />);

describe('<Welcome/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});