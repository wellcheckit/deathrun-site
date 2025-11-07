export default function Rules() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: '"Courier New", monospace',
      padding: '2rem 1.5rem',
      maxWidth: '700px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Заголовок */}
      <h1 style={{
        fontSize: '2.2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2.5rem',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#ff2a2a',
        textShadow: '0 0 10px rgba(255, 42, 42, 0.5)'
      }}>
        ПРАВИЛА
      </h1>

      {/* Список правил */}
      <div style={{
        background: 'rgba(20, 20, 20, 0.7)',
        border: '1px solid #333',
        borderRadius: '4px',
        padding: '1.5rem',
        lineHeight: 1.8,
        fontSize: '1.05rem'
      }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <span style={{ color: '#ff2a2a', fontWeight: 'bold' }}>01.</span> Бегун -- священен.  
          Не убивай без причины. Иначе -- бан.
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span style={{ color: '#ff2a2a', fontWeight: 'bold' }}>02.</span> Ловушки -- не игрушка.  
          Спам = мут + потеря репутации.
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span style={{ color: '#ff2a2a', fontWeight: 'bold' }}>03.</span> Админы -- боги.  
          Оспаривай решения -- потеряешь доступ.
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span style={{ color: '#ff2a2a', fontWeight: 'bold' }}>04.</span> Читы, баги, эксплойты --  
          автоматический бан навсегда.
        </div>
        <div>
          <span style={{ color: '#ff2a2a', fontWeight: 'bold' }}>05.</span> Уважай других.  
          Токсичность убивает сервер быстрее ловушек.
        </div>
      </div>

      {/* Кнопка назад */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <a
          href="/"
          style={{
            display: 'inline-block',
            color: '#888',
            textDecoration: 'none',
            fontSize: '0.95rem',
            position: 'relative'
          }}
        >
          ← вернуться в ад
        </a>
      </div>

      {/* Футер */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '1.5rem',
        fontSize: '0.75rem',
        color: '#333'
      }}>
        etochto • deathrun server
      </div>
    </div>
  );
}