import React from 'react';
import useWithStores from '../../test/useWithStores';

import { Settings } from '../';

import renderer from 'react-test-renderer';

const component = useWithStores(<Settings />);

describe('<Settings />', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});
