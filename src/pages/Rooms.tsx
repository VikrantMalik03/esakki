import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Loader } from 'lucide-react';
import type { Room } from '../types';

const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Room',
    description: 'Spacious room with modern amenities and mountain views',
    features: ['Mountain View', 'Free WiFi', 'Air Conditioning', 'Room Service'],
    price: '₹4,999/night',
    images: [
      '/room_1.jpg',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '2',
    name: 'Pent House',
    description: 'Luxury suite with separate living area and panoramic views',
    features: ['Panoramic View', 'Living Area', 'Mini Bar', 'Premium WiFi'],
    price: '₹7,999/night',
    images: [
      '/room_2.jpg',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '3',
    name: 'Family Room',
    description: 'Perfect for families, featuring two bedrooms and a common area',
    features: ['Two Bedrooms', 'Common Area', 'Kids Play Area', 'Family Dining'],
    price: '₹9,999/night',
    images: [
      '/room_3.jpg',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'
    ]
  }
];

export function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleBookNow = (roomId: string) => {
    setSelectedRoom(roomId);
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src="/slider5.jpg"
          alt="Luxury room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Luxurious Accommodations
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8 animate-slide-up delay-200">
            Experience comfort and elegance in our carefully crafted rooms
          </p>
          <a 
            href="#rooms"
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 animate-slide-up delay-400"
          >
            <span>View Rooms</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Rooms Section */}
      <div id="rooms" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Stay
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of thoughtfully designed rooms and suites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-green-600 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-green-600">{room.price}</span>
                  <span className="text-sm text-gray-500">per night</span>
                </div>

                <button 
                  onClick={() => handleBookNow(room.id)}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  disabled={isLoading && selectedRoom === room.id}
                >
                  {isLoading && selectedRoom === room.id ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Book Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
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

export default Rooms;