"use client";
import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import About from '../About';
import Services from '../Services';
import Fruits from '../Fruits';
import Markets from '../Markets';
import Technology from '../Technology';
import FAQ from '../FAQ';
import Contact from '../Contact';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Fruits />
        <Markets />
        <Technology />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;