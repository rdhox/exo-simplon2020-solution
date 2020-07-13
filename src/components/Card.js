import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { urlimg } from '../config/data';

const Card = props => {

  const {
    backImage,
    title,
    year,
    id
  } = props;

  return (
    <Container >
      <Poster src={urlimg + backImage} alt={title} />
      <Title>{title}</Title>
      <span>{year}</span>
    </Container>
  );
}

const Container = styled.div`
  width: 260px;
  height: 270px;
  border-color: ${Math.floor(Math.random() * 255)};
  border: 2px solid;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`;

const Poster = styled.img`
  width: auto; 
`;

const Title = styled.h4`
  font-size: 18px;
`;

Card.propTypes = {
  backImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

Card.defaultProps = {
  backImage: 'transparent',
}

export default Card;