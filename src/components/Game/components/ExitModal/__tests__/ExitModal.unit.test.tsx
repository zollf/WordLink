import React from 'react';
import useWithStores from 'app/test/useWithStores';

import ExitModal from '..';

import renderer from 'react-test-renderer';

const close = jest.fn();
const exit = jest.fn();

const component = useWithStores(<ExitModal close={close} exit={exit} />);

describe('<ExitModal />', () => {
  let wrapper: renderer.ReactTestRenderer;
  beforeEach(() => {
    wrapper = renderer.create(component);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('close buttons works', () => {
    wrapper.root.findByProps({ 'data-test-id': 'circle-button' }).props.onPress();
    expect(close).toBeCalled();
  });

  it('set current page to menu', () => {
    wrapper.root.findByProps({ 'data-test-id': 'exit-button' }).props.onPress();
    expect(exit).toBeCalled();
  });
});
