import React from 'react';
import useWithStores from 'app/test/useWithStores';

import Letter from '../';

import renderer from 'react-test-renderer';

const onPress = jest.fn();

const component = useWithStores(<Letter letter="L" color="orange" onPress={onPress} />);

describe('<Letter />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click letter button calls function', () => {
    wrapper.root.findByProps({ 'data-test-id': 'letter-button' }).props.onPress();
    expect(onPress).toBeCalled();
  });

  it('static letter', () => {
    wrapper = renderer.create(useWithStores(<Letter letter="L" />));
    expect(wrapper.root.findAllByProps({ 'data-test-id': 'static' })).toBeDefined();
  });
});
