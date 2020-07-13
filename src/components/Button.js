import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = props => {

  const {
    left,
    handleClick
  } = props;

  return (
    <button onClick={handleClick}>{left ? '<' : '>'}</button>
  );
}

Button.propTypes = {
  left: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  left: true
}

export default Button;