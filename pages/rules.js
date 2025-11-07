// pages/rules.js
export default function Rules() {
  return (
    <div style={{
      flex: 1,
      padding: '2.5rem 1.5rem',
      maxWidth: '700px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{
        fontSize: '2.4rem',
        fontWeight: 700,
        marginBottom: '2rem',
        color: '#ff2a2a'
      }}>
        Правила сервера
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem'
      }}>
        {[
          "Бегун неприкосновенен. Атака без причины = бан.",
          "Спам ловушками запрещён. Используй их с умом.",
          "Уважай админов и других игроков. Токсичность не приветствуется.",
          "Читы, баги, эксплойты -- автоматический перманентный бан.",
          "Админы имеют право изменить правила без предупреждения."
        ].map((rule, i) => (
          <div key={i} style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '6px',
            fontSize: '1.05rem',
            lineHeight: 1.6
          }}>
            <span style={{
              color: '#ff2a2a',
              fontWeight: 600,
              marginRight: '0.6rem'
            }}>
              {i + 1}.
            </span>
            {rule}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <a
          href="/"
          style={{
            color: '#ff2a2a',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          ← Назад
        </a>
      </div>
    </div>
  );
}