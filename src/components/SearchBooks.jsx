import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function SearchBooks({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
        e.preventDefault();
        onSearch(searchTerm);
  };

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
        </InputGroup>
      </Form>
    </>
  );
}