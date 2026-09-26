import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

const HeroSlider = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1920&auto=format&fit=crop",
      title: "Taste the Best of Snack City",
      subtitle: "Fresh Burgers, Cheesy Pizzas, and Ice-Cold Drinks."
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920&auto=format&fit=crop",
      title: "Wood-Fired Perfection",
      subtitle: "Authentic pizzas with premium toppings and melted cheese."
    },
    {
      image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=1920&auto=format&fit=crop",
      title: "Unbeatable Deals",
      subtitle: "Satisfy your cravings with our massive combo meals."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full absolute inset-0 z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B1E] via-[#1A1B1E]/70 to-[#1A1B1E]/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center mt-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-offwhite mb-4 tracking-tight drop-shadow-lg max-w-4xl"
        >
          {slides[0].title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-mustard font-medium mb-8 drop-shadow-md"
        >
          {slides[0].subtitle}
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-crimson text-offwhite font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          Order Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSlider;
