import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    hasTrunfo: false,
  };

  handleSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const sumCeiling = 210;
    const attributeCeiling = 90;

    const nonEmptyFieldsValidation = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0;

    const attributeSumValidation = Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
      <= sumCeiling;

    const attributeCeilingValidation = cardAttr1 <= attributeCeiling
      && cardAttr2 <= attributeCeiling
      && cardAttr3 <= attributeCeiling;

    const nonNegativeAttributesValidation = cardAttr1 >= 0
    && cardAttr2 >= 0
    && cardAttr3 >= 0;

    this.setState({
      isSaveButtonDisabled: !(nonEmptyFieldsValidation
        && attributeSumValidation
        && attributeCeilingValidation
        && nonNegativeAttributesValidation
      ),
    });
  };

  onInputChange = ({ target }) => {
    const { id } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(
      {
        [id]: value,
      },
      this.handleSaveButton,
    );
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState(
      (prev) => ({
        deck: [...prev.deck, newCard] }),
    );

    this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
    );

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  };

  onDeleteButtonClick = ({ target }) => {
    const { deck } = this.state;
    const { name } = target;

    const cardToDelet = deck.find((card) => card.cardName === name);

    if (cardToDelet.cardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }

    const newDeck = deck.filter((card) => card.cardName !== name);

    this.setState({
      deck: newDeck,
    });
  };

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      deck,
    } = this.state;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h1>Todas as cartas</h1>
        {deck.map((card, index) => (
          <div key={ index }>
            <Card
              cardName={ card.cardName }
              cardImage={ card.cardImage }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              name={ card.cardName }
              data-testid="delete-button"
              onClick={ this.onDeleteButtonClick }
            >
              Excluir
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default App;
