'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  Mountain,
  Thermometer,
  Compass,
  TreePine,
  Coffee,
  Leaf
} from 'lucide-react';

interface CityDetail {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface HistoricalFact {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CityHistory: React.FC = () => {
  const cityDetails: CityDetail[] = [
    { label: "Área", value: "646.9 km²", icon: MapPin },
    { label: "Ubicación", value: "Occidente de la provincia", icon: Compass },
    { label: "Altura", value: "600 a 220 m.s.n.m.", icon: Mountain },
    { label: "Cantonización", value: "19 de mayo de 1986", icon: Calendar },
    { label: "Población", value: "36,011 habitantes", icon: Users },
    { label: "Temperatura", value: "23 a 30 grados centígrados", icon: Thermometer }
  ];

  const historicalFacts: HistoricalFact[] = [
    {
      title: "Fundación",
      description: "La Maná es uno de los seis cantones de la Provincia de Cotopaxi, fundada por Carlos Lozada Quintana, comerciante el cual instaló un aserrío a finales del siglo 19 en el cual se empezó a comercializar productos de la sierra y costa.",
      icon: Calendar
    },
    {
      title: "Ubicación Estratégica",
      description: "En el centro del Ecuador. A una altitud de 800 metros, La Maná es un punto estratégico para el comercio entre la sierra y la costa.",
      icon: MapPin
    },
    {
      title: "Desarrollo",
      description: "La Maná era un recinto que perteneció a la parroquia El Tingo del cantón Pujilí por varios años pero debido a su crecimiento y desarrollo sus habitantes organizaron un comité pro-parroquialización para buscar un mejor porvenir para su pueblo hasta que, finalmente lograron la cantonización de La Maná, gracias a la tenaz gestión de hombres patriotas y decididos.",
      icon: Users
    },
    {
      title: "Recursos Naturales",
      description: "Sus inmensos bosques, sus gigantescas montañas, su plátano, orito, yuca, cacao, tabaco y café, tanto como su estratégica ubicación geográfica, son factores que le confieren características especiales que propician su desarrollo y le otorgan un papel protagónico en la economía de nuestro país.",
      icon: TreePine
    },
    {
      title: "Diversidad Cultural",
      description: "Esta joven entidad alberga a muchos humanos de diversa procedencia, tanto serranos como costeños conviven en La Maná formando un solo pueblo donde todas las manifestaciones culturales de todos ellos se han fusionado, dando lugar a una mezcla inmensamente rica en tradiciones folclóricas.",
      icon: Users
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-blue-950">
            La Maná: <span className="text-red-600">Una Tierra Llena de Historia</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre la rica historia y características de este cantón ubicado en el corazón del Ecuador
          </p>
        </motion.div>

        {/* City Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {cityDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-blue-950 p-4 rounded-xl text-center text-white"
              >
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{detail.label}</h3>
                <p className="text-gray-300">{detail.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Current Boundaries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-950 p-6 rounded-xl text-white mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-red-600">Límites Actuales</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-start">
              <Compass className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">NORTE:</h3>
                <p className="text-gray-300">con la parroquia Alluriquín, cantón Santo Domingo</p>
              </div>
            </div>
            <div className="flex items-start">
              <Compass className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">SUR:</h3>
                <p className="text-gray-300">el río Calope es el accidente geográfico que la separa de la parroquia Moraspungo, cantón Pangua</p>
              </div>
            </div>
            <div className="flex items-start">
              <Compass className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">ESTE:</h3>
                <p className="text-gray-300">la parroquia La Esperanza del cantón Pujilí y Zumbahua</p>
              </div>
            </div>
            <div className="flex items-start">
              <Compass className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">OESTE:</h3>
                <p className="text-gray-300">el cantón Quinsaloma de la provincia de Los Ríos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Historical Facts */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-blue-950 mb-10"
          >
            Historia y Características
          </motion.h2>
          
          <div className="space-y-8">
            {historicalFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-blue-950 p-6 rounded-xl text-white flex items-start gap-4"
                >
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{fact.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        

        {/* Foundation Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-bold text-blue-950">
            Fundada el <span className="text-red-600">19 de mayo de 1986</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CityHistory;