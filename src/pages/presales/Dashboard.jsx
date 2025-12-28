import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Projects</h3>
          <p className="text-3xl font-bold text-purple-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Pending Tasks</h3>
          <p className="text-3xl font-bold text-yellow-600">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Completed Deals</h3>
          <p className="text-3xl font-bold text-green-600">8</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul>
          {/*Placeholders*/}
          <li className="border-b py-3">New proposal sent to BOP</li>
          <li className="border-b py-3">Follow-up meeting scheduled with Al Baraka</li>
          <li className="py-3">Contract signed with Teminos</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
