"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  Mail, Phone, MapPin, Users, Calendar, Award,
  Target, Globe, Star, ChevronRight, ShoppingCart,
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

// Interfaces remain the same as in original code
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
  email: string;
  sitio_web: string;
  logo: string;
  galeria: string[];
  productos: Product[];
}

const ProductCard = ({ product, company }: { product: Product; company: Company }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={product.imagen}
          alt={product.nombre}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gray-900/20" />
        
        <div className="absolute top-4 left-4">
          <Badge className="bg-red-600 text-white font-medium">
            {company.categoria_nombre}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-blue-950">{product.nombre}</h3>
            <span className="text-md font-bold text-blue-950">{product.precio}</span>
          </div>
          
          {product.rating && (
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < product.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              {product.reviews && (
                <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
              )}
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">{product.descripcion}</p>

        <div className="flex gap-2 pt-2">
          <Button 
            className="flex-1 bg-red-600  text-white transition-colors"
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
      <Button variant="outline" className="text-white bg-blue-950 ">
        Detalles
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl bg-white border-0 [&>button]:text-gray-900 [&>button]:border-0">
      <DialogHeader className='text-gray-900'>
        <DialogTitle className="text-3xl font-bold text-gray-900">
          {product.nombre}
        </DialogTitle>
        <DialogDescription className="text-gray-900">
          Por {company.nombre}
        </DialogDescription>
      </DialogHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="space-y-4">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src={product.imagen}
              alt={product.nombre}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge className="bg-red-600 text-white">
                {company.categoria_nombre}
              </Badge>
              {product.rating && (
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < product.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  {product.reviews && (
                    <span className="text-sm text-gray-600 ml-2">({product.reviews} reseñas)</span>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-900">{product.longDescription || product.descripcion}</p>
          </div>
          
          <div className="border-t border-gray-300 pt-6">
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Características:</h4>
            <ul className="space-y-3">
              {product.caracteristicas.map((caracteristica, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-900">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  {caracteristica}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 pt-4">
            <Button 
              className="w-full bg-red-600 border border-gray-200 text-white transition-colors"
              onClick={() => window.open(company.sitio_web, '_blank')}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Comprar Ahora
            </Button>
            <Button 
              className="w-full bg-blue-950 text-white transition-colors"
              onClick={() => window.open(`mailto:${company.email}`, '_blank')}
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
    const response = await fetch(`http://localhost:8000/api/empresas/${id}/`);
        if (!response.ok) throw new Error('Failed to fetch company');
        const data = await response.json();
        setCompany(data);
      
    };
  
    fetchCompany();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!company) return null;



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-blue-950">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="max-w-4xl">
              <Badge className="bg-red-600 text-white mb-4">
                {company.categoria_nombre}
              </Badge>
              <h1 className="text-5xl font-bold text-blue-950 mb-6">{company.nombre}</h1>
              <p className="text-xl text-blue-950 mb-8 max-w-2xl">
                {company.descripcion}
              </p>
              <div className="flex gap-4">
                {company.redes_sociales.facebook && (
                  <Link href={company.redes_sociales.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="w-8 h-8 text-white hover:text-red-600 transition-colors" />
                  </Link>
                )}
                {company.redes_sociales.instagram && (
                  <Link href={company.redes_sociales.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-8 h-8 text-white hover:text-red-600 transition-colors" />
                  </Link>
                )}
                {company.redes_sociales.twitter && (
                  <Link href={company.redes_sociales.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-8 h-8 text-white hover:text-red-600 transition-colors" />
                  </Link>
                )}
              </div>
            </div>
            <div className="relative w-48 h-48">
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-900">
                  <MapPin className="text-red-600" />
                  <span>{company.direccion}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <Phone className="text-red-600" />
                  <span>{company.telefono}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <Mail className="text-red-600" />
                  <span>{company.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-900">
                  <Globe className="text-red-600" />
                  <Link 
                    href={company.sitio_web} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-red-600 text-xs transition-colors"
                  >
                    {company.sitio_web}
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Company Stats */}
            <Card className="shadow-lg border border-gray-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                    <Calendar className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-900">Fundada</p>
                    <p className="font-semibold text-gray-900">{company.fundada}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                    <Users className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-900">Empleados</p>
                    <p className="font-semibold text-gray-900">{company.empleados}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            {company.certificaciones && company.certificaciones.length > 0 && (
              <Card className="shadow-lg border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Award className="text-red-600" />
                    Certificaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {company.certificaciones.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-600 group">
                        <div className="w-2 h-2 bg-red-600 rounded-full group-hover:bg-gray-900" />
                        <span className="text-gray-900 group-hover:text-white">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Achievements */}
            {company.logros && company.logros.length > 0 && (
              <Card className="shadow-lg border border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Target className="text-red-600" />
                    Logros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {company.logros.map((logro, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-600 group">
                        <div className="w-2 h-2 bg-red-600 rounded-full group-hover:bg-gray-900" />
                        <span className="text-gray-900 group-hover:text-white">{logro}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Products Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-950">Productos Destacados</h2>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-none xl:grid-cols-3 gap-6">
                {company.productos.map((product) => (
                  <ProductCard key={product.id} product={product} company={company} />
                ))}
              </div>
            </div>

            {/* Gallery */}
            {company.galeria && company.galeria.length > 0 && (
              <Card className="shadow-lg overflow-hidden border-none">
                <CardHeader>
                  <CardTitle className="text-gray-900">Galería</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid border-none grid-cols-2 md:grid-cols-3 gap-4">
                    {company.galeria.map((imagen, index) => (
                      <div 
                        key={index} 
                        className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                      >
                        <Image
                          src={imagen}
                          alt={`Galería ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/80 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button 
                              variant="secondary" 
                              size="sm"
                              className="bg-red-600 text-white hover:bg-gray-950"
                            >
                              Ver imagen
                            </Button>
                          </div>
                        </div>
                      </div>
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