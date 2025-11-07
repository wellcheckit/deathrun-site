// pages/rules.js
export default function Rules() {
  return (
    <div style={{
      flex: 1,
      padding: '2rem 1.5rem',
      maxWidth: '700px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <h1 style={{
        fontSize: '2.6rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontFamily: '"Creepster", cursive',
        color: '#d4af37',
        textShadow: '0 0 10px rgba(212, 175, 55, 0.4)'
      }}>
        КНИГА ПРОКЛЯТИЙ
      </h1>

      <div style={{
        background: 'rgba(20, 8, 40, 0.5)',
        border: '1px solid #8a2be2',
        borderRadius: '10px',
        padding: '1.8rem',
        lineHeight: 1.9,
        fontSize: '1.15rem'
      }}>
        <div style={{ marginBottom: '1.3rem' }}>
          <span style={{ color: '#d4af37', fontWeight: 'bold' }}>I.</span> Бегун священен.  
          Нарушивший -- будет прикован к ловушке.
        </div>
        <div style={{ marginBottom: '1.3rem' }}>
          <span style={{ color: '#d4af37', fontWeight: 'bold' }}>II.</span> Ловушки -- дар ада.  
          Спам -- позор. Позор -- изгнание.
        </div>
        <div style={{ marginBottom: '1.3rem' }}>
          <span style={{ color: '#d4af37', fontWeight: 'bold' }}>III.</span> Админы -- жрецы.  
          Их слово -- закон.
        </div>
        <div style={{ marginBottom: '1.3rem' }}>
          <span style={{ color: '#d4af37', fontWeight: 'bold' }}>IV.</span> Читы -- проклятие.  
          Проклятый не вернётся.
        </div>
        <div>
          <span style={{ color: '#d4af37', fontWeight: 'bold' }}>V.</span> Уважай братьев по аду.  
          Токсичность убивает дух.
        </div>
      </div>

      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <a
          href="/"
          style={{
            color: '#c7a2ff',
            textDecoration: 'none',
            fontFamily: '"Creepster", cursive',
            fontSize: '1.1rem'
          }}
        >
          ← вернуться в ночь
        </a>
      </div>
    </div>
  );
}