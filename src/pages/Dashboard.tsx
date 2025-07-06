import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useOrders } from '../contexts/OrderContext';
import { Star, TrendingUp, Clock, MapPin, Package } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard: React.FC = () => {
  const { driver } = useAuth();
  const { availableOrders, currentOrder } = useOrders();

  const mockEarningsData = [
    { name: 'Mon', earnings: 450 },
    { name: 'Tue', earnings: 680 },
    { name: 'Wed', earnings: 520 },
    { name: 'Thu', earnings: 890 },
    { name: 'Fri', earnings: 1200 },
    { name: 'Sat', earnings: 1450 },
    { name: 'Sun', earnings: 980 }
  ];

  const stats = [
    { label: 'Today\'s Earnings', value: '₹1,450', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Orders Completed', value: '12', icon: Package, color: 'bg-blue-500' },
    { label: 'Hours Online', value: '8.5', icon: Clock, color: 'bg-orange-500' },
    { label: 'Rating', value: driver?.rating.toFixed(1) || '0.0', icon: Star, color: 'bg-yellow-500' }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h1 className="text-xl font-bold mb-2">
          Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 17 ? 'Afternoon' : 'Evening'}, {driver?.name}!
        </h1>
        <p className="text-blue-100 mb-4">
          {driver?.isOnline ? 'You are online and ready to receive orders' : 'You are currently offline'}
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Bangalore, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <Package className="w-4 h-4" />
            <span className="text-sm">{driver?.totalDeliveries} deliveries</span>
          </div>
        </div>
      </div>

      {/* Current Order Status */}
      {currentOrder && (
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Current Order</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-900">Order #{currentOrder.id}</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {currentOrder.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-blue-700 mb-2">{currentOrder.customerName}</p>
            <p className="text-xs text-blue-600">
              {currentOrder.status === 'accepted' ? 'Pickup: ' : 'Delivery: '}
              {currentOrder.status === 'accepted' ? currentOrder.pickupLocation.address : currentOrder.dropLocation.address}
            </p>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Weekly Earnings</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={mockEarningsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            <span className="text-sm font-medium">View Available Orders</span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {availableOrders.length} available
            </span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            <span className="text-sm font-medium">Check Earnings</span>
            <span className="text-xs text-gray-500">₹12,450 this month</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            <span className="text-sm font-medium">Update Profile</span>
            <span className="text-xs text-gray-500">Complete KYC</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;