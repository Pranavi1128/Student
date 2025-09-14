import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'volunteer' | 'operator';
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
  medicalYear?: string;
  address?: string;
  isAvailable?: boolean;
}

interface AuthContextType {
  user: User | null;
  volunteers: User[];
  login: (userData: User) => void;
  logout: () => void;
  registerVolunteer: (volunteerData: Omit<User, 'id' | 'role'>) => void;
  updateVolunteerAvailability: (id: string, isAvailable: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [volunteers, setVolunteers] = useState<User[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1-555-0123',
      role: 'volunteer',
      dateOfBirth: '1985-03-15',
      gender: 'Female',
      medicalYear: '2010',
      address: 'Downtown Medical District',
      isAvailable: true
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1-555-0124',
      role: 'volunteer',
      dateOfBirth: '1988-07-22',
      gender: 'Male',
      medicalYear: '2015',
      address: 'Westside Emergency Zone',
      isAvailable: false
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '+1-555-0125',
      role: 'volunteer',
      dateOfBirth: '1990-11-08',
      gender: 'Female',
      medicalYear: '2018',
      address: 'Central Hospital Area',
      isAvailable: true
    }
  ]);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const registerVolunteer = (volunteerData: Omit<User, 'id' | 'role'>) => {
    const newVolunteer: User = {
      ...volunteerData,
      id: Date.now().toString(),
      role: 'volunteer',
      isAvailable: true
    };
    setVolunteers(prev => [...prev, newVolunteer]);
    setUser(newVolunteer);
  };

  const updateVolunteerAvailability = (id: string, isAvailable: boolean) => {
    setVolunteers(prev => 
      prev.map(volunteer => 
        volunteer.id === id ? { ...volunteer, isAvailable } : volunteer
      )
    );
    if (user && user.id === id) {
      setUser({ ...user, isAvailable });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      volunteers,
      login,
      logout,
      registerVolunteer,
      updateVolunteerAvailability
    }}>
      {children}
    </AuthContext.Provider>
  );
};