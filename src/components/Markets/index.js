"use client"; 
import React from 'react'; 
 
const Markets = () => { 
  return ( 
    <section id="mercados" className="py-16 bg-gray-50"> 
      <div className="container mx-auto px-4"> 
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900"> 
          Mercados de Destino 
        </h2> 
        <div className="text-center"> 
          <p className="text-gray-600 mb-8">Trabajamos con estandares para los principales mercados internacionales</p> 
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"> 
            <div className="bg-white p-6 text-center"> 
              <h3 className="font-medium mb-2">Estados Unidos</h3> 
              <p className="text-sm text-gray-600">USDA and export standards</p> 
            </div> 
            <div className="bg-white p-6 text-center"> 
              <h3 className="font-medium mb-2">China</h3> 
              <p className="text-sm text-gray-600">Strict condition and presentation inspections</p> 
            </div> 
            <div className="bg-white p-6 text-center"> 
              <h3 className="font-medium mb-2">Europa</h3> 
              <p className="text-sm text-gray-600">GlobalG.A.P and MRLs</p> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 
export default Markets; 
