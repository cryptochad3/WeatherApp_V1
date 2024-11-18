import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherChart from './components/WeatherChart';
import WeatherDetails from './components/WeatherDetails';
import Settings from './components/Settings';
import { Moon, Sun, Settings as SettingsIcon } from 'lucide-react';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    // Fetch weather for default location on mount
    fetchWeather('59405');
  }, []);

  const fetchWeather = async (zipcode) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Location not found');
      }
      
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div id="canvas-container" className="fixed inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100">
            Weather Dashboard
          </h1>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-lg bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
            >
              <SettingsIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-blue-100 dark:bg-gray-700 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SearchBox onSearch={fetchWeather} defaultZip="59405" />
          
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 dark:border-blue-100 mx-auto"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 px-4 py-3 rounded mt-4">
              {error}
            </div>
          )}
          
          {weather && !loading && (
            <div className="space-y-6">
              <WeatherDisplay weather={weather} />
              <WeatherChart weather={weather} />
              <WeatherDetails weather={weather} />
            </div>
          )}
        </div>
      </div>

      <Settings 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        isDark={isDark}
        onDarkModeChange={setIsDark}
      />
    </div>
  );
}
