import React from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

const DocumentationRepository = () => {
  return (
    <PresalesLayout pageTitle="Document Repository">
      <div className="flex justify-center mb-4">
        <Link to="/presales/uploaddocument">
          <Button>Upload Document</Button>
        </Link>
      </div>
      <Card>
        <h3 className="text-xl font-bold mb-4">Available Documents</h3>
        {/* Placeholder for document list */}
        <p className="text-gray-600">No documents found. Start by uploading one.</p>
      </Card>
    </PresalesLayout>
  );
};

export default DocumentationRepository;
