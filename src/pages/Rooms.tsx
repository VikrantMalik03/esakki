import React from 'react';
import type { Room } from '../types';

const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Room',
    description: 'Spacious room with modern amenities and mountain views',
    images: [
      '/room_1.jpg',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '2',
    name: 'Premium Suite',
    description: 'Luxury suite with separate living area and panoramic views',
    images: [
      '/room_2.jpg',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: '3',
    name: 'Family Room',
    description: 'Perfect for families, two bedrooms and a common area',
    images: [
      '/room_3.jpg',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'
    ]
  }
];

export function Rooms() {
  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <img
          src="/slider5.jpg"
          alt="Luxury room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Rooms</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-green-600 font-semibold">{room.price}</p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}