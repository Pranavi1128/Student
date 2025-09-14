import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Users, Shield } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">108 Square</h1>
            </div>
            <div className="text-sm text-gray-600">Emergency Response Network</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Connecting Emergency Response
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A secure platform connecting 108 call centers with qualified medical volunteers 
            for rapid emergency response in your area.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Volunteer Card */}
          <Link 
            to="/volunteer/auth"
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-gray-200"
          >
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">I'm a Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Register as a medical volunteer to help in emergency situations in your area.
              </p>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block">
                Join as Volunteer
              </div>
            </div>
          </Link>

          {/* Operator Card */}
          <Link 
            to="/operator/auth"
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8 border border-gray-200"
          >
            <div className="text-center">
              <div className="bg-red-100 text-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">I'm an Operator</h3>
              <p className="text-gray-600 mb-6">
                Access the call center dashboard to coordinate with volunteers during emergencies.
              </p>
              <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors inline-block">
                Operator Access
              </div>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Volunteer Registration</h4>
              <p className="text-gray-600 text-sm">Medical professionals register with their credentials and availability</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Emergency Coordination</h4>
              <p className="text-gray-600 text-sm">Operators locate and contact nearby available volunteers</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapid Response</h4>
              <p className="text-gray-600 text-sm">Swift deployment of medical assistance where needed most</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;