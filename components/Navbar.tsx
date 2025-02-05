'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Home, 
  Building2, 
  Info, 
  Contact,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/", icon: <Home size={18} /> },
    { name: "Empresas", path: "/companies", icon: <Building2 size={18} /> },
    { name: "Sobre Nosotros", path: "/about", icon: <Info size={18} /> },
    { name: "Contacto", path: "/contact", icon: <Contact size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-blue-950/95 backdrop-blur-md py-2 shadow-lg' 
        : 'bg-blue-950 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image src="https://res.cloudinary.com/dqnjw25rj/image/upload/v1738702145/empresas/zoeb19ews9gqsyv3znvc.png" alt="Logo" width={70} height={20} />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-white bg-clip-text text-transparent">
                Cámara de Comercio
              </span>
              <span className="block text-sm text-white font-medium">
                La Maná
              </span>
            </div>
          </Link>

          {/* Enlaces de navegación para desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:text-red-600 hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="transform transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="ml-2">{item.name}</span>
                <ChevronRight 
                  size={14} 
                  className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
                />
              </Link>
            ))}
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-red-600 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-white/10 rounded-lg transition-transform duration-300 hover:scale-110" />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden fixed inset-0 top-[57px] bg-blue-950 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col p-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center p-3 text-white rounded-lg hover:text-red-600 hover:bg-white/5 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="transform transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="ml-3 text-lg">{item.name}</span>
                <ChevronRight 
                  size={16} 
                  className="ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
                />
              </Link>
            ))}

            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="text-sm text-white mb-4">Síguenos en redes sociales</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="p-2 text-white hover:text-red-600 hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
