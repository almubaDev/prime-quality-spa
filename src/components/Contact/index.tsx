"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = "Hola, me interesa obtener más información sobre los servicios de Prime Quality SpA.";
    const phone = "56912345678";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleScrollTo = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Corporativo',
      value: 'info@primequality.cl',
      color: '#3b82f6'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Teléfono y WhatsApp',
      value: '+56 9 1234 5678',
      color: '#10b981'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Cobertura Geográfica',
      value: 'Regiones de Valparaíso, Metropolitana y O\'Higgins',
      color: '#ef4444'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horarios de Atención',
      value: 'Lun-Vie: 8:00-18:00 | Sáb: 9:00-14:00',
      color: '#f59e0b'
    }
  ];

  return (
    <>
      <section id="contacto" className="relative h-screen flex items-center bg-gradient-to-br from-gray-900 via-[#1e3a5f] to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-2 text-white">
              Contáctanos
            </h2>
            <div className="w-16 h-1 bg-[#4a90e2] mx-auto mb-2"></div>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Estamos listos para asegurar la calidad de tu fruta
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Info Cards */}
            <div className="space-y-4 flex flex-col justify-between">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${info.color}20`, color: info.color }}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 text-sm">{info.title}</h4>
                        <p className="text-gray-300 text-sm">{info.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Solicitar Inspección</h3>

              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] transition-colors text-white placeholder-gray-400 text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] transition-colors text-white placeholder-gray-400 text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] transition-colors text-white placeholder-gray-400 text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] transition-colors text-white placeholder-gray-400 text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] transition-colors text-white placeholder-gray-400 text-sm resize-none"
                    placeholder="Cuéntanos sobre tu proyecto de exportación..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex-1"></div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 mt-auto ${
                    submitSuccess
                      ? 'bg-green-600 text-white cursor-not-allowed'
                      : isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-wait'
                      : 'bg-[#4a90e2] text-white hover:bg-[#3b7bd1] hover:shadow-lg'
                  }`}
                >
                  {submitSuccess ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Mensaje Enviado
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar Solicitud'
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => handleScrollTo('#footer')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <motion.button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-500 transition-all duration-300 z-50 hover:scale-110"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687"/>
        </svg>
      </motion.button>
    </>
  );
};

export default Contact;
