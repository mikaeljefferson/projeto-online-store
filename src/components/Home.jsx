import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  handleOnClick = () => {
    const { history } = this.props;
    history.push('/cart');
  };

  render() {
    return (
      <div>
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
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.handleOnClick }
        >
          Ir para o carrinho
        </button>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  history: PropTypes.string.isRequired,
};
