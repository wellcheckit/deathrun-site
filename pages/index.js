// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  // Плавная прокрутка к секции
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Отслеживаем текущую секцию при скролле
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rules', 'maps', 'stats', 'staff'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      {/* Боковое меню */}
      <nav style={{
        width: '220px',
        flexShrink: 0,
        padding: '2rem 1.2rem',
        background: 'rgba(255, 255, 255, 0.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem',
        position: 'sticky',
        top: 0,
        height: '100vh'
      }}>
        <div style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          marginBottom: '2rem',
          color: '#ff2a2a'
        }}>
          DEATHRUN
        </div>

        {[
          { id: 'home', label: 'Главная' },
          { id: 'rules', label: 'Правила' },
          { id: 'maps', label: 'Карты' },
          { id: 'stats', label: 'Статистика' },
          { id: 'staff', label: 'Команда' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              textAlign: 'left',
              padding: '0.5rem 0',
              background: 'none',
              border: 'none',
              color: activeSection === item.id ? '#ff2a2a' : '#aaa',
              fontWeight: activeSection === item.id ? 600 : 400,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.id) e.target.style.color = '#ccc';
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) e.target.style.color = '#aaa';
            }}
          >
            {item.label}
          </button>
        ))}

        <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: '#555' }}>
          © 2025
        </div>
      </nav>

      {/* Основной контент */}
      <main style={{ flex: 1, padding: '4rem 3rem 3rem', overflowY: 'auto' }}>
        
        {/* Главная */}
        <section id="home" style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            marginBottom: '1.2rem',
            background: 'linear-gradient(to right, #ff2a2a, #ff5555)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Deathrun Server
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#bbb', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Чистый, быстрый, без компромиссов.  
            Беги. Умирай. Повторяй.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{
              padding: '0.8rem 1.6rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '1.15rem'
            }}>
              dr.yourserver.com:27015
            </div>
            <a
              href="steam://connect/dr.yourserver.com:27015"
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                background: '#ff2a2a',
                color: '#fff',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.25s ease, transform 0.15s ease',
                boxShadow: '0 4px 12px rgba(255, 42, 42, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ff0000';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ff2a2a';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Подключиться
            </a>
          </div>
        </section>

        {/* Правила */}
        <section id="rules" style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem', color: '#ff2a2a' }}>Правила</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              "Бегун неприкосновенен. Атака без причины = бан.",
              "Спам ловушками запрещён.",
              "Уважай админов и игроков.",
              "Читы и эксплойты -- перманентный бан."
            ].map((text, i) => (
              <div key={i} style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                fontSize: '1.05rem'
              }}>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* Карты */}
        <section id="maps" style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem', color: '#ff2a2a' }}>Карты</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: "dr_castle", record: "00:32.1" },
              { name: "dr_skyfall", record: "00:47.8" },
              { name: "dr_mine", record: "00:21.5" }
            ].map((map, i) => (
              <div key={i} style={{
                padding: '1.4rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px'
              }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem' }}>{map.name}</div>
                <div style={{ color: '#888' }}>Рекорд: <span style={{ color: '#ff2a2a' }}>{map.record}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* Статистика */}
        <section id="stats" style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem', color: '#ff2a2a' }}>Статистика</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {[
              { label: "Онлайн", value: "18/32" },
              { label: "Смертей", value: "2 487" },
              { label: "Рекордов", value: "124" }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.value}</div>
                <div style={{ color: '#888', fontSize: '0.95rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Команда */}
        <section id="staff" style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2rem', color: '#ff2a2a' }}>Команда</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { name: "etochto", role: "Владелец" },
              { name: "Shadow", role: "Админ" },
              { name: "Lyra", role: "Картмейкер" }
            ].map((person, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ff2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  color: '#000'
                }}>
                  {person.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{person.name}</div>
                  <div style={{ color: '#888', fontSize: '0.9rem' }}>{person.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}