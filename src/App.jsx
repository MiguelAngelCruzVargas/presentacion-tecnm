import React, { useState, useRef, useEffect, useCallback } from "react";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { motion, AnimatePresence } from 'framer-motion';
import ExactCoverPage from './portada';
import FundamentacionTeorica from './mapa';

import {
  User, Briefcase, Database, Camera, Fingerprint,
  Bell, Menu, Users, FileText, Settings, Calendar,
  Network, Mail, Lock, Search, ClipboardList,
  CheckCircle, Wrench, Sun, Shield, FolderOpen, List, Clock,
  Download, LineChart, Activity, AlertCircle, MessageSquare, ListChecks,
  BarChart, BarChart2, History, UserPlus, Send, Maximize2, Minimize2, ChevronLeft, ChevronRight,
  Building2, Target, AlertTriangle, CheckCircle2, Smartphone, ChevronDown, X,
  Monitor, Printer
} from 'lucide-react';


// Variantes para animaciones (mover al inicio del archivo)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

// Variantes para listas
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Variantes para elementos individuales
const elementVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

//////////////////////////////////


///////////////////////////////


const Introduccion = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 0.9, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, 20, -20, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 0.9, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, -20, 20, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      {/* Título con efecto mejorado */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-12 relative overflow-hidden flex flex-col items-center text-center"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          INTRODUCCIÓN
        </motion.h1>

        <motion.div
          className="mt-2 text-lg text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Sistema ChecaTec: Innovación en Control de Asistencia
        </motion.div>
      </motion.div>


      {/* Contenedor principal */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-6">
        {/* Descripción General */}
        <motion.div
          className="col-span-2 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: -6,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <motion.p
            className="text-lg text-gray-700 leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            El control de asistencia es crucial para la eficiencia operativa y el cumplimiento de normativas en instituciones. En el TecNM Campus Tuxtepec, el sistema ChecaTec moderniza este proceso con tecnologías de reconocimiento facial y huellas dactilares, garantizando registros únicos, verificables y reduciendo errores y manipulaciones.
          </motion.p>
        </motion.div>

        {/* Control de Asistencia */}
        <motion.div
          className="rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            y: -6,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
            scale: 1.02
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl shadow-lg transform -rotate-3"
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ClipboardList className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-blue-800">Control de Asistencia</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-1"></div>
            </div>
          </div>

          <motion.ul
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {["Importancia", "Desafíos"].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <div className="bg-blue-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Sistema ChecaTec */}
        <motion.div
          className="rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{
            y: -6,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
            scale: 1.02
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-xl shadow-lg transform -rotate-3"
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Network className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">Sistema ChecaTec</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-1"></div>
            </div>
          </div>

          <motion.ul
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {["Objetivo", "Beneficios"].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Módulos del Sistema */}
        <motion.div
          className="col-span-2 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            y: -6,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          {/* Contenedor centrado para el título e icono */}
          <div className="flex flex-col items-center text-center mb-6">
            <motion.div
              className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-xl shadow-lg"
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <List className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-purple-800 mt-2">Módulos del Sistema</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-1"></div>
          </div>

          {/* Contenedor principal centrado */}
          <div className="max-w-4xl mx-auto">
            {/* Grid con alineación específica */}
            <motion.div
              className="grid grid-cols-3 gap-x-8 gap-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.3, staggerChildren: 0.1 }
                }
              }}
            >
              {[
                "Archivos", "Catálogos", "Reportes",
                "Seguridad", "Mantenimiento", "Días Festivos",
                "Avisos"
              ].map((modulo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-lg text-gray-700">{modulo}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Estilos para la animación de blobs */}
      <style jsx>{`
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
`}</style>
    </div>
  );
};

////////////////////////
const CaracterizacionEmpresa = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (src) => {
    setZoomedImage(src);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Elementos decorativos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Título con efecto neumórfico */}
      <motion.div
        className="rounded-2xl px-12 py-6 mb-8 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          CARACTERIZACIÓN DE LA EMPRESA
        </h1>
      </motion.div>

      {/* Contenedor principal con diseño más compacto */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-6">
        {/* Información General */}
        <motion.div
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-800">Información General</h2>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Nombre</h3>
              <p className="text-base text-gray-700">Tecnológico Nacional de México Campus Tuxtepec</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Ubicación</h3>
              <p className="text-base text-gray-700">Calzada Dr. Víctor Bravo Ahuja Núm. 561, Col Predio El Paraíso Cp. 68350, San Juan Bautista Tuxtepec, Oaxaca.</p>
            </div>
          </div>
        </motion.div>

        {/* Estructura Organizacional */}
        <motion.div
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl shadow-lg">
              <Network className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-800">Estructura Organizacional</h2>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <div
              onClick={() => handleImageClick("/images/estrucuta.png")}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/estrucuta.png"
                alt="Estructura Organizacional"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          className="col-span-2 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-purple-800">
              Misión y Visión
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-1"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-700 border-b pb-1">Misión</h3>
              <p className="text-base text-gray-700 leading-relaxed text-justify hyphens-auto">
                Formar profesionistas de nivel superior, participativos, creativos y emprendedores, con principios y valores, a través de una educación de calidad basada en competencias, comprometidos en brindar servicios con un alto nivel de desempeño, para contribuir al desarrollo integral de la sociedad.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-700 border-b pb-1 text-right">Visión</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Ser una institución de educación superior de excelencia con valores, basada en el liderazgo educativo de alta calidad, que contribuya al desarrollo sostenido, sustentable y equitativo de la nación.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal de imagen ampliada con zoom */}
      {zoomedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseZoom}
        >
          <TransformWrapper
            initialScale={1}
            wheel={{ step: 0.5 }}
            pinch={{ disabled: false }}
          >
            <TransformComponent>
              <motion.img
                src={zoomedImage}
                alt="Estructura Organizacional Ampliada"
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              />
            </TransformComponent>
          </TransformWrapper>
        </motion.div>
      )}
    </div>
  );
};
///////////////////////////////



