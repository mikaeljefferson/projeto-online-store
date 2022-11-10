import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    );
  }
}

export default App;
