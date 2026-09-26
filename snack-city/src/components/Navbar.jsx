import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-base border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <h1 className="text-2xl font-bold text-offwhite tracking-wider">
              Snack <span className="text-mustard">City</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-offwhite hover:text-crimson transition-colors duration-200">Home</a>
            <a href="#menu" className="text-offwhite hover:text-crimson transition-colors duration-200">Menu</a>
            <a href="#deals" className="text-offwhite hover:text-crimson transition-colors duration-200">Deals</a>
            <a href="#contact" className="text-offwhite hover:text-crimson transition-colors duration-200">Contact</a>
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-6">
            <button className="hidden sm:block bg-crimson text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors shadow-md">
              Order Now
            </button>
            <div className="relative cursor-pointer group">
              <ShoppingCart className="w-6 h-6 text-offwhite group-hover:text-mustard transition-colors duration-200" />
              <span className="absolute -top-2 -right-2 bg-crimson text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-dark-base">
                3
              </span>
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-offwhite hover:text-mustard transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-base border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-offwhite hover:text-crimson hover:bg-dark-card">Home</a>
            <a href="#menu" className="block px-3 py-2 rounded-md text-base font-medium text-offwhite hover:text-crimson hover:bg-dark-card">Menu</a>
            <a href="#deals" className="block px-3 py-2 rounded-md text-base font-medium text-offwhite hover:text-crimson hover:bg-dark-card">Deals</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-offwhite hover:text-crimson hover:bg-dark-card">Contact</a>
            <button className="w-full text-left mt-4 bg-crimson text-white px-3 py-2 rounded-md font-bold text-base hover:bg-red-700 transition-colors shadow-md">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
