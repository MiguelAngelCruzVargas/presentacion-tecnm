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
        background: 'linear-gradient(135deg, #2841b8 0%, #3153dd 100%)',
      }}
    >
      {/* Contenedor principal con efecto de cristal y sombra */}
      <div 
        className="w-full max-w-5xl bg-blue-900/40 backdrop-blur-sm rounded-3xl overflow-hidden relative mx-4"
        style={{
          boxShadow: `
            0 10px 30px -5px rgba(0, 0, 0, 0.5),
            0 5px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.3)
          `,
          background: 'linear-gradient(135deg, rgba(25, 35, 126, 0.9) 0%, rgba(21, 27, 99, 0.95) 100%)'
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
                background: 'linear-gradient(135deg, rgba(25, 35, 126, 0.8) 0%, rgba(21, 27, 99, 0.9) 100%)',
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
                  background: 'linear-gradient(135deg, rgba(30, 41, 147, 0.6) 0%, rgba(26, 35, 126, 0.8) 100%)',
                  boxShadow: `
                    0 8px 20px rgba(0, 0, 0, 0.2),
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
              background: 'linear-gradient(135deg, rgba(30, 41, 147, 0.6) 0%, rgba(26, 35, 126, 0.8) 100%)',
              boxShadow: `
                0 8px 20px rgba(0, 0, 0, 0.2),
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
// import React, { useRef, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Advanced3DCover = () => {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

//   const handleMouseMove = (e) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     setMousePosition({ 
//       x: (e.clientX - rect.left) / rect.width * 100, 
//       y: (e.clientY - rect.top) / rect.height * 100 
//     });
//   };

//   const handleMouseLeave = () => {
//     setMousePosition({ x: 50, y: 50 });
//   };

//   // Animación de fondo dinámico
//   const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBackgroundPosition(prev => ({
//         x: prev.x + (Math.random() * 2 - 1) * 5,
//         y: prev.y + (Math.random() * 2 - 1) * 5
//       }));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
//       style={{
//         background: `radial-gradient(
//           circle at ${backgroundPosition.x}% ${backgroundPosition.y}%, 
//           rgba(59, 130, 246, 0.3), 
//           rgba(147, 197, 253, 0.1) 50%, 
//           transparent 70%
//         )`,
//         transition: 'background-position 3s ease-in-out'
//       }}
//     >
//       <div 
//         className="w-full max-w-4xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden relative"
//         style={{
//           boxShadow: `
//             ${20 - Math.abs(mousePosition.x - 50) / 2}px 
//             ${20 - Math.abs(mousePosition.y - 50) / 2}px 
//             50px rgba(0,0,0,0.2)
//           `
//         }}
//       >
//         {/* Efecto de luz */}
//         <div 
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(
//               circle at ${mousePosition.x}% ${mousePosition.y}%, 
//               rgba(255,255,255,0.2), 
//               transparent 50%
//             )`,
//             mixBlendMode: 'color-dodge',
//             opacity: 0.5
//           }}
//         />

//         {/* Columna lateral */}
//         <div 
//           className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-blue-700 to-blue-900" 
//           style={{ 
//             boxShadow: '10px 0 15px -5px rgba(0,0,0,0.3)'
//           }}
//         />

//         {/* Contenido principal */}
//         <div className="relative z-10">
//           {/* Logos */}
//           <div className="flex justify-between items-center p-8 border-b border-gray-200">
//             <motion.div 
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               className="w-40 h-40 bg-blue-100 rounded-full shadow-2xl flex items-center justify-center"
//             >
//               <img 
//                 src="/images/logo1.png" 
//                 alt="SEP Logo" 
//                 className="w-32 h-32 object-contain transform transition-transform hover:rotate-6"
//               />
//             </motion.div>

//             <motion.div 
//               whileHover={{ scale: 1.1, rotate: -5 }}
//               className="w-40 h-40 bg-green-100 rounded-full shadow-2xl flex items-center justify-center"
//             >
//               <img 
//                 src="/images/logo2.png" 
//                 alt="Sistemas Computacionales Logo" 
//                 className="w-32 h-32 object-contain transform transition-transform hover:rotate-6"
//               />
//             </motion.div>
//           </div>

//           {/* Contenido */}
//           <div className="p-12 text-center relative">
//             <motion.h1 
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 mb-6 relative"
//               style={{ 
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
//               }}
//             >
//               TECNOLÓGICO NACIONAL DE MÉXICO
//             </motion.h1>
            
//             <motion.h2 
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-4xl font-bold text-blue-800 mb-8 relative"
//               style={{ 
//                 textShadow: '1px 1px 3px rgba(0,0,0,0.1)'
//               }}
//             >
//               INSTITUTO TECNOLÓGICO de Tuxtepec
//             </motion.h2>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="bg-gray-100 rounded-xl p-6 mb-8 shadow-md"
//             >
//               <h3 className="text-2xl font-semibold text-blue-900 mb-4">
//                 Sistema Integral para la Gestión y Control de Entradas/Salidas
//               </h3>
//               <p className="text-xl text-blue-800">
//                 Tecnológico Nacional de México Campus Tuxtepec
//               </p>
//             </motion.div>

//             {/* Estudiantes */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="grid grid-cols-3 gap-4 mb-8"
//             >
//               {[
//                 { name: "Carrillo Olivera William Jonathan", id: "20350258" },
//                 { name: "Cruz Vargas Miguel Ángel", id: "20350265" },
//                 { name: "Jiménez Díaz Antonio", id: "20350280" }
//               ].map((student, index) => (
//                 <motion.div 
//                   key={student.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.9 + (index * 0.2), duration: 0.6 }}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all"
//                 >
//                   <p className="font-semibold text-gray-800">{student.name}</p>
//                   <p className="text-gray-600">{student.id}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Asesor y fecha */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//               className="bg-blue-50 rounded-xl p-6 shadow-md"
//             >
//               <h4 className="text-xl font-semibold text-blue-900 mb-2">Asesor:</h4>
//               <p className="text-blue-800 text-lg mb-4">Doc. Gaspar Sánchez García</p>
              
//               <div className="text-blue-700">
//                 Tuxtepec, Oaxaca - Enero 2025
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Advanced3DCover;


// import React from 'react';
// import { motion } from 'framer-motion';

// const ExactCoverPage = () => {
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center py-8 bg-gradient-to-br from-gray-100 to-gray-200">
//       <motion.div
//         className="w-full max-w-4xl mx-auto p-8 rounded-2xl"
//         style={{
//           background: "#ecf0f3",
//           boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
//         }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="flex flex-col items-center space-y-6">
//           {/* Logo y Título */}
//           <div className="flex items-center justify-center w-full mb-4">
//             <img
//               src="/api/placeholder/120/120"
//               alt="TecNM Logo"
//               className="w-32 h-32 object-contain"
//             />
//           </div>
          
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl font-bold text-gray-800">TECNOLÓGICO NACIONAL DE MÉXICO</h1>
//             <h2 className="text-xl font-semibold text-gray-700">S.E.P.</h2>
//             <h3 className="text-lg font-medium text-gray-700">INSTITUTO TECNOLÓGICO DE TUXTEPEC</h3>
//           </div>

//           {/* Contenido Principal */}
//           <div className="w-full space-y-6 mt-8">
//             <div className="space-y-2">
//               <h4 className="text-lg font-bold text-gray-800">EMPRESA:</h4>
//               <p className="text-center">TECNOLÓGICO NACIONAL DE MÉXICO CAMPUS TUXTEPEC/ DEPARTAMENTO DE RECURSOS HUMANOS</p>
//             </div>

//             <div className="space-y-2">
//               <h4 className="text-lg font-bold text-gray-800">PROYECTO:</h4>
//               <p className="text-center">SISTEMA INTEGRAL PARA LA GESTIÓN Y CONTROL DE ENTRADAS/SALIDAS DEL PERSONAL DEL TECNOLÓGICO NACIONAL DE MÉXICO CAMPUS TUXTEPEC</p>
//             </div>

//             <div className="space-y-4">
//               <h4 className="text-lg font-bold text-gray-800">PRESENTAN:</h4>
//               <div className="space-y-2">
//                 <p className="text-center">WILLIAM JONATHAN CARILLO OLIVERA</p>
//                 <p className="text-center text-sm">No. CONTROL 20350258</p>
                
//                 <p className="text-center mt-2">MIGUEL ÁNGEL CRUZ VARGAS</p>
//                 <p className="text-center text-sm">No. CONTROL 20350265</p>
                
//                 <p className="text-center mt-2">ANTONIO JIMÉNEZ DÍAZ</p>
//                 <p className="text-center text-sm">No. CONTROL 20350280</p>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <h4 className="text-lg font-bold text-gray-800">CARRERA:</h4>
//               <p className="text-center">INGENIERÍA EN SISTEMAS COMPUTACIONALES</p>
//             </div>

//             <div className="space-y-2">
//               <h4 className="text-lg font-bold text-gray-800">ASESOR INTERNO:</h4>
//               <p className="text-center">DOC. GASPAR SÁNCHEZ GARCÍA</p>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="w-full flex justify-between mt-8 pt-4">
//             <p className="text-gray-700">TUXTEPEC, OAXACA.</p>
//             <p className="text-gray-700">AGOSTO-DICIEMBRE 2024</p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ExactCoverPage;