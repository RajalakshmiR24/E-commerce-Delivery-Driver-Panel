import React, { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Download, Edit, CreditCard, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import EditModal from '../components/EditModal';

const Earnings: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [editModal, setEditModal] = useState<{
    isOpen: boolean;
    type: string;
    title: string;
    fields: any[];
  }>({
    isOpen: false,
    type: '',
    title: '',
    fields: []
  });

  const weeklyData = [
    { name: 'Mon', earnings: 450, orders: 8, hours: 6 },
    { name: 'Tue', earnings: 680, orders: 12, hours: 8 },
    { name: 'Wed', earnings: 520, orders: 9, hours: 7 },
    { name: 'Thu', earnings: 890, orders: 15, hours: 9 },
    { name: 'Fri', earnings: 1200, orders: 20, hours: 10 },
    { name: 'Sat', earnings: 1450, orders: 25, hours: 12 },
    { name: 'Sun', earnings: 980, orders: 18, hours: 8 }
  ];

  const monthlyData = [
    { name: 'Week 1', earnings: 3200, orders: 65, hours: 45 },
    { name: 'Week 2', earnings: 4150, orders: 78, hours: 52 },
    { name: 'Week 3', earnings: 3800, orders: 72, hours: 48 },
    { name: 'Week 4', earnings: 4500, orders: 85, hours: 55 }
  ];

  const totalEarnings = weeklyData.reduce((sum, day) => sum + day.earnings, 0);
  const totalOrders = weeklyData.reduce((sum, day) => sum + day.orders, 0);
  const totalHours = weeklyData.reduce((sum, day) => sum + day.hours, 0);
  const averagePerOrder = totalEarnings / totalOrders;
  const averagePerHour = totalEarnings / totalHours;

  const transactions = [
    { id: '1', type: 'delivery', amount: 45, date: '2024-01-15', description: 'Order #12345', status: 'completed' },
    { id: '2', type: 'bonus', amount: 100, date: '2024-01-14', description: 'Weekend bonus', status: 'completed' },
    { id: '3', type: 'delivery', amount: 38, date: '2024-01-14', description: 'Order #12344', status: 'completed' },
    { id: '4', type: 'delivery', amount: 52, date: '2024-01-13', description: 'Order #12343', status: 'completed' },
    { id: '5', type: 'payout', amount: -2500, date: '2024-01-12', description: 'Weekly payout', status: 'completed' },
    { id: '6', type: 'delivery', amount: 42, date: '2024-01-12', description: 'Order #12342', status: 'pending' }
  ];

  const [payoutSettings, setPayoutSettings] = useState({
    autoPayoutEnabled: true,
    payoutDay: 'friday',
    minimumAmount: 1000,
    payoutMethod: 'bank'
  });

  const stats = [
    { label: 'Total Balance', value: '₹3,250', change: '+12%', color: 'text-green-600' },
    { label: 'This Week', value: `₹${totalEarnings}`, change: '+8%', color: 'text-blue-600' },
    { label: 'Orders', value: totalOrders.toString(), change: '+5%', color: 'text-orange-600' },
    { label: 'Avg/Order', value: `₹${averagePerOrder.toFixed(0)}`, change: '+3%', color: 'text-purple-600' }
  ];

  const openEditModal = (type: string, title: string, fields: any[]) => {
    setEditModal({ isOpen: true, type, title, fields });
  };

  const handleSave = (data: any) => {
    if (editModal.type === 'payout') {
      setPayoutSettings(prev => ({ ...prev, ...data }));
    }
  };

  const payoutFields = [
    { 
      key: 'payoutDay', 
      label: 'Payout Day', 
      type: 'select' as const, 
      value: payoutSettings.payoutDay, 
      required: true,
      options: [
        { value: 'monday', label: 'Monday' },
        { value: 'tuesday', label: 'Tuesday' },
        { value: 'wednesday', label: 'Wednesday' },
        { value: 'thursday', label: 'Thursday' },
        { value: 'friday', label: 'Friday' },
        { value: 'saturday', label: 'Saturday' },
        { value: 'sunday', label: 'Sunday' }
      ]
    },
    { key: 'minimumAmount', label: 'Minimum Payout Amount', type: 'text' as const, value: payoutSettings.minimumAmount.toString(), required: true },
    { 
      key: 'payoutMethod', 
      label: 'Payout Method', 
      type: 'select' as const, 
      value: payoutSettings.payoutMethod, 
      required: true,
      options: [
        { value: 'bank', label: 'Bank Transfer' },
        { value: 'upi', label: 'UPI' },
        { value: 'wallet', label: 'Digital Wallet' }
      ]
    }
  ];

  const exportData = () => {
    const csvContent = transactions.map(t => 
      `${t.date},${t.description},${t.amount},${t.status}`
    ).join('\n');
    
    const blob = new Blob([`Date,Description,Amount,Status\n${csvContent}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'earnings-report.csv';
    a.click();
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Earnings</h1>
        <button 
          onClick={exportData}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm">Export</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              </div>
              <span className={`text-xs ${stat.color}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Hours Worked</p>
              <p className="text-lg font-bold text-gray-900">{totalHours}h</p>
            </div>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Per Hour</p>
              <p className="text-lg font-bold text-gray-900">₹{averagePerHour.toFixed(0)}</p>
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </div>

      {/* Period Selector */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Earnings Overview</h3>
          <div className="flex bg-gray-100 rounded-lg">
            {(['daily', 'weekly', 'monthly'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-xs font-medium rounded-lg ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={selectedPeriod === 'monthly' ? monthlyData : weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Payout Section */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Payout Settings</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => openEditModal('payout', 'Edit Payout Settings', payoutFields)}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Edit className="w-4 h-4" />
              <span className="text-sm">Edit</span>
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Request Payout
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Available Balance</span>
              <span className="text-lg font-bold text-gray-900">₹3,250</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Next Payout</span>
              <span className="text-sm text-gray-900">Friday, Jan 19</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Auto Payout</span>
              <span className={`text-sm ${payoutSettings.autoPayoutEnabled ? 'text-green-600' : 'text-red-600'}`}>
                {payoutSettings.autoPayoutEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Payout Method</span>
              <span className="text-sm text-gray-900 capitalize">{payoutSettings.payoutMethod}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Minimum Amount</span>
              <span className="text-sm text-gray-900">₹{payoutSettings.minimumAmount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Payout Day</span>
              <span className="text-sm text-gray-900 capitalize">{payoutSettings.payoutDay}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="space-y-3">
          {transactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  transaction.type === 'delivery' ? 'bg-blue-100' :
                  transaction.type === 'bonus' ? 'bg-green-100' :
                  'bg-gray-100'
                }`}>
                  <DollarSign className={`w-4 h-4 ${
                    transaction.type === 'delivery' ? 'text-blue-600' :
                    transaction.type === 'bonus' ? 'text-green-600' :
                    'text-gray-600'
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <EditModal
        isOpen={editModal.isOpen}
        onClose={() => setEditModal(prev => ({ ...prev, isOpen: false }))}
        onSave={handleSave}
        title={editModal.title}
        fields={editModal.fields}
      />
    </div>
  );
};

export default Earnings;