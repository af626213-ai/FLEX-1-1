// Propsに rate を追加
export const ListeningStep: React.FC<{ script: string; rate: number; onNext: () => void }> = ({ script, rate, onNext }) => {
  // ... (中略)
  const handlePlay = () => {
    const u = new SpeechSynthesisUtterance(script);
    u.lang = 'en-US';
    u.rate = rate; // ここで適用！
    window.speechSynthesis.speak(u);
  };
  // ...
};
