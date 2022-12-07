import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <>
        <Input
          label="Nome: "
          type="text"
          id="name-input"
          dataTestId="name-input"
        />
        <label htmlFor="description-input">
          {'Descrição: '}
          <textarea id="description-input" dataTestId="description-input" />
        </label>
        <Input
          label="Atributo 1: "
          type="number"
          id="attr1-input"
          dataTestId="attr1-input"
        />
        <Input
          label="Atributo 2: "
          type="number"
          id="attr2-input"
          dataTestId="attr2-input"
        />
        <Input
          label="Atributo 3: "
          type="number"
          id="attr3-input"
          dataTestId="attr3-input"
        />
        <Input
          label="Imagem: "
          type="text"
          id="image-input"
          dataTestId="image-input"
        />
        <label htmlFor="rare-input">
          {'Raridade: '}
          <select id="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <Input
          label="Tryunfo: "
          type="checkbox"
          id="trunfo-input"
          dataTestId="trunfo-input"
        />
        <button type="button" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
