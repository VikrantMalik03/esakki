import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      name: "Esakki High View Resorts (Five Falls)",
      address: "Five Falls Main Road,\nCourtallam - 627 802,\nTirunelveli District,\nTamilnadu, India",
      phone: ["04633 283773", "283724"],
      mobile: "+91 94 8705 7119",
      email: "esakkiresort@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8793589314586!2d77.27447661478386!3d8.631669393789131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411d3c8a52b83%3A0x7f7c09b9a3f2b4a0!2sEsakki%20High%20View%20Resorts!5e0!3m2!1sen!2sin!4v1645789012345!5m2!1sen!2sin"
    },
    {
      name: "Esakki High View Resorts (Old Falls)",
      address: "Old Falls Main Road,\nOld Courtallam - 627 802,\nTirunelveli District,\nTamilnadu, India",
      phone: ["04633 296141"],
      mobile: "+91 94 4362 7119",
      email: "esakkiresort@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8793589314586!2d77.27447661478386!3d8.631669393789131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411d3c8a52b83%3A0x7f7c09b9a3f2b4a0!2sEsakki%20High%20View%20Resorts!5e0!3m2!1sen!2sin!4v1645789012345!5m2!1sen!2sin"
    },
    {
      name: "Esakki Chandra Inn",
      address: "Old Falls Main Road,\nOld Courtallam - 627 802,\nTirunelveli District,\nTamilnadu, India",
      phone: ["04633 296191"],
      mobile: "+91 94 4362 7119",
      email: "esakkichandrainn@gmail.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8793589314586!2d77.27447661478386!3d8.631669393789131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411d3c8a52b83%3A0x7f7c09b9a3f2b4a0!2sEsakki%20High%20View%20Resorts!5e0!3m2!1sen!2sin!4v1645789012345!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[400px]">
        <img
          src="/slider3.jpg"
          alt="Contact header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">Our Locations</h2>
            
            <div className="space-y-8">
              {/* Location Tabs */}
              <div className="flex flex-wrap gap-2">
                {locations.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedLocation(index)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      selectedLocation === index
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {location.name}
                  </button>
                ))}
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    {locations[selectedLocation].phone.map((num, i) => (
                      <p key={i}>{num}</p>
                    ))}
                    <p>{locations[selectedLocation].mobile}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>{locations[selectedLocation].email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="whitespace-pre-line">
                      {locations[selectedLocation].address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
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
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe
            src={locations[selectedLocation].mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${locations[selectedLocation].name} Location`}
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;