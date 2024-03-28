import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import Welcome from '../Welcome'
import { ThemeContext } from '../../context/ThemeContextProvider';
import CategoryDropdown from './CategoryDropdown';

export default function AllTheBooks( { selectedBooks, category, handleCategorySelect, searchTerm } ) {
    
  const {value} = useContext(ThemeContext);

  const filteredBooks = selectedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`bg-${value}`}>
        <Welcome />
        <div className='d-flex justify-content-center'>
          <h2 className={`text-center text-${value === "dark" ? "light" : "dark"} px-2`}>Catalogo</h2>
          <CategoryDropdown category={category} handleCategorySelect={handleCategorySelect}/>
        </div>
        <Container  className='py-3'>
          <Row className='gy-4'>
              {filteredBooks.map(book => (
                  <Col className='px-3' xs={2} key={book.asin}>
                      <SingleBook book={book} />
                  </Col>
              ))}
          </Row>
        </Container>
    </div>
);
};