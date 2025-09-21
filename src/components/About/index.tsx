"use client";
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Sobre Prime Quality SpA
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-light mb-6 text-gray-900">
                Líderes en Control de Calidad Agrícola
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Prime Quality SpA nace en Chile frente a la necesidad de brindar 
                  servicios profesionales de control de calidad de frutas, con el fin de 
                  dar seguridad a los productores y exportadoras respecto del cumplimiento 
                  de las especificaciones técnicas que estos commodities presentan 
                  previo a su salida a destino.
                </p>
                <p>
                  Más de 10 años de trabajo y experiencia en el rubro de control de 
                  calidad de frutas y hortalizas en Chile y en el extranjero nos respaldan 
                  como una empresa cercana con un servicio profesional y personalizado.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">Nuestro Compromiso</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-emerald-600 mb-2">Misión</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ofrecer un servicio de alto estándar en el control y aseguramiento 
                    de la calidad de frutas de exportación, garantizando que lleguen 
                    con fruta de buena calidad y a un precio justo.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-emerald-600 mb-2">Visión</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dar cobertura nacional a una amplia gama de exportadoras en base 
                    a un equipo sólido de profesionales altamente calificados, con 
                    experiencia en investigación científica y aseguramiento de calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-light text-emerald-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Años de experiencia</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-light text-emerald-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Tipos de frutas</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-light text-emerald-600 mb-2">3</div>
              <div className="text-gray-600 font-medium">Regiones de cobertura</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;