import React from 'react';
import { Star, DollarSign, MapPin, ArrowLeft } from 'lucide-react';

interface RecommendationsProps {
  recommendations: any[];
  onBack: () => void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations, onBack }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hotel': return '🏨';
      case 'restaurant': return '🍽️';
      case 'activity': return '🎯';
      case 'transport': return '🚌';
      default: return '📍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hotel': return 'bg-blue-100 text-blue-800';
      case 'restaurant': return 'bg-orange-100 text-orange-800';
      case 'activity': return 'bg-green-100 text-green-800';
      case 'transport': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalCost = recommendations.reduce((sum, rec) => sum + rec.price, 0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Planner</span>
          </button>
          
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-lg font-semibold text-gray-900">
                Estimated Daily Cost: ${totalCost}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Trip Plan
          </h2>
          <p className="text-lg text-gray-600">
            Here are our budget-friendly recommendations tailored to your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(rec.type)}`}>
                  {getTypeIcon(rec.type)} {rec.type.charAt(0).toUpperCase() + rec.type.slice(1)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{rec.name}</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600">{rec.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{rec.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{rec.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-bold text-gray-900">${rec.price}</span>
                    <span className="text-sm text-gray-500">per day</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget Breakdown</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendations.map((rec) => (
              <div key={rec.id} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${getTypeColor(rec.type)}`}>
                  <span className="text-2xl">{getTypeIcon(rec.type)}</span>
                </div>
                <h4 className="font-semibold text-gray-900 capitalize">{rec.type}</h4>
                <p className="text-2xl font-bold text-sky-600">${rec.price}</p>
                <p className="text-sm text-gray-500">per day</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-sky-50 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Total Daily Cost:</span>
              <span className="text-2xl font-bold text-sky-600">${totalCost}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This leaves you with a comfortable buffer for unexpected expenses and souvenirs!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};