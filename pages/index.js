import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: 'white' }}>
      <Head>
        <title>etochno - Garry's Mod сервер</title>
        <meta name="description" content="Мультиплеерный сервер Garry's Mod" />
      </Head>

      {/* Header */}
      <header style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>etochno</h1>
        <nav>
          <Link href="/about"><a style={{ margin: '0 1rem', color: 'gray' }}>О сервере</a></Link>
          <Link href="/rules"><a style={{ margin: '0 1rem', color: 'gray' }}>Правила</a></Link>
          <Link href="/contact"><a style={{ margin: '0 1rem', color: 'gray' }}>Контакты</a></Link>
          <button style={{ background: '#333', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', color: 'white' }}>
            Подключиться
          </button>
        </nav>
      </header>

      {/* Hero */}
      <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>Добро пожаловать на etochto</h2>
        <p style={{ color: 'gray', margin: '1rem 0' }}>Мультиплеерный сервер Garry's Mod</p>
        <button style={{ background: '#00aaff', border: 'none', padding: '0.7rem 1.5rem', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>
          Играть сейчас
        </button>
      </main>

      {/* Features */}
      <section style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem', flexWrap: 'wrap' }}>
        {['Реалистичный геймплей', 'Активное сообщество', 'Стабильный сервер'].map((item) => (
          <div key={item} style={{ background: '#1a1a1a', padding: '1.5rem', margin: '0.5rem', borderRadius: '6px', width: '200px' }}>
            <h3>{item}</h3>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'gray', borderTop: '1px solid #222' }}>
        <p>© 2025 etochno. Все права защищены.</p>
      </footer>
    </div>
  );
}