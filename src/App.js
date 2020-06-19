import React from 'react';
import AppLayout from './components/AppLayout';
import Header from './components/Header';
import Profile from './components/Container/Profile';
import PostBox from './components/Container/PostBox.js'
import Footer from './components/Footer';
import './App.css';

const Home = () => {

  return (
    <>
      <Header />
      <Profile />
      <PostBox />
      <Footer />
    </>
  )
}

export default Home;
