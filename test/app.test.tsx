import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore there are two app file names [json, tsx], todo: work-around
import App from '../App.tsx';
import useWithStores from './useWithStores';

import renderer from 'react-test-renderer';

const component = useWithStores(<App />);

describe('<App/>', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
