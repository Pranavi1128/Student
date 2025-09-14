import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Wander Mate</h3>
                <p className="text-sm text-gray-400">Budget Trip Planner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Making travel dreams come true with smart budget planning and personalized recommendations. 
              Explore the world without breaking the bank.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-sky-500 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-sky-500 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-sky-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Popular Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Budget Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">hello@wandermate.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Wander Mate. All rights reserved. Made with ❤️ for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};