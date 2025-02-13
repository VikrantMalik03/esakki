import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`relative font-medium transition-colors group ${
                  isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform origin-left transition-transform ${
                  isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              
              <Link
                to="/about"
                className={`relative font-medium transition-colors group ${
                  isActive('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                About
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform origin-left transition-transform ${
                  isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              
              <Link
                to="/rooms"
                className={`relative font-medium transition-colors group ${
                  isActive('/rooms') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Rooms
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform origin-left transition-transform ${
                  isActive('/rooms') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              
              <Link
                to="/contact"
                className={`relative font-medium transition-colors group ${
                  isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Contact
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-green-600 transform origin-left transition-transform ${
                  isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </div>

            {/* Contact Button */}
            <a
              href="tel:+919487057119"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/about') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/rooms"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/rooms') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </Link>
              <Link
                to="/gallery"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/gallery') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 font-medium transition-colors ${
                  isActive('/contact') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Button */}
              <a
                href="tel:+919487057119"
                className="mx-4 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Book Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;