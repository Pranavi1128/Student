import React from 'react';
import { Star, Calendar, MapPin, TrendingUp } from 'lucide-react';

export const Suggestions: React.FC = () => {
  const popularDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      budget: "$50-80/day",
      category: "Tropical Paradise"
    },
    {
      id: 2,
      name: "Prague, Czech Republic",
      image: "https://images.pexels.com/photos/161901/prague-czech-republic-city-architecture-161901.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      budget: "$40-65/day",
      category: "Historic City"
    },
    {
      id: 3,
      name: "Costa Rica",
      image: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      budget: "$60-90/day",
      category: "Adventure"
    }
  ];

  const travelTips = [
    {
      id: 1,
      title: "Best Time to Visit Europe",
      description: "Spring (April-June) offers perfect weather and fewer crowds",
      icon: Calendar
    },
    {
      id: 2,
      title: "Budget Travel Hacks",
      description: "Book flights on Tuesdays and stay in local guesthouses",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Hidden Gems",
      description: "Explore lesser-known destinations for authentic experiences",
      icon: MapPin
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing places that other travelers love, all within budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {popularDestinations.map((destination) => (
            <div key={destination.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {destination.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{destination.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-sky-200">{destination.budget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Travel Tips & Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelTips.map((tip) => (
              <div key={tip.id} className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
                <tip.icon className="w-8 h-8 text-sky-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};