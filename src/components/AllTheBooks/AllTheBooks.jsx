import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import Welcome from '../Welcome'
import { ThemeContext } from '../../context/ThemeContextProvider';
import CategoryDropdown from './CategoryDropdown';
import CommentArea from '../CommentArea/CommentArea';

export default function AllTheBooks( { selectedCategory, category, handleCategorySelect, searchTerm } ) {
    
  const {value} = useContext(ThemeContext);
  const [selectedBook, setSelectedBook] = useState(selectedCategory[0]);

  function handleSelectedBook(bookId) {
    setSelectedBook(bookId);
  }

  const filteredBooks = selectedCategory.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
              <CommentArea book={selectedBook} />
            </Col>
          </Row>
        </Container>
    </div>
);
};