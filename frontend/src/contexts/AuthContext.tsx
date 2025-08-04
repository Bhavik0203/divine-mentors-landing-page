'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
  role: string;
}

interface AuthData {
  user: User;
  token: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  auth: AuthData | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing authentication on app load
    const checkAuth = () => {
      try {
        const authData = localStorage.getItem('dashboardAuth');
        if (authData) {
          const parsedAuth = JSON.parse(authData);
          if (parsedAuth.isAuthenticated && parsedAuth.token) {
            setAuth(parsedAuth);
          }
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        localStorage.removeItem('dashboardAuth');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // For demo purposes, check against demo admin or registered users
      if (email === 'admin@divinementors.com' && password === 'admin123') {
        const authData: AuthData = {
          user: {
            email: email,
            name: 'Admin User',
            role: 'admin'
          },
          token: 'demo-token-' + Date.now(),
          isAuthenticated: true
        };
        
        localStorage.setItem('dashboardAuth', JSON.stringify(authData));
        setAuth(authData);
        return true;
      }

      // Check registered users
      const registeredUsers = JSON.parse(localStorage.getItem('dashboardUsers') || '[]');
      const user = registeredUsers.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        const authData: AuthData = {
          user: {
            email: user.email,
            name: user.fullName,
            role: user.role || 'user'
          },
          token: 'user-token-' + Date.now(),
          isAuthenticated: true
        };
        
        localStorage.setItem('dashboardAuth', JSON.stringify(authData));
        setAuth(authData);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('dashboardAuth');
    setAuth(null);
  };

  const value = {
    auth,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 