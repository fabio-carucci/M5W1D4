import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useParams } from 'react-router-dom';
import { Spinner, Card, Container, Button, Row, Col } from "react-bootstrap";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import "./BookDetails.css"
import CommentArea from "./CommentArea/CommentArea";

export default function BookDetails( { selectedCategory } ) {

    const {value} = useContext(ThemeContext);

    const { asin } = useParams();
    const book = selectedCategory.find((book) => book.asin === asin);

    useEffect(()=>{
        document.querySelector("body").className = "";
        document.querySelector("body").classList.add(`bg-${value}`)
    },[value])

    return (
        <>
            <MyNav />
            <Container className="mt-4">
                <Row className="justify-content-center"> 
                    <Col md={4} className="d-flex justify-content-center"> 
                        <Card className={`custom-detail-card bg-${value === "dark" ? "dark-subtle" : "light-subtle"}`}>
                            <Card.Img src={book.img} />
                            <Card.Body>
                                <Card.Text>
                                    <strong>Category:</strong> {book.category}<br />
                                    <strong>Price:</strong> ${book.price}<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>                    
                    </Col>
                    <Col md={8} className={`text-center text-${value === "dark" ? "light" : "dark"} px-2`}>
                        <div className="detail-title">{book.title}</div>
                        <CommentArea book={book} isHomepage={false}/>
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </>
    )
}