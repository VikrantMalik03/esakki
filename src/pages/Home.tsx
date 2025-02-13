import React, { useEffect } from 'react';
import { Carousel } from '../components/Carousel';
import { Services } from '../components/Services';
import { BookingForm } from '../components/BookingForm';
import { ArrowRight, ChevronDown } from 'lucide-react';

const carouselImages = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
  '/slider4.jpg',
  '/slider5.jpg'
];

export function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <Carousel images={carouselImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
              Esakki High View Resorts
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up delay-200">
              Experience luxury amidst nature
            </p>
            <a 
              href="#booking"
              className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 animate-slide-up delay-400"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center animate-bounce">
          <span className="block text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 mx-auto" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Paradise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nestled in the heart of nature, our resort offers an unforgettable escape 
              from the ordinary. Experience the perfect blend of luxury and tranquility.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with enhanced wrapper */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <Services />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/slider1.jpg" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Book Your Stay
            </h2>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Luxury Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.8</div>
              <div className="text-gray-600">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

export default Home;