import React from 'react'
import HeroSection from './components/HeroSection';
import FeaturedProduct from './components/FeaturedProduct';


const Home = () => {
  const data = {
    name: "Home page",
  }
  return (
    <>
    <HeroSection myData = {data}/>,
    <FeaturedProduct />
    </>
  );
}

export default Home;