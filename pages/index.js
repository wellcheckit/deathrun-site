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
      padding: '1.5rem',
      textAlign: 'center',
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Мерцающая свеча */}
      <div style={{
        marginBottom: '1.2rem',
        fontSize: '2.2rem',
        animation: 'flicker 3s infinite alternate',
        textShadow: '0 0 12px #d4af37'
      }}>
        🕯️
      </div>

      {/* Заголовок */}
      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: 'normal',
        marginBottom: '1.2rem',
        fontFamily: '"Creepster", cursive',
        color: '#d4af37', // золотой
        textShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
      }}>
        DEATHRUN
      </h1>

      {/* Подзаголовок */}
      <p style={{
        fontSize: '1.3rem',
        marginBottom: '2rem',
        color: '#c7a2ff', // фиолетовый
        opacity: 0.9
      }}>
        Ты не бегун. Ты -- приманка для ловушек.
      </p>

      {/* IP */}
      <div style={{
        marginBottom: '2rem',
        padding: '0.7rem 1.4rem',
        background: 'rgba(20, 8, 40, 0.6)',
        border: '1px solid #8a2be2',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '1.15rem'
      }}>
        🎃 dr.yourserver.com:27015
      </div>

      {/* Кнопки */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <a
          href="steam://connect/dr.yourserver.com:27015"
          style={{
            padding: '0.8rem 2.2rem',
            background: 'linear-gradient(to bottom, #5a0a0a, #2a0404)',
            color: '#ffd700',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: '1px solid #d4af37',
            boxShadow: '0 0 12px rgba(138, 43, 226, 0.3)'
          }}
        >
          Войти в ад
        </a>

        <a
          href="/rules"
          style={{
            color: '#b19cd9',
            textDecoration: 'none',
            fontSize: '1.05rem',
            fontFamily: '"Creepster", cursive',
            marginTop: '0.3rem'
          }}
        >
          Книга проклятий →
        </a>
      </div>

      {/* Discord */}
      <div style={{ marginTop: '2.5rem' }}>
        <a
          href="https://discord.gg/YOUR_INVITE"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a98cd9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}
        >
          🕸️ Присоединиться к ковену
        </a>
      </div>


{/* Быстрая навигация */}
<div style={{ 
  display: 'flex', 
  gap: '1.2rem', 
  marginTop: '2rem', 
  flexWrap: 'wrap', 
  justifyContent: 'center',
  fontSize: '0.95rem'
}}>
  <a href="/stats" style={{ color: '#b19cd9', textDecoration: 'none' }}>Статистика</a>
  <a href="/maps" style={{ color: '#b19cd9', textDecoration: 'none' }}>Карты</a>
  <a href="/staff" style={{ color: '#b19cd9', textDecoration: 'none' }}>Команда</a>
  <a href="/logs" style={{ color: '#b19cd9', textDecoration: 'none' }}>Логи</a>
</div>


      {/* Футер */}
      <footer style={{
        position: 'absolute',
        bottom: '1.2rem',
        width: '100%',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: '#6b4423'
      }}>
        etochto • halloween rite
      </footer>
    </div>
  );
}