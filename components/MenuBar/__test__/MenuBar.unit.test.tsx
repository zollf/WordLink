import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import MenuBar from '../';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <MenuBar />
  </Provider>
);

describe('<MenuBar/>', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('menu click works correctly', () => {
    wrapper.root.findByProps({"data-test-id": "menu-index"}).props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled;
    wrapper.root.findByProps({"data-test-id": "menu-menu"}).props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled;
    wrapper.root.findByProps({"data-test-id": "menu-profile"}).props.onPress();
    expect(GlobalMock.setCurrentPage).toBeCalled;
  });
});