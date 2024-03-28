import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import "./SingleBook.css"

export default function SingleBook({ book }) {
  const navigate = useNavigate();

  return (
    <Card key={book.asin}>
      <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} />
      <Card.Body className="custom-body">
        <Card.Title className="custom-title">{book.title}</Card.Title>
      </Card.Body>
      <Button variant="info" className="m-3" onClick={() => navigate(`/${book.asin}`)}>Dai un'occhiata!</Button>
    </Card>
  );
}