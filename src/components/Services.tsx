import { Utensils, Users, Hotel } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    name: 'Dining',
    description: 'Experience exquisite local and international cuisine in our restaurant with panoramic views.',
    icon: 'Utensils'
  },
  {
    id: '2',
    name: 'Community Hall',
    description: 'Perfect venue for events, meetings, and celebrations with modern amenities.',
    icon: 'Users'
  },
  {
    id: '3',
    name: 'Luxurious Rooms',
    description: 'Comfortable and well-appointed rooms with colonial charm and modern conveniences.',
    icon: 'Hotel'
  }
];

const IconMap = {
  Utensils,
  Users,
  Hotel
};

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon as keyof typeof IconMap];
            
            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{service.name}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}