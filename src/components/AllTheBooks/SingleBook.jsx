import React, { useContext, useState } from "react";
import { Card } from 'react-bootstrap';
import "./SingleBook.css"
import CommentArea from "./CommentArea/CommentArea";
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function SingleBook( {book} ) {
    const {value} = useContext(ThemeContext);

    const [selected, setSelected] = useState(false);

    return (
        <Card 
            key={book.asin}
            className={`border border-2 ${selected ? "border-danger" : `border-${value === "dark" ? "light" : "dark"}`}`}>
            <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} onClick={() => setSelected(!selected)}/>
            <Card.Body className="custom-body" onClick={() => setSelected(!selected)}>
                <Card.Title className="custom-title">{book.title}</Card.Title>
            </Card.Body>
            {selected && <CommentArea book={book} />}
        </Card>
    );
}