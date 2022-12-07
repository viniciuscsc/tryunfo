import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, id, dataTestId } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          Nome da carta:
          <input type={ type } id={ id } data-testid={ dataTestId } />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Input;
