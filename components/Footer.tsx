"use client"

import { Mail, MapPin, Phone, Facebook, Globe, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/dqnjw25rj/image/upload/v1738702145/empresas/zoeb19ews9gqsyv3znvc.png"
                  alt="Logo Cámara de Comercio"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Cámara de Comercio<br/><span className="text-red-500">La Maná</span></h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Impulsando el desarrollo empresarial y económico de nuestra región desde hace más de 20 años, con compromiso y excelencia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/camaradecomerciodelamana.ciudadlamana/?locale=es_LA" 
                className="w-10 h-10 rounded-full bg-blue-900 hover:bg-red-600 flex items-center justify-center transition-colors duration-300" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Globe className="text-red-600" size={20} />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white flex items-center gap-2 group">
                  <ArrowRight size={16} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                  <span>Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center gap-2 group">
                  <ArrowRight size={16} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-300 hover:text-white flex items-center gap-2 group">
                  <ArrowRight size={16} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                  <span>Empresas Afiliadas</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white flex items-center gap-2 group">
                  <ArrowRight size={16} className="text-red-600 group-hover:translate-x-1 transition-transform" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Phone className="text-red-600" size={20} />
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Av. 19 de Mayo, La Maná, Ecuador
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone size={18} className="text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <a href="tel:+593123456789" className="text-gray-300 group-hover:text-white transition-colors">
                  +593 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail size={18} className="text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@camaradecomerciolamana.com" className="text-gray-300 group-hover:text-white transition-colors">
                  info@camaradecomerciolamana.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="text-red-600" size={20} />
              Horario de Atención
            </h4>
            <div className="space-y-3">
              <div className="bg-blue-900/50 p-3 rounded-lg">
                <p className="font-medium">Lunes a Viernes</p>
                <p className="text-gray-300">8:00 AM - 5:00 PM</p>
              </div>
              <div className="bg-blue-900/50 p-3 rounded-lg">
                <p className="font-medium">Sábados</p>
                <p className="text-gray-300">9:00 AM - 1:00 PM</p>
              </div>
              <div className="bg-blue-900/50 p-3 rounded-lg">
                <p className="font-medium">Domingos</p>
                <p className="text-red-500">Cerrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-blue-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cámara de Comercio La Maná. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
