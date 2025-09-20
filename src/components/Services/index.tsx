"use client";
import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const servicesData: Service[] = [
  {
    id: 'warehouse',
    title: 'Inspeccion en Warehouse',
    description: 'Control de calidad en instalaciones de almacenamiento.',
    icon: '📦'
  },
  {
    id: 'packing',
    title: 'Inspeccion en Packing', 
    description: 'Control dentro de las instalaciones de embalaje.',
    icon: '🏭'
  },
  {
    id: 'reporte',
    title: 'Reporte Tecnico Ampliado',
    description: 'Reportes tecnicos para presentar claims.',
    icon: '📊'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-medium mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;