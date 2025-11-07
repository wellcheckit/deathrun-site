export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0310', // тёмно-фиолетовый/чёрный
      color: '#f0d9a5', // "пыльно-золотой" -- как старый пергамент
      fontFamily: '"Creepster", "Courier New", monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      position: 'relative',
      textAlign: 'center',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(128, 0, 128, 0.1) 0%, transparent 20%)',
      textShadow: '0 0 8px rgba(255, 105, 180, 0.3)'
    }}>
      {/* Подключаем шрифт Creepster (халявный, с Google Fonts) */}
      <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet" />

      {/* Логотип */}
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'normal',
        marginBottom: '1.5rem',
        letterSpacing: '3px',
        color: '#ff6b6b', // "кроваво-розовый"
        textShadow: '0 0 15px rgba(255, 107, 107, 0.7), 0 0 30px rgba(255, 107, 107, 0.4)',
        lineHeight: 1
      }}>
        DEATHRUN
      </h1>

      {/* Хэллоуинская надпись */}
      <p style={{
        fontSize: '1.6rem',
        marginBottom: '2.5rem',
        color: '#d4af37', // золотой
        fontFamily: '"Creepster", cursive',
        textShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
      }}>
        Ты не бегун. Ты -- приманка.
      </p>

      {/* IP */}
      <div style={{
        marginBottom: '2rem',
        padding: '0.8rem 1.5rem',
        backgroundColor: 'rgba(20, 5, 30, 0.6)',
        border: '1px solid #8a2be2', // фиолетовый
        borderRadius: '8px',
        fontFamily: '"Courier New", monospace',
        fontSize: '1.2rem',
        backdropFilter: 'blur(2px)'
      }}>
        🎃 <strong>dr.yourserver.com:27015</strong>
      </div>

      {/* Кнопки */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
        <a
          href="steam://connect/dr.yourserver.com:27015"
          style={{
            display: 'inline-block',
            padding: '0.9rem 2.5rem',
            backgroundColor: '#8a0303', // тёмно-красный
            color: '#ffd700', // золотой
            textDecoration: 'none',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            border: '2px solid #ff6b6b',
            boxShadow: '0 0 15px rgba(138, 3, 3, 0.6)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#a00';
            e.target.style.boxShadow = '0 0 25px rgba(255, 107, 107, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#8a0303';
            e.target.style.boxShadow = '0 0 15px rgba(138, 3, 3, 0.6)';
          }}
        >
          Войти в ад
        </a>

        <a
          href="/rules"
          style={{
            color: '#c7a2ff', // фиолетовый
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontFamily: '"Creepster", cursive',
            textShadow: '0 0 6px rgba(199, 162, 255, 0.5)'
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
          style={{
            color: '#b19cd9',
            textDecoration: 'none',
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <span>🕯️ Присоединиться к ковену</span>
        </a>
      </div>

      {/* Футер */}
      <footer style={{
        position: 'absolute',
        bottom: '1.2rem',
        color: '#6b4423',
        fontSize: '0.8rem',
        fontFamily: '"Courier New", monospace'
      }}>
        etochto • halloween 2025
      </footer>

      {/* Паутинка (легкий элемент декора) */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontSize: '2rem',
        opacity: 0.3,
        pointerEvents: 'none'
      }}>
        🕸️
      </div>
    </div>
  );
}