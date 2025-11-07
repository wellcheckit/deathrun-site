// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Определяем, мобильное ли устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true); // На ПК -- всегда открыто
      } else {
        setSidebarOpen(false); // На мобиле -- закрыто по умолчанию
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - (isMobile ? 60 : 20),
        behavior: 'smooth'
      });
      setActiveSection(id);
      if (isMobile) setSidebarOpen(false); // Закрываем меню после клика на мобиле
    }
  };

  // Отслеживаем активную секцию
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rules', 'maps', 'stats', 'staff'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= (isMobile ? 100 : 100) && rect.bottom >= (isMobile ? 100 : 100)) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Навигационные пункты
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'rules', label: 'Правила' },
    { id: 'maps', label: 'Карты' },
    { id: 'stats', label: 'Статистика' },
    { id: 'staff', label: 'Команда' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row'
    }}>
      {/* Мобильный хедер с гамбургером */}
      {isMobile && (
        <header style={{
          padding: '1rem 1.2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ fontWeight: 700, color: '#ff2a2a', fontSize: '1.3rem' }}>
            DEATHRUN
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '1.8rem',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </header>
      )}

      {/* Боковая панель */}
      <nav style={{
        width: isMobile ? '100%' : '220px',
        height: isMobile ? (sidebarOpen ? 'auto' : '0') : '100vh',
        flexShrink: 0,
        padding: isMobile ? '1.5rem 1.2rem' : '2rem 1.2rem',
        background: 'rgba(255, 255, 255, 0.02)',
        display: isMobile ? (sidebarOpen ? 'block' : 'none') : 'flex',
        flexDirection: 'column',
        gap: isMobile ? '1.2rem' : '1.4rem',
        position: isMobile ? 'relative' : 'sticky',
        top: isMobile ? 0 : 0,
        overflow: 'hidden',
        zIndex: 90,
        borderBottom: isMobile ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}>
        {!isMobile && (
          <div style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#ff2a2a'
          }}>
            DEATHRUN
          </div>
        )}

        {navItems.map((item) => (
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
              fontSize: isMobile ? '1.1rem' : '1rem',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              outline: 'none',
              width: '100%'
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

        {!isMobile && (
          <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: '#555' }}>
            © 2025
          </div>
        )}
      </nav>

      {/* Основной контент */}
      <main style={{ 
        flex: 1, 
        padding: isMobile ? '1.8rem 1.2rem' : '3rem 2.5rem', 
        overflowY: 'auto',
        paddingTop: isMobile ? '1rem' : '3rem'
      }}>
        {/* Все секции с адаптивными размерами */}
        <section id="home" style={{ marginBottom: isMobile ? '3rem' : '5rem', maxWidth: '800px' }}>
          <h1 style={{
            fontSize: isMobile ? '2.4rem' : '3.2rem',
            fontWeight: 800,
            marginBottom: isMobile ? '1rem' : '1.2rem',
            background: 'linear-gradient(to right, #ff2a2a, #ff5555)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Deathrun Server
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.05rem' : '1.2rem', 
            color: '#bbb', 
            lineHeight: 1.6, 
            marginBottom: isMobile ? '1.8rem' : '2.5rem'
          }}>
            Чистый, быстрый, без компромиссов.  
            Беги. Умирай. Повторяй.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '1rem' : '1.5rem', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <div style={{
              padding: isMobile ? '0.7rem 1.2rem' : '0.8rem 1.6rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: isMobile ? '1rem' : '1.15rem',
              width: isMobile ? '100%' : 'auto',
              textAlign: 'center'
            }}>
              dr.yourserver.com:27015
            </div>
            <a
              href="steam://connect/dr.yourserver.com:27015"
              style={{
                display: 'inline-block',
                padding: isMobile ? '0.7rem 1.8rem' : '0.8rem 2rem',
                background: '#ff2a2a',
                color: '#fff',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.25s ease, transform 0.15s ease',
                width: isMobile ? '100%' : 'auto',
                textAlign: 'center'
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
        <section id="rules" style={{ marginBottom: isMobile ? '3rem' : '5rem', maxWidth: '800px' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.2rem', 
            fontWeight: 700, 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            color: '#ff2a2a' 
          }}>Правила</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.2rem' }}>
            {[
              "Бегун неприкосновенен. Атака без причины = бан.",
              "Спам ловушками запрещён.",
              "Уважай админов и игроков.",
              "Читы и эксплойты -- перманентный бан."
            ].map((text, i) => (
              <div key={i} style={{
                padding: isMobile ? '0.9rem' : '1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                fontSize: isMobile ? '1rem' : '1.05rem'
              }}>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* Карты */}
        <section id="maps" style={{ marginBottom: isMobile ? '3rem' : '5rem', maxWidth: '800px' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.2rem', 
            fontWeight: 700, 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            color: '#ff2a2a' 
          }}>Карты</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: isMobile ? '1.2rem' : '1.5rem' 
          }}>
            {[
              { name: "dr_castle", record: "00:32.1" },
              { name: "dr_skyfall", record: "00:47.8" },
              { name: "dr_mine", record: "00:21.5" }
            ].map((map, i) => (
              <div key={i} style={{
                padding: isMobile ? '1.2rem' : '1.4rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.3rem', 
                  fontWeight: 600, 
                  marginBottom: '0.5rem' 
                }}>
                  {map.name}
                </div>
                <div style={{ color: '#888' }}>
                  Рекорд: <span style={{ color: '#ff2a2a' }}>{map.record}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Статистика */}
        <section id="stats" style={{ marginBottom: isMobile ? '3rem' : '5rem', maxWidth: '800px' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.2rem', 
            fontWeight: 700, 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            color: '#ff2a2a' 
          }}>Статистика</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(160px, 1fr))', 
            gap: isMobile ? '1.2rem' : '1.5rem' 
          }}>
            {[
              { label: "Онлайн", value: "18/32" },
              { label: "Смертей", value: "2 487" },
              { label: "Рекордов", value: "124" }
            ].map((item, i) => (
              <div key={i} style={{
                padding: isMobile ? '1.2rem' : '1.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: isMobile ? '1.6rem' : '1.8rem', 
                  fontWeight: 700, 
                  marginBottom: '0.4rem' 
                }}>
                  {item.value}
                </div>
                <div style={{ color: '#888', fontSize: isMobile ? '0.9rem' : '0.95rem' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Команда */}
        <section id="staff" style={{ marginBottom: isMobile ? '3rem' : '5rem', maxWidth: '800px' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.2rem', 
            fontWeight: 700, 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            color: '#ff2a2a' 
          }}>Команда</h2>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '1.2rem' : '1.5rem', 
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            {[
              { name: "etochto", role: "Владелец" },
              { name: "Shadow", role: "Админ" },
              { name: "Lyra", role: "Картмейкер" }
            ].map((person, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: isMobile ? '1rem' : '1rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px',
                width: isMobile ? '100%' : 'auto'
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
                  color: '#000',
                  flexShrink: 0
                }}>
                  {person.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: isMobile ? '1.05rem' : '1rem' }}>
                    {person.name}
                  </div>
                  <div style={{ color: '#888', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                    {person.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Футер (только на мобиле, чтобы не дублировать) */}
        {isMobile && (
          <footer style={{
            marginTop: '3rem',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#555'
          }}>
            © 2025 • Deathrun Server
          </footer>
        )}
      </main>
    </div>
  );
}