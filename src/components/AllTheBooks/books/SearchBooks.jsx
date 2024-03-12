import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

export default function SearchBooks({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <InputGroup className="mb-3">
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