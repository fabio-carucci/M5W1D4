import './App.css';
import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import { ThemeContext } from './context/ThemeContextProvider';

function App() {
  const {value} = useContext(ThemeContext);

  const [searchTerm, setSearchTerm] = useState('');

  function onSearch(term) {
    setSearchTerm(term);
  }

  const [selected, setSelected] = useState(null);

  function onSelected(selectedBookAsin) {
    setSelected(selectedBookAsin);
  }

  useEffect(() => {
    console.log(selected);
  }, [selected]);

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
            {/* Inserire la commentArea */}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}


export default App;
