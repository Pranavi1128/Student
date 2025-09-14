import React, { useState } from 'react';
import { MapPin, Users, Calendar, Heart, DollarSign, Plane, Car, Train } from 'lucide-react';

interface BudgetPlannerProps {
  user: any;
  onPlanCreated: (recommendations: any[]) => void;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({ user, onPlanCreated }) => {
  const [formData, setFormData] = useState({
    startLocation: '',
    destination: '',
    numberOfPeople: 1,
    numberOfDays: 3,
    interests: [] as string[],
    totalBudget: 1000
  });

  const [isPlanning, setIsPlanning] = useState(false);

  const interestOptions = [
    'Adventure Sports', 'Cultural Sites', 'Food & Cuisine', 'Nightlife',
    'Nature & Wildlife', 'Photography', 'Shopping', 'Beaches',
    'Museums', 'Architecture', 'Local Markets', 'Festivals'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'numberOfPeople' || name === 'numberOfDays' || name === 'totalBudget' 
        ? parseInt(value) || 0 
        : value
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest]
    });
  };

  const generateRecommendations = () => {
    const dailyBudget = formData.totalBudget / formData.numberOfDays / formData.numberOfPeople;
    
    return [
      {
        id: 1,
        type: 'hotel',
        name: 'Cozy Downtown Hotel',
        description: 'Clean, comfortable rooms in the city center',
        price: Math.round(dailyBudget * 0.4),
        rating: 4.2,
        image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: formData.destination
      },
      {
        id: 2,
        type: 'restaurant',
        name: 'Local Flavors Restaurant',
        description: 'Authentic local cuisine at affordable prices',
        price: Math.round(dailyBudget * 0.25),
        rating: 4.5,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: formData.destination
      },
      {
        id: 3,
        type: 'activity',
        name: 'City Walking Tour',
        description: 'Guided tour of major attractions and hidden gems',
        price: Math.round(dailyBudget * 0.15),
        rating: 4.7,
        image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: formData.destination
      },
      {
        id: 4,
        type: 'transport',
        name: 'Public Transport Pass',
        description: 'Unlimited access to buses and metros',
        price: Math.round(dailyBudget * 0.1),
        rating: 4.3,
        image: 'https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: formData.destination
      }
    ];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsPlanning(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const recommendations = generateRecommendations();
    onPlanCreated(recommendations);
    setIsPlanning(false);
  };

  if (!user) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Plan Your Trip?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sign in to access our intelligent budget planner and get personalized recommendations.
            </p>
            <div className="bg-sky-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-sky-600" />
                  <span>Smart budget allocation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-sky-600" />
                  <span>Personalized recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-sky-600" />
                  <span>Detailed itinerary planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-sky-600" />
                  <span>Interest-based suggestions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Budget Trip Planner
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your dream trip and we'll create the perfect budget-friendly plan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Starting Location (Optional)
              </label>
              <input
                type="text"
                name="startLocation"
                value={formData.startLocation}
                onChange={handleInputChange}
                placeholder="e.g., New York, NY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Destination *
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g., Paris, France"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Number of People
              </label>
              <select
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Number of Days
              </label>
              <select
                name="numberOfDays"
                value={formData.numberOfDays}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                {Array.from({length: 14}, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Day' : 'Days'}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <DollarSign className="w-4 h-4 inline mr-2" />
                Total Budget (USD)
              </label>
              <input
                type="number"
                name="totalBudget"
                value={formData.totalBudget}
                onChange={handleInputChange}
                min="100"
                step="50"
                placeholder="1000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              <Heart className="w-4 h-4 inline mr-2" />
              Interests (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    formData.interests.includes(interest)
                      ? 'bg-sky-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isPlanning}
              className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isPlanning ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Creating Your Plan...</span>
                </>
              ) : (
                <>
                  <Plane className="w-5 h-5" />
                  <span>Create My Trip Plan</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};