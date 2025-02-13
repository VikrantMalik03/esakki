import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      name: "Esakki High View Resorts (Five Falls)",
      shortName: "Five Falls Branch",
      description: "Experience luxury amidst nature at our flagship resort near the magnificent Five Falls.",
      address: "Five Falls Main Road,\nCourtallam - 627 802,\nTirunelveli District,\nTamilnadu, India",
      phone: ["04633 283773", "283724"],
      mobile: "+91 94 8705 7119",
      email: "esakkiresort@gmail.com",
      hours: "Check-in: 12:00 PM | Check-out: 11:00 AM",
      mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=8.937730558494751,77.25136182432186"

    },
    {
      name: "Esakki High View Resorts (Old Falls)",
      shortName: "Old Falls Branch",
      description: "A peaceful retreat near the historic Old Falls, perfect for family getaways.",
      address: "Old Falls Main Road,\nOld Courtallam - 627 802,\nTirunelveli District,\nTamilnadu, India",
      phone: ["04633 296141"],
      mobile: "+91 94 4362 7119",
      email: "esakkiresort@gmail.com",
      hours: "Check-in: 12:00 PM | Check-out: 11:00 AM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8793589314586!2d77.27447661478386!3d8.631669393789131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411d3c8a52b83%3A0x7f7c09b9a3f2b4a0!2sEsakki%20High%20View%20Resorts!5e0!3m2!1sen!2sin!4v1645789012345!5m2!1sen!2sin"
    },
    {
      name: "Esakki Chandra Inn",
      shortName: "Chandra Inn",
      description: "Modern comfort meets traditional hospitality at our boutique hotel.",
      address: "Old Falls Main Road,\nOld Courtallam - 627 802,\nTirunelveli District,\nTamilnadu, India",
      phone: ["04633 296191"],
      mobile: "+91 94 4362 7119",
      email: "esakkichandrainn@gmail.com",
      hours: "24/7 Service Available",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8793589314586!2d77.27447661478386!3d8.631669393789131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411d3c8a52b83%3A0x7f7c09b9a3f2b4a0!2sEsakki%20High%20View%20Resorts!5e0!3m2!1sen!2sin!4v1645789012345!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src="/slider3.jpg"
          alt="Contact header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Experience luxury and comfort at our multiple locations across Courtallam
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className={`overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                selectedLocation === index ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => setSelectedLocation(index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{location.shortName}</h3>
                    <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                  </div>
                  <ChevronRight className={`w-6 h-6 text-green-600 transition-transform ${
                    selectedLocation === index ? 'rotate-90' : ''
                  }`} />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>{location.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Location Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {locations[selectedLocation].name}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Numbers</h3>
                    {locations[selectedLocation].phone.map((num, i) => (
                      <p key={i} className="text-gray-600">{num}</p>
                    ))}
                    <p className="text-gray-600">{locations[selectedLocation].mobile}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">{locations[selectedLocation].email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {locations[selectedLocation].address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-[400px]">
              <iframe
                src={locations[selectedLocation].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${locations[selectedLocation].name} Location`}
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Location
                </label>
                <select
                  id="location"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;