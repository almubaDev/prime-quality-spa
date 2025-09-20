"use client";
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">
          Sobre Nosotros
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light mb-6">Nuestra Historia</h3>
              <p className="text-gray-600 mb-4">
                Prime Quality SpA. nace en Chile frente a la necesidad de brindar 
                servicios profesionales de control de calidad de frutas.
              </p>
              <p className="text-gray-600">
                Mas de 10 anos de experiencia en el rubro.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6">Mision y Vision</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Mision</h4>
                  <p className="text-gray-600 text-sm">
                    Ofrecer servicios de alto estandar en control de calidad.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Vision</h4>
                  <p className="text-gray-600 text-sm">
                    Cobertura nacional con profesionales calificados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;