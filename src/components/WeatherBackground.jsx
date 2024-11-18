import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WeatherBackground({ weatherCode }) {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const particlesRef = useRef();

  useEffect(() => {
    // Initialize scene
    sceneRef.current = new THREE.Scene();
    
    // Initialize camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // Initialize renderer
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create particles
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Velocity
      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = -Math.random() * 0.02 - 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.02;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    // Create particle material based on weather
    let particleMaterial;
    if (weatherCode >= 200 && weatherCode < 300) {
      // Thunderstorm
      particleMaterial = new THREE.PointsMaterial({
        color: 0x4a5568,
        size: 0.05,
        blending: THREE.AdditiveBlending,
      });
    } else if (weatherCode >= 300 && weatherCode < 600) {
      // Rain
      particleMaterial = new THREE.PointsMaterial({
        color: 0x63b3ed,
        size: 0.03,
        blending: THREE.AdditiveBlending,
      });
    } else if (weatherCode >= 600 && weatherCode < 700) {
      // Snow
      particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        blending: THREE.AdditiveBlending,
      });
    } else {
      // Clear/Clouds
      particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.04,
        blending: THREE.AdditiveBlending,
      });
    }

    particlesRef.current = new THREE.Points(particles, particleMaterial);
    sceneRef.current.add(particlesRef.current);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particlesRef.current.geometry.attributes.position.array;
      const velocities = particlesRef.current.geometry.attributes.velocity.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Reset particles that fall below the view
        if (positions[i + 1] < -5) {
          positions[i + 1] = 5;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(rendererRef.current.domElement);
    };
  }, [weatherCode]);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}
