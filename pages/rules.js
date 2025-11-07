export default function Rules() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0d0517',
      color: '#e8d5a5',
      fontFamily: '"Creepster", "Cinzel", serif',
      padding: '2rem 1.5rem',
      maxWidth: '700px',
      margin: '0 auto',
      position: 'relative',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20,20 Q40,5 50,20 T80,20 M20,50 Q40,35 50,50 T80,50 M20,80 Q40,65 50,80 T80,80\' stroke=\'rgba(138, 43, 226, 0.08)\' fill=\'none\' stroke-width=\'1\'/%3E%3C/svg%3E")',
      backgroundSize: '200px'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Cinzel:wght@400;700&display=swap" rel="stylesheet" />

      {/* Заголовок */}
      <h1 style={{
        fontSize: '2.8rem',
        textAlign: 'center',
        marginBottom: '2.5rem',
        color: '#d4af37',
        textShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
        letterSpacing: '4px',
        fontFamily: '"Creepster", cursive'
      }}>
        КНИГА ПРОКЛЯТИЙ
      </h1>

      {/* Свиток с правилами */}
      <div style={{
        background: 'rgba(25, 15, 45, 0.7)',
        border: '2px solid #8a2be2',
        borderRadius: '12px',
        padding: '2rem',
        position: 'relative',
        boxShadow: '0 0 20px rgba(138, 43, 226, 0.2)'
      }}>
        {/* Уголки свитка */}
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '40px',
          fontSize: '1.8rem',
          opacity: 0.6
        }}>📜</div>
        <div style={{
          position: 'absolute',
          bottom: '-12px',
          right: '40px',
          fontSize: '1.8rem',
          opacity: 0.6,
          transform: 'scaleX(-1)'
        }}>📜</div>

        {/* Правила */}
        <div style={{
          lineHeight: 2,
          fontSize: '1.25rem',
          fontFamily: '"Cinzel", serif'
        }}>
          <div style={{ marginBottom: '1.4rem' }}>
            <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>I.</span> Бегун священен.  
            Кто поднимет руку без причины --  
            будет прикован к ловушке навеки.
          </div>
          <div style={{ marginBottom: '1.4rem' }}>
            <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>II.</span> Ловушки -- дар ада.  
            Спам -- позор. Позор -- бан.
          </div>
          <div style={{ marginBottom: '1.4rem' }}>
            <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>III.</span> Админы -- жрецы.  
            Их слово -- закон крови.
          </div>
          <div style={{ marginBottom: '1.4rem' }}>
            <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>IV.</span> Читы -- проклятие.  
            Проклятый изгоняется без возврата.
          </div>
          <div>
            <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>V.</span> Уважай братьев по аду.  
            Токсичность убивает дух сервера.
          </div>
        </div>
      </div>

      {/* Ссылка назад */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <a
          href="/"
          style={{
            color: '#c7a2ff',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontFamily: '"Creepster", cursive',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← вернуться в ночь
        </a>
      </div>

      {/* Паутина в углах */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        fontSize: '2rem',
        opacity: 0.25
      }}>🕸️</div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        fontSize: '2rem',
        opacity: 0.25,
        transform: 'rotate(180deg)'
      }}>🕸️</div>

      <footer style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '1.5rem',
        fontSize: '0.8rem',
        color: '#8a2be2'
      }}>
        etochto • halloween rite
      </footer>
    </div>
  );
}