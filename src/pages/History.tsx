import React, { useState } from 'react';
import { Calendar, Filter, Star, Package, MapPin, Clock, Search, Download, Eye } from 'lucide-react';

const History: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'completed' | 'cancelled'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const deliveryHistory = [
    {
      id: '12345',
      customerName: 'Priya Sharma',
      customerPhone: '+91 9876543210',
      pickupLocation: 'Fresh Market, MG Road',
      dropLocation: 'Brigade Gateway',
      amount: 45,
      status: 'completed',
      date: '2024-01-15',
      time: '14:30',
      rating: 5,
      items: ['Groceries'],
      distance: 3.2,
      duration: 25,
      feedback: 'Great service! Very quick delivery.'
    },
    {
      id: '12344',
      customerName: 'Rahul Kumar',
      customerPhone: '+91 9876543211',
      pickupLocation: 'Spice Garden Restaurant',
      dropLocation: 'Tech Park, Whitefield',
      amount: 38,
      status: 'completed',
      date: '2024-01-14',
      time: '19:45',
      rating: 4,
      items: ['Biryani', 'Lassi'],
      distance: 2.8,
      duration: 20,
      feedback: 'Food was delivered hot. Thank you!'
    },
    {
      id: '12343',
      customerName: 'Anjali Patel',
      customerPhone: '+91 9876543212',
      pickupLocation: 'Medical Store',
      dropLocation: 'Residential Complex',
      amount: 25,
      status: 'cancelled',
      date: '2024-01-13',
      time: '11:20',
      rating: 0,
      items: ['Medicines'],
      distance: 1.5,
      duration: 0,
      cancellationReason: 'Customer not available'
    },
    {
      id: '12342',
      customerName: 'Vikram Singh',
      customerPhone: '+91 9876543213',
      pickupLocation: 'Electronics Shop',
      dropLocation: 'Office Complex',
      amount: 60,
      status: 'completed',
      date: '2024-01-12',
      time: '16:15',
      rating: 5,
      items: ['Phone Case', 'Charger'],
      distance: 4.1,
      duration: 30,
      feedback: 'Perfect delivery timing!'
    }
  ];

  const filteredHistory = deliveryHistory.filter(order => {
    const matchesFilter = selectedFilter === 'all' || order.status === selectedFilter;
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.includes(searchTerm);
    const matchesDate = !dateRange.start || !dateRange.end || 
                       (order.date >= dateRange.start && order.date <= dateRange.end);
    
    return matchesFilter && matchesSearch && matchesDate;
  });

  const stats = {
    total: deliveryHistory.length,
    completed: deliveryHistory.filter(o => o.status === 'completed').length,
    cancelled: deliveryHistory.filter(o => o.status === 'cancelled').length,
    totalEarnings: deliveryHistory.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.amount, 0),
    avgRating: deliveryHistory.filter(o => o.rating > 0).reduce((sum, o) => sum + o.rating, 0) / 
               deliveryHistory.filter(o => o.rating > 0).length || 0
  };

  const exportHistory = () => {
    const csvContent = filteredHistory.map(order => 
      `${order.date},${order.id},${order.customerName},${order.status},${order.amount},${order.rating}`
    ).join('\n');
    
    const blob = new Blob([`Date,Order ID,Customer,Status,Amount,Rating\n${csvContent}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'delivery-history.csv';
    a.click();
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Delivery History</h1>
        <button 
          onClick={exportHistory}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm">Export</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Total Orders</p>
              <p className="text-xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <Package className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Completed</p>
              <p className="text-xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <Star className="w-5 h-5 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Cancelled</p>
              <p className="text-xl font-bold text-red-600">{stats.cancelled}</p>
            </div>
            <Package className="w-5 h-5 text-red-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Total Earned</p>
              <p className="text-xl font-bold text-green-600">₹{stats.totalEarnings}</p>
            </div>
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Avg Rating</p>
              <p className="text-xl font-bold text-yellow-600">{stats.avgRating.toFixed(1)}</p>
            </div>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by customer name or order ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-gray-100 rounded-lg">
          {(['all', 'completed', 'cancelled'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Delivery History List */}
      <div className="space-y-4">
        {filteredHistory.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">Order #{order.id}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  order.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="p-2 text-gray-400 hover:text-blue-600"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">₹{order.amount}</p>
                  <p className="text-xs text-gray-500">{order.date} • {order.time}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Pickup</p>
                  <p className="text-xs text-gray-600">{order.pickupLocation}</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Delivery</p>
                  <p className="text-xs text-gray-600">{order.dropLocation}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-900">{order.customerName}</span>
                <span className="text-xs text-gray-500">• {order.items.join(', ')}</span>
                <span className="text-xs text-gray-500">• {order.distance} km</span>
                {order.duration > 0 && (
                  <span className="text-xs text-gray-500">• {order.duration} min</span>
                )}
              </div>
              {order.status === 'completed' && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{order.rating}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <div className="text-center py-8">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No orders found</p>
          <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
        </div>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Order Details</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Order Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-medium">#{selectedOrder.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">{selectedOrder.date} • {selectedOrder.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${
                      selectedOrder.status === 'completed' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Earnings:</span>
                    <span className="font-medium text-green-600">₹{selectedOrder.amount}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Customer Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{selectedOrder.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">{selectedOrder.customerPhone}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Delivery Details</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Pickup:</span>
                    <p className="font-medium">{selectedOrder.pickupLocation}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Delivery:</span>
                    <p className="font-medium">{selectedOrder.dropLocation}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-medium">{selectedOrder.distance} km</span>
                  </div>
                  {selectedOrder.duration > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{selectedOrder.duration} minutes</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Items</h4>
                <div className="space-y-1">
                  {selectedOrder.items.map((item: string, index: number) => (
                    <div key={index} className="text-sm text-gray-600">• {item}</div>
                  ))}
                </div>
              </div>

              {selectedOrder.status === 'completed' && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Rating & Feedback</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < selectedOrder.rating 
                                ? 'text-yellow-500 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({selectedOrder.rating}/5)</span>
                    </div>
                    {selectedOrder.feedback && (
                      <p className="text-sm text-gray-600 italic">"{selectedOrder.feedback}"</p>
                    )}
                  </div>
                </div>
              )}

              {selectedOrder.status === 'cancelled' && selectedOrder.cancellationReason && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cancellation Reason</h4>
                  <p className="text-sm text-red-600">{selectedOrder.cancellationReason}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;