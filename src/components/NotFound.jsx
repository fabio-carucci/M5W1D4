import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ThemeContext } from "../context/ThemeContextProvider";


export default function NotFound() {

  const { value } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add(`bg-${value}`)
}, [value]);

  return (
    <Container className={`d-flex justify-content-center align-items-center`} style={{ minHeight: '100vh' }}>
      <Row>
        <Col className="text-center">
          <h1 className="display-4 text-danger">Oops! Pagina non trovata</h1>
          <p className={`text-center text-${value === "dark" ? "light" : "dark"}`}>La pagina che stai cercando non esiste o è stata spostata.</p>
          <Button as={Link} to="/" variant="primary">Torna alla homepage</Button>
        </Col>
      </Row>
    </Container>
  );
}