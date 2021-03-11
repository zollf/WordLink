import React from 'react';
import useWithStores from '../../test/useWithStores';

import { Profile } from '..';

import renderer from 'react-test-renderer';

const component = useWithStores(<Profile />);

describe('<Profile />', () => {
  xit('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});