const ProblemasResolver = () => {
  const problematicas = [
    {
      icon: FileText,
      title: "Reportes",
      color: "from-blue-400 to-blue-600",
      keywords: [
        { text: "PDF", className: "bg-blue-100" },
        { text: "Excel", className: "bg-blue-100" },
        { text: "Manual", className: "bg-blue-100" },
        { text: "Inconsistencia", className: "bg-blue-100" }
      ],
      details: [
        "No permite generar reportes en formato PDF",
        "Imposibilidad de exportar asistencia a Excel",
        "Proceso manual propenso a errores",
        "Informes inconsistentes y desorganizados"
      ]
    },
    {
      icon: Database,
      title: "Base de Datos",
      color: "from-red-400 to-red-600",
      keywords: [
        { text: "Encriptación", className: "bg-red-100" },
        { text: "Acceso", className: "bg-red-100" },
        { text: "Control", className: "bg-red-100" },
        { text: "Actualización", className: "bg-red-100" }
      ],
      details: [
        "Base de datos encriptada de difícil acceso",
        "Procesamiento manual de información",
        "Riesgo de desactualización de datos",
        "Falta de controles de acceso"
      ]
    },
    {
      icon: Calendar,
      title: "Horarios",
      color: "from-green-400 to-green-600",
      keywords: [
        { text: "Flexibilidad", className: "bg-green-100" },
        { text: "Manual", className: "bg-green-100" },
        { text: "Duplicidad", className: "bg-green-100" },
        { text: "Complejidad", className: "bg-green-100" }
      ],
      details: [
        "Sin flexibilidad para ajustes especiales",
        "Registro manual de modificaciones",
        "Doble sistema de control ineficiente",
        "Proceso no intuitivo de carga"
      ]
    },
    {
      icon: Activity,
      title: "Hardware",
      color: "from-purple-400 to-purple-600",
      keywords: [
        { text: "Biométrico", className: "bg-purple-100" },
        { text: "Supervisión", className: "bg-purple-100" },
        { text: "Fallas", className: "bg-purple-100" },
        { text: "Accesibilidad", className: "bg-purple-100" }
      ],
      details: [
        "Un único método de registro biométrico",
        "Supervisión manual de dispositivos",
        "Sin detección temprana de fallas",
        "Falta de elementos inclusivos"
      ]
    },
    {
      icon: Bell,
      title: "Comunicación",
      color: "from-yellow-400 to-yellow-600",
      keywords: [
        { text: "Físico", className: "bg-yellow-100" },
        { text: "Recursos", className: "bg-yellow-100" },
        { text: "Email", className: "bg-yellow-100" },
        { text: "Incidencias", className: "bg-yellow-100" }
      ],
      details: [
        "Avisos solo en formato físico",

        "Sin notificaciones por correo",
        "Comunicación ineficiente"
      ]
    },
    {
      icon: Monitor,
      title: "Sistema",
      color: "from-pink-400 to-pink-600",
      keywords: [
        { text: "Windows 98", className: "bg-pink-100" },
        { text: "Errores", className: "bg-pink-100" },
        { text: "Obsoleto", className: "bg-pink-100" },
        { text: "Intuitivo", className: "bg-pink-100" }
      ],
      details: [
        "Compatibilidad solo con Windows 98",
        "Errores frecuentes en monitor",
        "Funcionalidades no utilizadas",
        "Interfaz poco intuitiva"
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}>
      {/* Título */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-12 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          PROBLEMÁTICA
        </h1>
      </motion.div>

      {/* Grid de problemas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6">
        {problematicas.map((problema, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-6 group relative"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
          >
            {/* Contenido visible */}
            <div className="flex flex-col items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl relative flex items-center justify-center bg-gradient-to-br ${problema.color} p-4 shadow-lg transform -rotate-3`}>
                <problema.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-center">{problema.title}</h2>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {problema.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${keyword.className}`}
                  >
                    {keyword.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Tooltip para detalles */}
            <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full 
                          bg-gray-900 text-white p-4 rounded-lg w-72 shadow-xl z-50 
                          transition-all duration-300 ease-in-out mt-2">
              <ul className="space-y-2 text-sm">
                {problema.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                            border-l-8 border-r-8 border-t-8 
                            border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


////////////////////////////

const Justificacion = () => {
  const puntos = [
    {
      icon: Fingerprint,
      title: "Sistema Dual",
      color: "from-blue-400 to-blue-600",
      keywords: ["Biométrico", "Facial", "Verificación", "Rapidez"],
      details: [
        "Integración de reconocimiento facial con huella dactilar",
        "Verificación cruzada de identidades",
        "Mayor rapidez en el registro",
        "Adaptación a diversas condiciones físicas"
      ]
    },
    {
      icon: Database,
      title: "Optimización",
      color: "from-green-400 to-green-600",
      keywords: ["Intuitivo", "Eficiente", "Unificado", "Gestión"],
      details: [
        "Carga de horarios más intuitiva y rápida",
        "Gestión simplificada de múltiples campus",
        "Plataforma unificada TecNM",
        "Administración eficiente del personal"
      ]
    },
    {
      icon: Shield,
      title: "Seguridad",
      color: "from-purple-400 to-purple-600",
      keywords: ["Encriptación", "Roles", "Control", "Protección"],
      details: [
        "Control de acceso por roles",
        "Protección de datos confidenciales",
        "Exportación controlada de información"
      ]
    },
    {
      icon: Clock,
      title: "Flexibilidad",
      color: "from-yellow-400 to-yellow-600",
      keywords: ["Adaptable", "Emergencias", "Festivos", "Ajustes"],
      details: [
        "Adaptación a situaciones de emergencia",
        "Registro automático de días festivos",
        "Ajustes de horarios simplificados",
        "Respuesta ágil a eventos extraordinarios"
      ]
    },
    {
      icon: Bell,
      title: "Comunicación",
      color: "from-pink-400 to-pink-600",
      keywords: ["Digital", "Email", "Avisos", "Tiempo Real"],
      details: [
        "Notificaciones por correo electrónico",
        "Avisos digitales personalizados",
        "Comunicación en tiempo real",

      ]
    },
    {
      icon: Settings,
      title: "Mantenimiento",
      color: "from-indigo-400 to-indigo-600",
      keywords: ["Monitoreo", "Proactivo", "Inclusivo", "Accesible"],
      details: [
        "Monitoreo en tiempo real de los sistemas",
        "Elementos audiovisuales inclusivos",
        "Compatibilidad con Windows actual"
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}>
      {/* Título */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-12 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          JUSTIFICACIÓN
        </h1>
      </motion.div>

      {/* Grid de justificaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6">
        {puntos.map((punto, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-6 group relative"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
          >
            {/* Contenido visible */}
            <div className="flex flex-col items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl relative flex items-center justify-center bg-gradient-to-br ${punto.color} p-4 shadow-lg transform -rotate-3`}>
                <punto.icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-center">{punto.title}</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {punto.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white/50 shadow-inner"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Tooltip con detalles */}
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 
              bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white p-4 rounded-lg w-64 z-20
              before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 
              before:border-8 before:border-transparent before:border-t-gray-900 shadow-xl">
              <ul className="space-y-2 text-sm">
                {punto.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resumen */}
      <motion.div
        className="mt-8 max-w-3xl px-6 py-4 rounded-xl text-center backdrop-blur-sm"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-xl text-gray-800">
          ChecaTec busca mejorar la precisión, rapidez y confiabilidad del registro de asistencia, resolviendo limitaciones del enfoque actual y adaptándose a futuras necesidades tecnológicas.
        </p>
      </motion.div>
    </div>
  );
};

/////////////////////////




const Objetivos = () => (
  <div
    className="min-h-screen w-full flex flex-col items-center justify-start py-10 text-gray-800 relative overflow-hidden"
    style={{
        background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
    }}
  >
    {/* Elementos decorativos de fondo */}
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 20, -20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -20, 20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
    </div>

    {/* Título */}
    <motion.div
      className="rounded-2xl px-12 py-8 mb-8 relative overflow-hidden"
      style={{
        background: "rgba(236, 240, 243, 0.8)",
        boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
        backdropFilter: "blur(10px)"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 text-center">
        OBJETIVOS
      </h1>
    </motion.div>

    {/* Contenido principal */}
    <div className="flex flex-col gap-8 max-w-6xl px-6 relative z-10">
      {/* Objetivo General */}
      <motion.div

        className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        whileHover={{
          y: -4,
          boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl relative flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 p-3 shadow-lg transform -rotate-3">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-blue-800">Objetivo General</h2>
        </div>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Implementar un sistema de registro de asistencia integral que combine tecnologías de reconocimiento de huellas dactilares y facial para mejorar la eficiencia y precisión en la verificación de identidades de los empleados para optimizar la administración y control del personal en el Tecnológico Nacional de México Campus Tuxtepec.
        </motion.p>
      </motion.div>

      {/* Objetivos Específicos */}
      <motion.div
        className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl relative flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 p-3 shadow-lg transform -rotate-3">
            <ListChecks className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-green-800">Objetivos Específicos</h2>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              icon: FileText,
              title: "Requerimientos",
              keywords: ["Entrevistas", "Historias de Usuario"],
              gradient: "from-blue-400 to-blue-600",
              descripcion: "Obtener los requerimientos del sistema actual haciendo uso de los métodos de recolección de requisitos como lo son la entrevista e historias de usuario."
            },
            {
              icon: Wrench,
              title: "Metodología",
              keywords: ["Planificación", "Desarrollo Ágil"],
              gradient: "from-purple-400 to-purple-600",
              descripcion: "Definir la metodología para desarrollar el proyecto de una manera ordenada, precisa y eficaz."
            },
            {
              icon: Fingerprint,
              title: "Implementación",
              keywords: ["Biometría Dual", "Sistema Integral"],
              gradient: "from-green-400 to-green-600",
              descripcion: "Adaptar el software para integrar tanto la solución dual de reconocimiento de huellas dactilares y facial como la parte administrativa, asegurando mejorar la precisión y reducir los tiempos de registro del personal."
            },
            {
              icon: Target,
              title: "Evaluación",
              keywords: ["Pruebas", "Retroalimentación"],
              gradient: "from-yellow-400 to-yellow-600",
              descripcion: "Evaluar el software en un entorno real con personal del instituto, verificando su funcionamiento bajo diversas condiciones, recopilando feedback y ajustando el software según sea necesario."
            },
            {
              icon: Users,
              title: "Capacitación",
              keywords: ["Usuarios", "Administradores"],
              gradient: "from-red-400 to-red-600",
              descripcion: "Capacitar a los usuarios y administradores del sistema sobre cómo operar y mantener el nuevo sistema de registro de asistencia."
            }
          ].map((objetivo, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-4 backdrop-blur-sm bg-white/90 relative group cursor-help"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                boxShadow: "5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(255,255,255,0.8)"
              }}
            >
              <div className={`w-12 h-12 rounded-xl relative flex items-center justify-center bg-gradient-to-br ${objetivo.gradient} p-3 shadow-lg transform -rotate-3 mx-auto mb-3`}>
                <objetivo.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{objetivo.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {objetivo.keywords.map((keyword, kidx) => (
                  <span
                    key={kidx}
                    className="px-2 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>


              {/* Tooltip simple */}
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 
                absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full 
                bg-black text-white p-3 rounded-lg text-sm w-64 z-20 mb-2 
                before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-full 
                before:border-8 before:border-transparent before:border-t-black">
                {objetivo.descripcion}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
);


////////////////////////////
const ProcedimientosParte1 = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Título con efecto neumórfico mejorado */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-8 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          METODOLOGÍA(1/2)
        </h1>
      </motion.div>

      {/* Contenedor principal */}
      <motion.div
        className="grid grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fase de Planificación */}
        <motion.div
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-800">Fase de Planificación</h2>
          </div>

          <ul className="space-y-3">
            {[
              "Reunión con Stakeholders para recolección de requisitos",
              "Creación y priorización de historias de usuario",
              "Investigación de herramientas para diagramas",
              "Modularización del proyecto",
              "Definición GUI"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Fase de Diseño */}
        <motion.div
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl shadow-lg">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-purple-800">Fase de Diseño</h2>
          </div>

          <ul className="space-y-3">
            {[
              "Desarrollo de mockups según mejoras propuestas",
              "Elaboración de diagrama de sitio",
              "Definición de tecnologías y lenguajes",
              "Selección de base de datos",
              "Creación del esquema de base de datos"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};
// Segunda parte de las actividades
const ProcedimientosParte2 = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Título con efecto neumórfico mejorado */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-8 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-red-500 to-purple-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-red-600 text-center">
          METODOLOGÍA (2/2)
        </h1>
      </motion.div>

      {/* Contenedor principal */}
      <motion.div
        className="grid grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Implementación Biométrica */}
        <motion.div
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl shadow-lg">
              <Fingerprint className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-800">Implementación Biométrica</h2>
          </div>

          <ul className="space-y-3">
            {[
              "Detección y seguimiento de rostros",
              "Sistema anti-suplantación",
              "Instalación y configuración del lector de huellas",
              "Interfaz de gestión del lector",
              "Configuración de captura de video"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Integración y Pruebas */}
        <motion.div
          className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-red-400 to-red-600 p-3 rounded-xl shadow-lg">
              <ListChecks className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-red-800">Integración y Pruebas</h2>
          </div>

          <ul className="space-y-3">
            {[
              "Conexión con el sistema",
              "Creación de módulos y apartados",
              "Reproducción de sonidos para eventos",
              "Pruebas del lector de huellas",
              "Pruebas finales del sistema completo"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};
//////////////////////////
const ResultadosIntro = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            RESULTADOS
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: FileText, text: "Sistema", color: "from-blue-400 to-blue-600" },
            { icon: Shield, text: "Seguridad", color: "from-purple-400 to-purple-600" },
            { icon: CheckCircle, text: "Control", color: "from-green-400 to-green-600" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3"
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 rounded-2xl relative flex items-center justify-center bg-gradient-to-br ${item.color} p-3 shadow-lg transform -rotate-3`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-gray-300 text-xl font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Resultados finales de los sistemas Administrador y reloj checador
        </motion.div>

        {/* Línea decorativa */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >

        </motion.div>
      </motion.div>
    </div>
  );
};


/////////////////////////
// Componente neumórfico para las tarjetas y el título
const FormularioRegistro = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Título con estilo neumórfico mejorado */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-12 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          FORMULARIO DE REGISTRO
        </h1>
      </motion.div>

      {/* Contenedor de tarjetas */}
      <motion.div
        className="grid grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Tarjeta 1: Datos Generales */}
        <motion.div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #c7e3ff 0%, #ecf0f3 100%)",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl shadow-lg transform -rotate-3">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-800">Datos Generales</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-1"></div>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "RFC*", "CURP*", "Nombre completo*", "Fecha de nacimiento*",
              "Sexo*", "Correo electrónico*", "Teléfono"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tarjeta 2: Datos de Contratación */}
        <motion.div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #caffc2 0%, #ecf0f3 100%)",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-xl shadow-lg transform -rotate-3">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">Datos de Contratación</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-1"></div>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Departamento*", "Puesto*",
              "Fecha de contratación*", "No. Seguridad Social*"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tarjeta 3: Datos de Ubicación */}
        <motion.div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #f3c7ff 0%, #ecf0f3 100%)",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-xl shadow-lg transform -rotate-3">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-purple-800">Datos de Ubicación</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-1"></div>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Calle", "Colonia", "Ciudad*",
              "Estado*", "Código Postal"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Nota de campos obligatorios */}
      <motion.div
        className="mt-10 w-full max-w-6xl mx-auto rounded-2xl p-5 text-center text-base font-medium"
        style={{
          background: "#ecf0f3",
          boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      >
        (*) Campos obligatorios para completar el registro
      </motion.div>
    </div>
  );
};
///////////////////////////////////////////////

const RegistroBiometrico = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
        background: "linear-gradient(135deg, #d1d5da 0%, #f0f2f5 100%)"
      }}
    >
      {/* Título con estilo neumórfico mejorado */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-12 relative overflow-hidden text-center"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-400 to-green-600"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-green-700">
          REGISTRO BIOMÉTRICO
        </h1>
      </motion.div>

      {/* Contenedor de tarjetas */}
      <motion.div
        className="grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Huella Dactilar */}
        <motion.div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #c7e3ff 0%, #ecf0f3 100%)",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff"
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl shadow-lg transform -rotate-3">
              <Fingerprint className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-800">Registro de Huella Dactilar</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-1"></div>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl mb-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff"
            }}
          >
            <img
              src="/images/Imagen1.png"
              alt="Registro de huella"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <ul className="space-y-4">
            {[
              "Captura de huella con validación de calidad",
              "Selección flexible del dedo a registrar",
              "Retroalimentación visual del proceso"
            ].map((texto, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-lg">{texto}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Registro Fotográfico */}
        <motion.div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, #caffc2 0%, #ecf0f3 100%)",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff"
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-xl shadow-lg transform -rotate-3">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">Registro Fotográfico</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-1"></div>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl mb-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff"
            }}
          >
            <img
              src="/images/Imagen2.png"
              alt="Registro de foto"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <ul className="space-y-4">
            {[
              "Captura en tiempo real con guías de posición",
              "Verificación de calidad de imagen",
              "Optimización automática de iluminación"
            ].map((texto, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <span className="text-lg">{texto}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

/////////////////////////////////
const SistemaChecador = () => (
  <div
    className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8"
    style={{
        background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
    }}
  >
    {/* Título con estilo neumórfico mejorado */}
    <motion.div
      className="rounded-2xl px-6 py-4 mb-8 relative overflow-hidden text-center"
      style={{
        background: "#ecf0f3",
        boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-600"></div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-yellow-700">
        SISTEMA CHECADOR PRINCIPAL
      </h1>
    </motion.div>

    {/* Sección principal */}
    <motion.div
      className="grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Vista previa de cámara */}
      <motion.div
        className="rounded-2xl p-6"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
        }}
        whileHover={{
          y: -4,
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl relative flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 p-3 shadow-lg transform -rotate-3">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Interfaz Principal
          </h2>
        </div>
        <div
          className="h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
          style={{
            background: "#333",
            boxShadow:
              "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
          }}
        >
          <img
            src="/images/Imagen3.png"
            alt="Vista previa de cámara"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="rounded-lg p-4"
          style={{
            background: "#ecf0f3",
            boxShadow:
              "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
          }}
        >
          <p className="text-xl text-blue-800 font-semibold text-center">
            Vista previa de cámara en tiempo real
          </p>
        </div>
      </motion.div>

      {/* Características */}
      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {[
          {
            icon: Camera,
            title: "Reconocimiento Facial",
            gradient: "from-blue-400 to-blue-600",
            details: [
              "Detección automática de rostro",
              "Verificación en tiempo real",
              "Retroalimentación visual",
            ],
          },
          {
            icon: Fingerprint,
            title: "Lectura de Huella",
            gradient: "from-green-400 to-green-600",
            details: [
              "Método alternativo de registro",
              "Validación inmediata",
              "Confirmación auditiva",
            ],
          },
          {
            icon: Bell,
            title: "Sistema de Avisos",
            gradient: "from-yellow-400 to-yellow-600",
            details: [
              "Mensajes personalizados",
              "Avisos generales",
              "Notificaciones en tiempo real",
            ],
          },
        ].map(({ icon: Icon, title, gradient, details }, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-7 h-7 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${gradient} p-2 shadow-lg transform -rotate-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">
                {title}
              </h3>
            </div>
            <ul className="text-lg space-y-2 list-disc ml-6">
              {details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    {/* Footer */}
    <motion.div
      className="mt-6 grid grid-cols-3 gap-4 w-full max-w-5xl mx-auto px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {[
        {
          title: "Precisión",
          gradient: "from-blue-400 to-blue-600",
          description: "Alta precisión en reconocimiento biométrico"
        },
        {
          title: "Velocidad",
          gradient: "from-green-400 to-green-600",
          description: "Procesamiento rápido de datos"
        },
        {
          title: "Feedback",
          gradient: "from-red-400 to-red-600",
          description: "Retroalimentación visual"
        },
      ].map(({ title, gradient, description }, index) => (
        <motion.div
          key={index}
          className="rounded-2xl p-4"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-center gap-3 justify-center mb-3">
            <div className={`w-8 h-8 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${gradient} p-2 shadow-lg transform -rotate-3`}>
              <h4 className="text-sm font-bold text-white">{title[0]}</h4>
            </div>
            <h4 className="text-xl font-semibold">{title}</h4>
          </div>
          <p className="text-lg text-gray-700">{description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);



// Agregar después de SistemaChecador y antes del array slides
const SistemaAdministrador = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
    style={{
        background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
    }}>
    {/* Título con estilo neumórfico y degradado azul-morado */}
    <motion.div
      className="rounded-2xl px-6 py-4 text-center relative overflow-hidden"
      style={{
        background: "#ecf0f3",
        boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-700">
        SISTEMA ADMINISTRADOR
      </h1>
    </motion.div>

    {/* Contenedor principal con animación escalonada */}
    <motion.div
      className="grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-8 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Login */}
      <motion.div
        className="rounded-2xl p-6"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
        }}
        variants={cardVariants}
        whileHover={{
          y: -4,
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Control de Acceso */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-lg shadow-lg transform -rotate-3"
          >
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold">Control de Acceso</h2>
        </div>

        <div className="bg-gray-100 p-3 mb-4 rounded-lg"
          style={{
            boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
          }}>
          <img src="/images/Imagen4.png" alt="Login Interface" className="rounded-lg shadow-md w-full" />
        </div>

        <div className="text-lg space-y-3">
          <div className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-all">
            <Lock className="w-5 h-5 text-blue-500" />
            <span className="text-lg">Autenticación mediante credenciales únicas</span>
          </div>
          <div className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-all">
            <Shield className="w-5 h-5 text-blue-500" />
            <span className="text-lg">Niveles de acceso personalizados</span>
          </div>
        </div>

      </motion.div>

      {/* Menú Principal */}
      <motion.div
        className="rounded-2xl p-6"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
        }}
        variants={cardVariants}
        whileHover={{
          y: -4,
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Menú Principal */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="bg-gradient-to-br from-purple-400 to-purple-600 p-2 rounded-lg shadow-lg transform -rotate-3"
          >
            <Menu className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold">Menú Principal</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[300px]">
          <div className="p-4 rounded-lg flex flex-col"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}>
            <h3 className="font-semibold text-blue-800 mb-3">Acceso Rápido</h3>
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-all">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="ttext-base font-medium">Checador</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-all">
                <FileText className="w-5 h-5 text-blue-500" />
                <span className="ttext-base font-medium">Empleados</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg flex flex-col"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}>
            <h3 className="font-semibold text-purple-800 mb-3">Módulos</h3>
            <div className="flex-1 flex flex-col justify-center space-y-2">
              {['Archivos', 'Catálogos', 'Reportes', 'Seguridad'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 hover:bg-purple-50 rounded-lg transition-all">
                  <FileText className="w-5 h-5 text-purple-500" />
                  <span className="ttext-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>

    {/* Footer con características mejoradas */}
    <motion.div
      className="mt-8 flex justify-center gap-6 w-full max-w-6xl px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {[
        { icon: Shield, text: "Control de acceso seguro", gradient: "from-blue-400 to-blue-600" },
        { icon: Settings, text: "Gestión centralizada", gradient: "from-purple-400 to-purple-600" },
        { icon: Users, text: "Múltiples roles de usuario", gradient: "from-green-400 to-green-600" }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex-1 px-8 py-4 rounded-2xl flex items-center gap-4"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div
            className={`w-9 h-9 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${item.gradient} p-2 shadow-lg transform -rotate-3`}
          >
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-800 text-lg font-semibold whitespace-nowrap">{item.text}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
//////////////////////////////

const ModulosAdministrador = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = (src, alt) => {
    setZoomedImage({ src, alt });
  };

  const handleClickOutside = (e) => {
    if (zoomedImage && imageRef.current && !imageRef.current.contains(e.target)) {
      setZoomedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [zoomedImage]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Título con estilo neumórfico y degradado azul-verde */}
      <motion.div
        className="rounded-2xl px-6 py-4 text-center relative overflow-hidden"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-500">
          MÓMUDLOS PRINCIPALES
        </h1>
      </motion.div>


      {/* Contenedor principal con animación escalonada */}
      <motion.div
        className="grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-10 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Archivos */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Módulo Archivos */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <FolderOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Módulo Archivos</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { name: 'Institución', image: '/images/archivo.png' },
              { name: 'Empresa', image: '/images/empresa.png' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg relative"
                style={{
                  background: "#ecf0f3",
                  boxShadow:
                    "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
                }}
                onClick={() => handleImageClick(item.image, item.name)}
                ref={imageRef}
              >
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded shadow-md w-full mb-2"
                    />
                  </TransformComponent>
                </TransformWrapper>
                <p className="text-center text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Lista de funcionalidades */}
          <div
            className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow:
                "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="text-lg space-y-2">
              {[
                "Registro de campus TecNM",
                "Gestión de instituciones",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Catálogos */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Módulo Catálogos */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Módulo Catálogos</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { name: 'Departamentos', image: '/images/departamentos.png' },
              { name: 'Horarios', image: '/images/horarios.png' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg relative"
                style={{
                  background: "#ecf0f3",
                  boxShadow:
                    "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
                }}
                onClick={() => handleImageClick(item.image, item.name)}
                ref={imageRef}
              >
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded shadow-md w-full mb-2"
                    />
                  </TransformComponent>
                </TransformWrapper>
                <p className="text-center text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>
          {/* Lista de funcionalidades */}
          <div
            className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow:
                "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="text-lg space-y-2">
              {[
                "Gestión de departamentos y puestos",
                "Control de horarios e incidencias",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-10 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          {
            icon: FileText,
            text: "Exportación PDF/Excel",
            gradient: "from-blue-400 to-blue-600"
          },
          {
            icon: Settings,
            text: "Configuración flexible",
            gradient: "from-green-400 to-green-600"
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="px-8 py-4 rounded-2xl flex items-center gap-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div
              className={`w-9 h-9 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${item.gradient} p-2 shadow-lg transform -rotate-3`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

///////////////////////////////////////////////////

const ReportesSeguridad = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = (src, alt) => {
    setZoomedImage({ src, alt });
  };

  const handleClickOutside = (e) => {
    if (zoomedImage && imageRef.current && !imageRef.current.contains(e.target)) {
      setZoomedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [zoomedImage]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Título con estilo neumórfico y degradado azul-verde */}
      <motion.div
        className="rounded-2xl px-6 py-4 text-center relative overflow-hidden"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-500">
          REPORTES Y SEGURIDAD
        </h1>
      </motion.div>


      {/* Contenedor principal */}
      <motion.div
        className="grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-10 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Módulo Reportes */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Módulo Reportes */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Módulo Reportes</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { name: 'Reporte Checador', image: '/images/reporte-checador.png' },
              { name: 'Reporte Asistencia', image: '/images/reporte-asistencia.png' }
            ].map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg relative"
                style={{
                  background: "#ecf0f3",
                  boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
                }}
                onClick={() => handleImageClick(item.image, item.name)}
                ref={imageRef}
              >
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded shadow-md w-full mb-2"
                    />
                  </TransformComponent>
                </TransformWrapper>
                <p className="text-center text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-lg">Registros por rangos de fechas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-lg">Filtros por departamento/empleado</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-500" />
                <span className="text-lg">Exportación a Excel y PDF</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Módulo Seguridad */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Módulo Seguridad */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Módulo Seguridad</h2>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { name: 'Gestión Usuarios', image: '/images/gestion-usuarios.png' },
              { name: 'Control Accesos', image: '/images/control-acceso.png' }
            ].map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-lg relative"
                style={{
                  background: "#ecf0f3",
                  boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
                }}
                onClick={() => handleImageClick(item.image, item.name)}
                ref={imageRef}
              >
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded shadow-md w-full mb-2"
                    />
                  </TransformComponent>
                </TransformWrapper>
                <p className="text-center text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-green-500" />
                <span className="text-lg">Gestión de usuarios y roles</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                <span className="text-lg">Control de permisos</span>
              </div>
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-green-500" />
                <span className="text-lg">Registro de actividades</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-10 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          {
            icon: LineChart,
            text: "Análisis detallado",
            gradient: "from-blue-400 to-blue-600"
          },
          {
            icon: Shield,
            text: "Protección de datos",
            gradient: "from-green-400 to-green-600"
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="px-8 py-4 rounded-2xl flex items-center gap-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div
              className={`w-9 h-9 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${item.gradient} p-2 shadow-lg transform -rotate-3`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Imagen ampliada */}

      {zoomedImage && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={handleClickOutside}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[70vh] max-w-[70vw] object-contain rounded-lg shadow-xl"
            style={{
              transform: 'scale(1.2)',
              backgroundColor: 'white',
              padding: '1rem'
            }}
          />
        </motion.div>
      )}
    </div>
  );
};


//////////////////////////

const ModulosAuxiliares = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = (src, alt) => {
    setZoomedImage({ src, alt });
  };

  const handleClickOutside = (e) => {
    if (zoomedImage && imageRef.current && !imageRef.current.contains(e.target)) {
      setZoomedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [zoomedImage]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Título con degradado basado en los iconos */}
      <motion.div
        className="rounded-2xl px-6 py-4 text-center relative overflow-hidden"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-green-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-600 to-green-600">
          MÓDULOS AUXILIARES
        </h1>
      </motion.div>


      {/* Contenedor principal */}
      <motion.div
        className="grid grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-10 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Días Festivos */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Días Festivos */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Días Festivos</h2>
          </div>

          <div
            className="p-3 rounded-lg mb-4 relative"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
            onClick={() => handleImageClick("images/festivos.png", "Días Festivos")}
            ref={imageRef}
          >
            <TransformWrapper>
              <TransformComponent>
                <img
                  src="images/festivos.png"
                  alt="Días Festivos"
                  className="rounded shadow-md w-full mb-2"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-lg">Gestión de días no laborables</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-lg">Cambios de horario general</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Avisos */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Avisos */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Avisos</h2>
          </div>

          <div
            className="p-3 rounded-lg mb-4 relative"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
            onClick={() => handleImageClick("images/avisos.png", "Avisos")}
            ref={imageRef}
          >
            <TransformWrapper>
              <TransformComponent>
                <img
                  src="images/avisos.png"
                  alt="Avisos"
                  className="rounded shadow-md w-full mb-2"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-yellow-500" />
                <span className="text-lg">Mensajes personalizados</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-yellow-500" />
                <span className="text-lg">Notificaciones en tiempo real</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Red */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Red */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Network className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Red</h2>
          </div>

          <div
            className="p-3 rounded-lg mb-4 relative"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
            onClick={() => handleImageClick("/images/red.png", "Red")}
            ref={imageRef}
          >
            <TransformWrapper>
              <TransformComponent>
                <img
                  src="/images/red.png"
                  alt="Red"
                  className="rounded shadow-md w-full mb-2"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{
              background: "#ecf0f3",
              boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-500" />
                <span className="text-lg">Monitoreo de checadores</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-green-500" />
                <span className="text-lg">Alertas de desconexión</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-10 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          {
            icon: Settings,
            text: "Configuración integrada",
            gradient: "from-blue-400 to-blue-600"
          },
          {
            icon: Activity,
            text: "Monitoreo en tiempo real",
            gradient: "from-green-400 to-green-600"
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="px-8 py-4 rounded-2xl flex items-center gap-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div
              className={`w-9 h-9 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${item.gradient} p-2 shadow-lg transform -rotate-3`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Imagen ampliada */}
      {zoomedImage && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={handleClickOutside}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[70vh] max-w-[70vw] object-contain rounded-lg shadow-xl"
            style={{
              transform: 'scale(1.2)',
              backgroundColor: 'white',
              padding: '1rem'
            }}
          />
        </motion.div>
      )}
    </div>
  );
};



/////////////////


const CorreoIncidencias = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = (src, alt) => {
    setZoomedImage({ src, alt });
  };

  const handleClickOutside = (e) => {
    if (zoomedImage && imageRef.current && !imageRef.current.contains(e.target)) {
      setZoomedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [zoomedImage]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}>
      {/* Título con degradado azul-morado y línea superior */}
      <motion.div
        className="rounded-2xl px-6 py-4 text-center relative overflow-hidden"
        style={{
          background: "#ecf0f3",
          boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Línea superior con degradado */}
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-700 to-purple-600" />

        {/* Texto con degradado */}
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
          SISTEMA DE GESTIÓN DE INCIDENCIAS
        </h1>
      </motion.div>


      {/* Contenedor principal */}
      <motion.div
        className="grid grid-cols-2 gap-6 w-full max-w-5xl mx-auto mt-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Sistema de Correo */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex flex-col items-center gap-2 mb-4">
            <div
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Sistema de Correo</h2>
          </div>

          {/* Contenedor de imagen con aspect ratio */}
          <div className="relative aspect-[4/3] mb-4">
            <div
              className="absolute inset-0 p-4 rounded-lg"
              style={{
                background: "#ecf0f3",
                boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => handleImageClick("/images/correo.png", "Interface de Correo")}
                ref={imageRef}
              >
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src="/images/correo.png"
                      alt="Interface de Correo"
                      className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg"
              style={{
                background: "#ecf0f3",
                boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
              }}>
              <h3 className="font-semibold text-blue-800 mb-2 text-lg text-center">Notificaciones</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-blue-500" />
                  <span className="text-lg">Envío automático</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-lg">Plantillas personalizadas</span>
                </div>
              </div>
            </div>



            <div className="p-4 rounded-lg"
              style={{
                background: "#ecf0f3",
                boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
              }}>
              <h3 className="font-semibold text-purple-800 mb-2 text-lg text-center">Seguimiento</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-lg">Estado de envíos</span>
                </div>
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-purple-500" />
                  <span className="text-lg">Historial completo</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gestión de Incidencias */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "#ecf0f3",
            boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex flex-col items-center gap-2 mb-4">
            <div
              className="bg-gradient-to-br from-purple-400 to-purple-600 p-2 rounded-lg shadow-lg transform -rotate-3"
            >
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Gestión de Incidencias</h2>
          </div>

          {/* Contenedor de imagen con aspect ratio */}
          <div className="relative aspect-[4/3] mb-4">
            <div
              className="absolute inset-0 p-4 rounded-lg"
              style={{
                background: "#ecf0f3",
                boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center cursor-pointer"
                onClick={() => handleImageClick("/images/incidencias.png", "Interface de Incidencias")}
                ref={imageRef}
              >
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src="/images/incidencias.png"
                      alt="Interface de Incidencias"
                      className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg"
              style={{
                background: "#ecf0f3",
                boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
              }}>
              <h3 className="font-semibold text-green-800 mb-2 text-lg text-center">Control</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-green-500" />
                  <span className="text-lg">Registro detallado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-lg">Gestión por departamento</span>
                </div>
              </div>
            </div>


            <div className="p-4 rounded-lg"
              style={{
                background: "#ecf0f3",
                boxShadow: "inset 9px 9px 16px #bebebe, inset -9px -9px 16px #ffffff",
              }}>
              <h3 className="font-semibold text-yellow-800 mb-2 text-lg text-center">Reportes</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-yellow-500" />
                  <span className="text-lg">Estadísticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-yellow-500" />
                  <span className="text-lg">Exportación PDF/Excel</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="mt-8 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {[
          {
            icon: Users,
            text: "Gestión multiusuario",
            gradient: "from-blue-400 to-blue-600"
          },
          {
            icon: Bell,
            text: "Alertas en tiempo real",
            gradient: "from-purple-400 to-purple-600"
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="px-8 py-4 rounded-2xl flex items-center gap-4"
            style={{
              background: "#ecf0f3",
              boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
            }}
            whileHover={{
              y: -4,
              boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div
              className={`w-9 h-9 rounded-lg relative flex items-center justify-center bg-gradient-to-br ${item.gradient} p-2 shadow-lg transform -rotate-3`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Imagen ampliada */}
      {zoomedImage && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={handleClickOutside}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[70vh] max-w-[70vw] object-contain rounded-lg shadow-xl"
            style={{
              transform: 'scale(1.2)',
              backgroundColor: 'white',
              padding: '1rem'
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

////////////////////////////////////////


const EsquemaFuncional = () => {
  const [showImage, setShowImage] = useState(false);

  const modulos = [
    {
      nombre: "Archivos",
      icono: FolderOpen,
      descripcion: "Gestión de archivos y documentos",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      nombre: "Catálogos",
      icono: List,
      descripcion: "Administración de catálogos del sistema",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      nombre: "Reportes",
      icono: FileText,
      descripcion: "Generación de reportes y estadísticas",
      gradient: "from-green-400 to-green-600"
    },
    {
      nombre: "Seguridad",
      icono: Lock,
      descripcion: "Configuración de seguridad y permisos",
      gradient: "from-red-400 to-red-600"
    },
    {
      nombre: "Mantenimiento",
      icono: Wrench,
      descripcion: "Mantenimiento y control del sistema",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      nombre: "Días Festivos",
      icono: Calendar,
      descripcion: "Gestión de días festivos y no laborables",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      nombre: "Avisos",
      icono: Bell,
      descripcion: "Comunicación y notificaciones",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      nombre: "Red",
      icono: Network,
      descripcion: "Configuración y monitoreo de red",
      gradient: "from-cyan-400 to-cyan-600"
    }
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
      style={{
          background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -20, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      {/* Título */}
      <motion.div
        className="rounded-2xl px-12 py-8 mb-12 relative overflow-hidden"
        style={{
          background: "rgba(236, 240, 243, 0.8)",
          boxShadow: "12px 12px 24px #bebebe, -12px -12px 24px #ffffff",
          backdropFilter: "blur(10px)"
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          ESQUEMA FUNCIONAL
        </h1>
      </motion.div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-6">
        {modulos.map((modulo, index) => (
          <motion.div
            key={index}
            className="rounded-xl p-6 backdrop-blur-sm bg-white/90 cursor-pointer"
            style={{
              boxShadow: "5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px rgba(255,255,255,0.8)"
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => setShowImage(true)}
          >
            <div className={`w-12 h-12 rounded-xl relative flex items-center justify-center bg-gradient-to-br ${modulo.gradient} p-3 shadow-lg transform -rotate-3 mx-auto mb-3`}>
              <modulo.icono className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">
              {modulo.nombre}
            </h2>
            <p className="text-center text-gray-600 text-sm">
              {modulo.descripcion}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal para mostrar la imagen */}
      {showImage && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowImage(false)}
        >
          <motion.div
            className="relative w-[90vw] h-[90vh] bg-white rounded-xl p-4 overflow-hidden flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src="/images/esquema_funciona.png"
              alt="Esquema Funcional"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Estilos para la animación de blobs */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
};





/////////////////////////////
const Recomendaciones = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800">
    {/* Título con degradado morado-azul y línea superior */}
    <motion.div
      className="rounded-2xl px-8 py-6 mb-10 text-center relative overflow-hidden"
      style={{
        background: "#ecf0f3",
        boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Línea superior con el mismo degradado */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-purple-600 to-blue-600" />

      {/* Texto con degradado morado-azul */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        RECOMENDACIONES
      </h1>
    </motion.div>


    {/* Contenedor de cards */}
    <div className="grid grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-6">
      {[
        {
          title: "Equipamiento",
          icon: Settings,
          bgColor: "bg-blue-50",
          textColor: "text-blue-600",
          items: [
            "Utilizar cámaras y lectores biométricos de alta precisión",
            "Asegurar compatibilidad de dispositivos con el software"
          ]
        },
        {
          title: "Mantenimiento",
          icon: Wrench,
          bgColor: "bg-green-50",
          textColor: "text-green-600",
          items: [
            "Realizar revisiones periódicas de dispositivos biométricos",
            "Programar mantenimientos preventivos regulares",
            "Mantener limpios y calibrados los sensores"
          ]
        },
        {
          title: "Condiciones Ambientales",
          icon: Sun,
          bgColor: "bg-yellow-50",
          textColor: "text-yellow-600",
          items: [
            "Instalar dispositivos en áreas con iluminación constante",
            "Evitar luz solar directa o zonas con sombras irregulares",
            "Asegurar ventilación adecuada para los equipos"
          ]
        },
        {
          title: "Configuración de Red",
          icon: Network,
          bgColor: "bg-purple-50",
          textColor: "text-purple-600",
          items: [
            "Implementar direcciones IP estáticas en todos los dispositivos",
            "Utilizar conexiones Ethernet para mayor estabilidad",
            "Evitar conexiones inalámbricas para el sistema principal"
          ]
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          className={`${item.bgColor} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
          style={{
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="p-6">
            {/* Título con ícono */}
            <div className="flex items-center gap-3 mb-6">
              <item.icon className={`w-7 h-7 ${item.textColor}`} />
              <h2 className={`text-2xl font-bold ${item.textColor}`}>
                {item.title}
              </h2>
            </div>

            {/* Lista de items con más espacio vertical */}
            <ul className="space-y-4">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`${item.textColor} text-xl mt-1`}>•</span>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    {listItem}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);



////////////////////////////////////

const Conclusiones = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
    style={{
        background: "linear-gradient(135deg, #c5cad2 0%, #d8dce4 100%)"
    }}>
    {/* Elementos decorativos de fondo */}
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    {/* Título con estilo neumórfico mejorado y línea superior */}
    <motion.div
      className="rounded-2xl px-8 py-6 mb-12 text-center relative overflow-hidden"
      style={{
        background: "#ecf0f3",
        boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Línea superior con degradado morado-azul */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-purple-600" />

      {/* Texto con degradado morado-azul */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        CONCLUCIONES
      </h1>
    </motion.div>


    {/* Contenedor de conclusiones */}
    <motion.div
      className="space-y-8 max-w-4xl mx-auto px-6 relative"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {[

        "La integración de reconocimiento facial y huella dactilar permitió mejorar el proceso de registro de asistencia, brindando más opciones a los usuarios del sistema.",
        "La automatización implementada simplificó las tareas administrativas, reduciendo errores en los registros diarios.",
        "Los métodos alternativos de registro aseguró que cada miembro de la institución pudo registrar su asistencia de manera cómoda.",
        "A través de este proyecto, se desarrolló una solución que se ajustó a las necesidades reales del instituto, simplificando el registro de asistencia diario."

      ].map((conclusion, index) => (
        <motion.div
          key={index}
          className="rounded-2xl p-8 backdrop-blur-sm relative"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)",
          }}
          variants={cardVariants}
          whileHover={{
            y: -4,
            boxShadow: "12px 12px 24px rgba(0,0,0,0.12), -12px -12px 24px rgba(255,255,255,0.9)",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl flex-shrink-0 shadow-lg transform -rotate-3">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-green-400 to-transparent rounded-r-2xl opacity-20"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                {conclusion}
              </p>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 opacity-5">
            <CheckCircle className="w-20 h-20" />
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Estilos para la animación de blobs */}
    <style jsx>{`
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </div>
);


///////////////////////////////////



const Agradecimiento = () => {
  const mensaje = "¡Gracias por su atención!";
  const [texto, setTexto] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    let intervaloEscritura;

    const escribirTexto = () => {
      setTexto("");
      index = 0;
      clearInterval(intervaloEscritura);

      intervaloEscritura = setInterval(() => {
        if (index <= mensaje.length) {
          setTexto(mensaje.substring(0, index));
          index++;
        } else {
          clearInterval(intervaloEscritura);
        }
      }, 100);
    };

    escribirTexto();

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    const reinicio = setInterval(() => {
      escribirTexto();
    }, 60000);

    return () => {
      clearInterval(intervaloEscritura);
      clearInterval(cursorInterval);
      clearInterval(reinicio);
    };
  }, [mensaje]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e3eaf2 0%, #f7f9fc 100%)",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-50 shadow-md"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute top-16 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 blur-lg"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-30 blur-md"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-20 bg-pink-400 rounded-lg opacity-40 rotate-45 blur-sm"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="rounded-3xl px-16 py-12 text-center relative z-10"
        style={{
          background: "#ecf0f3",
          boxShadow: "15px 15px 30px #bebebe, -15px -15px 30px #ffffff",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <motion.h1
          className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {texto}
          <span className={`text-blue-600 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>
            _
          </span>
        </motion.h1>

        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        ></motion.div>

        <motion.p
          className="text-2xl text-gray-600 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          ¡Agradecemos su presencia y apoyo durante este importante paso en nuestra formación profesional!
        </motion.p>
      </motion.div>
    </div>
  );
};





const slides = [
  <ExactCoverPage />,             // Portada
  <Introduccion />,               // Introducción del proyecto
  <CaracterizacionEmpresa />,     // Contexto de la empresa
  <ProblemasResolver />,          // Problemas a resolver
  <Justificacion />,              // Por qué se necesita
  <Objetivos />,                  // Qué se quiere lograr
  <ProcedimientosParte1 />,       // Cómo se hizo (parte 1)
  <ProcedimientosParte2 />,
  <FundamentacionTeorica />,    // Agregar aquí
  <ResultadosIntro />,
  <FormularioRegistro />,         // Resultados/Implementación...
  <RegistroBiometrico />,
  <SistemaChecador />,
  <SistemaAdministrador />,
  <ModulosAdministrador />,
  <ReportesSeguridad />,
  <ModulosAuxiliares />,
  <CorreoIncidencias />,
  <EsquemaFuncional />,
  <Recomendaciones />,
  <Conclusiones />,
  <Agradecimiento />
];



const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // Fullscreen handling
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "f") toggleFullscreen();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, toggleFullscreen]);

  // Progress circle calculations
  const circumference = 2 * Math.PI * 20;
  const progress = ((currentSlide + 1) / slides.length) * circumference;

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-100 to-gray-200">
    {/* Logos fijos - solo visibles en slides intermedios */}
    {currentSlide !== 0 && currentSlide !== slides.length - 1 && (
        <>
          <motion.div 
            className="fixed top-4 left-20 z-10 opacity-30 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/images/logo1.png" 
                alt="Logo TecNM"
                className="w-10 h-10 object-contain"
              />
            </div>
          </motion.div>

          <motion.div 
            className="fixed top-4 right-20 z-10 opacity-30 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/images/logo2.png" 
                alt="Logo ISC"
                className="w-10 h-10 object-contain"
              />
            </div>
          </motion.div>
        </>
      )}

      {/* Main content area */}
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-0 left-0 w-full flex justify-between items-center p-4 md:p-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-100 disabled:opacity-50"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-blue-100 disabled:opacity-50"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      </div>

      {/* Progress indicator */}
      <motion.div
        className="fixed top-4 right-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <svg className="w-full h-full" viewBox="0 0 50 50">
          <defs>
            <linearGradient id="circleGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <linearGradient id="textGradient" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#4338CA" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <filter id="textEffect">
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" result="shadow1" />
              <feFlood floodColor="white" result="light" />
              <feComposite in="light" in2="shadow1" operator="in" />
              <feOffset dx="-1" dy="-1" />
              <feGaussianBlur stdDeviation="0.5" result="shadow2" />
              <feFlood floodColor="rgba(0,0,0,0.3)" result="dark" />
              <feComposite in="dark" in2="shadow2" operator="in" />
              <feMerge>
                <feMergeNode in="shadow1" />
                <feMergeNode in="shadow2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="5"
          />

          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            transform="rotate(-90 25 25)"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - ((currentSlide) / (slides.length - 1)) * circumference}
          />

          <motion.text
            x="25"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold text-xl md:text-2xl"
            fill="url(#textGradient)"
            filter="url(#textEffect)"
            initial={{ scale: 0, rotateX: -30 }}
            animate={{
              scale: 1,
              rotateX: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            key={currentSlide}
          >
            {currentSlide + 1}
          </motion.text>
        </svg>
      </motion.div>

      {/* Fullscreen toggle */}
      <motion.button
        onClick={toggleFullscreen}
        className="fixed top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:bg-blue-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isFullscreen ?
          <Minimize2 className="w-6 h-6 md:w-8 md:h-8" /> :
          <Maximize2 className="w-6 h-6 md:w-8 md:h-8" />
        }
      </motion.button>
    </div>
  );
};

export default Presentation;