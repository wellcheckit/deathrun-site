export default function Home() {
  return (
    <div style={{ padding: 20, background: '#000', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: 'red', fontSize: '2.5rem' }}>🔥 Deathrun Server</h1>
      <p>IP: <code>dr.yourserver.com:27015</code></p>
      <a href="steam://connect/dr.yourserver.com:27015" style={{ display: 'inline-block', marginTop: 20, background: 'red', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: 5 }}>
        Играть сейчас!
      </a>
    </div>
  );
}