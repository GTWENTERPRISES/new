'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  TrendingUp,
  Layers,
  Target,
  Rocket,
  Zap,
  Users,
  Award
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

interface FundadorInfo {
  nombre: string;
  cargo: string;
}

const HistoriaCamaraComercioLaMana: React.FC = () => {
  const [selectedHito, setSelectedHito] = useState<HitoHistorico | null>(null);

  // Hitos Históricos
  const hitosHistoricos: HitoHistorico[] = [
    {
      año: 1994,
      titulo: "Fundación",
      descripcion: "El 30 de septiembre de 1994, en el local comercial 'SORAMA', nació la Cámara de Comercio de La Maná con 31 ciudadanos fundadores.",
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

  // Fundadores principales
  const fundadoresPrincipales: FundadorInfo[] = [
    { nombre: "Sr. Gonzalo Zambrano", cargo: "Presidente" },
    { nombre: "Sr. Luis Ormaza", cargo: "Vicepresidente" },
    { nombre: "Sr. Mario Zapata", cargo: "Secretario" },
    { nombre: "Sr. Armando Vega", cargo: "Tesorero" }
  ];

  // Etapas de Desarrollo
  const etapasDesarrollo: EtapaDesarrollo[] = [
    {
      periodo: "1994 - 2000",
      titulo: "Etapa Fundacional",
      descripcion: "Bajo la iniciativa del Sr. Gonzalo Zambrano, destacado y claro visionario económico, se reconoció la importancia de impulsar una práctica como Cámara de Comercio.",
      icono: Clock,
      color: "bg-red-600",
      logros: [
        "Creación de estatutos",
        "Primera directiva conformada",
        "Establecimiento en local comercial &lsquo;SORAMA&rsquo;"
      ]
    },
    {
      periodo: "2000 - 2010",
      titulo: "Crecimiento Estratégico",
      descripcion: "Con la participación de los Sres. Pablo Maldonado y Mario Ortega como vocales principales y la gestión de la directiva, se consolidó la colaboración para el avance institucional.",
      icono: TrendingUp,
      color: "bg-red-600",
      logros: [
        "Ampliación de membresía",
        "Programas de capacitación",
        "Representación empresarial en la región"
      ]
    },
    {
      periodo: "2010 - 2020",
      titulo: "Modernización",
      descripcion: "Siguiendo el espíritu de unidad, optimismo y dedicación para trabajar conjuntamente en beneficio de la Cámara de Comercio.",
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
            Un viaje de innovación, crecimiento y liderazgo empresarial en La Maná desde 1994
          </p>
        </motion.div>

        {/* Resumen de Fundación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-blue-950 p-8 rounded-2xl shadow-2xl mb-16 text-white"
        >
          <h2 className="text-3xl font-bold mb-4 text-red-600">Acta de Fundación</h2>
          <p className="mb-4">
            Siendo las veinte y un horas del primero de septiembre de mil novecientos noventa y cuatro en el local comercial 
            &ldquo;SORAMA&rdquo;, ubicado en las calles Amazonas y 27 de Noviembre, en esta ciudad de La Maná, se reúnen los señores 
            comerciantes del Cantón con el propósito de formar la Cámara de Comercio con la asistencia de 31 ciudadanos.
          </p>
          <p className="mb-4">
            Tomó la palabra el Sr. Gonzalo Zambrano, destacado y claro visionario económico, exponiendo la importancia de 
            impulsar esta práctica como Cámara de Comercio desde nuestros días los primeros pasos.
          </p>
          <p>
            Seguidamente solicitó la participación de los Sres. Pablo Maldonado y Mario Ortega como vocales principales y la 
            persona de la autoridad en colaboración para el avance institucional con ser nombrados en la reunión 
            designándose como director de Asambleas y secretario Ad-Doc a los señores Arturo Ortega y Mario Zapata 
            respectivamente, firmas facultadas de sus cargos.
          </p>
        </motion.div>

        {/* Directiva Fundadora */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-950">Directiva Fundadora</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {fundadoresPrincipales.map((fundador, index) => (
              <div 
                key={index}
                className="bg-blue-950 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-red-600 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{fundador.nombre}</h3>
                <p className="text-gray-400">{fundador.cargo}</p>
              </div>
            ))}
          </div>
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

        {/* Resoluciones Fundacionales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-blue-950 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-red-600">Resoluciones Fundacionales</h2>
          <ol className="space-y-4 text-white">
            <li className="flex items-start">
              <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                <Award className="w-5 h-5 text-white" />
              </div>
              <p>La Asamblea por unanimidad acordó formar la Cámara de Comercio.</p>
            </li>
            <li className="flex items-start">
              <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                <Award className="w-5 h-5 text-white" />
              </div>
              <p>Formar un directorio provisional entre los presentes.</p>
            </li>
            <li className="flex items-start">
              <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                <Award className="w-5 h-5 text-white" />
              </div>
              <p>Iniciar los trámites con la ayuda del señor Pablo Maldonado y el señor Mario Ortega.</p>
            </li>
          </ol>
        </motion.div>

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