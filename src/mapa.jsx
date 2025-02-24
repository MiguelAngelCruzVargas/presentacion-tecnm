import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Database, 
  Network, 
  FileText, 
  Mail, 
  Camera, 
  Fingerprint, 
  Shield 
} from 'lucide-react';

const FundamentacionTeorica = () => {
  const categories = [
    {
      title: "Desarrollo",
      color: "blue",
      icon: <Wrench />,
      gradient: "from-blue-400 to-blue-600",
      items: [
        {
          icon: Wrench,
          title: "Metodología XP",
          description: [
            "Enfoque ágil",
            "Adaptabilidad",
            "Satisfacción del cliente"
          ]
        },
        {
          icon: Database,
          title: "MongoDB",
          description: [
            "Base NoSQL",
            "Orientado a documentos",
            "Flexibilidad"
          ]
        },
        {
          icon: Network,
          title: "Tecnologías Web",
          description: [
            "HTML",
            "CSS",
            "JavaScript"
          ]
        }
      ]
    },
    {
      title: "Backend",
      color: "green",
      icon: <FileText />,
      gradient: "from-green-400 to-green-600",
      items: [
        {
          icon: Wrench,
          title: "Framework Flask",
          description: [
            "Ligero",
            "Flexible",
            "Python"
          ]
        },
        {
          icon: FileText,
          title: "Librerías Flask",
          description: [
            "Flask-Mail",
            "ReportLab",
            "XlsxWriter"
          ]
        },
        {
          icon: Mail,
          title: "Gestión de Correos",
          description: [
            "Notificaciones",
            "Alertas",
            "Emails"
          ]
        }
      ]
    },
    {
      title: "Tecnologías Biométricas",
      color: "purple",
      icon: <Camera />,
      gradient: "from-purple-400 to-purple-600",
      items: [
        {
          icon: Camera,
          title: "Visión Computacional",
          description: [
            "Análisis de imágenes",
            "Procesamiento"
          ]
        },
        {
          icon: Fingerprint,
          title: "Biometría",
          description: [
            "Huellas dactilares",
            "Rasgos faciales"
          ]
        },
        {
          icon: Shield,
          title: "Antispoofing",
          description: [
            "Prevención",
            "Seguridad",
            "Validación"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 pb-8 text-gray-800 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #d1d5da 0%, #f0f2f5 100%)",
      }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [0.8, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 20, -20, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, -20, 20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

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
          FUNDAMENTACIÓN TEÓRICA
        </h1>
      </motion.div>

      {/* Contenedor de categorías */}
      <motion.div
        className="grid grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            {/* Título de la categoría */}
            <div className="flex items-center gap-4 mb-2">
              <div className={`bg-gradient-to-br ${category.gradient} p-4 rounded-xl shadow-lg transform -rotate-3`}>
                {React.cloneElement(category.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h2 className={`text-2xl font-bold text-${category.color}-800`}>{category.title}</h2>
                <div className={`h-1 w-20 bg-gradient-to-r ${category.gradient} rounded-full mt-1`}></div>
              </div>
            </div>

            {/* Items de la categoría */}
            {category.items.map((item, itemIdx) => (
              <motion.div
                key={itemIdx}
                className="rounded-xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))",
                  boxShadow: "9px 9px 16px rgba(0,0,0,0.1), -9px -9px 16px rgba(255,255,255,0.8)"
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`bg-gradient-to-br ${category.gradient} p-3 rounded-xl shadow-lg transform -rotate-3`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold text-${category.color}-800`}>{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.description.map((desc, descIdx) => (
                    <li key={descIdx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500`} />
                      <span className="text-gray-700">{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Descripción */}
      <motion.div
        className="mt-12 text-center text-lg text-gray-600 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p>
          La fundamentación teórica muestra la estructura y relaciones entre los diferentes componentes
          tecnológicos y metodológicos que fundamentan el sistema ChecaTec.
        </p>
      </motion.div>
    </div>
  );
};

export default FundamentacionTeorica;