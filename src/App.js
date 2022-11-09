import React from 'react';
import Home from './components/Home';
import ListaDeCategorias from './components/ListaDeCategorias';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <ListaDeCategorias />
      </div>
    );
  }
}

export default App;
