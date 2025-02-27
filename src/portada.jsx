import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Advanced3DCover = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ 
      x: (e.clientX - rect.left) / rect.width * 100, 
      y: (e.clientY - rect.top) / rect.height * 100 
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        // Fondo principal modificado - ahora con azul más claro
        background: 'linear-gradient(135deg, #3267c1 0%, #5d8ae8 100%)',
      }}
    >
      {/* Contenedor principal con efecto de cristal y sombra - AHORA CON AZUL MÁS CLARO */}
      <div 
        className="w-full max-w-5xl bg-blue-900/40 backdrop-blur-sm rounded-3xl overflow-hidden relative mx-4"
        style={{
          boxShadow: `
            0 10px 30px -5px rgba(0, 0, 0, 0.5),
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3)
          `,
          background: 'linear-gradient(135deg, rgba(36, 51, 155, 0.85) 0%, rgba(35, 45, 142, 0.9) 100%)'
        }}
      >
        {/* Barra lateral con textura */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-16"
          style={{
            background: 'linear-gradient(180deg, #1a237e 0%, #1e2993 100%)',
            boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-10 py-10 px-8">
          {/* Logos */}
          <div className="flex justify-between items-center mb-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-44 h-44 bg-white rounded-full shadow-2xl flex items-center justify-center p-2"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
              }}
            >
              <img 
                src="/images/logo1.png" 
                alt="SEP Logo" 
                className="w-40 h-40 object-contain"
              />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-44 h-44 bg-white rounded-full shadow-2xl flex items-center justify-center p-2"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
              }}
            >
              <img 
                src="/images/logo2.png" 
                alt="Sistemas Computacionales Logo" 
                className="w-40 h-40 object-contain"
              />
            </motion.div>
          </div>

          {/* Títulos con efecto 3D */}
          <div className="text-center space-y-6 mb-10">
            <motion.h1 
              className="text-5xl font-bold text-white mb-4 tracking-wide"
              style={{ 
                textShadow: `
                  2px 2px 4px rgba(0, 0, 0, 0.3),
                  -1px -1px 0 rgba(255, 255, 255, 0.2)
                `,
                letterSpacing: '0.05em'
              }}
            >
              TECNOLÓGICO NACIONAL DE MÉXICO
            </motion.h1>
            
            <motion.h2 
              className="text-4xl font-semibold text-blue-100 mb-6"
              style={{ 
                textShadow: `
                  2px 2px 4px rgba(0, 0, 0, 0.3),
                  -1px -1px 0 rgba(255, 255, 255, 0.1)
                `
              }}
            >
              INSTITUTO TECNOLÓGICO de Tuxtepec
            </motion.h2>

            {/* Contenedor con efecto de cristal y borde brillante */}
            <motion.div
              className="rounded-2xl p-6 mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(25, 35, 126, 0.6) 0%, rgba(21, 27, 99, 0.7) 100%)',
                boxShadow: `
                  0 8px 20px rgba(0, 0, 0, 0.2),
                  inset 0 1px 2px rgba(255, 255, 255, 0.2)
                `,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-3"
                  style={{ 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
                  }}>
                Sistema Integral para la Gestión y Control de Entradas/Salidas
              </h3>
              <p className="text-xl text-blue-100">
                Tecnológico Nacional de México Campus Tuxtepec
              </p>
            </motion.div>
          </div>

          {/* Estudiantes con efecto de cristal */}
          <motion.div 
            className="grid grid-cols-3 gap-6 mb-10"
          >
            {[
              { name: "Carrillo Olivera William Jonathan", id: "20350258" },
              { name: "Cruz Vargas Miguel Ángel", id: "20350265" },
              { name: "Jiménez Díaz Antonio", id: "20350280" }
            ].map((student, index) => (
              <motion.div 
                key={student.id}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl p-4 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 147, 0.4) 0%, rgba(26, 35, 126, 0.5) 100%)',
                  boxShadow: `
                    0 8px 20px rgba(0, 0, 0, 0.15),
                    inset 0 1px 2px rgba(255, 255, 255, 0.2)
                  `,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <p className="font-semibold text-white text-lg mb-2"
                   style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
                  {student.name}
                </p>
                <p className="text-blue-100 text-base">
                  {student.id}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Asesor y fecha */}
          <motion.div
            className="rounded-xl p-6 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 147, 0.4) 0%, rgba(26, 35, 126, 0.5) 100%)',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.15),
                inset 0 1px 2px rgba(255, 255, 255, 0.2)
              `,
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h4 className="text-2xl font-bold text-white mb-3"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Asesor:
            </h4>
            <p className="text-xl text-blue-100 mb-3"
               style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              Doc. Gaspar Sánchez García
            </p>
            
            <div className="text-lg text-blue-100">
              Tuxtepec, Oaxaca - Enero 2025
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Advanced3DCover;