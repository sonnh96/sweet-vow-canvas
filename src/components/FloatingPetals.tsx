import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      size: 10 + Math.random() * 15,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute opacity-60"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            animation: `petal-fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-blush"
          >
            <path
              d="M12 2C8 6 4 10 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 10 16 6 12 2Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
