import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
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
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="description">
          {'Descrição: '}
          <textarea
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <Input
          label="Atributo 1: "
          type="number"
          id="attr1"
          dataTestId="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 2: "
          type="number"
          id="attr2"
          dataTestId="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 3: "
          type="number"
          id="attr3"
          dataTestId="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          label="Imagem: "
          type="text"
          id="image"
          dataTestId="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="rare">
          {'Raridade: '}
          <select
            id="rare"
            data-testid="rare-input"
            value={ cardRare }
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
              checked={ cardTrunfo }
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
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
