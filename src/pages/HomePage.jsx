import React from 'react';
import Hero from '../components/Hero';
import FeaturedStory from '../components/FeaturedStory';
import About from '../components/About';
import RealWeddings from '../components/RealWeddings';
import SpreadPreview from '../components/SpreadPreview';
import BlackGallery from '../components/BlackGallery';
import Testimonials from '../components/Testimonials';
import Journal from '../components/Journal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedStory />
      <About />
      <RealWeddings />
      <SpreadPreview />
      <BlackGallery />
      <Testimonials />
      <Journal />
    </>
  );
}
