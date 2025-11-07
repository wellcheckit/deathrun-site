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
      position: 'relative'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        <span style={{ color: '#ff2a2a' }}>D</span>EATH
        <span style={{ color: '#ff2a2a' }}>R</span>UN
      </h1>

      <p style={{
        color: '#aaa',
        fontSize: '1.125rem',
        marginBottom: '2rem',
        maxWidth: '32rem',
        textAlign: 'center'
      }}>
        Беги. Умирай. Повторяй.
      </p>

      <p style={{
        fontSize: '1.1rem',
        fontFamily: 'monospace',
        backgroundColor: '#111',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        marginBottom: '2rem'
      }}>
        dr.yourserver.com:27015
      </p>

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
          fontSize: '1rem'
        }}
      >
        Играть
      </a>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a
          href="https://discord.gg/YOUR_INVITE"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#888', textDecoration: 'underline', fontSize: '0.9rem' }}
        >
          Присоединиться в Discord
        </a>
      </div>
    </div>
  );
}