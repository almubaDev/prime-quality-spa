"use client";
import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import About from '../About';
import Services from '../Services';
import Fruits from '../Fruits';
import Contact from '../Contact';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Fruits />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Prime Quality SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;