export default function Staff() {
  const team = [
    { name: "etochto", role: "Владелец", steam: "etochto", discord: "etochto" },
    { name: "Shadow", role: "Главный админ", steam: "shadow_gm", discord: "shadow" },
    { name: "Vortex", role: "Модератор", steam: "vortex_gmod", discord: "vortex" },
    { name: "Lyra", role: "Картмейкер", steam: "lyra_maps", discord: "lyra" }
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
        ЖРЕЦЫ АДА
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {team.map((member, i) => (
          <div key={i} style={{
            background: 'rgba(20, 8, 40, 0.5)',
            border: '1px solid #8a2be2',
            borderRadius: '10px',
            padding: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#8a2be2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#ffd700'
            }}>
              {member.name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#d4af37' }}>{member.name}</div>
              <div style={{ color: '#c7a2ff' }}>{member.role}</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
              <a href={`https://steamcommunity.com/id/${member.steam}`} target="_blank" rel="noopener" style={{ color: '#1b87d9' }}>S</a>
              <a href="#" style={{ color: '#7289da' }}>D</a>
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