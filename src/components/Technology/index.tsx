"use client";
import React from 'react';

const Technology: React.FC = () => {
  const tools = [
    {
      category: 'Equipamiento Especializado',
      items: [
        'Penetrómetros digitales para firmeza',
        'Colorímetros para evaluación cromática', 
        'Refractómetros para grados Brix',
        'Cámaras termográficas para análisis'
      ]
    },
    {
      category: 'Metodología Profesional',
      items: [
        'Protocolos según destino y fruta',
        'Muestreo estadístico representativo',
        'Reportes digitales inmediatos', 
        'Trazabilidad completa del proceso'
      ]
    }
  ];

  const benefits = [
    { icon: '⚡', title: 'Rapidez', desc: 'Resultados en 24-48 horas' },
    { icon: '🎯', title: 'Precisión', desc: '99.8% exactitud' },
    { icon: '📱', title: 'Digital', desc: 'Acceso online 24/7' },
    { icon: '🌍', title: 'Internacional', desc: 'Estándares globales' }
  ];

  return (
    <section id="tecnologia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6 text-gray-900">
            Tecnología y Metodología
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos equipamiento de precisión y metodologías probadas para entregar resultados confiables que respalden tus exportaciones
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {tools.map((tool, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 h-full border border-gray-200 hover:border-emerald-200 transition-colors">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {index === 0 ? (
                        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      ) : (
                        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{tool.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {tool.items.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beneficios sin fondo verde */}
          <div className="rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">¿Por qué elegir Prime Quality?</h3>
              <p className="text-gray-600">Garantizamos resultados que protegen tus exportaciones</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-emerald-500/10 rounded-lg p-6 backdrop-blur-sm border border-emerald-200/30">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-semibold mb-2 text-gray-900">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;