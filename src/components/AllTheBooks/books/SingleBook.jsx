import React from "react";
import { Card } from 'react-bootstrap';
import "./SingleBook.css"

export default function SingleBook(props) {

    const { book } = props;

    return (
        <Card key={book.asin}>
        <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} />
        <Card.Body className="custom-body">
            <Card.Title className="custom-title">{book.title}</Card.Title>
        </Card.Body>
        </Card>
    );
}