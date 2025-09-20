"use client";
import React from 'react';

interface Fruit {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const fruitsData: Fruit[] = [
  {
    id: 'citricos',
    name: 'Citricos', 
    icon: '🍊',
    description: 'Control de calidad especializado'
  },
  {
    id: 'paltas',
    name: 'Paltas',
    icon: '🥑', 
    description: 'Inspeccion segun estandares'
  },
  {
    id: 'uva',
    name: 'Uva de Mesa',
    icon: '🍇',
    description: 'Control para exportacion'
  },
  {
    id: 'pomaceas', 
    name: 'Pomaceas',
    icon: '🍎',
    description: 'Manzanas y peras'
  },
  {
    id: 'arandanos',
    name: 'Arandanos', 
    icon: '🫐',
    description: 'Control especializado'
  }
];

const Fruits: React.FC = () => {
  return (
    <section id="frutas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">
          Frutas que Inspeccionamos
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {fruitsData.map((fruit) => (
            <div key={fruit.id} className="text-center p-6 hover:bg-gray-50 transition-colors">
              <div className="text-6xl mb-4">{fruit.icon}</div>
              <h3 className="text-lg font-medium mb-2">{fruit.name}</h3>
              <p className="text-gray-600 text-sm">{fruit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fruits;