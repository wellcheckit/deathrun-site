export default function Rules() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#ff2a2a', fontSize: '2rem' }}>Правила сервера</h1>
      <ul style={{ marginTop: '1rem', lineHeight: 1.6, color: '#ddd' }}>
        <li>• Запрещён спам ловушками</li>
        <li>• Не мешать бегуну без причины</li>
        <li>• Уважать админов и игроков</li>
        <li>• Использовать только разрешённые аддоны</li>
      </ul>
      <a 
        href="/" 
        style={{ 
          display: 'inline-block', 
          marginTop: '2rem', 
          color: '#ff2a2a', 
          textDecoration: 'none'
        }}
      >
        ← Назад на главную
      </a>
    </div>
  );
}