import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const MenuItemCard = ({ item }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-dark-card rounded-xl overflow-hidden group shadow-lg hover:shadow-crimson/20 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-dark-base/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-mustard border border-mustard/30">
          {item.category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
        <p className="text-muted text-sm line-clamp-2 mb-4 flex-grow">
          {item.description}
        </p>

        {/* Bottom Row */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
          <span className="text-xl font-black text-crimson">Rs. {item.price}</span>
          <button className="bg-mustard/10 hover:bg-mustard text-mustard hover:text-dark-base p-2 rounded-lg transition-colors duration-300">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
