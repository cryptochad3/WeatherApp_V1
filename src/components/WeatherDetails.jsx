import { Droplets, Wind, Thermometer, Compass } from 'lucide-react';

export default function WeatherDetails({ weather }) {
  const details = [
    {
      icon: Droplets,
      label: 'Humidity',
      value: `${weather.main.humidity}%`
    },
    {
      icon: Wind,
      label: 'Wind Speed',
      value: `${Math.round(weather.wind.speed)} m/s`
    },
    {
      icon: Thermometer,
      label: 'Feels Like',
      value: `${Math.round(weather.main.feels_like)}°C`
    },
    {
      icon: Compass,
      label: 'Pressure',
      value: `${weather.main.pressure} hPa`
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {details.map((detail, index) => (
        <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-4">
          <div className="flex items-center space-x-3">
            <detail.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{detail.label}</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{detail.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
