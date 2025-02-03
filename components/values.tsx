"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Shield, Globe, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Valor {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  badge: string
}

const ValoresInstitucionales: React.FC = () => {
  const valores: Valor[] = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Mantenemos los más altos estándares éticos en todas nuestras operaciones y relaciones comerciales.",
      badge: "Confianza",
    },
    {
      icon: Globe,
      title: "Responsabilidad Social",
      description:
        "Nos comprometemos activamente con iniciativas que impulsan el progreso social y económico de nuestra comunidad.",
      badge: "Impacto",
    },
    {
      icon: Users,
      title: "Colaboración",
      description:
        "Fomentamos un ecosistema de cooperación que potencia el crecimiento mutuo y la innovación colectiva.",
      badge: "Sinergia",
    },
    {
      icon: TrendingUp,
      title: "Innovación",
      description:
        "Impulsamos constantemente la adopción de tecnologías y prácticas vanguardistas para mantenernos a la vanguardia.",
      badge: "Futuro",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-950 tracking-tight">
            Nuestros Valores <span className="text-red-600">Empresariales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Principios que impulsan nuestra innovación y guían nuestro compromiso con la excelencia en cada aspecto de
            nuestro servicio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valores.map((valor, index) => {
            const Icon = valor.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 mx-auto bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-150"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-950 text-center group-hover:text-red-600 transition-colors duration-300">
                      {valor.title}
                    </h3>
                    <p className="text-gray-600 text-center mb-4 leading-relaxed">{valor.description}</p>
                    <div className="text-center">
                      <Badge
                        variant="secondary"
                        className="bg-red-600 bg-opacity-10 text-red-600 border-red-600 border-opacity-20 group-hover:bg-red-600 group-hover:text-gray-950 transition-colors duration-300"
                      >
                        {valor.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ValoresInstitucionales