import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import NewUserPage from '../';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <NewUserPage />
  </Provider>
);

describe('<NewUserPage />', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('clicks button works correctly', () => {
    wrapper.root.findByProps({ 'data-test-id': 'button' }).props.onPress();
    //todo test
  });
});
