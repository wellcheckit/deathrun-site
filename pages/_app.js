// pages/_app.js
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // Подключаем шрифты один раз для всего сайта
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Creepster&family=Cinzel:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div style={{
      backgroundColor: '#0c0414', // глубокая ночь
      color: '#e0c9a6',            // пергаментный оттенок
      fontFamily: '"Cinzel", serif', // основной шрифт -- элегантный и старинный
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Component {...pageProps} />
      
      {/* Глобальные CSS-анимации */}
      <style jsx global>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.9; }
          25% { opacity: 1; }
          50% { opacity: 0.85; }
          75% { opacity: 0.95; }
        }
        body {
          margin: 0;
          background: #0c0414 url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 Q50,0 80,20 T140,20 M20,80 Q50,60 80,80 T140,80 M20,140 Q50,120 80,140 T140,140' stroke='rgba(106, 44, 180, 0.05)' fill='none'/%3E%3C/svg%3E");
          background-size: 300px;
        }
      `}</style>
    </div>
  );
}