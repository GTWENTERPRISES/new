"use client"
import React, { useState, useEffect } from 'react';
import { Building2, Users, Trophy, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Building2,
      value: '100+',
      description: 'Empresas Registradas',
      subtext: 'Líderes del mercado'
    },
    {
      icon: Users,
      value: '100+',
      description: 'Miembros Activos',
      subtext: 'Red empresarial'
    },
    {
      icon: Trophy,
      value: '25+',
      description: 'Años de Experiencia',
      subtext: 'Respaldo y confianza'
    }
  ];

  return (
    <section className="relative min-h-screen bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-16">
          {/* Left Content */}
          <div className={`lg:w-1/2 space-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-8 bg-red-600"></div>
                <span className="text-blue-950 font-semibold tracking-wider text-sm">
                  CÁMARA DE COMERCIO
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
                Impulsando el
                <span className="block text-red-600">
                  Comercio en La Maná
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Facilitamos el crecimiento empresarial a través de networking estratégico, 
                capacitación especializada y representación efectiva del sector comercial.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/companies"
                className="group inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-red-700"
              >
                <span className="flex items-center gap-2">
                  Directorio Empresarial
                  <ChevronRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/membership"
                className="group inline-flex items-center gap-2 border-2 border-blue-800 text-blue-950 px-8 py-4 rounded-lg font-semibold transition-all hover:bg-blue-50"
              >
                <span className="flex items-center gap-2">
                  Afiliación
                  <ChevronRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group px-6 py-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                  >
                    <Icon className="w-6 h-6 text-red-600 mb-4" />
                    <div className="text-3xl font-bold text-blue-950 mb-2">{feature.value}</div>
                    <div className="text-sm font-medium text-blue-950 mb-1">{feature.description}</div>
                    <div className="text-sm text-gray-600">{feature.subtext}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://a.storyblok.com/f/165154/1280x720/92fed695e9/01_hero-image_what-is-an-enterprise-company-definition-types-and-examples.jpg/m/"
                  alt="La Mana Business District"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-30" />
              </div>

              {/* Professional Stats Card */}
              <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-lg shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Red Empresarial</p>
                    <p className="text-xl font-bold text-blue-950">Certificada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;