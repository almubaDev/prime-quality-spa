"use client"; 
import React from 'react'; 
 
const Technology = () => { 
  return ( 
    <section id="tecnologia" className="py-16 bg-white"> 
      <div className="container mx-auto px-4"> 
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-900"> 
          Tecnologia y Metodologia 
        </h2> 
        <div className="max-w-4xl mx-auto"> 
          <div className="grid md:grid-cols-2 gap-8"> 
            <div> 
              <h3 className="text-xl font-medium mb-4">Herramientas de Inspeccion</h3> 
              <ul className="space-y-2 text-gray-600"> 
                <li>• Equipos de medicion especializados</li> 
                <li>• Software de gestion de calidad</li> 
                <li>• Protocolos de muestreo estandarizados</li> 
                <li>• Analisis termografico</li> 
              </ul> 
            </div> 
            <div> 
              <h3 className="text-xl font-medium mb-4">Reportes y Entrega</h3> 
              <ul className="space-y-2 text-gray-600"> 
                <li>• Reportes visuales detallados</li> 
                <li>• Acceso digital para clientes</li> 
                <li>• Rapidez en entrega de resultados</li> 
                <li>• Exactitud de datos</li> 
              </ul> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 
export default Technology; 
