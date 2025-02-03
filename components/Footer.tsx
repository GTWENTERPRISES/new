"use client"

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Cámara de Comercio La Mana</h3>
            <p className="text-gray-300">
              Impulsando el desarrollo empresarial y económico de nuestra región desde hace más de 20 años.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-600 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-red-600" />
                <span>Av. 19 de Mayo, La Mana, Ecuador</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-600" />
                <span>+593 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-red-600" />
                <span>info@camaradecomerciolamana.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horario de Atención</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Lunes a Viernes</li>
              <li>8:00 AM - 5:00 PM</li>
              <li>Sábados</li>
              <li>9:00 AM - 1:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Cámara de Comercio La Mana. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer