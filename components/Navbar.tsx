'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Home, 
  Building2, 
  Info, 
  Contact,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Cierra el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-blue-950/95 to-blue-900/95 backdrop-blur-md py-2 shadow-lg' 
        : 'bg-gradient-to-r from-blue-950 to-blue-900 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
            aria-label="Ir a la página de inicio"
          >
            <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="https://res.cloudinary.com/dqnjw25rj/image/upload/v1738702145/empresas/zoeb19ews9gqsyv3znvc.png" 
                alt="Logo Cámara de Comercio La Maná" 
                width={70} 
                height={20} 
                className="object-contain"
                priority
              />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Cámara de Comercio
              </span>
              <span className="block text-sm text-gray-200 font-medium">
                La Maná
              </span>
            </div>
          </Link>

          {/* Enlaces de navegación para desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                    isActive 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`transform transition-transform duration-300 ${isActive ? 'text-red-500' : 'group-hover:text-red-500'}`}>
                    {item.icon}
                  </span>
                  <span className="ml-2 font-medium">{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600"></span>
                  )}
                  <ArrowRight 
                    size={14} 
                    className={`ml-1 transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 translate-x-0 text-red-500' 
                        : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
              isOpen ? 'bg-red-600/20 scale-110' : 'bg-white/10 hover:bg-white/20 hover:scale-110'
            }`} />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        <div 
          className={`md:hidden fixed inset-0 top-[57px] bg-gradient-to-b from-blue-950 to-blue-900 transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col p-6 space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 group ${
                    isActive 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-200 hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isOpen ? 1 : 0,
                    transition: `transform 0.3s ease ${index * 0.1}s, opacity 0.3s ease ${index * 0.1}s`,
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`transform transition-transform duration-300 ${isActive ? 'text-red-500' : 'group-hover:text-red-500'}`}>
                    {item.icon}
                  </span>
                  <span className="ml-3 text-lg font-medium">{item.name}</span>
                  <ArrowRight 
                    size={16} 
                    className={`ml-auto transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 translate-x-0 text-red-500' 
                        : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} 
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
