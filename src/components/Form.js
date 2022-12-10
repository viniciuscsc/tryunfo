import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <>
        <Input
          label="Nome: "
          type="text"
          id="name"
          dataTestId="name-input"
          value={ name }
          onChange={ onInputChange }
        />
        <label htmlFor="description">
          {'Descrição: '}
          <textarea
            id="description"
            data-testid="description-input"
            value={ description }
            onChange={ onInputChange }
          />
        </label>
        <Input
          label="Atributo 1: "
          type="number"
          id="attr1"
          dataTestId="attr1-input"
          value={ attr1 }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 2: "
          type="number"
          id="attr2"
          dataTestId="attr2-input"
          value={ attr2 }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 3: "
          type="number"
          id="attr3"
          dataTestId="attr3-input"
          value={ attr3 }
          onChange={ onInputChange }
        />
        <Input
          label="Imagem: "
          type="text"
          id="image"
          dataTestId="image-input"
          value={ image }
          onChange={ onInputChange }
        />
        <label htmlFor="rare">
          {'Raridade: '}
          <select
            id="rare"
            data-testid="rare-input"
            value={ rare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <div>
          <label htmlFor="trunfo">
            {'Tryunfo: '}
            <input
              type="checkbox"
              id="trunfo"
              data-testid="trunfo-input"
              checked={ trunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <button
          type="button"
          id="saveButton"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attr1: PropTypes.string.isRequired,
  attr2: PropTypes.string.isRequired,
  attr3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
