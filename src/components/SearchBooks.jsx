import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

export default function SearchBooks({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Funzione per eliminare il refresh automatico della pagina al submit e che attiva la ricerca sui libri
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // Funzione per resettare il campo di ricerca
  function handleClearSearch() {
    setSearchTerm('');
    onSearch('');
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            placeholder="Cerca il libro che preferisci"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" variant="outline-success" id="button-addon2">
            Cerca
          </Button>
          {/* Mostra l'icona solo se il campo di ricerca non è vuoto */}
          {searchTerm && (
            <Button variant="outline-secondary" onClick={handleClearSearch}>
              <FaTimes />
            </Button>
          )}
        </InputGroup>
      </Form>
    </>
  );
}
