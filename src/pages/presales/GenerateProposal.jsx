import React, { useState } from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const availableDocuments = [
  'Product Overview.pdf',
  'Security Whitepaper.pdf',
  'Case Study - Acme Corp.pdf',
  'Pricing Guide.xlsx',
  'Implementation Timeline.pptx',
];

const GenerateProposal = () => {
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [manualRequirements, setManualRequirements] = useState('');

  const handleDocSelection = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDocs((prev) => [...prev, value]);
    } else {
      setSelectedDocs((prev) => prev.filter((doc) => doc !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    // to be processed by the LLM with the selected documents as context.
    console.log('Selected Documents:', selectedDocs);
    console.log('Manual Requirements:', manualRequirements);
    alert('Proposal generation initiated! Check the console for the selected data.');
  };

  return (
    <PresalesLayout pageTitle="Generate Proposal">
      <form onSubmit={handleSubmit}>
        <Card>
          <h3 className="text-2xl font-bold mb-4">1. Select Context Documents</h3>
          <p className="text-gray-600 mb-6">Select the documents you want to use as context for generating this proposal.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto p-4 border rounded-lg">
            {availableDocuments.map((doc) => (
              <div key={doc} className="flex items-center">
                <input
                  type="checkbox"
                  id={doc}
                  value={doc}
                  onChange={handleDocSelection}
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor={doc} className="ml-3 text-gray-700">
                  {doc}
                </label>
              </div>
            ))}
          </div>
        </Card>
        <Card className="mt-6">
          <h3 className="text-2xl font-bold mb-4">2. Add Client-Side Requirements</h3>
          <p className="text-gray-600 mb-6">Manually enter any specific client requirements or notes to be included in the proposal.</p>
          <textarea
            rows="8"
            value={manualRequirements}
            onChange={(e) => setManualRequirements(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="e.g., The client requires integration with their existing CRM. They have a budget of $50,000..."
          ></textarea>
        </Card>

        <div className="mt-8 text-center">
          <Button type="submit" variant="primary">Generate New Proposal</Button>
        </div>
      </form>
    </PresalesLayout>
  );
};

export default GenerateProposal;
