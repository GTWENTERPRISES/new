"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Building2, Users, Handshake, GraduationCap, TrendingUp } from "lucide-react"

const stats = [
  { title: "Empresas Miembro", value: 100, icon: Building2 },
  { title: "Empleos Facilitados", value: 5000, icon: Users },
  { title: "Acuerdos Comerciales", value: 75, icon: Handshake },
  { title: "Crecimiento Económico Regional", value: 8, icon: TrendingUp, suffix: "%" },
]

const CorporateStatsSection = () => {
  const [currentStats, setCurrentStats] = useState(stats.map((stat) => ({ ...stat, currentValue: 0 })))
  const controls = useAnimation()

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  useEffect(() => {
    const animate = async () => {
      await controls.start("visible")
    }
    animate()

    stats.forEach((stat, index) => {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = Math.ceil(end / (duration / 16))

      const updateCount = () => {
        if (start < end) {
          start += increment
          if (start > end) start = end
          setCurrentStats((prevStats) => {
            const newStats = [...prevStats]
            newStats[index].currentValue = start
            return newStats
          })
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    })
  }, [controls])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Impacto de la <span className="text-red-600">Cámara de Comercio</span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          {currentStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100"
              variants={fadeInUp}
              custom={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-600" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold mb-2 text-blue-950"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                {stat.prefix || ""}
                {stat.currentValue.toLocaleString()}
                {stat.suffix || ""}
              </motion.div>
              <motion.div
                className="text-sm text-blue-950 font-medium uppercase tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                {stat.title}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CorporateStatsSection