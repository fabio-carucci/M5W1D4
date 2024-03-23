import './App.css';
import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import CommentArea from './components/AllTheBooks/CommentArea/CommentArea';
import { ThemeContext } from './context/ThemeContextProvider';

function App() {
  const {value} = useContext(ThemeContext);

  const [searchTerm, setSearchTerm] = useState('');

  function onSearch(term) {
    setSearchTerm(term);
  }

  const [selected, setSelected] = useState({});

  function onSelected(selectedBook) {
    setSelected(selectedBook);
  }

  return (
    <>
      <MyNav onSearch={onSearch}/>
      <Welcome />
      <Container fluid className={`bg-${value}`}>
        <Row>
          <Col xs={6}>
            <AllTheBooks searchTerm={searchTerm} selectedBook={selected} onSelected={onSelected}/>
          </Col>
          <Col xs={6}>
            <CommentArea book={selected}></CommentArea>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}


export default App;
