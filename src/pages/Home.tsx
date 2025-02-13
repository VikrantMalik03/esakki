import React from 'react';
import { Carousel } from '../components/Carousel';
import { Services } from '../components/Services';
import { BookingForm } from '../components/BookingForm';

const carouselImages = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
  '/slider4.jpg',
  '/slider5.jpg'

];

export function Home() {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel images={carouselImages} />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Esakki High View Resorts</h1>
            <p className="text-xl">Experience luxury amidst nature</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Booking Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}