"use client"; 
import React, { useState } from 'react'; 
import { faqData } from '../../data/faq'; 
 
const FAQ = () => { 
  const [openIndex, setOpenIndex] = useState(null); 
 
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
