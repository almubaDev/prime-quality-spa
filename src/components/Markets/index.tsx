"use client";
import React from 'react';

const Markets: React.FC = () => {
  const markets = [
    {
      country: 'Estados Unidos',
      standards: 'USDA and export standards',
      flag: '🇺🇸',
      gradient: 'from-emerald-150 to-emerald-75', // emerald-95 aproximado
      features: ['FDA Requirements', 'USDA Certification', 'Cold Chain Standards']
    },
    {
      country: 'China', 
      standards: 'Strict condition and presentation inspections',
      flag: '🇨🇳',
      gradient: 'from-emerald-150 to-emerald-75', // emerald-85 aproximado
      features: ['GACC Registration', 'Phytosanitary Standards', 'Quality Protocols']
    },
    {
      country: 'Europa',
      standards: 'GlobalG.A.P and MRLs',
      flag: '🇪🇺',
      gradient: 'from-emerald-150 to-emerald-75', // emerald-75 aproximado
      features: ['GlobalGAP Standards', 'MRL Compliance', 'Traceability Systems']
    }
  ];

  return (
    <section id="mercados" className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-gray-900">
            Mercados de Destino
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Garantizamos el cumplimiento de estándares internacionales para acceder a los mercados más exigentes del mundo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {markets.map((market, index) => (
            <div key={index} className={`bg-gradient-to-br ${market.gradient} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200 hover:border-emerald-300`}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{market.flag}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{market.country}</h3>
                <p className="text-emerald-700 font-medium">{market.standards}</p>
              </div>
              
              <div className="space-y-3">
                {market.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;