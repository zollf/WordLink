import React from 'react';
import useWithStores from '../../../test/useWithStores';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import Menu from '../';

import renderer from 'react-test-renderer';

const component = useWithStores(<Menu />);

describe('<Menu />', () => {
  let wrapper = renderer.create(component);

  it('difficulty select works correctly', () => {
    wrapper.root.findAllByProps({"data-test-id": "button"})[0].props.onPress();
    expect(GlobalMock.setCurrentDifficultyOpen).toBeCalled();
    expect(wrapper.toJSON().children[0].props['data-test-id']).toBeUndefined();
    wrapper = renderer.create(component);
    expect(wrapper.toJSON().children[0].props['data-test-id']).toBe('level-select');
  });

  it('press all level buttons', () => {
    wrapper.root.findAllByProps({"data-test-id": "button"})[0].props.onPress();
    wrapper = renderer.create(component);

    wrapper.root.findAllByProps({"data-test-id": "button"})[2].props.onPress();
    expect(GlobalMock.setCurrentDifficultyOpen).toBeCalled();
    expect(wrapper.toJSON().children[0].props['data-test-id']).toBeUndefined();
    wrapper = renderer.create(component);
    expect(wrapper.toJSON().children[0].props['data-test-id']).toBe('level-select');

    wrapper.root.findAllByProps({"data-test-id": "button"})[0].props.onPress();
    wrapper = renderer.create(component);
    
    wrapper.root.findAllByProps({"data-test-id": "button"})[4].props.onPress();
    expect(GlobalMock.setCurrentDifficultyOpen).toBeCalled();
    expect(wrapper.toJSON().children[0].props['data-test-id']).toBeUndefined();
    wrapper = renderer.create(component);
    expect(wrapper.toJSON().children[0].props['data-test-id']).toBe('level-select');
  });
});