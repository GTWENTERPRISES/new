"use client";

import { useEffect, useState } from 'react';


interface Testimonial {
  id: number;
  nombre: string;
  cargo: string;
  empresa_nombre: string;
  comentario: string;
}

const TestimonialsCarousel: React.FC = () => {
  const [testimonios, setTestimonios] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/api/testimonios/');
        if (!response.ok) throw new Error('Error al cargar los testimonios');
        const data = await response.json();
        setTestimonios(data.results);
        setError(null);
      } catch (err) {
        setError('Error al cargar los testimonios');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonios();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-600">
          <svg className="animate-spin h-8 w-8 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Cargando testimonios...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-400 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {error}
        </div>
      </div>
    );
  }

  if (!testimonios.length) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-600">No hay testimonios disponibles</div>
      </div>
    );
  }

  return (
    <section id="testimonios" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-12">
          Lo que dicen nuestras <span className="text-red-600">empresas</span>
        </h2>
        <div className="relative overflow-hidden">
          <div className="slider-track flex">
            {[...testimonios, ...testimonios, ...testimonios].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-item flex-shrink-0 w-80 px-4"
              >
                <div className="bg-blue-950 border-none shadow-lg transform m-4 rounded transition-all duration-500 hover:scale-105 hover:z-10 h-full cursor-pointer rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold text-white">
                      {testimonial.nombre.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold">{testimonial.nombre}</h3>
                      <p className="text-sm text-white">{testimonial.cargo} at {testimonial.empresa_nombre}</p>
                    </div>
                  </div>
                  <p className="italic text-white text-sm">{testimonial.comentario}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-track {
          animation: scroll 40s linear infinite;
          width: calc(250px * ${testimonios.length * 3});
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${testimonios.length}));
          }
        }

        .slider-track:hover {
          animation-play-state: paused;
        }

        .testimonial-item:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;