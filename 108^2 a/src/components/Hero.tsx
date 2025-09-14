import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plan Your Perfect Trip
            <span className="block text-sky-600">Within Your Budget</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover amazing destinations, plan your itinerary, and stay within budget. 
            Wander Mate makes travel planning simple, smart, and affordable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Planning Now
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-colors border-2 border-gray-200">
              Browse Destinations
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Search className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-sm text-gray-600">Find destinations that match your budget and interests</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Local Insights</h3>
              <p className="text-sm text-gray-600">Discover hidden gems and local recommendations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Best Timing</h3>
              <p className="text-sm text-gray-600">Get advice on the perfect time to visit</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Group Plans</h3>
              <p className="text-sm text-gray-600">Perfect planning for solo or group adventures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};