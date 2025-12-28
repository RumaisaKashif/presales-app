import React from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Dropdown from '../../components/common/Dropdown';

const UploadDocument = () => {
  // Placeholder for form handling logic

  return (
    <PresalesLayout pageTitle="Upload Document">
      <Card className="max-w-2xl mx-auto">
        <form>
          <Input
            label="Document Title"
            name="title"
            placeholder="e.g., Q1 Product Update"
          />
          <Dropdown
            label="Category"
            name="category"
            options={[
              { value: 'technical', label: 'Technical Specification' },
              { value: 'marketing', label: 'Marketing Material' },
              { value: 'legal', label: 'Legal Document' },
            ]}
          />
          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">Upload File</label>
            <input
              id="file"
              name="file"
              type="file"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Upload</Button>
          </div>
        </form>
      </Card>
    </PresalesLayout>
  );
};

export default UploadDocument;
