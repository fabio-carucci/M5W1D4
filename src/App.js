import './App.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks/AllTheBooks';
import ThemeContextProvider from './context/ThemeContextProvider';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  function onSearch(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <ThemeContextProvider>
        <MyNav onSearch={onSearch}/>
        <Welcome />
        <AllTheBooks searchTerm={searchTerm}/>
        <MyFooter />
      </ThemeContextProvider>
    </>
  );
}


export default App;
