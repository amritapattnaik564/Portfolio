import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  darkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool setup
    const particles: Particle[] = [];
    const maxParticles = 60;

    const createParticle = (isInitial = false): Particle => {
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + 10,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.1, // Floating upwards
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        decay: Math.random() * 0.002 + 0.001
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic color matching
    const particleColor = darkMode ? '99, 102, 241' : '168, 85, 247'; // Indigo vs Purple

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
        ctx.shadowBlur = darkMode ? p.radius * 2 : 0;
        ctx.shadowColor = `rgba(${particleColor}, 0.5)`;
        ctx.fill();

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Boundaries check or recycling
        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[idx] = createParticle(false);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [darkMode]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};

export default ParticleBackground;
