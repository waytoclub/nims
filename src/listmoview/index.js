import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { getMovieBySearch } from '../service';

function ListMovie(props) {

  const [list, setList] = useState([]);

  const handleSearch = async (e) => {
      const search = e.target.value;
      const movies = await getMovieBySearch(search);
      console.log("Search", movies)
      setList(movies)
  }

  return (
    <div className='container'>
          <input type="text" name="search" id="search" onChange={(e) => handleSearch(e)} />
          <div className='row'>
          <Container style={{ backgroundColor: 'Highlight' }}>
            <Row>
              <Col>Title</Col>
              <Col>Description</Col>
              <Col>Release Date</Col>
              <Col>Genre</Col>
            </Row>

            {props?.list?.map(data => {
              return (
                <Row style={{ backgroundColor: 'InfoBackground' }}>
                  <Col>{ data?.title }</Col>
                  <Col>{ data?.description }</Col>
                  <Col>{ data?.release }</Col>
                  <Col>{ data?.genre }</Col>
                </Row>
              )
            })}
            
            
          </Container>
        </div>
    </div>
  )
}

export default ListMovie