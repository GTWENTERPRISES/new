'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  TrendingUp,
  Layers,
  Target,
  Rocket,
  Zap
} from 'lucide-react';

// Interfaces
interface HitoHistorico {
  año: number;
  titulo: string;
  descripcion: string;
  icono: React.ComponentType<{ className?: string }>;
  color: string;
}

interface EtapaDesarrollo {
  periodo: string;
  titulo: string;
  descripcion: string;
  icono: React.ComponentType<{ className?: string }>;
  color: string;
  logros: string[];
}

const HistoriaCamaraComercioLaMana: React.FC = () => {
  const [selectedHito, setSelectedHito] = useState<HitoHistorico | null>(null);

  // Hitos Históricos
  const hitosHistoricos: HitoHistorico[] = [
    {
      año: 1994,
      titulo: "Fundación",
      descripcion: "Nacimiento oficial de la Cámara de Comercio de La Maná",
      icono: Rocket,
      color: "bg-red-600"
    },
    {
      año: 2002,
      titulo: "Primera Transformación",
      descripcion: "Modernización de servicios y organizacional",
      icono: Layers,
      color: "bg-red-600"
    },
    {
      año: 2010,
      titulo: "Expansión Regional",
      descripcion: "Consolidación como referente empresarial en Cotopaxi",
      icono: Target,
      color: "bg-red-600"
    },
    {
      año: 2018,
      titulo: "Transformación Digital",
      descripcion: "Implementación de tecnologías y servicios en línea",
      icono: Zap,
      color: "bg-red-600"
    }
  ];

  // Etapas de Desarrollo
  const etapasDesarrollo: EtapaDesarrollo[] = [
    {
      periodo: "1994 - 2000",
      titulo: "Etapa Fundacional",
      descripcion: "Primeros pasos y consolidación institucional",
      icono: Clock,
      color: "bg-red-600",
      logros: [
        "Creación de estatutos",
        "Primera directiva",
        "Establecimiento de servicios básicos"
      ]
    },
    {
      periodo: "2000 - 2010",
      titulo: "Crecimiento Estratégico",
      descripcion: "Expansión y fortalecimiento gremial",
      icono: TrendingUp,
      color: "bg-red-600",
      logros: [
        "Ampliación de membresía",
        "Programas de capacitación",
        "Representación empresarial"
      ]
    },
    {
      periodo: "2010 - 2020",
      titulo: "Modernización",
      descripcion: "Transformación tecnológica y digital",
      icono: Rocket,
      color: "bg-red-600",
      logros: [
        "Servicios digitales",
        "Plataformas tecnológicas",
        "Networking empresarial"
      ]
    }
  ];

  return (
    <section className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-blue-950">
          Historia de la <span className="text-red-600">Cámara de Comercio</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Un viaje de innovación, crecimiento y liderazgo empresarial en La Maná
          </p>
        </motion.div>

        {/* Línea de Tiempo */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-600 h-full"></div>
          
          {hitosHistoricos.map((hito, index) => {
            const Icon = hito.icono;
            return (
              <motion.div
                key={hito.año}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`
                  flex items-center mb-16 
                  ${index % 2 === 0 ? 'flex-row-reverse' : ''}
                `}
              >
                <div 
                  className={`
                    w-1/2 p-8 rounded-2xl shadow-2xl 
                    ${index % 2 === 0 ? 'mr-8' : 'ml-8'}
                    bg-blue-950
                    border border-opacity-20 hover:border-opacity-100
                    transform transition-all duration-300 hover:scale-105
                    cursor-pointer
                  `}
                  onClick={() => setSelectedHito(hito)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${hito.color} p-3 rounded-full mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {hito.año} - {hito.titulo}
                    </h3>
                  </div>
                  <p className="text-gray-400">{hito.descripcion}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Etapas de Desarrollo */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {etapasDesarrollo.map((etapa, index) => {
            const Icon = etapa.icono;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`
                  p-8 rounded-2xl shadow-2xl 
                  bg-blue-950
                  transform transition-all duration-300 hover:scale-105
                `}
              >
                <div className="flex items-center mb-6">
                  <div className={`${etapa.color} p-3 rounded-full mr-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {etapa.titulo}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">{etapa.descripcion}</p>
                <h4 className="text-xl font-semibold text-red-600 mb-2">
                  Periodo: {etapa.periodo}
                </h4>
                <h5 className="text-red-600 font-semibold">Logros:</h5>
                <ul className="list-disc list-inside text-gray-300">
                  {etapa.logros.map((logro, index) => (
                    <li className='list-none' key={index}>{logro}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Modal de Detalles de Hito Histórico */}
        <AnimatePresence>
          {selectedHito && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-red-600"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedHito.titulo}
                  </h3>
                  <button 
                    onClick={() => setSelectedHito(null)} 
                    className="text-red-600 hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
                <p className="text-gray-400 mb-4">
                  Año: {selectedHito.año}
                </p>
                <p className="text-gray-300 mb-4">
                  {selectedHito.descripcion}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HistoriaCamaraComercioLaMana;