import React from 'react';
import { Index, Menu, Welcome, Profile } from './src';

const App = () => {
  const currentPage: string = 'index';
  const render = () => {
    switch (currentPage) {
      case 'index':
        return <Index />;
      case 'menu':
        return <Menu />;
      case 'welcome':
        return <Welcome />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  }
  return (
    render()
  );
}

export default App;
