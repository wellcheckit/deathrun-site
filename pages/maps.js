export default function Maps() {
  const maps = [
    { name: "dr_castle", difficulty: "Средняя", record: "00:32.1" },
    { name: "dr_skyfall", difficulty: "Сложная", record: "00:47.8" },
    { name: "dr_mine", difficulty: "Лёгкая", record: "00:21.5" },
    { name: "dr_cursed", difficulty: "Эксперт", record: "01:03.2" }
  ];

  return (
    <div style={{ flex: 1, padding: '2rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '2.6rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontFamily: '"Creepster", cursive',
        color: '#d4af37'
      }}>
        КАРТЫ ЛОВУШЕК
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {maps.map((map, i) => (
          <div key={i} style={{
            background: 'rgba(20, 8, 40, 0.5)',
            border: '1px solid #8a2be2',
            borderRadius: '10px',
            padding: '1.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#d4af37' }}>{map.name}</div>
              <div style={{ color: '#c7a2ff', marginTop: '0.3rem' }}>
                Сложность: <span style={{ color: '#ffd700' }}>{map.difficulty}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#4caf50', fontWeight: 'bold' }}>Рекорд</div>
              <div style={{ fontSize: '1.3rem', color: '#ffffff' }}>{map.record}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/" style={{ color: '#c7a2ff', textDecoration: 'none', fontFamily: '"Creepster", cursive' }}>
          ← вернуться в ночь
        </a>
      </div>
    </div>
  );
}