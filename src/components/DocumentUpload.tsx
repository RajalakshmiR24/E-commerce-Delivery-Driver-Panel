import React, { useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle, FileText, Camera } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  status: 'pending' | 'uploaded' | 'verified' | 'rejected';
  file?: File;
  url?: string;
  rejectionReason?: string;
}

interface DocumentUploadProps {
  documents: Document[];
  onUpload: (documentId: string, file: File) => void;
  onRemove: (documentId: string) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ documents, onUpload, onRemove }) => {
  const [draggedOver, setDraggedOver] = useState<string | null>(null);

  const handleFileSelect = (documentId: string, file: File) => {
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert('File size should be less than 5MB');
      return;
    }
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload only JPG, PNG, or PDF files');
      return;
    }
    
    onUpload(documentId, file);
  };

  const handleDrop = (e: React.DragEvent, documentId: string) => {
    e.preventDefault();
    setDraggedOver(null);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(documentId, files[0]);
    }
  };

  const getStatusIcon = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'uploaded':
        return <FileText className="w-5 h-5 text-blue-500" />;
      default:
        return <Upload className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return 'Verified';
      case 'rejected':
        return 'Rejected';
      case 'uploaded':
        return 'Under Review';
      default:
        return 'Upload Required';
    }
  };

  const getStatusColor = (status: Document['status']) => {
    switch (status) {
      case 'verified':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'rejected':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'uploaded':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              {getStatusIcon(doc.status)}
              <div>
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.type}</p>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(doc.status)}`}>
              {getStatusText(doc.status)}
            </span>
          </div>

          {doc.status === 'rejected' && doc.rejectionReason && (
            <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-700">
                <strong>Rejection Reason:</strong> {doc.rejectionReason}
              </p>
            </div>
          )}

          {doc.status === 'pending' || doc.status === 'rejected' ? (
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                draggedOver === doc.id
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDraggedOver(doc.id);
              }}
              onDragLeave={() => setDraggedOver(null)}
              onDrop={(e) => handleDrop(e, doc.id)}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Drag and drop your file here, or{' '}
                <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(doc.id, file);
                    }}
                  />
                </label>
              </p>
              <p className="text-xs text-gray-500">
                Supports: JPG, PNG, PDF (Max 5MB)
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-700">
                  {doc.file?.name || 'Document uploaded'}
                </span>
              </div>
              {doc.status !== 'verified' && (
                <button
                  onClick={() => onRemove(doc.id)}
                  className="p-1 text-gray-400 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentUpload;