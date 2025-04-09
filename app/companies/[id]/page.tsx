"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  Mail, Phone, MapPin, Award,
  Target, Globe, Star, ChevronRight, ShoppingCart,
  Camera, ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  longDescription?: string;
  imagen: string;
  precio: string;
  caracteristicas: string[];
  rating?: number;
  reviews?: number;
}

interface Company {
  id: number;
  nombre: string;
  categoria_nombre: string;
  descripcion: string;
  longDescription: string;
  fundada: string;
  empleados: string;
  certificaciones?: string[];
  logros?: string[];
  redes_sociales: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  direccion: string;
  telefono: string;
  correo: string;
  sitio_web: string;
  logo: string;
  galeria: string[];
  productos: Product[];
}

const ProductCard = ({ product, company }: { product: Product; company: Company }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <Image 
          src={product.imagen}
          alt={product.nombre}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-red-600 text-white font-medium">
            {company.categoria_nombre}
          </Badge>
          {product.rating && (
            <Badge className="bg-yellow-400 text-blue-950">
              <Star className="w-3 h-3 mr-1 fill-current" />
              {product.rating}
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-blue-950 group-hover:text-red-600 transition-colors">
              {product.nombre}
            </h3>
            <span className="text-lg font-bold text-red-600">{product.precio}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">{product.descripcion}</p>

        <div className="flex gap-2 pt-2">
          <Button 
            className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-colors"
            onClick={() => window.open(company.sitio_web, '_blank')}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Comprar
          </Button>
          <ProductModal product={product} company={company} />
        </div>
      </CardContent>
    </Card>
  );
};

const ProductModal = ({ product, company }: { product: Product; company: Company }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="bg-blue-950 text-white hover:bg-blue-900">
        <ArrowRight className="w-4 h-4" />
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl bg-white">
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold text-blue-950">
          {product.nombre}
        </DialogTitle>
        <div className="flex items-center gap-2">
          <DialogDescription>
            Por {company.nombre}
          </DialogDescription>
          <Badge className="bg-red-600">{company.categoria_nombre}</Badge>
        </div>
      </DialogHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="space-y-4">
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.imagen}
              alt={product.nombre}
              fill
              className="object-cover"
            />
          </div>
          {product.rating && (
            <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < product.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              {product.reviews && (
                <span className="text-sm text-gray-600">
                  {product.reviews} reseñas verificadas
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.longDescription || product.descripcion}
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            
            <ul className="space-y-3">
              {product.caracteristicas.map((caracteristica, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  {caracteristica}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 pt-4">
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
              onClick={() => window.open(company.sitio_web, '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comprar Ahora - {product.precio}
            </Button>
            <Button 
              className="w-full bg-blue-950 hover:bg-blue-900 text-white"
              onClick={() => window.open(`mailto:${company.correo}`, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contactar Vendedor
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const CompanyDetail = () => {
  const params = useParams();
  const id = params.id as string;
  const [company, setCompany] = useState<Company | null>(null);
 

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await fetch(`https://back-main-l7ve.vercel.app/api/empresas/${id}/`);
      if (!response.ok) throw new Error('Failed to fetch company');
      const data = await response.json();
      setCompany(data);
    };
  
    fetchCompany();
  }, [id]);

  if (!company) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-blue-950">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900/50" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="max-w-4xl">
              <Badge className="bg-red-600 text-white mb-6 text-lg py-2">
                {company.categoria_nombre}
              </Badge>
              <h1 className="text-6xl font-bold text-white mb-8">{company.nombre}</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {company.descripcion}
              </p>
              <div className="flex gap-6">
                {company.redes_sociales.facebook && (
                  <Link 
                    href={company.redes_sociales.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FaFacebook className="w-6 h-6 text-white" />
                  </Link>
                )}
                {company.redes_sociales.instagram && (
                  <Link 
                    href={company.redes_sociales.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FaInstagram className="w-6 h-6 text-white" />
                  </Link>
                )}
                {company.redes_sociales.twitter && (
                  <Link 
                    href={company.redes_sociales.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FaTwitter className="w-6 h-6 text-white" />
                  </Link>
                )}
              </div>
            </div>
            <div className="relative w-64 h-64 bg-white/10 rounded-2xl p-6">
              <Image
                src={company.logo}
                alt={company.nombre}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-blue-950 text-white">
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="text-red-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Dirección</p>
                    <span className="font-medium">{company.direccion}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="text-red-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <span className="font-medium">{company.telefono}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="text-red-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Correo</p>
                    <span className="font-medium">{company.correo}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open(company.sitio_web, '_blank')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visitar Sitio Web
                </Button>
              </CardContent>
            </Card>

           

            {/* Certifications */}
            {company.certificaciones && company.certificaciones.length > 0 && (
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-blue-950 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certificaciones
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {company.certificaciones.map((cert, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 group transition-colors"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Achievements */}
            {company.logros && company.logros.length > 0 && (
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-blue-950 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Logros
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {company.logros.map((logro, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 group transition-colors"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                          {logro}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
           
            {/* Products Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-blue-950">Productos Destacados</h2>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {company.productos.map((product) => (
                  <ProductCard key={product.id} product={product} company={company} />
                ))}
              </div>
            </div>

            {/* Gallery */}
            {company.galeria && company.galeria.length > 0 && (
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-blue-950 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Galería de Imágenes
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {company.galeria.map((imagen, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                            <Image
                              src={imagen}
                              alt={`Galería ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Button 
                                variant="secondary" 
                                size="sm"
                                className="bg-white text-blue-950 hover:bg-red-600 hover:text-white"
                              >
                                Ver imagen
                              </Button>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
                          <div className="relative h-[80vh]">
                            <Image
                              src={imagen}
                              alt={`Galería ${index + 1}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;