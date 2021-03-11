import React from 'react';
import useWithStores from '../../test/useWithStores';

import { Welcome } from '..';

import renderer from 'react-test-renderer';

const component = useWithStores(<Welcome />);

describe('<Welcome />', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});
