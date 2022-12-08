import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    'name-input': '',
    'description-input': '',
    'attr1-input': '',
    'attr2-input': '',
    'attr3-input': '',
    'image-input': '',
    'rare-input': 'normal',
    'trunfo-input': false,
  };

  onInputChange = ({ target }) => {
    const { id } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { state } = this;
    return (
      <>
        <Form onInputChange={ this.onInputChange } />
        <Card
          cardName={ state['name-input'] }
          cardImage={ state['image-input'] }
          cardDescription={ state['description-input'] }
          cardAttr1={ state['attr1-input'] }
          cardAttr2={ state['attr2-input'] }
          cardAttr3={ state['attr3-input'] }
          cardRare={ state['rare-input'] }
          cardTrunfo={ state['trunfo-input'] }
        />
      </>
    );
  }
}

export default App;
