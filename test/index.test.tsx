import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../stores/mocks/GlobalMock';

import { Index } from '../src';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <Index />
  </Provider>
);

describe('<Index/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});