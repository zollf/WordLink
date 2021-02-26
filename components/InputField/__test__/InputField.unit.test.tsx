import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from '../../../stores/mocks/GlobalMock';

import InputField from '../';

import renderer, { act } from 'react-test-renderer';

const component = (
  <Provider global={GlobalMock}>
    <InputField color="orange" value="" />
  </Provider>
);

describe('<InputField />', () => {
  const wrapper = renderer.create(component);
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('handles change correctly', async () => {
    await act(async () => {
      wrapper.root.findByProps({ 'data-test-id': 'text-input' }).props.onChange('event', {
        nativeElement: {
          text: 'test',
        },
      });
    });
    //todo testing
  });
});
