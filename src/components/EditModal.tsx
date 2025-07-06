import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  title: string;
  fields: Array<{
    key: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
    value: string;
    options?: Array<{ value: string; label: string }>;
    required?: boolean;
  }>;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, title, fields }) => {
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.key]: field.value }), {})
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      if (field.required && !formData[field.key]?.trim()) {
        newErrors[field.key] = `${field.label} is required`;
      }
      
      if (field.type === 'email' && formData[field.key]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.key])) {
          newErrors[field.key] = 'Please enter a valid email';
        }
      }
      
      if (field.type === 'tel' && formData[field.key]) {
        const phoneRegex = /^[+]?[\d\s-()]+$/;
        if (!phoneRegex.test(formData[field.key])) {
          newErrors[field.key] = 'Please enter a valid phone number';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              {field.type === 'select' ? (
                <select
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors[field.key] ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors[field.key] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              ) : (
                <input
                  type={field.type}
                  value={formData[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors[field.key] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
              
              {errors[field.key] && (
                <p className="text-red-500 text-xs mt-1">{errors[field.key]}</p>
              )}
            </div>
          ))}
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;