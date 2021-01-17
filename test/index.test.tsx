import React from 'react';
import useWithStores from './useWithStores';

import { Index } from '../src';

import renderer from 'react-test-renderer';

const component = useWithStores(<Index />);

describe('<Index/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});