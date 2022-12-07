import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, id, dataTestId, value, onChange } = this.props;

    return (
      <div>
        <label htmlFor={ id }>
          { label }
          <input
            type={ type }
            id={ id }
            data-testid={ dataTestId }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default Input;
