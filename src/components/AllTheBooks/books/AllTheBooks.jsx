import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fantasy from './fantasy.json'
import SingleBook from './SingleBook';
import SearchBooks from './SearchBooks';

export default function AllTheBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      try {
        // let response = await fetch("./fantasy.json");
        // let data = await response.json(); 

        setBooks(fantasy);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h2 className='text-center'>Tutti i Libri</h2>
        {error ? (
            <p>Errore durante il recupero dei dati: {error}</p>
        ) : (
            <Container fluid className='my-3'>
                <div className='d-flex justify-content-center mb-2'>
                    <SearchBooks onSearch={(term) => setSearchTerm(term)}/>
                </div>
                <Row className='gy-3'>
                    {filteredBooks.map(book => (
                        <Col className='px-2' xs={2} key={book.asin}>
                            <SingleBook book={book}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        )}
        </div>
  );
};