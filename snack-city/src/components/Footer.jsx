import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#151618] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-offwhite mb-4">
              Snack <span className="text-mustard">City</span>
            </h2>
            <p className="text-muted mb-6 max-w-sm mx-auto md:mx-0">
              Serving the freshest burgers, cheesiest pizzas, and coldest drinks since 2026. Your ultimate fast-food destination.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-muted hover:text-crimson transition-colors p-2 bg-dark-card rounded-full"><FaInstagram className="w-5 h-5"/></a>
              <a href="#" className="text-muted hover:text-crimson transition-colors p-2 bg-dark-card rounded-full"><FaTwitter className="w-5 h-5"/></a>
              <a href="#" className="text-muted hover:text-crimson transition-colors p-2 bg-dark-card rounded-full"><FaFacebook className="w-5 h-5"/></a>
              <a href="#" className="text-muted hover:text-crimson transition-colors p-2 bg-dark-card rounded-full"><FaWhatsapp className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3 text-muted">
            <h3 className="text-white font-bold text-lg mb-2">Quick Links</h3>
            <a href="#" className="hover:text-mustard transition-colors">Home</a>
            <a href="#menu" className="hover:text-mustard transition-colors">Menu</a>
            <a href="#deals" className="hover:text-mustard transition-colors">Special Deals</a>
            <a href="#" className="hover:text-mustard transition-colors">Nutritional Info</a>
          </div>

          {/* Contact */}
          <div className="text-muted">
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-2">123 Foodie Blvd, Flavor Town, FL 33101</p>
            <p className="mb-2">hello@snackcity.com</p>
            <p className="text-mustard font-bold text-xl mt-4">1-800-SNACKS</p>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Snack City. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
