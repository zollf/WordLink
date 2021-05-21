import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import LevelButtons from '..';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <LevelButtons />
  </Provider>
);

describe('<MenuBar/>', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
