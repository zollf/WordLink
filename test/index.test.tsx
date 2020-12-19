import React from 'react';

import { Index } from '../src';

import renderer from 'react-test-renderer';

const component = (<Index />);

describe('<Index/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});