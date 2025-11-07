import Head from 'next/head';

export default function AdminDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player1', status: 'online', role: 'user' },
    { id: 2, name: 'Player2', status: 'offline', role: 'admin' },
    { id: 3, name: 'Player3', status: 'online', role: 'mod' },
  ]);
  const [logs, setLogs] = useState([
    { id: 1, time: '10:00', user: 'Player1', action: 'Connected' },
    { id: 2, time: '10:05', user: 'Player2', action: 'Kicked Player3' },
    { id: 3, time: '10:10', user: 'Player1', action: 'Used command !help' },
  ]);

  const handleKick = (id) => {
    setPlayers(players.map(p => p.id === id ? {...p, status: 'offline'} : p));
    setLogs([...logs, { id: logs.length + 1, time: new Date().toLocaleTimeString(), user: 'Server', action: `Kicked player ID ${id}` }]);
  };

  return (
    <>
      <Head>
        <title>Admin Panel - etochno Demo</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #e0e0e0;
            overflow-x: hidden;
          }
          .admin-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: 250px 1fr;
            min-height: 100vh;
          }
          .sidebar {
            background: rgba(20,20,30,0.9);
            padding: 20px;
            border-right: 1px solid #333;
          }
          .sidebar h2 {
            color: #00aaff;
            margin-top: 0;
          }
          .sidebar ul {
            list-style: none;
            padding: 0;
          }
          .sidebar li {
            padding: 10px 0;
          }
          .sidebar a {
            color: #aaa;
            text-decoration: none;
            display: block;
            transition: color 0.3s;
          }
          .sidebar a:hover, .sidebar a.active {
            color: #00aaff;
          }
          .main-content {
            padding: 20px;
            background: rgba(10,10,15,0.8);
          }
          .card {
            background: rgba(30, 30, 40, 0.6);
            border: 1px solid rgba(80, 80, 100, 0.3);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
          }
          .table th, .table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #333;
          }
          .status-online { color: #4caf50; }
          .status-offline { color: #f44336; }
          .btn {
            background: linear-gradient(45deg, #00aaff, #0077ff);
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            color: white;
            cursor: pointer;
            margin: 0 3px;
          }
          .btn:hover {
            opacity: 0.9;
          }
          .btn-danger {
            background: linear-gradient(45deg, #f44336, #d32f2f);
          }
          .dashboard-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }
          .stat-card {
            background: rgba(40, 40, 60, 0.7);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
          .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #00aaff;
          }
        `}</style>
      </Head>

      <div className="admin-container">
        <aside className="sidebar">
          <h2>etochno Admin 🛠️</h2>
          <ul>
            <li><a href="#" className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Панель управления</a></li>
            <li><a href="#" className={activeTab === 'players' ? 'active' : ''} onClick={() => setActiveTab('players')}>Игроки</a></li>
            <li><a href="#" className={activeTab === 'logs' ? 'active' : ''} onClick={() => setActiveTab('logs')}>Логи</a></li>
            <li><a href="#" className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Настройки</a></li>
            <li><a href="#" className={activeTab === 'chat' ? 'active' : ''} onClick={() => setActiveTab('chat')}>Чат</a></li>
          </ul>
        </aside>

        <main className="main-content">
          {activeTab === 'dashboard' && (
            <div>
              <h1>Панель управления 📊</h1>
              <div className="dashboard-stats">
                <div className="stat-card">
                  <div className="stat-number">24</div>
                  <div>Игроков онлайн</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">142</div>
                  <div>Всего игроков</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5</div>
                  <div>Админов</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">99.9%</div>
                  <div>Время работы</div>
                </div>
              </div>
              <div className="card">
                <h3>Сервер статус</h3>
                <p>✅ Сервер запущен и работает стабильно</p>
                <p>📍 IP: 192.168.1.100:27015</p>
                <p>🎮 Карта: gm_flatgrass</p>
              </div>
            </div>
          )}

          {activeTab === 'players' && (
            <div>
              <h1>Управление игроками 👥</h1>
              <div className="card">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Имя</th>
                      <th>Статус</th>
                      <th>Роль</th>
                      <th>Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map(player => (
                      <tr key={player.id}>
                        <td>{player.id}</td>
                        <td>{player.name}</td>
                        <td className={player.status === 'online' ? 'status-online' : 'status-offline'}>
                          {player.status === 'online' ? '🟢 Онлайн' : '🔴 Офлайн'}
                        </td>
                        <td>{player.role === 'admin' ? '👑 Admin' : player.role === 'mod' ? '🛡️ Mod' : '👤 User'}</td>
                        <td>
                          <button className="btn">Замутить</button>
                          <button className="btn btn-danger" onClick={() => handleKick(player.id)}>Кикнуть</button>
                          <button className="btn">Дать роль</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div>
              <h1>Логи сервера 📝</h1>
              <div className="card">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Время</th>
                      <th>Пользователь</th>
                      <th>Действие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logs.map(log => (
                      <tr key={log.id}>
                        <td>{log.time}</td>
                        <td>{log.user}</td>
                        <td>{log.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h1>Настройки сервера ⚙️</h1>
              <div className="card">
                <h3>Общие настройки</h3>
                <p>Название сервера: etochno Server</p>
                <p>Макс. игроков: 32</p>
                <p>Режим игры: Sandbox</p>
                <button className="btn">Сохранить изменения</button>
              </div>
              <div className="card">
                <h3>Безопасность</h3>
                <p>Античит: Включен</p>
                <p>Вайтлист: Отключен</p>
                <button className="btn">Обновить конфиг</button>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div>
              <h1>Чат сервера 💬</h1>
              <div className="card">
                <div style={{ height: '300px', overflowY: 'scroll', marginBottom: '10px', padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                  <p>[10:00] <b>Player1:</b> Привет всем!</p>
                  <p>[10:01] <b>Player2:</b> Привет! Как дела?</p>
                  <p>[10:02] <b>Admin:</b> Добро пожаловать на etochno 🎮</p>
                  <p>[10:03] <b>Player3:</b> Классный сервер!</p>
                </div>
                <input type="text" placeholder="Введите сообщение..." style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#222', color: 'white', border: '1px solid #444' }} />
                <button className="btn" style={{ marginTop: '10px' }}>Отправить</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

// Add useState hook at the top level
const { useState } = React;