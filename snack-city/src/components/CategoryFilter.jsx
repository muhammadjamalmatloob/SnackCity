import { categories } from '../data/menu';

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-8 px-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-mustard text-dark-base border border-mustard shadow-[0_0_15px_rgba(252,163,17,0.3)]'
              : 'bg-transparent text-offwhite border border-mustard hover:bg-mustard/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
