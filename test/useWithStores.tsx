import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/stores/mocks/GlobalMock';
import GameMock from 'app/stores/mocks/GameMock';

const useWithStores = (child: JSX.Element) => (
  <Provider global={GlobalMock} gameStore={GameMock}>
    {child}
  </Provider>
);

export default useWithStores;
