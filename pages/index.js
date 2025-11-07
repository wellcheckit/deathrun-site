import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>etochno - Garry's Mod сервер</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Мультиплеерный сервер Garry's Mod" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #e0e0e0;
            overflow-x: hidden;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          .hero {
            text-align: center;
            padding: 80px 20px;
            background: radial-gradient(circle, rgba(30,30,40,0.8) 0%, rgba(10,10,15,1) 100%);
            position: relative;
            overflow: hidden;
          }
          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iIzMzMyIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+');
          }
          .features {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            padding: 60px 20px;
            background: rgba(10,10,15,0.7);
          }
          .feature-card {
            background: rgba(30, 30, 40, 0.6);
            border: 1px solid rgba(80, 80, 100, 0.3);
            border-radius: 12px;
            padding: 25px;
            width: 250px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            background: rgba(40, 40, 50, 0.7);
          }
          .btn {
            background: linear-gradient(45deg, #00aaff, #0077ff);
            border: none;
            padding: 12px 28px;
            border-radius: 50px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            margin: 5px;
          }
          .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,170,255,0.4);
          }
          .btn-secondary {
            background: rgba(255,255,255,0.1);
          }
          .btn-secondary:hover {
            background: rgba(255,255,255,0.2);
          }
          .footer {
            text-align: center;
            padding: 30px;
            background: rgba(5,5,10,0.9);
            color: #aaa;
            border-top: 1px solid rgba(80,80,100,0.2);
          }
          .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
          }
          .nav a {
            color: #aaa;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 300;
            transition: color 0.3s;
          }
          .nav a:hover {
            color: #00aaff;
          }
          h1, h2, h3 {
            font-weight: 600;
            margin: 0;
          }
          h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            background: linear-gradient(to right, #ffffff, #a0a0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p {
            font-size: 1.1rem;
            color: #bbb;
            max-width: 600px;
            margin: 0 auto 25px;
          }
          .emoji {
            font-size: 1.5rem;
            vertical-align: middle;
            margin: 0 5px;
          }
        `}</style>
      </Head>

      <header>
        <div className="nav">
          <h1>etochno</h1>
          <nav>
            <a href="#about">О сервере</a>
            <a href="#rules">Правила</a>
            <a href="#contact">Контакты</a>
            <button className="btn btn-secondary">Подключиться</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Добро пожаловать на etochto 🎮</h2>
            <p>Мультиплеерный сервер Garry's Mod с реалистичным геймплеем и активным сообществом. Присоединяйся к нам!</p>
            <button className="btn">Играть сейчас ➡️</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>🎯 Реализм</h3>
            <p>Иммерсивный геймплей с детализированными модами и физикой.</p>
          </div>
          <div className="feature-card">
            <h3>👥 Сообщество</h3>
            <p>Активные игроки, дружелюбная атмосфера и поддержка.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Стабильность</h3>
            <p>Высокая производительность сервера и минимальные задержки.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 etochno. Все права защищены. 🛡️</p>
        <p>Сделано с ❤️ и 🍕 для сообщества GMod</p>
      </footer>
    </>
  );
}