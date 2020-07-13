import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { apiKey } from '../config/data';
import { ModalContext, InfoContext } from '../layout/MainLayout';

import Card from './Card';
import Button from './Button';


const Gallery = props => {

  function handlePaging(next = true) {
    if(next) {
      if((page + 1) < totalPage) {
        setPage(page => page + 1);
      }
    } else {
      if(page > 1) {
        setPage(page => page - 1);
      }
    }
  }

  const [ movies, setMovies ] = useState([]);
  const [ totalPage, setTotalPage ] = useState(null);
  const [ totalResult, setTotalResult ] = useState(null);
  const [ page, setPage ] = useState(1);

  const { setModalInfoOn } = useContext(ModalContext);
  const { setInfoMovie } = useContext(InfoContext);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (Object.keys(data).length > 0) {
          const {
            results = [],
            total_pages = 0,
            total_results = 0
          } = data;
          setTotalPage(total_pages);
          setTotalResult(total_results);
          setMovies(results);
          console.log(results);
        }
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <Container>
      <p>{`number of results: ${totalResult}`}</p>
      <WrapperList>
        {movies.map(movie => 
          <ClickCard key={movie.id} onClick={() => {
            setInfoMovie(movie);
            setModalInfoOn(true);
            }}>
            <Card
              backImage={movie.poster_path}
              year={movie.release_date}
              title={movie.title}
              id={movie.id}
            />
          </ClickCard>
        )}
      </WrapperList>
      <WrapperButtons>
        <Button left handleClick={() => handlePaging(false)} />
        <span>{`page: ${page} - total: ${totalPage}`}</span>
        <Button left={false} handleClick={() => handlePaging()} />
      </WrapperButtons>
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const WrapperList = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
`;
const WrapperButtons = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;

const ClickCard = styled.div`
  cursor: pointer;
`;

export default Gallery;