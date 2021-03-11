import React from 'react';
import useWithStores from '../../test/useWithStores';

import { Index } from '..';

import renderer from 'react-test-renderer';

const component = useWithStores(<Index />);

describe('<Index />', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});
