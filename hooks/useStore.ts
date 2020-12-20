import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

function useStore(store: 'global'): Global;
function useStore<T>(store: string): T {
  const stores = useContext(MobXProviderContext);
  if (!stores || !stores[store]) {
    throw new Error('useStore error');
  }
  return stores[store];
}

export default useStore;