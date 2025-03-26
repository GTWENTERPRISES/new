"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Building2,  
  TrendingUp, 
  Target, 
  HandshakeIcon,
  Globe,
  Rocket,
  MapPin,
  Shield,
  Zap
} from "lucide-react";
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundProgress = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const stats = [
    {
      title: "Empresas Asociadas",
      value: "20+",
      icon: Building2,
      description: "Empresas líderes comprometidas con el desarrollo económico de La Maná",
      color: "bg-blue-600" // Changed from blue-950 to blue-600
    },
    {
      title: "Años de Trayectoria",
      value: "29+",
      icon: Globe,
      description: "Décadas de experiencia impulsando el comercio y la innovación local",
      color: "bg-green-600" // Changed from blue-950 to green-600
    },
    {
      title: "Impacto Económico",
      value: "35%",
      icon: TrendingUp,
      description: "Crecimiento económico sostenido en la región",
      color: "bg-purple-600" // Changed from blue-950 to purple-600
    },
  ];

  const keyInitiatives = [
    {
      title: "Programa de Emprendimiento",
      description: "Apoyo integral a nuevos emprendedores con capacitación, mentorías y recursos financieros.",
      icon: Rocket,
      color: "bg-blue-950" // Changed from blue-950 to indigo-600
    },
    {
      title: "Red de Innovación",
      description: "Plataforma de colaboración que conecta empresas, universidades y centros de investigación.",
      icon: Zap,
      color: "bg-blue-950" // Changed from blue-950 to yellow-600
    },
    {
      title: "Desarrollo Sostenible",
      description: "Iniciativas para promover prácticas empresariales responsables y sostenibles.",
      icon: Shield,
      color: "bg-blue-950" // Changed from blue-950 to teal-600
    }
  ];

  const values = [
    {
      title: "Desarrollo Empresarial",
      description: "Fomentamos el crecimiento y la competitividad de las empresas locales mediante programas de capacitación, networking y apoyo estratégico.",
      icon: Rocket,
      benefits: [
        "Capacitaciones especializadas",
        "Asesoramiento empresarial",
        "Conexiones estratégicas"
      ]
    },
    {
      title: "Innovación Sostenible",
      description: "Promovemos prácticas empresariales innovadoras que contribuyan al desarrollo económico sostenible de La Maná, integrando tecnología y responsabilidad social.",
      icon: Target,
      benefits: [
        "Programas de innovación",
        "Transformación digital",
        "Sostenibilidad empresarial"
      ]
    },
    {
      title: "Integración Comunitaria",
      description: "Trabajamos en estrecha colaboración con instituciones locales, gobierno y comunidad para fortalecer el tejido empresarial y social de nuestra región.",
      icon: HandshakeIcon,
      benefits: [
        "Alianzas estratégicas",
        "Impacto social",
        "Desarrollo comunitario"
      ]
    },
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-24 relative overflow-hidden"
    >
      {/* Fondo animado */}
      <motion.div 
        className="absolute inset-0 bg-white"
        style={{ 
          clipPath: `polygon(0 0, ${backgroundProgress} 0, ${backgroundProgress} 100%, 0 100%)` 
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Encabezado */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-blue-950 mb-4">
          Cámara de Comercio de <span className="text-red-600">La Maná</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Impulsando el desarrollo económico y empresarial de nuestra región desde 1994
          </p>
        </motion.div>

        {/* Sección de Historia */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-blue-950 rounded-3xl p-8 border-0 border-blue-700"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Historia</h2>
              <p className="text-white mb-4 leading-relaxed">
                Fundada el 26 de octubre de 1994, la Cámara de Comercio de La Maná ha sido 
                un pilar fundamental en el desarrollo económico de nuestra región. Desde 
                nuestros inicios, hemos trabajado incansablemente para crear un ecosistema 
                empresarial dinámico y competitivo.
              </p>
              <p className="text-white leading-relaxed">
                A lo largo de casi tres décadas, hemos sido testigos de la transformación 
                económica de La Maná, apoyando a empresarios y emprendedores en su journey 
                hacia el éxito.
              </p>
            </div>
            <div className="flex justify-center">
              <MapPin className="w-64 h-64 text-white opacity-20" />
            </div>
          </div>
        </motion.section>

        {/* Resto del código anterior... */}
        {/* (Mantén las secciones de stats, values, key initiatives, misión y visión) */}
        
        {/* Sección de Iniciativas Clave */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">
            Nuestras Iniciativas Estratégicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration:  0.6, delay: index * 0.2 }}
                className={`p-8 rounded-3xl text-white text-center border-0 border-blue-700 ${initiative.color} hover:scale-105 transition-all`}
              >
                <initiative.icon className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-blue-200">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sección de Estadísticas */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">
            Impacto en Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-blue-950 p-8 rounded-3xl text-white text-center border-0 border-blue-700 hover:border-red-600 transition-all hover:scale-105"
              >
                <stat.icon className="w-16 h-16 mx-auto mb-6 text-red-600" />
                <div className="text-4xl font-bold mb-4 text-white">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.title}</div>
                <div className="text-white">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sección de Valores */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">
            Nuestros Valores Fundamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-blue-950 p-8 rounded-3xl text-white border-0 hover:border-red-600 transition-all hover:scale-105"
              >
                <value.icon className="w-16 h-16 text-red-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-white">{value.description}</p>
                <br></br>
                <ul className="text-white  list-inside list-none mt-2">
                  {value.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sección de Misión y Visión */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-blue-950 rounded-3xl p-8 border-0 border-blue-700 hover:border-red-600 transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-white mb-6">Misión</h2>
            <p className="text-white leading-relaxed">
              Promover y proteger los intereses del sector empresarial de La Maná, facilitando su desarrollo y competitividad a través de servicios innovadores y de calidad que beneficien a nuestros asociados y a la comunidad en general.
            </p>
          </div>
          <div className="bg-blue-950 rounded-3xl p-8 border-0 border-blue-700 hover:border-red-600 transition-all hover:scale-105">
            <h2 className="text-3xl font-bold text-white mb-6">Visión</h2>
            <p className="text-white leading-relaxed">
              Ser reconocidos como la institución líder en el desarrollo empresarial de La Maná, destacando por nuestra excelencia en servicios y nuestra contribución al crecimiento económico sostenible de la región, creando un entorno propicio para la innovación y la colaboración.
            </p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;