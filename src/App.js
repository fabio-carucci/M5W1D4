import './App.css';
import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import fantasy from './components/AllTheBooks/fantasy.json'
import history from './components/AllTheBooks/history.json'
import horror from './components/AllTheBooks/horror.json'
import romance from './components/AllTheBooks/romance.json'
import scifi from './components/AllTheBooks/scifi.json'

export default function App() {
  
  const categories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi
  };

  const [category, setCategory] = useState('fantasy');

  const handleCategorySelect = (event) => {
    const prevCategory = category;
    setCategory(event.target.textContent.toLowerCase())
    event.target.textContent = prevCategory.toUpperCase();
  };

  const selectedCategory = categories[category] || [];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllTheBooks selectedCategory={selectedCategory} category={category} handleCategorySelect={handleCategorySelect}/>} />
          <Route path="/detail/:asin" element={<BookDetails selectedCategory={selectedCategory} />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}