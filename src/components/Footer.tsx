import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800 pt-16 pb-8 relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="p-4">
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-800">
              Esakki High View Resorts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experience luxury amidst nature at Courtallam's premier resort destination. 
              Where every stay becomes an unforgettable memory.
            </p>
          </div>

          {/* Quick Links */}
          <div className="p-4">
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Rooms', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-amber-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="p-4">
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-800">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <div className="text-gray-600">
                  <p>+91 94 8705 7119</p>
                  <p>+91 94 4362 7119</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-gray-600">esakkiresort@gmail.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-gray-600">Five Falls Main Road, Courtallam - 627 802</p>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-gray-600">Open 24/7</p>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="p-4">
            <h3 className="text-xl font-serif font-semibold mb-4 text-amber-800">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 hover:bg-amber-200 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-amber-700" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Esakki High View Resorts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;