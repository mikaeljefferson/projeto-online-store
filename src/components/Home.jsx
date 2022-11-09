import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <label htmlFor="home-initial-message">
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </label>
    );
  }
}

export default Home;
