export default function Logs() {
  const logs = [
    { time: "14:22", action: "Игрок [xX_DeadRunner_Xx] забанен на 7 дней за спам ловушками", type: "ban" },
    { time: "13:58", action: "Рекорд на dr_castle обновлён: 00:32.1", type: "record" },
    { time: "12:45", action: "Модератор Vortex выдал мут игроку ToxicGuy на 1 час", type: "mute" },
    { time: "11:30", action: "Сервер перезагружен после обновления карт", type: "info" },
    { time: "10:15", action: "Новая карта dr_cursed добавлена в ротацию", type: "info" }
  ];

  const typeColor = { ban: '#f44336', record: '#4caf50', mute: '#ff9800', info: '#2196f3' };

  return (
    <div style={{ flex: 1, padding: '2rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '2.6rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontFamily: '"Creepster", cursive',
        color: '#d4af37'
      }}>
        КНИГА ЛОГОВ
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {logs.map((log, i) => (
          <div key={i} style={{
            background: 'rgba(20, 8, 40, 0.5)',
            border: '1px solid #8a2be2',
            borderRadius: '8px',
            padding: '1rem',
            fontSize: '0.95rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.4rem' }}>
              <span style={{ color: '#888', minWidth: '50px' }}>{log.time}</span>
              <span style={{ color: typeColor[log.type], fontWeight: 'bold' }}>
                {log.type === 'ban' ? '🚫' : log.type === 'record' ? '🏆' : log.type === 'mute' ? '🔇' : 'ℹ️'}
              </span>
            </div>
            <div>{log.action}</div>
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