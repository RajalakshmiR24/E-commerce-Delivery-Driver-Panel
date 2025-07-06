import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Phone, Mail, Car, Star, Shield, LogOut, Edit, Camera, CheckCircle, MapPin, Calendar, CreditCard } from 'lucide-react';
import EditModal from '../components/EditModal';
import DocumentUpload from '../components/DocumentUpload';

const Profile: React.FC = () => {
  const { driver, logout, updateDriver } = useAuth();
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

  const [documents, setDocuments] = useState([
    { id: 'aadhaar', name: 'Aadhaar Card', type: 'Identity Proof', status: 'verified' as const },
    { id: 'pan', name: 'PAN Card', type: 'Tax Document', status: 'verified' as const },
    { id: 'license', name: 'Driving License', type: 'License', status: 'uploaded' as const },
    { id: 'rc', name: 'Vehicle Registration', type: 'Vehicle Document', status: 'pending' as const },
    { id: 'insurance', name: 'Vehicle Insurance', type: 'Insurance', status: 'rejected' as const, rejectionReason: 'Document expired. Please upload current insurance certificate.' },
    { id: 'bank', name: 'Bank Statement', type: 'Financial Document', status: 'pending' as const },
  ]);

  const [activeTab, setActiveTab] = useState<'personal' | 'vehicle' | 'documents' | 'bank'>('personal');

  const handleLogout = () => {
    logout();
  };

  const openEditModal = (type: string, title: string, fields: any[]) => {
    setEditModal({ isOpen: true, type, title, fields });
  };

  const handleSave = (data: any) => {
    updateDriver(data);
  };

  const handleDocumentUpload = (documentId: string, file: File) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === documentId 
        ? { ...doc, status: 'uploaded' as const, file }
        : doc
    ));
  };

  const handleDocumentRemove = (documentId: string) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === documentId 
        ? { ...doc, status: 'pending' as const, file: undefined }
        : doc
    ));
  };

  const personalFields = [
    { key: 'name', label: 'Full Name', type: 'text' as const, value: driver?.name || '', required: true },
    { key: 'email', label: 'Email', type: 'email' as const, value: driver?.email || '', required: true },
    { key: 'phone', label: 'Phone', type: 'tel' as const, value: driver?.phone || '', required: true },
  ];

  const vehicleFields = [
    { 
      key: 'vehicleType', 
      label: 'Vehicle Type', 
      type: 'select' as const, 
      value: driver?.vehicleType || '', 
      required: true,
      options: [
        { value: 'bike', label: 'Bike' },
        { value: 'car', label: 'Car' },
        { value: 'bicycle', label: 'Bicycle' }
      ]
    },
    { key: 'vehicleNumber', label: 'Vehicle Number', type: 'text' as const, value: driver?.vehicleNumber || '', required: true },
  ];

  const bankFields = [
    { key: 'bankName', label: 'Bank Name', type: 'text' as const, value: '', required: true },
    { key: 'accountNumber', label: 'Account Number', type: 'text' as const, value: '', required: true },
    { key: 'ifscCode', label: 'IFSC Code', type: 'text' as const, value: '', required: true },
    { key: 'accountHolderName', label: 'Account Holder Name', type: 'text' as const, value: driver?.name || '', required: true },
  ];

  const tabs = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'vehicle', label: 'Vehicle', icon: Car },
    { id: 'documents', label: 'Documents', icon: Shield },
    { id: 'bank', label: 'Bank Details', icon: CreditCard },
  ];

  const getVerificationStatus = () => {
    const verifiedDocs = documents.filter(doc => doc.status === 'verified').length;
    const totalDocs = documents.length;
    const percentage = (verifiedDocs / totalDocs) * 100;
    
    return {
      percentage,
      status: percentage === 100 ? 'Complete' : percentage >= 50 ? 'In Progress' : 'Pending'
    };
  };

  const verification = getVerificationStatus();

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Profile</h1>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Logout</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={driver?.photo || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'}
              alt="Driver"
              className="w-20 h-20 rounded-full border-4 border-gray-200"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{driver?.name || 'Driver'}</h2>
            <p className="text-gray-600">{driver?.email}</p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">{driver?.rating || 0}/5</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">{driver?.totalDeliveries || 0} deliveries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Status */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Account Verification</h3>
              <p className="text-sm text-gray-600">{verification.percentage.toFixed(0)}% Complete</p>
            </div>
          </div>
          <span className={`px-3 py-1 text-sm rounded-full ${
            verification.status === 'Complete' 
              ? 'bg-green-100 text-green-800' 
              : verification.status === 'In Progress'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {verification.status}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${verification.percentage}%` }}
          ></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Personal Information</h3>
                <button
                  onClick={() => openEditModal('personal', 'Edit Personal Information', personalFields)}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Full Name</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{driver?.name || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Email</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{driver?.email || 'N/A'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Phone</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{driver?.phone || 'N/A'}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vehicle' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Vehicle Details</h3>
                <button
                  onClick={() => openEditModal('vehicle', 'Edit Vehicle Details', vehicleFields)}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Vehicle Type</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 capitalize">
                    {driver?.vehicleType || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Vehicle Number</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{driver?.vehicleNumber || 'N/A'}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Document Verification</h3>
              <DocumentUpload
                documents={documents}
                onUpload={handleDocumentUpload}
                onRemove={handleDocumentRemove}
              />
            </div>
          )}

          {activeTab === 'bank' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Bank Account Details</h3>
                <button
                  onClick={() => openEditModal('bank', 'Edit Bank Details', bankFields)}
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-4">
                  Add your bank account details to receive payments directly to your account.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Bank Name</span>
                    <span className="text-sm font-medium text-gray-900">Not Added</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Account Number</span>
                    <span className="text-sm font-medium text-gray-900">Not Added</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">IFSC Code</span>
                    <span className="text-sm font-medium text-gray-900">Not Added</span>
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default Profile;