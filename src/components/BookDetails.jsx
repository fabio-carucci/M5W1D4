import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import "./BookDetails.css"
import CommentArea from "./CommentArea/CommentArea";

export default function BookDetails( { selectedCategory } ) {

    const { value } = useContext(ThemeContext);

    useEffect(() => {
        document.querySelector("body").className = "";
        document.querySelector("body").classList.add(`bg-${value}`)
    }, [value]);
    

    const [book, setBook] = useState();
    const navigate = useNavigate();

    const { asin } = useParams();
    
    useEffect(() => {
        const foundBook = selectedCategory.find((book) => book.asin === asin);
        if (!foundBook) {
            navigate('/notfound'); // Se il libro non viene trovato, naviga alla pagina NotFound
        } else {
            setBook(foundBook);
        }
    }, [selectedCategory, asin, navigate]);

    // Se il libro non è stato trovato, non renderizzare nulla
    if (!book) {
        return null;
    }

    return (
        <>
            <Button as={Link} to="/" variant={`outline-${value === 'dark' ? 'light' : 'dark'}`} id="backToHomepageButton">Torna alla homepage</Button>
            <MyNav />
            <Container className="mt-4">
                <div className="detail-title">{book.title}</div>
                <Row className="justify-content-center"> 
                    <Col md={4} className="d-flex justify-content-center"> 
                        <Card className={`custom-detail-card bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}>
                            <Card.Img className="custom-detail-image" src={book.img} />
                            <Card.Body>
                                <Card.Text>
                                    <strong>Category:</strong> {book.category}<br />
                                    <strong>Price:</strong> ${book.price}<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>                    
                    </Col>
                    <Col md={8} className={`text-center text-${value === "dark" ? "light" : "dark"} px-2`}>
                        <CommentArea book={book} isHomepage={false}/>
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </>
    )
}