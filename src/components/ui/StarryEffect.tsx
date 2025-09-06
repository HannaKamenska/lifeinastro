import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number; // координата X в процентах
  y: number; // координата Y в процентах
}

const StarryEffect = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      setStars((prev) => [...prev, { id, x, y }]);

      // удаляем звёздочку через 2 секунды (длительность анимации)
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id));
      }, 2000);
    }, 5000); // каждые 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="twinkle-star pointer-events-none"
          style={{ top: `${star.y}%`, left: `${star.x}%` }}
        />
      ))}
    </>
  );
};

export default StarryEffect;
