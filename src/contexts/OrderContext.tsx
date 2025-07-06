import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Order } from '../types';

interface OrderContextType {
  availableOrders: Order[];
  currentOrder: Order | null;
  acceptOrder: (orderId: string) => void;
  cancelOrder: (orderId: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  verifyPickup: (orderId: string, code: string) => boolean;
  verifyDelivery: (orderId: string, code: string) => boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [availableOrders, setAvailableOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Mock available orders
    const mockOrders: Order[] = [
      {
        id: '1',
        customerId: 'c1',
        customerName: 'Priya Sharma',
        customerPhone: '+91 9876543210',
        pickupLocation: {
          address: 'Fresh Market, MG Road, Bangalore',
          coordinates: [77.5946, 12.9716]
        },
        dropLocation: {
          address: 'Apartment 304, Brigade Gateway, Bangalore',
          coordinates: [77.6148, 12.9698]
        },
        items: [
          { name: 'Groceries', quantity: 1, price: 1250 }
        ],
        totalAmount: 1250,
        deliveryFee: 45,
        distance: 3.2,
        estimatedTime: 25,
        status: 'available',
        pickupCode: 'PICK123',
        deliveryCode: 'DROP456',
        createdAt: new Date()
      },
      {
        id: '2',
        customerId: 'c2',
        customerName: 'Rahul Kumar',
        customerPhone: '+91 9876543211',
        pickupLocation: {
          address: 'Spice Garden Restaurant, Indiranagar',
          coordinates: [77.6412, 12.9719]
        },
        dropLocation: {
          address: 'Tech Park, Whitefield, Bangalore',
          coordinates: [77.7499, 12.9698]
        },
        items: [
          { name: 'Biryani', quantity: 2, price: 680 }
        ],
        totalAmount: 680,
        deliveryFee: 35,
        distance: 2.8,
        estimatedTime: 20,
        status: 'available',
        pickupCode: 'PICK789',
        deliveryCode: 'DROP012',
        createdAt: new Date()
      }
    ];
    
    setAvailableOrders(mockOrders);
  }, []);

  const acceptOrder = (orderId: string) => {
    const order = availableOrders.find(o => o.id === orderId);
    if (order) {
      const updatedOrder = { ...order, status: 'accepted' as const, acceptedAt: new Date() };
      setCurrentOrder(updatedOrder);
      setAvailableOrders(prev => prev.filter(o => o.id !== orderId));
    }
  };

  const cancelOrder = (orderId: string) => {
    if (currentOrder?.id === orderId) {
      const cancelledOrder = { ...currentOrder, status: 'available' as const };
      setAvailableOrders(prev => [...prev, cancelledOrder]);
      setCurrentOrder(null);
    }
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    if (currentOrder?.id === orderId) {
      const updatedOrder = { ...currentOrder, status };
      if (status === 'picked_up') {
        updatedOrder.pickedUpAt = new Date();
      } else if (status === 'delivered') {
        updatedOrder.deliveredAt = new Date();
      }
      setCurrentOrder(updatedOrder);
    }
  };

  const verifyPickup = (orderId: string, code: string) => {
    const order = currentOrder;
    if (order && order.id === orderId && order.pickupCode === code) {
      updateOrderStatus(orderId, 'picked_up');
      return true;
    }
    return false;
  };

  const verifyDelivery = (orderId: string, code: string) => {
    const order = currentOrder;
    if (order && order.id === orderId && order.deliveryCode === code) {
      updateOrderStatus(orderId, 'delivered');
      return true;
    }
    return false;
  };

  return (
    <OrderContext.Provider value={{
      availableOrders,
      currentOrder,
      acceptOrder,
      cancelOrder,
      updateOrderStatus,
      verifyPickup,
      verifyDelivery
    }}>
      {children}
    </OrderContext.Provider>
  );
};