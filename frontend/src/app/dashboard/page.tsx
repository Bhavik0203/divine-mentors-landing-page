'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { 
  CalendarDays, 
  Users, 
  TrendingUp, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

interface DashboardStats {
  totalBookings: number;
  totalContacts: number;
  pendingBookings: number;
  newContacts: number;
  revenue: number;
  conversionRate: number;
}

export default function Dashboard() {
  const { auth, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalBookings: 0,
    totalContacts: 0,
    pendingBookings: 0,
    newContacts: 0,
    revenue: 0,
    conversionRate: 0
  });

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !auth?.isAuthenticated) {
      router.push('/dashboard/login');
      return;
    }

    // Fetch dashboard stats only if authenticated
    if (auth?.isAuthenticated) {
      const fetchStats = async () => {
        try {
          const [bookingsRes, contactsRes] = await Promise.all([
            fetch('http://localhost:3001/api/bookings'),
            fetch('http://localhost:3001/api/contacts')
          ]);
          
          const bookings = await bookingsRes.json();
          const contacts = await contactsRes.json();
          
          const pendingBookings = bookings.data?.bookings?.filter((b: any) => b.status === 'pending').length || 0;
          const newContacts = contacts.data?.filter((c: any) => c.status === 'new').length || 0;
          const revenue = bookings.data?.bookings?.reduce((sum: number, b: any) => sum + (b.paymentAmount || 0), 0) || 0;
          const conversionRate = contacts.data?.length > 0 ? ((bookings.data?.bookings?.length || 0) / contacts.data.length) * 100 : 0;
          
          setStats({
            totalBookings: bookings.data?.bookings?.length || 0,
            totalContacts: contacts.data?.length || 0,
            pendingBookings,
            newContacts,
            revenue,
            conversionRate
          });
        } catch (error) {
          console.error('Error fetching stats:', error);
        }
      };

      fetchStats();
    }
  }, [auth, loading, router]);

  const statCards = [
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: CalendarDays,
      color: 'bg-blue-500',
      textColor: 'text-blue-500'
    },
    {
      title: 'Total Contacts',
      value: stats.totalContacts,
      icon: Users,
      color: 'bg-green-500',
      textColor: 'text-green-500'
    },
    {
      title: 'Pending Bookings',
      value: stats.pendingBookings,
      icon: Clock,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500'
    },
    {
      title: 'New Contacts',
      value: stats.newContacts,
      icon: AlertCircle,
      color: 'bg-purple-500',
      textColor: 'text-purple-500'
    },
    {
      title: 'Total Revenue',
      value: `$${stats.revenue.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500'
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-500'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Manage your bookings and contacts</p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link 
                href="/dashboard/booking"
                className="flex items-center p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <CalendarDays className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-slate-700">View All Bookings</span>
              </Link>
              <Link 
                href="/dashboard/contact"
                className="flex items-center p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <Users className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-slate-700">View All Contacts</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Dashboard loaded successfully</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                <span>Stats updated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
