import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import Welcome from '../Welcome'
import { ThemeContext } from '../../context/ThemeContextProvider';
import CategoryDropdown from './CategoryDropdown';
import CommentArea from '../CommentArea/CommentArea';
import MyNav from '../MyNav';
import MyFooter from '../MyFooter';

export default function AllTheBooks( { selectedCategory, category, handleCategorySelect } ) {
    
  const {value} = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(selectedCategory[0]);

  function onSearch(term) {
    setSearchTerm(term);
  }

  function handleSelectedBook(bookId) {
    setSelectedBook(bookId);
  }

  const filteredBooks = selectedCategory.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MyNav onSearch={onSearch} isHomepage={true}/>
      <div className={`bg-${value}`}>
          <Welcome />
          <Container>
            <Row>
              <Col xs={8}>
                <div className='d-flex justify-content-center'>
                  <h2 className={`text-center text-${value === "dark" ? "light" : "dark"} px-2`}>Catalogo</h2>
                  <CategoryDropdown category={category} handleCategorySelect={handleCategorySelect}/>
                </div>
                <Container className='py-3'>
                  <Row className='gy-4'>
                      {filteredBooks.map(book => (
                          <Col className='px-2' xs={3} key={book.asin}>
                              <SingleBook book={book} selectedBook={selectedBook} handleSelectedBook={handleSelectedBook}/>
                          </Col>
                      ))}
                  </Row>
                </Container>
              </Col>
              <Col xs={4}>
                <div className='sticky-top pt-4'>
                  <CommentArea book={selectedBook} isHomepage={true} />
                </div>
              </Col>
            </Row>
          </Container>
      </div>
      <MyFooter />
    </>
);
};