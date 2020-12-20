import React from 'react';
//@ts-ignore there are two app file names [json, tsx], todo: work-around 
import App from '../App.tsx';
import { Provider } from 'mobx-react';
import GlobalMock from '../stores/mocks/GlobalMock';

import renderer from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <App />
  </Provider>
);

describe('<App/>', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});