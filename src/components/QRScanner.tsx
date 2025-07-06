import React, { useState } from 'react';
import { QrCode, X } from 'lucide-react';

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (code: string) => void;
  title: string;
}

const QRScanner: React.FC<QRScannerProps> = ({ isOpen, onClose, onScan, title }) => {
  const [manualCode, setManualCode] = useState('');

  if (!isOpen) return null;

  const handleManualSubmit = () => {
    if (manualCode.trim()) {
      onScan(manualCode.trim());
      setManualCode('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center">
            <div className="text-center">
              <QrCode className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-sm text-gray-600">
                QR Scanner would be implemented here
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or enter manually</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                placeholder="Enter verification code"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleManualSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;