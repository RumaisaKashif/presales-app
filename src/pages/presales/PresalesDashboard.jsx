import React from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';

const PresalesDashboard = () => {
  return (
    <PresalesLayout pageTitle="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-bold mb-2">Recent Proposals</h3>
          {/* Placeholder for recent proposals list */}
          <p className="text-gray-600">No recent proposals.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold mb-2">Client Submissions</h3>
          {/* Placeholder for client submissions */}
          <p className="text-gray-600">No new submissions.</p>
        </Card>
        <Card>
          <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
          {/* Placeholder for quick actions */}
          <p className="text-gray-600">No quick actions available.</p>
        </Card>
      </div>
    </PresalesLayout>
  );
};

export default PresalesDashboard;
