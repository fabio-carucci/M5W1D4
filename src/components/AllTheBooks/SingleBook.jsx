import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import "./SingleBook.css"
import CommentArea from "./CommentArea/CommentArea";

export default function SingleBook( {book} ) {

    const [selected, setSelected] = useState(false);

    return (
        <Card 
            key={book.asin}
            style={{ border: selected ? '2px solid red' : '2px solid whitesmoke' }}>
            <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} onClick={() => setSelected(!selected)}/>
            <Card.Body className="custom-body" onClick={() => setSelected(!selected)}>
                <Card.Title className="custom-title">{book.title}</Card.Title>
            </Card.Body>
            {selected && <CommentArea book={book} />}
        </Card>
    );
}