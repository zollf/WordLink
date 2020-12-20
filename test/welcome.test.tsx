import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../stores/mocks/GlobalMock';

import { Welcome } from '../src';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <Welcome />
  </Provider>
);

describe('<Welcome/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});