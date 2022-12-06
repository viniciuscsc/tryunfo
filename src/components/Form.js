import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome da carta:
          <input type="text" id="name-input" data-testid="name-input" />
        </label>

        <label htmlFor="description-input">
          Descrição da carta:
          <input type="textarea" id="description-input" data-testid="description-input" />
        </label>

        <label htmlFor="attr1-input">
          Atributo 01:
          <input type="number" id="attr1-input" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2-input">
          Atributo 02:
          <input type="number" id="attr2-input" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3-input">
          Atributo 03:
          <input type="number" id="attr3-input" data-testid="attr3-input" />
        </label>

        <label htmlFor="image-input">
          Imagem da carta:
          <input type="text" id="image-input" data-testid="image-input" />
        </label>

        <label htmlFor="rare-input">
          Raridade:
          <select id="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          Super Trunfo:
          <input type="checkbox" id="trunfo-input" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
