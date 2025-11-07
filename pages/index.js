import { useState, useEffect } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto',
      opacity: loaded ? 1 : 0,
      transform: loaded ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    }}>
      {/* Заголовок */}
      <h1 style={{
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
      }}>
        DEATHRUN
      </h1>

      {/* Подзаголовок */}
      <p style={{
        color: '#aaa',
        fontSize: '1.2rem',
        marginBottom: '2.5rem',
        lineHeight: 1.6,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(10px)',
        transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
        transitionDelay: '0.2s',
      }}>
        Чистый, быстрый, без компромиссов.<br />
        Беги. Умирай. Повторяй.
      </p>

      {/* IP */}
      <div style={{
        marginBottom: '2rem',
        padding: '0.8rem 1.6rem',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '8px',
        fontSize: '1.2rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(10px)',
        transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
        transitionDelay: '0.3s',
      }}>
        dr.yourserver.com:27015
      </div>

      {/* Кнопка */}
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
          transition: 'background 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease',
          boxShadow: '0 4px 12px rgba(255, 42, 42, 0.25)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(10px)',
          transitionDelay: '0.4s',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#ff0000';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 16px rgba(255, 42, 42, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#ff2a2a';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(255, 42, 42, 0.25)';
        }}
      >
        Подключиться
      </a>

      {/* Навигация */}
      <nav style={{
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
      }}>
        <a href="/rules" style={{ transition: 'color 0.25s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#777'}>
          Правила
        </a>
        <a href="/stats" style={{ transition: 'color 0.25s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#777'}>
          Статистика
        </a>
        <a href="/maps" style={{ transition: 'color 0.25s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#777'}>
          Карты
        </a>
        <a href="/staff" style={{ transition: 'color 0.25s ease' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#777'}>
          Команда
        </a>
      </nav>

      {/* Footer */}
      <footer style={{
        position: 'absolute',
        bottom: '1.5rem',
        width: '100%',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#555',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.7s ease-out',
        transitionDelay: '0.7s',
      }}>
        © 2025 • Deathrun Server
      </footer>
    </div>
  );
}