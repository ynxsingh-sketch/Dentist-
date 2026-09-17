import { useEffect, useRef } from 'react';

export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Subtle floating digital particles
    const particleCount = Math.min(35, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    let beamAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw very subtle moving light beam in upper quadrant
      beamAngle += 0.003;
      const beamX = width * 0.5 + Math.sin(beamAngle) * (width * 0.25);
      const beamY = height * 0.2 + Math.cos(beamAngle * 0.7) * (height * 0.1);

      const beamGrad = ctx.createRadialGradient(beamX, beamY, 10, beamX, beamY, width * 0.5);
      beamGrad.addColorStop(0, 'rgba(6, 182, 212, 0.06)');
      beamGrad.addColorStop(0.5, 'rgba(14, 165, 233, 0.025)');
      beamGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, height);

      // Render subtle particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Navy Base & Ambient Vignette */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />

      {/* Futuristic Fine Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

      {/* Top Ambient Cyan Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-70" />
    </div>
  );
}
