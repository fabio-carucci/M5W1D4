import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import fantasy from './fantasy.json'
import SingleBook from './SingleBook';
import { ThemeContext } from '../../context/ThemeContextProvider';

export default function AllTheBooks( {searchTerm, selectedBook, onSelected} ) {
    
  const {value} = useContext(ThemeContext);
  
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchBooks() {
    try {
      // let response = await fetch("./fantasy.json");
      // let data = await response.json(); 

      setBooks(fantasy);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`bg-${value}`}>
        <h2 className={`text-center text-${value === "dark" ? "light" : "dark"}`}>Tutti i Libri</h2>
        {error ? (
            <p>Errore durante il recupero dei dati: {error}</p>
        ) : (
            <Container  className='py-3'>
                {loading ? ( 
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <Row className='gy-3'>
                        {filteredBooks.map(book => (
                            <Col className='px-2' xs={4} key={book.asin}>
                                <SingleBook book={book} selectedBook={selectedBook} onSelected={onSelected}/>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        )}
    </div>
);
};