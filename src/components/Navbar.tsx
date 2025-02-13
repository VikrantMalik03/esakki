import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-green-600' : 'text-gray-700'
              } hover:text-green-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-green-600' : 'text-gray-700'
              } hover:text-green-600 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/rooms"
              className={`${
                isActive('/rooms') ? 'text-green-600' : 'text-gray-700'
              } hover:text-green-600 transition-colors`}
            >
              Rooms
            </Link>
            <Link
              to="/gallery"
              className={`${
                isActive('/gallery') ? 'text-green-600' : 'text-gray-700'
              } hover:text-green-600 transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-green-600' : 'text-gray-700'
                } hover:text-green-600 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about') ? 'text-green-600' : 'text-gray-700'
                } hover:text-green-600 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/rooms"
                className={`${
                  isActive('/rooms') ? 'text-green-600' : 'text-gray-700'
                } hover:text-green-600 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </Link>
              <Link
                to="/gallery"
                className={`${
                  isActive('/gallery') ? 'text-green-600' : 'text-gray-700'
                } hover:text-green-600 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`${
                  isActive('/contact') ? 'text-green-600' : 'text-gray-700'
                } hover:text-green-600 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}