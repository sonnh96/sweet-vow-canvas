import { useEffect, useState, useCallback } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'petal' | 'sakura' | 'rose';
}

interface Firework {
  id: number;
  x: number;
  y: number;
  particles: { angle: number; distance: number; color: string; size: number }[];
}

interface Bloom {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [blooms, setBlooms] = useState<Bloom[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 8,
      size: 10 + Math.random() * 18,
      type: ['petal', 'sakura', 'rose'][Math.floor(Math.random() * 3)] as Petal['type'],
    }));
    setPetals(newPetals);

    // Blooming flowers
    const newBlooms: Bloom[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 20 + Math.random() * 60,
      delay: i * 3 + Math.random() * 2,
      size: 30 + Math.random() * 40,
    }));
    setBlooms(newBlooms);
  }, []);

  // Fireworks
  const spawnFirework = useCallback(() => {
    const colors = [
      'hsl(340 60% 65%)',
      'hsl(340 50% 72%)',
      'hsl(340 40% 88%)',
      'hsl(30 80% 70%)',
      'hsl(50 80% 70%)',
      'hsl(340 70% 50%)',
    ];
    const fw: Firework = {
      id: Date.now() + Math.random(),
      x: 15 + Math.random() * 70,
      y: 10 + Math.random() * 40,
      particles: Array.from({ length: 12 }, (_, i) => ({
        angle: (i * 30) + Math.random() * 15,
        distance: 30 + Math.random() * 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 4,
      })),
    };
    setFireworks(prev => [...prev, fw]);
    setTimeout(() => {
      setFireworks(prev => prev.filter(f => f.id !== fw.id));
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(spawnFirework, 2500);
    spawnFirework();
    return () => clearInterval(interval);
  }, [spawnFirework]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* Falling petals */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-30px',
            animation: `petal-fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: 0,
          }}
        >
          {petal.type === 'sakura' ? (
            <svg width={petal.size} height={petal.size} viewBox="0 0 30 30" className="text-primary/50">
              {[0, 72, 144, 216, 288].map((rot) => (
                <ellipse key={rot} cx="15" cy="6" rx="4" ry="6" fill="currentColor"
                  transform={`rotate(${rot} 15 15)`} />
              ))}
              <circle cx="15" cy="15" r="3" fill="hsl(340 60% 55%)" opacity="0.8" />
            </svg>
          ) : petal.type === 'rose' ? (
            <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" className="text-primary/40">
              <path d="M12 2C10 5 7 7 5 10C3 13 4 17 7 19C9 21 11 22 12 22C13 22 15 21 17 19C20 17 21 13 19 10C17 7 14 5 12 2Z" fill="currentColor" />
              <path d="M12 6C11 8 9 10 8 12C7 14 8 16 10 17C11 18 12 18 12 18C12 18 13 18 14 17C16 16 17 14 16 12C15 10 13 8 12 6Z" fill="hsl(340 70% 60%)" opacity="0.6" />
            </svg>
          ) : (
            <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" className="text-blush">
              <path d="M12 2C8 6 4 10 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 10 16 6 12 2Z"
                fill="currentColor" opacity="0.6" />
            </svg>
          )}
        </div>
      ))}

      {/* Fireworks */}
      {fireworks.map((fw) => (
        <div key={fw.id} className="absolute" style={{ left: `${fw.x}%`, top: `${fw.y}%` }}>
          {/* Center flash */}
          <div
            className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'hsl(340 60% 65%)',
              animation: 'firework-flash 0.4s ease-out forwards',
            }}
          />
          {/* Particles */}
          {fw.particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                animation: 'firework-particle 1.5s ease-out forwards',
                '--fw-x': `${Math.cos((p.angle * Math.PI) / 180) * p.distance}px`,
                '--fw-y': `${Math.sin((p.angle * Math.PI) / 180) * p.distance}px`,
              } as React.CSSProperties}
            />
          ))}
          {/* Sparkle trails */}
          {fw.particles.filter((_, i) => i % 3 === 0).map((p, i) => (
            <div
              key={`trail-${i}`}
              className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                width: p.size * 0.5,
                height: p.size * 0.5,
                background: p.color,
                animation: 'firework-particle 1.8s ease-out 0.2s forwards',
                '--fw-x': `${Math.cos((p.angle * Math.PI) / 180) * p.distance * 0.6}px`,
                '--fw-y': `${Math.sin((p.angle * Math.PI) / 180) * p.distance * 0.6}px`,
                opacity: 0,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}

      {/* Blooming flowers */}
      {blooms.map((bloom) => (
        <div
          key={bloom.id}
          className="absolute"
          style={{
            left: `${bloom.x}%`,
            top: `${bloom.y}%`,
            animation: `bloom ${6}s ease-in-out infinite`,
            animationDelay: `${bloom.delay}s`,
          }}
        >
          <svg width={bloom.size} height={bloom.size} viewBox="0 0 60 60" className="text-primary/20">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((rot) => (
              <ellipse
                key={rot}
                cx="30" cy="12" rx="7" ry="14"
                fill="currentColor"
                transform={`rotate(${rot} 30 30)`}
                style={{
                  animation: `bloom-petal 6s ease-in-out infinite`,
                  animationDelay: `${bloom.delay + rot * 0.02}s`,
                  transformOrigin: '30px 30px',
                }}
              />
            ))}
            <circle cx="30" cy="30" r="6" fill="hsl(340 50% 72%)" opacity="0.4"
              style={{ animation: `bloom-center 6s ease-in-out infinite`, animationDelay: `${bloom.delay}s` }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
