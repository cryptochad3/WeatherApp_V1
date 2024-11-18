import * as Tabs from '@radix-ui/react-tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
];

const stats = [
  { label: 'Total Users', value: '12,345' },
  { label: 'Active Users', value: '8,234' },
  { label: 'Revenue', value: '$45,678' },
  { label: 'Growth', value: '+23%' },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-800 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Overview
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Tabs.Root defaultValue="overview">
        <Tabs.List className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <Tabs.Trigger
            value="overview"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white border-b-2 border-transparent data-[state=active]:border-blue-500"
          >
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="analytics"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white border-b-2 border-transparent data-[state=active]:border-blue-500"
          >
            Analytics
          </Tabs.Trigger>
          <Tabs.Trigger
            value="reports"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white border-b-2 border-transparent data-[state=active]:border-blue-500"
          >
            Reports
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="overview" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                      Activity {item}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Description of activity {item}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    2h ago
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="analytics">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Analytics Content
            </h3>
          </div>
        </Tabs.Content>

        <Tabs.Content value="reports">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Reports Content
            </h3>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
