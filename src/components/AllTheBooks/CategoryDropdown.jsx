import React from 'react'
import { Dropdown } from 'react-bootstrap';

export default function CategoryDropdown( { category, handleCategorySelect } ) {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {category.toUpperCase()}
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={handleCategorySelect}>HISTORY</Dropdown.Item>
      <Dropdown.Item onClick={handleCategorySelect}>HORROR</Dropdown.Item>
      <Dropdown.Item onClick={handleCategorySelect}>ROMANCE</Dropdown.Item>
      <Dropdown.Item onClick={handleCategorySelect}>SCIFI</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
