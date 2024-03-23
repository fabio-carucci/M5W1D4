import React, { useContext, useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
import "./SingleBook.css"
import { ThemeContext } from "../../context/ThemeContextProvider";

export default function SingleBook({ book, selectedBook, onSelected }) {
  const { value } = useContext(ThemeContext);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedBook.asin === book.asin);
  }, [selectedBook.asin, book.asin]);

  function handleSelection() {
    onSelected(book);
    if(selectedBook.asin !== book.asin){
      setIsSelected(!isSelected);
    }
  };

  return (
    <Card
      key={book.asin}
      className={`border border-2 ${isSelected ? "border-danger" : `border-${value === "dark" ? "light" : "dark"}`}`}
      onClick={handleSelection}
    >
      <Card.Img className="custom-image" variant="top" src={book.img} alt={book.title} />
      <Card.Body className="custom-body">
        <Card.Title className="custom-title">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}