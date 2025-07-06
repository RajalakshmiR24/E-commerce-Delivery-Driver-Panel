import React, { useState } from 'react';
import { useOrders } from '../contexts/OrderContext';
import { MapPin, Clock, Phone, Navigation, QrCode } from 'lucide-react';
import QRScanner from '../components/QRScanner';

const Orders: React.FC = () => {
  const { availableOrders, currentOrder, acceptOrder, verifyPickup, verifyDelivery, updateOrderStatus } = useOrders();
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scanType, setScanType] = useState<'pickup' | 'delivery'>('pickup');

  const handleAcceptOrder = (orderId: string) => {
    acceptOrder(orderId);
  };

  const handleQRScan = (code: string) => {
    if (currentOrder) {
      let success = false;
      
      if (scanType === 'pickup') {
        success = verifyPickup(currentOrder.id, code);
        if (success) {
          alert('Pickup verified successfully!');
        } else {
          alert('Invalid pickup code. Please try again.');
        }
      } else {
        success = verifyDelivery(currentOrder.id, code);
        if (success) {
          alert('Delivery completed successfully!');
        } else {
          alert('Invalid delivery code. Please try again.');
        }
      }
    }
    setShowQRScanner(false);
  };

  const openQRScanner = (type: 'pickup' | 'delivery') => {
    setScanType(type);
    setShowQRScanner(true);
  };

  const handleStartDelivery = () => {
    if (currentOrder) {
      updateOrderStatus(currentOrder.id, 'in_transit');
    }
  };

  if (currentOrder) {
    return (
      <div className="p-4 space-y-6">
        {/* Current Order Header */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Current Order</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {currentOrder.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Order #{currentOrder.id} • {currentOrder.customerName}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Order Details</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Amount</span>
              <span className="font-semibold">₹{currentOrder.totalAmount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Delivery Fee</span>
              <span className="font-semibold text-green-600">₹{currentOrder.deliveryFee}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Distance</span>
              <span className="text-sm">{currentOrder.distance} km</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Est. Time</span>
              <span className="text-sm">{currentOrder.estimatedTime} min</span>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Customer Details</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{currentOrder.customerName}</p>
              <p className="text-sm text-gray-600">{currentOrder.customerPhone}</p>
            </div>
            <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200">
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Location Info */}
        <div className="space-y-3">
          {/* Pickup Location */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Pickup Location</h4>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                  <Navigation className="w-4 h-4" />
                </button>
                {currentOrder.status === 'accepted' && (
                  <button 
                    onClick={() => openQRScanner('pickup')}
                    className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
              <p className="text-sm text-gray-600">{currentOrder.pickupLocation.address}</p>
            </div>
          </div>

          {/* Delivery Location */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Delivery Location</h4>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                  <Navigation className="w-4 h-4" />
                </button>
                {currentOrder.status === 'in_transit' && (
                  <button 
                    onClick={() => openQRScanner('delivery')}
                    className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
              <p className="text-sm text-gray-600">{currentOrder.dropLocation.address}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {currentOrder.status === 'picked_up' && (
            <button
              onClick={handleStartDelivery}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700"
            >
              Start Delivery
            </button>
          )}
          
          {currentOrder.status === 'delivered' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">Order Completed Successfully!</p>
              <p className="text-sm text-green-600 mt-1">Earnings: ₹{currentOrder.deliveryFee}</p>
            </div>
          )}
        </div>

        <QRScanner
          isOpen={showQRScanner}
          onClose={() => setShowQRScanner(false)}
          onScan={handleQRScan}
          title={scanType === 'pickup' ? 'Verify Pickup' : 'Verify Delivery'}
        />
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Available Orders</h1>
        <span className="text-sm text-gray-500">{availableOrders.length} orders nearby</span>
      </div>

      {availableOrders.length === 0 ? (
        <div className="text-center py-8">
          <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No orders available at the moment</p>
          <p className="text-sm text-gray-400 mt-1">Stay online to receive new orders</p>
        </div>
      ) : (
        <div className="space-y-4">
          {availableOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Order #{order.id}</span>
                </div>
                <span className="text-lg font-bold text-green-600">₹{order.deliveryFee}</span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Pickup</p>
                    <p className="text-xs text-gray-600">{order.pickupLocation.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delivery</p>
                    <p className="text-xs text-gray-600">{order.dropLocation.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{order.distance} km</span>
                  <span>{order.estimatedTime} min</span>
                  <span>{order.items.length} items</span>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(order.createdAt).toLocaleTimeString()}
                </span>
              </div>
              
              <button
                onClick={() => handleAcceptOrder(order.id)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700"
              >
                Accept Order
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;