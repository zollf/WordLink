import React from 'react';

//@ts-ignore there are two app file names [json, tsx], todo: work-around 
import App from '../App.tsx';

import renderer from 'react-test-renderer';

const component = (<App />);

describe('<App/>', () => {
  it('matches snapshot', () => {
    expect(renderer.create(component)).toMatchSnapshot();
  });
});