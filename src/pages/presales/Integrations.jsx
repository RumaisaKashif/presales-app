import React from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';

const Integrations = () => {
  return (
    <PresalesLayout pageTitle="Integrations">
      <Card>
        <h3 className="text-xl font-bold mb-4">Manage Integrations</h3>
        {/* Placeholder for integrations list */}
        <p className="text-gray-600">No active integrations.</p>
      </Card>
    </PresalesLayout>
  );
};

export default Integrations;
