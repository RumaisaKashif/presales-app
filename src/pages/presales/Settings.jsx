import React from 'react';
import PresalesLayout from '../../components/layout/PresalesLayout';
import Card from '../../components/common/Card';

const Settings = () => {
  return (
    <PresalesLayout pageTitle="Settings">
      <Card>
        <h3 className="text-xl font-bold mb-4">Application Settings</h3>
        {/* Placeholder for settings options */}
        <p className="text-gray-600">No settings to configure at this time.</p>
      </Card>
    </PresalesLayout>
  );
};

export default Settings;
