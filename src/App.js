import './App.css';
import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import CommentArea from './components/CommentArea/CommentArea';
import NotFound from './components/NotFound';
import fantasy from './components/AllTheBooks/fantasy.json'
import history from './components/AllTheBooks/history.json'
import horror from './components/AllTheBooks/horror.json'
import romance from './components/AllTheBooks/romance.json'
import scifi from './components/AllTheBooks/scifi.json'

export default function App() {

  const [searchTerm, setSearchTerm] = useState('');
  
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

  const selectedBooks = categories[category] || [];

  function onSearch(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <BrowserRouter>
        {(window.location.pathname === "/") && <MyNav onSearch={onSearch}/>}
        <Routes>
          <Route exact path="/" element={<AllTheBooks searchTerm={searchTerm} selectedBooks={selectedBooks} category={category} handleCategorySelect={handleCategorySelect}/>} />
          <Route path="/:asin" element={<CommentArea selectedBooks={selectedBooks} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {(window.location.pathname === "/") && <MyFooter />}
      </BrowserRouter>
    </>
  );
}