import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    image: '',
    rare: 'normal',
    trunfo: false,
    isSaveButtonDisabled: true,
  };

  handleSaveButton = () => {
    const {
      name,
      description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;

    const sumCeiling = 210;
    const attributeCeiling = 90;

    const nonEmptyFieldsValidation = name.length > 0
      && description.length > 0
      && image.length > 0
      && rare.length > 0;

    const attributeSumValidation = Number(attr1)
      + Number(attr2)
      + Number(attr3)
      <= sumCeiling;

    const attributeCeilingValidation = attr1 <= attributeCeiling
      && attr2 <= attributeCeiling
      && attr3 <= attributeCeiling;

    const nonNegativeAttributesValidation = attr1 > 0
    && attr2 > 0
    && attr3 > 0;

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

  render() {
    const {
      name,
      image,
      description,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ name }
          cardImage={ image }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </>
    );
  }
}

export default App;
