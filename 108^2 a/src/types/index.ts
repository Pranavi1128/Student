export interface User {
  id: string;
  email: string;
  name: string;
}

export interface TripPlan {
  id: string;
  userId: string;
  startLocation?: string;
  destination: string;
  numberOfPeople: number;
  numberOfDays: number;
  interests: string[];
  totalBudget: number;
  createdAt: Date;
}

export interface Recommendation {
  id: string;
  type: 'hotel' | 'restaurant' | 'activity' | 'transport';
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  location: string;
}

export interface Suggestion {
  id: string;
  type: 'destination' | 'event' | 'tip';
  title: string;
  description: string;
  image: string;
  category: string;
}