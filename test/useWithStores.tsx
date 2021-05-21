import React from 'react';
import { Provider } from 'mobx-react';
import GlobalMock from 'app/src/stores/mocks/GlobalMock';
import GameMock from 'app/src/stores/mocks/GameMock';

const useWithStores = (child: JSX.Element) => (
  <Provider global={GlobalMock} gameStore={GameMock}>
    {child}
  </Provider>
);

export default useWithStores;
