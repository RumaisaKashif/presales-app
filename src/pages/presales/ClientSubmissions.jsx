import React from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';

const ClientSubmissions = () => {
  return (
    <PresalesLayout pageTitle="Client Submissions">
      <Card>
        <h3 className="text-xl font-bold mb-4">Recent Submissions</h3>
        {/* Placeholder for submissions list */}
        <p className="text-gray-600">No new client submissions.</p>
      </Card>
    </PresalesLayout>
  );
};

export default ClientSubmissions;
