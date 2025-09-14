import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Heart, Search, Phone, MapPin, User, Clock, AlertTriangle, Settings, Power } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OperatorDashboard: React.FC = () => {
  const { user, volunteers, logout } = useAuth();
  const navigate = useNavigate();
  const [searchArea, setSearchArea] = useState('');
  const [filteredVolunteers, setFilteredVolunteers] = useState(volunteers);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAreaSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchArea.trim()) {
      const filtered = volunteers.filter(volunteer =>
        volunteer.address?.toLowerCase().includes(searchArea.toLowerCase())
      );
      setFilteredVolunteers(filtered);
    } else {
      setFilteredVolunteers(volunteers);
    }
  };

  const handleContactVolunteer = (volunteer: any) => {
    alert(`Contacting ${volunteer.name} at ${volunteer.phone}`);
  };

  if (!user || user.role !== 'operator') {
    navigate('/operator/auth');
    return null;
  }

  const availableVolunteers = filteredVolunteers.filter(v => v.isAvailable);
  const ongoingOperations = [
    { id: 1, location: 'Downtown Medical District', type: 'Cardiac Emergency', volunteers: 2, startTime: '14:30' },
    { id: 2, location: 'Central Hospital Area', type: 'Trauma Response', volunteers: 1, startTime: '15:15' }
  ];

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
              <div>
                <h1 className="text-xl font-bold text-gray-900">108 Square</h1>
                <p className="text-sm text-gray-600">Emergency Response Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-700">Operator #{user.id}</span>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Search and Volunteers */}
          <div className="lg:col-span-2 space-y-6">
            {/* Area Search */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Find Volunteers by Area</h2>
              <form onSubmit={handleAreaSearch} className="flex space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                    placeholder="Enter area or address (e.g., Downtown Medical District)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </form>
            </div>

            {/* Available Volunteers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Available Volunteers</h3>
                <div className="flex items-center space-x-2 text-green-600">
                  <Power className="w-5 h-5" />
                  <span className="font-medium">{availableVolunteers.length} Available</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {availableVolunteers.map((volunteer) => (
                  <div key={volunteer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{volunteer.name}</h4>
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Available
                          </div>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{volunteer.address}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>{volunteer.phone}</span>
                          </div>
                          <div className="text-xs">Medical Graduation: {volunteer.medicalYear}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleContactVolunteer(volunteer)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Operations Status */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Volunteers</span>
                  <span className="font-semibold text-gray-900">{volunteers.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Available Now</span>
                  <span className="font-semibold text-green-600">{availableVolunteers.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Operations</span>
                  <span className="font-semibold text-orange-600">{ongoingOperations.length}</span>
                </div>
              </div>
            </div>

            {/* Ongoing Operations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Ongoing Operations</h3>
              </div>
              
              <div className="space-y-4">
                {ongoingOperations.map((operation) => (
                  <div key={operation.id} className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{operation.type}</span>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{operation.startTime}</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{operation.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{operation.volunteers} volunteers deployed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Broadcast Emergency Alert
                </button>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                  Mass Contact Available
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OperatorDashboard;