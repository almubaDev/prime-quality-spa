"use client";
import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: 'Donde ofrecemos servicios?',
    answer: 'Actualmente ofrecemos servicios de inspeccion en las regiones de Valparaiso, Metropolitana y O\'Higgins.'
  },
  {
    question: 'Que frutas inspeccionamos?',
    answer: 'Nuestro foco esta orientado en la inspeccion de citricos, paltas, uva de mesa, pomaceas y arandanos.'
  },
  {
    question: 'Cuanto tiempo tarda una inspeccion?',
    answer: 'La inspeccion varia en tiempo, pues depende del tipo de servicio, del muestreo y de las especificaciones tecnicas requeridas.'
  },
  {
    question: 'Puedo recibir reportes en ingles?',
    answer: 'Si, los reportes pueden ser emitidos en ingles y espanol.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;