import React from 'react';
import { Users, MessageSquare, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '2,543', icon: Users, change: '+12.5%' },
  { label: 'Active Conversations', value: '89', icon: MessageSquare, change: '+23.1%' },
  { label: 'Revenue', value: '$45,233', icon: TrendingUp, change: '+8.3%' },
  { label: 'Avg. Response Time', value: '2.4h', icon: Clock, change: '-18.2%' }
];

const Overview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.change.startsWith('+') ? 'bg-green-50' : 'bg-red-50'}`}>
                <stat.icon className={`w-6 h-6 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`} />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-gray-500">{i} hour{i !== 1 ? 's' : ''} ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Add New Agent', 'View Reports', 'Send Message', 'Update Settings'].map((action) => (
              <button
                key={action}
                className="p-4 text-left rounded-lg border border-gray-200 hover:border-primary hover:bg-secondary transition-colors"
              >
                <p className="font-medium text-sm">{action}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;