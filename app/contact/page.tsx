"use client";

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight,
  Clock,
  Globe,
  X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const validateForm = () => {
    const tempErrors = {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: ""
    };
    let isValid = true;

    // Validaciones (mantén la lógica anterior)
    if (!formData.nombre.trim()) {
      tempErrors.nombre = "El nombre es requerido";
      isValid = false;
    } else if (formData.nombre.trim().length < 3) {
      tempErrors.nombre = "El nombre debe tener al menos 3 caracteres";
      isValid = false;
    }

    // Validaciones de email, asunto y mensaje
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      tempErrors.email = "Ingrese un correo electrónico válido";
      isValid = false;
    }

    if (!formData.asunto.trim()) {
      tempErrors.asunto = "El asunto es requerido";
      isValid = false;
    }

    if (!formData.mensaje.trim()) {
      tempErrors.mensaje = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
  
    try {
      await fetch('https://back-main-l7ve.vercel.app/api/mensajes-contacto/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-2"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-blue-950 mb-16"
        >
          Contáctanos <span className="text-red-600">ahora</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-950 rounded-3xl p-8 border border-gray-900 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Send className="mr-4 text-red-600" size={32} />
              Envíanos un Mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus.message && (
                <div className={`
                  p-4 rounded-lg flex items-center justify-between
                  ${submitStatus.type === "success" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-red-600/20 text-red-600"
                  }
                `}>
                  {submitStatus.message}
                  <button 
                    type="button"
                    onClick={() => setSubmitStatus({ type: "", message: "" })}
                    className="hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-white flex items-center">
                  Nombre <span className="text-red-600 ml-1">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className={`
                      bg-white text-white border-gray-900 
                      focus:border-red-600 focus:ring-red-600
                      ${errors.nombre ? 'border-red-600' : ''}
                    `}
                  />
                  {errors.nombre && (
                    <p className="text-red-600 text-sm mt-1">{errors.nombre}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white flex items-center">
                  Correo Electrónico <span className="text-red-600 ml-1">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className={`
                      bg-white text-white border-gray-900 
                      focus:border-red-600 focus:ring-red-600
                      ${errors.email ? 'border-red-600' : ''}
                    `}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                 )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white flex items-center">
                  Asunto <span className="text-red-600 ml-1">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    placeholder="Asunto del mensaje"
                    className={`
                      bg-white text-white border-gray-900 
                      focus:border-red-600 focus:ring-red-600
                      ${errors.asunto ? 'border-red-600' : ''}
                    `}
                  />
                  {errors.asunto && (
                    <p className="text-red-600 text-sm mt-1">{errors.asunto}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white flex items-center">
                  Mensaje <span className="text-red-600 ml-1">*</span>
                </Label>
                <div className="relative">
                  <Textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Escribe tu mensaje aquí..."
                    className={`
                      bg-white text-white border-gray-900 
                      focus:border-red-600 focus:ring-red-600
                      ${errors.mensaje ? 'border-red-600' : ''}
                    `}
                  />
                  {errors.mensaje && (
                    <p className="text-red-600 text-sm mt-1">{errors.mensaje}</p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                className="
                  w-full 
                  bg-red-600
                  text-white 
                  hover:from-red-600 hover:to-orange-600 
                  transition-all 
                  duration-300
                  flex items-center justify-center
                  group
                "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                <ArrowRight 
                  className="ml-2 group-hover:translate-x-1 transition-transform" 
                  size={20} 
                />
              </Button>
            </form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tarjeta de Información de Contacto */}
            <div className="bg-blue-950 rounded-3xl p-8 border border-gray-900 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Globe className="mr-4 text-red-600" size={32} />
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-red-600 w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Dirección</h3>
                    <p className="text-gray-400">Av. 19 de Mayo, La Maná, Ecuador</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-red-600 w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Teléfono</h3>
                    <p className="text-gray-400">+593 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-red-600 w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Correo</h3>
                    <p className="text-gray-400">info@camaradecomerciolamana.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horario de Atención */}
            <div className="bg-blue-950 rounded-3xl p-8 border border-gray-900 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
 <Clock className="mr-4 text-red-600" size={32} />
                Horario de Atención
              </h2>
              <div className="space-y-4 text-gray-400">
                <div className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-red-600">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="bg-blue-950 rounded-3xl p-8 border border-gray-900 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <MapPin className="mr-4 text-red-600" size={32} />
                Ubicación
              </h2>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.531295292562!2d-79.22647221803583!3d-0.9421799247359648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d4eb1e13920133%3A0x8b23c27ba6d3ad26!2sLa%20Man%C3%A1%2C%20Ecuador!5e0!3m2!1sen!2s!4v1704827006255!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;