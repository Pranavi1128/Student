import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Heart, Phone, MapPin, Clock, Power, User, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VolunteerDashboard: React.FC = () => {
  const { user, updateVolunteerAvailability, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleAvailability = () => {
    if (user) {
      updateVolunteerAvailability(user.id, !user.isAvailable);
    }
  };

  if (!user || user.role !== 'volunteer') {
    navigate('/volunteer/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">108 Square</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Volunteer Status</h2>
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
              user.isAvailable 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                user.isAvailable ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              {user.isAvailable ? 'Available' : 'Unavailable'}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{user.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{user.address}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-gray-600">
                <div className="font-medium">Medical Graduation: {user.medicalYear}</div>
                <div className="font-medium">Gender: {user.gender}</div>
                <div className="font-medium">DOB: {user.dateOfBirth}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={toggleAvailability}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                user.isAvailable
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              <Power className="w-4 h-4" />
              <span>{user.isAvailable ? 'Mark Unavailable' : 'Mark Available'}</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Emergency Calls</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-600">Responded</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-700">Cardiac emergency - Downtown Medical District</p>
              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Response time: 8 minutes</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">Completed</span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </div>
              <p className="text-gray-700">Trauma assistance - Central Hospital Area</p>
              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Response time: 12 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;