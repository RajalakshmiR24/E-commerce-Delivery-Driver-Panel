import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Driver } from '../types';

interface AuthContextType {
  driver: Driver | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  updateDriver: (data: Partial<Driver>) => void;
  isLoading: boolean;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  phone: string;
  vehicleType: 'bike' | 'car' | 'bicycle';
  vehicleNumber: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedDriver = localStorage.getItem('driver');
    if (savedDriver) {
      setDriver(JSON.parse(savedDriver));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockDriver: Driver = {
        id: '1',
        name: 'John Doe',
        email,
        phone: '+91 9876543210',
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        rating: 4.8,
        totalDeliveries: 1247,
        isOnline: false,
        vehicleType: 'bike',
        vehicleNumber: 'KA01AB1234',
        kycStatus: 'verified'
      };
      
      setDriver(mockDriver);
      localStorage.setItem('driver', JSON.stringify(mockDriver));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: SignupData) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newDriver: Driver = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        rating: 0,
        totalDeliveries: 0,
        isOnline: false,
        vehicleType: data.vehicleType,
        vehicleNumber: data.vehicleNumber,
        kycStatus: 'pending'
      };
      
      setDriver(newDriver);
      localStorage.setItem('driver', JSON.stringify(newDriver));
    } catch (error) {
      throw new Error('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setDriver(null);
    localStorage.removeItem('driver');
  };

  const updateDriver = (data: Partial<Driver>) => {
    if (driver) {
      const updatedDriver = { ...driver, ...data };
      setDriver(updatedDriver);
      localStorage.setItem('driver', JSON.stringify(updatedDriver));
    }
  };

  return (
    <AuthContext.Provider value={{ driver, login, signup, logout, updateDriver, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};