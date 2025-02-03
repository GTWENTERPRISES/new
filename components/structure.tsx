"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  Briefcase,
  Award,
  FileText,
  Book,
  Target,
  CheckCircle2,
  Link2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent} from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface MiembroDirectorio {
  id: number
  nombre: string
  cargo: string
  icon: React.ComponentType<{ className?: string }>
  descripcion: string
  responsabilidades: string[]
}

interface Servicio {
  id: number
  titulo: string
  descripcion: string
  icon: React.ComponentType<{ className?: string }>
  caracteristicas: string[]
}

const EstructuraOrganizacional: React.FC = () => {
  const [selectedMiembro, setSelectedMiembro] = useState<MiembroDirectorio | null>(null)
  const [selectedServicio, setSelectedServicio] = useState<Servicio | null>(null)


  const directorio: MiembroDirectorio[] = [
    {
      id: 1,
      nombre: "Juan Pérez",
      cargo: "Presidente",
      icon: Users,
      descripcion: "Lidera la visión estratégica y representa a la organización en eventos de alto nivel.",
      responsabilidades: [
        "Definir la estrategia a largo plazo",
        "Representar a la organización en eventos clave",
        "Supervisar el desempeño general de la cámara",
      ],
    },
    {
      id: 2,
      nombre: "María González",
      cargo: "Vicepresidente",
      icon: Briefcase,
      descripcion: "Apoya al presidente y supervisa las operaciones diarias de la organización.",
      responsabilidades: [
        "Gestionar las operaciones diarias",
        "Implementar iniciativas estratégicas",
        "Coordinar con los diferentes departamentos",
      ],
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      cargo: "Secretario",
      icon: FileText,
      descripcion: "Gestiona la documentación oficial y coordina las comunicaciones internas.",
      responsabilidades: [
        "Mantener registros y actas de reuniones",
        "Gestionar la correspondencia oficial",
        "Coordinar la logística de eventos y reuniones",
      ],
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      cargo: "Tesorero",
      icon: Award,
      descripcion: "Supervisa las finanzas y asegura la salud económica de la organización.",
      responsabilidades: [
        "Gestionar el presupuesto anual",
        "Supervisar ingresos y gastos",
        "Presentar informes financieros periódicos",
      ],
    },
  ]

  const servicios: Servicio[] = [
    {
      id: 1,
      titulo: "Asesoría Legal",
      descripcion: "Orientación especializada en aspectos comerciales y jurídicos para nuestros asociados.",
      icon: Book,
      caracteristicas: [
        "Consultas legales personalizadas",
        "Revisión de contratos comerciales",
        "Actualización sobre normativas relevantes",
      ],
    },
    {
      id: 2,
      titulo: "Representación Gremial",
      descripcion: "Defensa de los intereses comerciales ante organismos públicos y privados.",
      icon: Target,
      caracteristicas: [
        "Lobby ante entidades gubernamentales",
        "Negociación de acuerdos sectoriales",
        "Participación en mesas de trabajo",
      ],
    },
    {
      id: 3,
      titulo: "Capacitación Empresarial",
      descripcion: "Programas de formación continua para el desarrollo de competencias empresariales.",
      icon: CheckCircle2,
      caracteristicas: [
        "Workshops de habilidades directivas",
        "Cursos de actualización tecnológica",
        "Seminarios de tendencias de mercado",
      ],
    },
    {
      id: 4,
      titulo: "Vinculación Comercial",
      descripcion: "Facilitamos conexiones y oportunidades de networking entre nuestros asociados.",
      icon: Link2,
      caracteristicas: [
        "Eventos de networking mensuales",
        "Plataforma de matchmaking B2B",
        "Misiones comerciales nacionales e internacionales",
      ],
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">
            Nuestra <span className="text-red-600">Estructura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo nuestra organización impulsa el desarrollo comercial de La Maná
          </p>
        </motion.div>

        <Tabs defaultValue="directorio" className="mb-16">
         
          <TabsContent value="directorio">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {directorio.map((miembro) => {
                const Icon = miembro.icon
                return (
                  <motion.div key={miembro.id} variants={itemVariants}>
                    <Card
                      className="h-full cursor-pointer overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gray-900 border-gray-200"
                      onClick={() => setSelectedMiembro(miembro)}
                    >
                      <CardHeader className="p-6 bg-white text-white border-b border-gray-800">
                        <div className="mb-4 relative">
                          <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                            <Icon className="w-8 h-8 text-red-500" />
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold mb-2 text-center text-red-600 transition-colors">
                          {miembro.cargo}
                        </CardTitle>
                        <CardDescription className="text-gray-400  transition-colors text-center">
                          {miembro.nombre}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 bg-blue-950">
                        <p className="text-white text-center line-clamp-3">{miembro.descripcion}</p>
                       
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </TabsContent>
          <TabsContent value=" servicios">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {servicios.map((servicio) => {
                const Icon = servicio.icon
                return (
                  <motion.div key={servicio.id} variants={itemVariants}>
                    <Card
                      className="h-full cursor-pointer overflow-hidden group hover:shadow-lg transition-all duration-300 bg-gray-900 border-gray-800"
                      onClick={() => setSelectedServicio(servicio)}
                    >
                      <CardHeader className="p-6 bg-gray-900 text-white border-b border-gray-800">
                        <div className="mb-4 relative">
                          <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                            <Icon className="w-8 h-8 text-gray-950" />
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold mb-2 text-center group-hover:text-red-600 transition-colors">
                          {servicio.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 bg-gray-900">
                        <p className="text-gray-400 text-center line-clamp-3">{servicio.descripcion}</p>
                        <div className="mt-4 flex justify-center">
                          <Badge
                            variant="outline"
                            className="bg-red-600 text-gray-950 border-red-500 group-hover:bg-red-500 transition-colors duration-300"
                          >
                            Más información
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={selectedMiembro !== null} onOpenChange={() => setSelectedMiembro(null)}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-gray-800">
          {selectedMiembro && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
                  <selectedMiembro.icon className="w-6 h-6" />
                  {selectedMiembro.cargo}
                </DialogTitle>
                <DialogDescription className="text-lg font-semibold text-gray-400">
                  {selectedMiembro.nombre}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-400 mb-4">{selectedMiembro.descripcion}</p>
                <h4 className="font-semibold text-red-600 mb-2">Responsabilidades principales:</h4>
                <ul className="list-disc pl-5 text-gray-400">
                  {selectedMiembro.responsabilidades.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
              <DialogFooter className="mt-6">
                <Button
                  onClick={() => setSelectedMiembro(null)}
                  className="bg-red-600 text-gray-950 hover:bg-red-700"
                >
                  Cerrar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={selectedServicio !== null} onOpenChange={() => setSelectedServicio(null)}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-gray-800">
          {selectedServicio && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
                  <selectedServicio.icon className="w-6 h-6" />
                  {selectedServicio.titulo}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-400 mb-4">{selectedServicio.descripcion}</p>
                <h4 className="font-semibold text-red-600 mb-2">Características del servicio:</h4>
                <ul className="list-disc pl-5 text-gray-400">
                  {selectedServicio.caracteristicas.map((carac, index) => (
                    <li key={index}>{carac}</li>
                  ))}
                </ul>
              </div>
              <DialogFooter className="mt-6">
                <Button
                  onClick={() => setSelectedServicio(null)}
                  className="bg-red-600 text-gray-950 hover:bg-red-700"
                >
                  Cerrar
                </Button>
              </DialogFooter>
            </>
          )}
        ```javascript
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default EstructuraOrganizacional