import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Пример SVG-анимации
  const FloatingIcon = () => (
    <div
      style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        fontSize: '3rem',
        opacity: 0.2,
        animation: 'float 6s ease-in-out infinite',
        transform: `translateY(${scrollY * 0.05}px)`,
        pointerEvents: 'none',
      }}
    >
      🧨
    </div>
  );

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        background: darkMode ? '#0f0f0f' : '#f8f8f8',
        color: darkMode ? '#eee' : '#111',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.5s ease, color 0.5s ease',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
      }}
    >
      {/* SVG Анимация в фоне */}
      <svg
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.03,
        }}
      >
        <path
          d="M20,50 Q50,10 80,50 T100,90 L0,90 Z"
          fill="none"
          stroke={darkMode ? '#ff2a2a' : '#ff5555'}
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>

      {/* Плавающий элемент */}
      <FloatingIcon />

      {/* Переключатель темы */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          color: darkMode ? '#fff' : '#000',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
        }}
        aria-label="Переключить тему"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Заголовок */}
      <h1
        ref={heroRef}
        style={{
          fontSize: '3.2rem',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #ff2a2a, #ff5555)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
          transitionDelay: '0.1s',
          textShadow: darkMode ? '0 0 10px rgba(255, 42, 42, 0.5)' : 'none',
        }}
      >
        DEATHRUN
      </h1>

      {/* Подзаголовок */}
      <p
        style={{
          color: '#aaa',
          fontSize: '1.2rem',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(10px)',
          transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
          transitionDelay: '0.2s',
        }}
      >
        Чистый, быстрый, без компромиссов.<br />
        Беги. Умирай. Повторяй.
      </p>

      {/* IP с анимацией при наведении */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '0.8rem 1.6rem',
          background: darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          borderRadius: '8px',
          fontSize: '1.2rem',
          fontFamily: 'monospace',
          letterSpacing: '1px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(10px)',
          transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
          transitionDelay: '0.3s',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = darkMode ? 'rgba(255, 42, 42, 0.1)' : 'rgba(255, 42, 42, 0.1)';
          e.target.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        dr.yourserver.com:27015
      </div>

      {/* Кнопка с улучшенной анимацией */}
      <a
        href="steam://connect/dr.yourserver.com:27015"
        style={{
          display: 'inline-block',
          padding: '0.9rem 2.4rem',
          background: '#ff2a2a',
          color: '#fff',
          borderRadius: '6px',
          fontWeight: 600,
          fontSize: '1.1rem',
          transition: 'all 0.25s ease',
          boxShadow: '0 4px 12px rgba(255, 42, 42, 0.25)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(10px)',
          transitionDelay: '0.4s',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#ff0000';
          e.target.style.transform = 'translateY(-3px) scale(1.05)';
          e.target.style.boxShadow = '0 6px 16px rgba(255, 42, 42, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#ff2a2a';
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(255, 42, 42, 0.25)';
        }}
      >
        Подключиться
      </a>

      {/* Навигация с анимацией */}
      <nav
        style={{
          display: 'flex',
          gap: '1.8rem',
          marginTop: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          fontSize: '0.95rem',
          color: '#777',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(10px)',
          transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
          transitionDelay: '0.5s',
        }}
      >
        {['Правила', 'Статистика', 'Карты', 'Команда'].map((item, index) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              transition: 'color 0.3s ease, transform 0.2s ease',
              color: darkMode ? '#777' : '#555',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = darkMode ? '#777' : '#555';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          width: '100%',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#555',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.7s ease-out',
          transitionDelay: '0.7s',
        }}
      >
        © 2025 • Deathrun Server
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        html, body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background: #0f0f0f;
          color: #eee;
          transition: background 0.5s ease, color 0.5s ease;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:focus {
          outline: 2px solid #ff2a2a;
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}