export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  rating: number;
  totalDeliveries: number;
  isOnline: boolean;
  vehicleType: 'bike' | 'car' | 'bicycle';
  vehicleNumber: string;
  kycStatus: 'pending' | 'verified' | 'rejected';
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  pickupLocation: {
    address: string;
    coordinates: [number, number];
  };
  dropLocation: {
    address: string;
    coordinates: [number, number];
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  deliveryFee: number;
  distance: number;
  estimatedTime: number;
  status: 'available' | 'accepted' | 'picked_up' | 'in_transit' | 'delivered' | 'cancelled';
  pickupCode: string;
  deliveryCode: string;
  createdAt: Date;
  acceptedAt?: Date;
  pickedUpAt?: Date;
  deliveredAt?: Date;
}

export interface Earnings {
  daily: number;
  weekly: number;
  monthly: number;
  total: number;
  todayOrders: number;
  weeklyOrders: number;
  monthlyOrders: number;
}

export interface Transaction {
  id: string;
  orderId: string;
  amount: number;
  type: 'delivery_fee' | 'bonus' | 'penalty' | 'payout';
  status: 'pending' | 'completed' | 'failed';
  date: Date;
  description: string;
}