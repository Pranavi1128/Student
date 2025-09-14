import React from 'react';
import { MapPin, User, LogOut } from 'lucide-react';

interface HeaderProps {
  user: any;
  onAuthClick: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onAuthClick, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Wander Mate</h1>
              <p className="text-xs text-gray-500">Budget Trip Planner</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-sky-600 transition-colors">
              Home
            </a>
            <a href="#destinations" className="text-gray-700 hover:text-sky-600 transition-colors">
              Destinations
            </a>
            <a href="#planner" className="text-gray-700 hover:text-sky-600 transition-colors">
              Trip Planner
            </a>
            <a href="#about" className="text-gray-700 hover:text-sky-600 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="flex items-center space-x-2 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};