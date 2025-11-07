export default function Stats() {
  return (
    <div style={{ flex: 1, padding: '2rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '2.6rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontFamily: '"Creepster", cursive',
        color: '#d4af37'
      }}>
        СТАТИСТИКА АДА
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {[
          { label: "Сейчас онлайн", value: "18/32", color: "#4caf50" },
          { label: "Всего смертей", value: "2 487", color: "#f44336" },
          { label: "Рекордов", value: "124", color: "#2196f3" },
          { label: "Карт", value: "8", color: "#ff9800" }
        ].map((item, i) => (
          <div key={i} style={{
            background: 'rgba(20, 8, 40, 0.5)',
            border: '1px solid #8a2be2',
            borderRadius: '10px',
            padding: '1.2rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: item.color, marginBottom: '0.5rem' }}>
              {item.value}
            </div>
            <div style={{ color: '#c7a2ff', fontSize: '0.95rem' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Мини-график (статичный) */}
      <div style={{
        background: 'rgba(20, 8, 40, 0.5)',
        border: '1px solid #8a2be2',
        borderRadius: '10px',
        padding: '1.5rem'
      }}>
        <h2 style={{ color: '#d4af37', marginBottom: '1rem', fontSize: '1.4rem' }}>Онлайн за неделю</h2>
        <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '4px' }}>
          {[24, 18, 22, 26, 20, 28, 31].map((h, i) => (
            <div key={i} style={{
              width: '100%',
              backgroundColor: '#8a2be2',
              height: `${h * 2}px`,
              borderRadius: '2px'
            }}></div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: '#888', fontSize: '0.85rem' }}>
          <span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/" style={{ color: '#c7a2ff', textDecoration: 'none', fontFamily: '"Creepster", cursive' }}>
          ← вернуться в ночь
        </a>
      </div>
    </div>
  );
}