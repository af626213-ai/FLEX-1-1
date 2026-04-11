import React from 'react';

export const Confetti = () => {
  const particles = Array.from({ length: 30 });
  const colors = ['#6366f1', '#a855f7', '#ec4899', '#22c55e', '#f59e0b'];

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      {particles.map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            bottom: '-10px',
            left: '50%', // 画面中央下から
            borderRadius: '2px',
            animation: `cracker ${1 + Math.random()}s ease-out forwards`,
            // 粒子ごとに飛び出す方向をランダム化
            '--x-move': `${(Math.random() - 0.5) * 800}px`,
            '--y-move': `${-500 - Math.random() * 300}px`
          } as any}
        />
      ))}
      <style>{`
        @keyframes cracker {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--x-move), var(--y-move)) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
