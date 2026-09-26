import { menuItems, categories } from '../data/menu';
import MenuItemCard from './MenuItemCard';

const MenuGrid = () => {
  return (
    <section id="menu" className="py-20 bg-dark-base min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Global Menu Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-offwhite mb-4 tracking-wide">
            Our <span className="text-crimson">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-mustard mx-auto rounded-full"></div>
        </div>

        {/* Portions by Category */}
        {categories.map((category) => {
          // Get items for this category
          const categoryItems = menuItems.filter(item => item.category === category);
          
          // Skip rendering if no items in this category
          if (categoryItems.length === 0) return null;

          return (
            <div key={category} className="mb-20">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <h3 className="text-3xl font-bold text-mustard mr-4 uppercase tracking-wider">{category}</h3>
                <div className="h-px bg-white/10 flex-grow"></div>
              </div>
              
              {/* Category Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default MenuGrid;
