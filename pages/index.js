// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
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
      margin: '0 auto'
    }}>
      {/* Заголовок */}
      <h1 style={{
        fontSize: '3.2rem',
        fontWeight: 700,
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #ff2a2a, #ff5555)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        DEATHRUN
      </h1>

      {/* Подзаголовок */}
      <p style={{
        color: '#aaa',
        fontSize: '1.2rem',
        marginBottom: '2.5rem',
        lineHeight: 1.6
      }}>
        Чистый, быстрый, без компромиссов.  
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
        letterSpacing: '1px'
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
          transition: 'background 0.25s ease, transform 0.15s ease',
          boxShadow: '0 4px 12px rgba(255, 42, 42, 0.25)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#ff0000';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#ff2a2a';
          e.target.style.transform = 'translateY(0)';
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
        color: '#777'
      }}>
        <a href="/rules">Правила</a>
        <a href="/stats">Статистика</a>
        <a href="/maps">Карты</a>
        <a href="/staff">Команда</a>
      </nav>

      {/* Footer */}
      <footer style={{
        position: 'absolute',
        bottom: '1.5rem',
        width: '100%',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#555'
      }}>
        © 2025 • Deathrun Server
      </footer>
    </div>
  );
}