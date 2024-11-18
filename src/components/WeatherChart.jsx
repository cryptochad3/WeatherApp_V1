import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WeatherChart({ weather }) {
  const data = [
    { time: '6am', temp: weather.main.temp - 2 },
    { time: '9am', temp: weather.main.temp - 1 },
    { time: '12pm', temp: weather.main.temp },
    { time: '3pm', temp: weather.main.temp + 1 },
    { time: '6pm', temp: weather.main.temp - 0.5 },
    { time: '9pm', temp: weather.main.temp - 1.5 },
  ];

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Temperature Trend
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="time" 
              stroke="#374151"
              tick={{ fill: '#374151' }}
            />
            <YAxis 
              stroke="#374151"
              tick={{ fill: '#374151' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#F3F4F6'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: '#3B82F6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
