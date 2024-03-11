import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import fantasy from './fantasy.json'
import "./AllTheBooks.css"

export default function AllTheBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div>
        <h2 className='text-center'>Tutti i Libri</h2>
        {error ? (
            <p>Errore durante il recupero dei dati: {error}</p>
        ) : (
            <Container fluid className='my-3'>
                <Row>
                    {books.map(book => (
                        <Col xs={3}>
                            <Card key={book.asin}>
                            <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )}
        </div>
  );
};