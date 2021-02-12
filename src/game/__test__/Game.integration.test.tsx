import React from 'react';
import useWithStores from 'app/test/useWithStores';

import Game from '../';

import renderer from 'react-test-renderer';

const component = useWithStores(<Game />);

describe('<Game />', () => {
  const wrapper = renderer.create(component);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('loaded game matches snapshot', () => {
    wrapper.update(component);
    expect(wrapper).toMatchSnapshot();
  });
});
