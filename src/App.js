import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PostList from './components/PostList';
import './global.css';

function App() {
  return (
    <div class="container">
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
