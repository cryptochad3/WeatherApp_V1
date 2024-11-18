import { useEffect, useRef } from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';

const getWeatherIcon = (weatherCode) => {
  if (weatherCode >= 200 && weatherCode < 300) return CloudLightning;
  if (weatherCode >= 300 && weatherCode < 600) return CloudRain;
  if (weatherCode >= 600 && weatherCode < 700) return CloudSnow;
  if (weatherCode >= 700 && weatherCode < 800) return Cloud;
  if (weatherCode === 800) return Sun;
  return Cloud;
};

const createParticles = (canvas, weatherCode) => {
  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 100;

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create particles based on weather
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5
    });
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      
      if (weatherCode >= 200 && weatherCode < 300) {
        // Thunderstorm
        ctx.fillStyle = `rgba(255, 255, 0, ${particle.opacity})`;
      } else if (weatherCode >= 300 && weatherCode < 600) {
        // Rain
        ctx.fillStyle = `rgba(100, 149, 237, ${particle.opacity})`;
      } else if (weatherCode >= 600 && weatherCode < 700) {
        // Snow
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      } else {
        // Clear/Clouds
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      }
      
      ctx.fill();
      
      // Update position
      particle.y += particle.speed;
      
      // Reset position if particle goes off screen
      if (particle.y > canvas.height) {
        particle.y = -10;
        particle.x = Math.random() * canvas.width;
      }
    });
    
    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener('resize', resizeCanvas);
  };
};

export default function WeatherDisplay({ weather }) {
  const WeatherIcon = getWeatherIcon(weather.weather[0].id);
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    
    const container = document.getElementById('canvas-container');
    container.innerHTML = '';
    container.appendChild(canvas);
    
    const cleanup = createParticles(canvas, weather.weather[0].id);
    
    return () => {
      cleanup();
      container.innerHTML = '';
    };
  }, [weather.weather[0].id]);
  
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {weather.name}
        </h2>
        <WeatherIcon className="h-24 w-24 mx-auto text-blue-600 dark:text-blue-400 my-4" />
        <p className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
          {Math.round(weather.main.temp)}°C
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300 capitalize">
          {weather.weather[0].description}
        </p>
      </div>
    </div>
  );
}
