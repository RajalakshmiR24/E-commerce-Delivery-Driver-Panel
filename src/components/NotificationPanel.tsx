import React from 'react';
import { X, Package, DollarSign, Star, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Notification {
  id: string;
  type: 'order' | 'payment' | 'rating' | 'system' | 'achievement';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClearAll
}) => {
  if (!isOpen) return null;

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'order':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'payment':
        return <DollarSign className="w-5 h-5 text-green-500" />;
      case 'rating':
        return <Star className="w-5 h-5 text-yellow-500" />;
      case 'system':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case 'achievement':
        return <CheckCircle className="w-5 h-5 text-purple-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getNotificationBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'order':
        return 'bg-blue-50 border-blue-200';
      case 'payment':
        return 'bg-green-50 border-green-200';
      case 'rating':
        return 'bg-yellow-50 border-yellow-200';
      case 'system':
        return 'bg-orange-50 border-orange-200';
      case 'achievement':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 max-h-[80vh] overflow-hidden shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            {unreadCount > 0 && (
              <p className="text-sm text-gray-600">{unreadCount} unread messages</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Action Buttons */}
        {notifications.length > 0 && (
          <div className="flex items-center justify-between p-3 border-b bg-gray-50">
            <button
              onClick={onMarkAllAsRead}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              disabled={unreadCount === 0}
            >
              Mark all as read
            </button>
            <button
              onClick={onClearAll}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div className="overflow-y-auto max-h-96">
          {notifications.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">No notifications</p>
              <p className="text-sm text-gray-400 mt-1">You're all caught up!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${getNotificationBgColor(notification.type)}`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${
                          !notification.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                        )}
                      </div>
                      <p className={`text-sm mt-1 ${
                        !notification.read ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                        {notification.message}
                      </p>
                      <div className="flex items-center mt-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{formatDistanceToNow(notification.timestamp, { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;