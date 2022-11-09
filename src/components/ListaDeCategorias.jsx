import { Component } from 'react';
import { getCategories } from '../services/api';

class ListaDeCategorias extends Component {
  state = {
    listaCategorias: [],
  };

  async componentDidMount() {
    this.setState({ listaCategorias: await getCategories() });
  }

  render() {
    const { listaCategorias } = this.state;
    return (
      <div>
        Categorias
        <br />
        {listaCategorias.map(({ name, id }) => (
          <label key={ id } htmlFor="category">
            <br />
            {name}
            <input
              data-testid="category"
              type="radio"
              name=""
            />
          </label>
        ))}
      </div>
    );
  }
}

export default ListaDeCategorias;
