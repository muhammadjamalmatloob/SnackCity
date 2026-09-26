import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const DealsBanner = () => {
  const deals = [
    {
      id: 1,
      title: "Family Combo Deal",
      subtitle: "Save 25%",
      description: "Get 2 Large Pizzas, 4 Classic Cheeseburgers, a Family portion of Loaded Fries, and 4 Ice-Cold Drinks. Perfect for game night!",
      price: "3900",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Midnight Munchies",
      subtitle: "Buy 1 Get 1 Free",
      description: "Order any burger after 10 PM and get another one absolutely free. Satisfy your late-night cravings!",
      price: "1500",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1920&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Pizza Party Platter",
      subtitle: "Free 1.5L Drink",
      description: "Any 3 Large Pizzas of your choice, plus a complimentary 1.5L cold drink.",
      price: "4200",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  return (
    <section id="deals" className="bg-crimson w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between pb-12 lg:pb-0">
                
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left z-10 py-12 lg:py-24 pr-0 lg:pr-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-dark-base text-mustard font-bold text-sm mb-6 tracking-wider uppercase shadow-md">
                    Limited Time Offer
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-md">
                    {deal.title} <br/>
                    <span className="text-mustard">{deal.subtitle}</span>
                  </h2>
                  <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                    {deal.description}
                  </p>
                  <button className="bg-mustard text-dark-base font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300">
                    Claim Deal Now - Rs. {deal.price}
                  </button>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 relative mt-4 lg:mt-0 h-[300px] sm:h-[400px] lg:h-[600px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-crimson to-transparent z-10 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson to-transparent z-10 block lg:hidden" />
                  <img 
                    src={deal.image} 
                    alt={deal.title} 
                    className="w-full h-full object-cover rounded-2xl lg:rounded-none shadow-2xl lg:shadow-none"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DealsBanner;
