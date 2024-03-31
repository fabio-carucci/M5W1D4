import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import "./SingleBook.css"

export default function SingleBook({ book, selectedBook, handleSelectedBook }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (selectedBook.asin !== book.asin) {
      handleSelectedBook(book);
    }
  };

  return (
    <Card key={book.asin} onClick={handleClick} style={{ border: `1px solid ${selectedBook.asin === book.asin ? 'red' : '#ccc'}` }}>
      <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} />
      <Card.Body className="custom-body">
        <Card.Title className="custom-title">{book.title}</Card.Title>
      </Card.Body>
      <Button variant="info" className="m-3" onClick={() => navigate(`/detail/${book.asin}`)}>Dai un'occhiata!</Button>
    </Card>
  );
}
