import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../stores/mocks/GlobalMock';

import { Profile } from '../src';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <Profile />
  </Provider>
);

describe('<Profile/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});