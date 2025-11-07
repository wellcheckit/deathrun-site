export default function Home() {
return (
<div style={{
minHeight: '100vh',
backgroundColor: '#000',
color: '#fff',
fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
padding: '1rem',
position: 'relative',
textAlign: 'center'
}}>
<h1 style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem'
}}>
  <span style={{ color: '#ff2a2a' }}>D</span>EATH
  <span style={{ color: '#ff2a2a' }}>R</span>UN
</h1>

<p style={{
  color: '#aaa',
  fontSize: '1.125rem',
  marginBottom: '2rem',
  maxWidth: '32rem'
}}>
  Беги. Умирай. Повторяй снова.
</p>

{/* IP */}
<p style={{
  fontSize: '1.1rem',
  fontFamily: 'monospace',
  backgroundColor: '#111',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  marginBottom: '1.5rem'
}}>
  dr.yourserver.com:27015
</p>

{/* Кнопки */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
  <a
    href="steam://connect/dr.yourserver.com:27015"
    style={{
      display: 'inline-block',
      padding: '0.75rem 2rem',
      backgroundColor: '#ff2a2a',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '4px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '1rem',
      minWidth: '180px'
    }}
  >
    Играть
  </a>

  {/* Ссылка на правила */}
  <a
    href="/rules"
    style={{
      color: '#888',
      textDecoration: 'none',
      fontSize: '0.95rem',
      marginTop: '0.5rem'
    }}
  >
    Правила сервера →
  </a>
</div>

{/* Скриншот (раскомментируй, если есть /public/map1.jpg) */}
{/*
<img 
  src="/map1.jpg" 
  alt="Карта Deathrun" 
  style={{ 
    width: '100%', 
    maxWidth: '600px', 
    borderRadius: '4px', 
    marginTop: '2rem',
    border: '1px solid #333'
  }} 
/>
*/}

{/* Discord */}
<div style={{ marginTop: '2.5rem' }}>
  <a
    href="https://discord.gg/YOUR_INVITE"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#666', textDecoration: 'underline', fontSize: '0.9rem' }}
  >
    Присоединиться в Discord
  </a>
</div>

<footer style={{
  position: 'absolute',
  bottom: '1rem',
  color: '#333',
  fontSize: '0.75rem'
}}>
  etochto • 2025
</footer>
</div>
);
}