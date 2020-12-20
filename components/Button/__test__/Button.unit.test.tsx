import React from 'react';
import { View } from 'react-native';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import Button from '../';

import renderer from 'react-test-renderer';

const onPress = jest.fn();

const component = (
  <Button text="button" color="green" onPress={onPress}/>
);

describe('<MenuBar/>', () => {
  const wrapper = renderer.create(component)
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click works correctly', () => {
    wrapper.root.findByProps({"data-test-id": "button"}).props.onPress();
    expect(onPress).toBeCalled();
  });
});