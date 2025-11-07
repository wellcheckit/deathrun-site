import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AdminDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [players, setPlayers] = useState([
    { id: 1, name: 'DarkKnight', status: 'online', role: 'user', lastSeen: '2 мин назад', ping: 45 },
    { id: 2, name: 'Admin123', status: 'online', role: 'admin', lastSeen: '1 мин назад', ping: 23 },
    { id: 3, name: 'SniperX', status: 'afk', role: 'user', lastSeen: '5 мин назад', ping: 89 },
    { id: 4, name: 'MedicPro', status: 'online', role: 'moderator', lastSeen: '1 мин назад', ping: 52 },
    { id: 5, name: 'Builder42', status: 'offline', role: 'user', lastSeen: '1 час назад', ping: 0 },
  ]);
  const [bans, setBans] = useState([
    { id: 101, player: 'CheaterPro', reason: 'Использование читов', admin: 'Admin123', duration: 'PERM', date: '2025-11-05', active: true },
    { id: 102, player: 'ToxicPlayer', reason: 'Токсичность', admin: 'MedicPro', duration: '2ч', date: '2025-11-04', active: true },
  ]);
  const [logs, setLogs] = useState([
    { id: 1, action: 'Игрок подключился', user: 'DarkKnight', time: '12:34:56', type: 'connect' },
    { id: 2, action: 'Игрок отключился', user: 'Builder42', time: '12:35:10', type: 'disconnect' },
    { id: 3, action: 'Бан на 2 часа', user: 'ToxicPlayer', time: '12:36:22', type: 'ban' },
    { id: 4, action: 'Игрок кикнут', user: 'SniperX', time: '12:37:01', type: 'kick' },
    { id: 5, action: 'Сообщение в чате', user: 'Admin123', time: '12:38:15', type: 'chat' },
  ]);
  const [serverStats, setServerStats] = useState({
    playersOnline: 12,
    maxPlayers: 32,
    uptime: '12ч 45м',
    map: 'gm_construct',
    fps: 60
  });
  const [newBanReason, setNewBanReason] = useState('');
  const [newKickReason, setNewKickReason] = useState('');
  const [newBanDuration, setNewBanDuration] = useState('30m');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'DarkKnight', message: 'Привет всем!', time: '12:30' },
    { id: 2, user: 'Admin123', message: 'Добро пожаловать!', time: '12:31' },
    { id: 3, user: 'SniperX', message: 'Где оружие?', time: '12:32' },
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');
  const [selectedMap, setSelectedMap] = useState('gm_construct');
  const [isRestarting, setIsRestarting] = useState(false);

  // Симуляция обновления данных
  useEffect(() => {
    const interval = setInterval(() => {
      setServerStats(prev => ({
        ...prev,
        fps: Math.floor(Math.random() * 10) + 55,
        playersOnline: Math.floor(Math.random() * 10) + 8
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleKick = (id) => {
    const player = players.find(p => p.id === id);
    if (player && newKickReason) {
      setPlayers(players.filter(p => p.id !== id));
      setLogs([{ id: logs.length + 1, action: `Кик: ${newKickReason}`, user: player.name, time: new Date().toLocaleTimeString(), type: 'kick' }, ...logs]);
      alert(`Игрок ${player.name} кикнут: ${newKickReason}`);
      setNewKickReason('');
    }
  };

  const handleBan = (id) => {
    const player = players.find(p => p.id === id);
    if (player && newBanReason) {
      setBans([{ id: bans.length + 103, player: player.name, reason: newBanReason, admin: 'Admin123', duration: newBanDuration, date: new Date().toISOString().split('T')[0], active: true }, ...bans]);
      setPlayers(players.filter(p => p.id !== id));
      setLogs([{ id: logs.length + 1, action: `Бан: ${newBanReason} (${newBanDuration})`, user: player.name, time: new Date().toLocaleTimeString(), type: 'ban' }, ...logs]);
      alert(`Игрок ${player.name} заблокирован: ${newBanReason} на ${newBanDuration}`);
      setNewBanReason('');
    }
  };

  const handleUnban = (banId) => {
    setBans(bans.map(ban => ban.id === banId ? { ...ban, active: false } : ban));
    setLogs([{ id: logs.length + 1, action: 'Разбан', user: bans.find(b => b.id === banId)?.player, time: new Date().toLocaleTimeString(), type: 'unban' }, ...logs]);
    alert(`Игрок разбанен!`);
  };

  const handleSendMessage = () => {
    if (newChatMessage.trim()) {
      setChatMessages([...chatMessages, { id: chatMessages.length + 1, user: 'ADMIN', message: newChatMessage, time: new Date().toLocaleTimeString() }]);
      setLogs([{ id: logs.length + 1, action: `Сообщение: ${newChatMessage}`, user: 'ADMIN', time: new Date().toLocaleTimeString(), type: 'chat' }, ...logs]);
      setNewChatMessage('');
    }
  };

  const handleRestartServer = () => {
    setIsRestarting(true);
    alert('Сервер перезапускается...');
    setTimeout(() => {
      setIsRestarting(false);
      setLogs([{ id: logs.length + 1, action: 'Сервер перезапущен', user: 'ADMIN', time: new Date().toLocaleTimeString(), type: 'restart' }, ...logs]);
    }, 2000);
  };

  const handleChangeMap = () => {
    setServerStats({...serverStats, map: selectedMap});
    setLogs([{ id: logs.length + 1, action: `Карта изменена на ${selectedMap}`, user: 'ADMIN', time: new Date().toLocaleTimeString(), type: 'mapchange' }, ...logs]);
    alert(`Карта изменена на ${selectedMap}`);
  };

  const handleClearChat = () => {
    setChatMessages([]);
    setLogs([{ id: logs.length + 1, action: 'Чат очищен', user: 'ADMIN', time: new Date().toLocaleTimeString(), type: 'chatclear' }, ...logs]);
    alert('Чат очищен');
  };

  const handleSaveWorld = () => {
    setLogs([{ id: logs.length + 1, action: 'Мир сохранен', user: 'ADMIN', time: new Date().toLocaleTimeString(), type: 'save' }, ...logs]);
    alert('Мир сохранен');
  };

  const renderDashboard = () => (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎮</div>
          <h3>Игроков онлайн</h3>
          <p className="number">{serverStats.playersOnline}<span>/{serverStats.maxPlayers}</span></p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(serverStats.playersOnline / serverStats.maxPlayers) * 100}%` }}></div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <h3>Время работы</h3>
          <p className="number">{serverStats.uptime}</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🗺️</div>
          <h3>Карта</h3>
          <p className="number">{serverStats.map}</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <h3>FPS</h3>
          <p className="number">{serverStats.fps} <span className={serverStats.fps > 50 ? 'good' : 'low'}>FPS</span></p>
        </div>
      </div>

      <div className="quick-actions">
        <button className="btn" onClick={handleRestartServer} disabled={isRestarting}>
          {isRestarting ? 'Перезапуск...' : 'Перезапустить сервер 🔁'}
        </button>
        <button className="btn btn-secondary" onClick={handleClearChat}>Очистить чат 🧹</button>
        <button className="btn btn-secondary" onClick={handleSaveWorld}>Сохранить мир 💾</button>
        <button className="btn btn-secondary" onClick={handleChangeMap}>Изменить карту 🗺️</button>
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <h3>Чат сервера 💬</h3>
          <div className="chat-container">
            {chatMessages.map(msg => (
              <div key={msg.id} className="chat-message">
                <span className="chat-user">{msg.user}:</span> {msg.message} <span className="chat-time">{msg.time}</span>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input 
              type="text" 
              value={newChatMessage} 
              onChange={(e) => setNewChatMessage(e.target.value)} 
              placeholder="Сообщение от администратора..." 
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="btn btn-sm" onClick={handleSendMessage}>Отправить</button>
          </div>
        </div>

        <div className="panel">
          <h3>Недавние действия</h3>
          <div className="activity-list">
            {logs.slice(0, 8).map(log => (
              <div key={log.id} className="activity-item">
                <span className="time">{log.time}</span>
                <span className="action">{log.action}</span>
                <span className="user">{log.user}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlayers = () => (
    <div className="players-list">
      <div className="table-header">
        <h2>Управление игроками 👥</h2>
        <div className="search-bar">
          <input type="text" placeholder="Поиск по имени..." />
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Статус</th>
            <th>Роль</th>
            <th>Ping</th>
            <th>Последний визит</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td><span className={`status ${player.status}`}>{player.status}</span></td>
              <td>{player.role}</td>
              <td>{player.ping} мс</td>
              <td>{player.lastSeen}</td>
              <td>
                <div className="action-group">
                  <input 
                    type="text" 
                    placeholder="Причина кика" 
                    value={newKickReason} 
                    onChange={(e) => setNewKickReason(e.target.value)} 
                    className="reason-input"
                  />
                  <button className="btn-sm" onClick={() => handleKick(player.id)}>Кикнуть ⚠️</button>
                </div>
                <div className="action-group">
                  <select value={newBanDuration} onChange={(e) => setNewBanDuration(e.target.value)} className="duration-select">
                    <option value="30m">30 мин</option>
                    <option value="1h">1 час</option>
                    <option value="2h">2 часа</option>
                    <option value="6h">6 часов</option>
                    <option value="24h">24 часа</option>
                    <option value="PERM">PERM</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Причина бана" 
                    value={newBanReason} 
                    onChange={(e) => setNewBanReason(e.target.value)} 
                    className="reason-input"
                  />
                  <button className="btn-sm btn-danger" onClick={() => handleBan(player.id)}>Бан 🔨</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBans = () => (
    <div className="bans-list">
      <div className="table-header">
        <h2>Список блокировок 🔒</h2>
        <button className="btn">Добавить бан ➕</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Игрок</th>
            <th>Причина</th>
            <th>Админ</th>
            <th>Длительность</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {bans.map(ban => (
            <tr key={ban.id}>
              <td>{ban.id}</td>
              <td>{ban.player}</td>
              <td>{ban.reason}</td>
              <td>{ban.admin}</td>
              <td>{ban.duration}</td>
              <td>{ban.date}</td>
              <td><span className={`status ${ban.active ? 'active' : 'inactive'}`}>{ban.active ? 'Активен' : 'Завершен'}</span></td>
              <td>
                {ban.active && <button className="btn-sm btn-success" onClick={() => handleUnban(ban.id)}>Разбанить ✅</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLogs = () => (
    <div className="logs-list">
      <div className="table-header">
        <h2>Журнал событий 📋</h2>
        <div className="log-filters">
          <select>
            <option>Все типы</option>
            <option>Подключения</option>
            <option>Отключения</option>
            <option>Баны</option>
            <option>Кики</option>
            <option>Чат</option>
          </select>
        </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Действие</th>
            <th>Пользователь</th>
            <th>Время</th>
            <th>Тип</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.action}</td>
              <td>{log.user}</td>
              <td>{log.time}</td>
              <td><span className={`log-type ${log.type}`}>{log.type}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderSettings = () => (
    <div className="settings-panel">
      <h2>Настройки сервера ⚙️</h2>
      
      <div className="setting-group">
        <h3>Общие настройки</h3>
        <div className="setting-item">
          <label>Макс. игроков:</label>
          <input type="number" defaultValue="32" />
        </div>
        <div className="setting-item">
          <label>Режим игры:</label>
          <select>
            <option>Deathrun</option>
            <option>Sandbox</option>
            <option>TDM</option>
          </select>
        </div>
      </div>

      <div className="setting-group">
        <h3>Правила сервера</h3>
        <textarea placeholder="Введите правила сервера...">1. Запрещено использовать читы
2. Уважайте других игроков
3. Запрещена токсичность</textarea>
      </div>

      <div className="setting-group">
        <h3>Команды администратора</h3>
        <div className="command-list">
          <div className="command-item">!kick [игрок] [причина] - кик игрока</div>
          <div className="command-item">!ban [игрок] [время] [причина] - бан игрока</div>
          <div className="command-item">!unban [ID] - разбан игрока</div>
          <div className="command-item">!say [сообщение] - отправить сообщение</div>
        </div>
      </div>
    </div>
  );

  const renderMap = () => (
    <div className="map-panel">
      <h2>Управление картами 🗺️</h2>
      
      <div className="map-controls">
        <div className="map-selector">
          <label>Выберите карту:</label>
          <select value={selectedMap} onChange={(e) => setSelectedMap(e.target.value)}>
            <option value="gm_construct">gm_construct</option>
            <option value="deathrun_minecraft">deathrun_minecraft</option>
            <option value="gm_flatgrass">gm_flatgrass</option>
            <option value="deathrun_tesv_skyrim">deathrun_tesv_skyrim</option>
            <option value="gm_bigcity">gm_bigcity</option>
          </select>
          <button className="btn" onClick={handleChangeMap}>Изменить карту</button>
        </div>
        
        <div className="map-preview">
          <div className="map-image">
            <div className="map-placeholder">Карта: {selectedMap}</div>
          </div>
          <div className="map-info">
            <h3>{selectedMap}</h3>
            <p>Тип: Deathrun</p>
            <p>Игроков: 32</p>
            <p>Время прохождения: 15-25 мин</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>etochno - Админ панель (Демо)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
          :root {
            --primary: #00aaff;
            --primary-dark: #0077ff;
            --danger: #ff4444;
            --success: #00cc66;
            --warning: #ffaa00;
            --dark: #0f0f0f;
            --darker: #0a0a0a;
            --card: #1a1a1a;
            --border: #333;
          }
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
            color: #e0e0e0;
            min-height: 100vh;
          }
          .admin-container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: rgba(20,20,30,0.8);
            border-radius: 12px;
            margin-bottom: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          }
          .logo {
            font-size: 1.8rem;
            font-weight: bold;
            background: linear-gradient(45deg, var(--primary), #a0a0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .tabs {
            display: flex;
            gap: 5px;
            margin-bottom: 20px;
            background: rgba(30,30,40,0.8);
            padding: 5px;
            border-radius: 10px;
            overflow-x: auto;
            flex-wrap: wrap;
          }
          .tab {
            padding: 14px 24px;
            background: transparent;
            border: none;
            color: #aaa;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s;
            white-space: nowrap;
          }
          .tab.active {
            background: var(--primary);
            color: white;
          }
          .tab:hover:not(.active) {
            background: rgba(100,100,150,0.3);
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }
          .stat-card {
            background: var(--card);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid var(--border);
            transition: transform 0.3s;
          }
          .stat-card:hover {
            transform: translateY(-5px);
          }
          .stat-icon {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          .number {
            font-size: 2.2rem;
            font-weight: 600;
            color: var(--primary);
          }
          .number span {
            font-size: 1rem;
            color: #aaa;
          }
          .low {
            color: var(--danger);
          }
          .good {
            color: var(--success);
          }
          .progress-bar {
            height: 8px;
            background: #333;
            border-radius: 4px;
            margin-top: 10px;
            overflow: hidden;
          }
          .progress {
            height: 100%;
            background: var(--primary);
            border-radius: 4px;
            transition: width 0.5s;
          }
          .quick-actions {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
          }
          .btn {
            background: linear-gradient(45deg, var(--primary), var(--primary-dark));
            border: none;
            padding: 12px 28px;
            border-radius: 50px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,170,255,0.4);
          }
          .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
          }
          .btn-secondary {
            background: rgba(255,255,255,0.1);
          }
          .btn-danger {
            background: linear-gradient(45deg, var(--danger), #cc0000);
          }
          .btn-success {
            background: linear-gradient(45deg, var(--success), #009944);
          }
          .data-table {
            width: 100%;
            border-collapse: collapse;
            background: var(--card);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
          }
          .data-table th, .data-table td {
            padding: 14px;
            text-align: left;
            border-bottom: 1px solid var(--border);
          }
          .data-table th {
            background: rgba(40, 40, 50, 0.8);
            color: #bbb;
            font-weight: 600;
          }
          .status {
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
          }
          .status.online {
            background: rgba(0, 200, 0, 0.2);
            color: var(--success);
          }
          .status.offline {
            background: rgba(200, 0, 0, 0.2);
            color: var(--danger);
          }
          .status.afk {
            background: rgba(255, 170, 0, 0.2);
            color: var(--warning);
          }
          .status.active {
            background: rgba(0, 200, 0, 0.2);
            color: var(--success);
          }
          .status.inactive {
            background: rgba(100, 100, 100, 0.2);
            color: #aaa;
          }
          .btn-sm {
            padding: 6px 12px;
            font-size: 0.8rem;
            margin: 0 3px;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
          }
          .table-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 15px;
          }
          .search-bar input, .log-filters select {
            padding: 10px 15px;
            border-radius: 8px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
            width: 100%;
            max-width: 250px;
          }
          .recent-activity {
            background: var(--card);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border);
          }
          .activity-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .activity-item {
            display: flex;
            gap: 15px;
            padding: 10px;
            background: rgba(30,30,40,0.5);
            border-radius: 6px;
            flex-wrap: wrap;
          }
          .time {
            color: #aaa;
            min-width: 70px;
          }
          .action {
            color: #00aaff;
            flex: 1;
          }
          .user {
            color: #ffaa00;
            font-weight: 600;
          }
          .log-type {
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
          }
          .log-type.connect { background: rgba(0,200,0,0.2); color: var(--success); }
          .log-type.disconnect { background: rgba(200,0,0,0.2); color: var(--danger); }
          .log-type.ban { background: rgba(200,0,0,0.2); color: var(--danger); }
          .log-type.unban { background: rgba(0,200,200,0.2); color: #00cccc; }
          .log-type.kick { background: rgba(255,170,0,0.2); color: var(--warning); }
          .log-type.chat { background: rgba(0,170,255,0.2); color: var(--primary); }
          .log-type.restart { background: rgba(150,0,200,0.2); color: #aa00ff; }
          .log-type.mapchange { background: rgba(255,150,0,0.2); color: #ff9900; }
          .log-type.save { background: rgba(0,200,150,0.2); color: #00cc99; }
          .action-group {
            display: flex;
            gap: 5px;
            margin-bottom: 5px;
            align-items: center;
            flex-wrap: wrap;
          }
          .reason-input, .duration-select {
            padding: 6px 10px;
            border-radius: 4px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
            font-size: 0.8rem;
            min-width: 120px;
          }
          .reason-input {
            flex: 1;
            min-width: 150px;
          }
          .dashboard-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .panel {
            background: var(--card);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border);
          }
          .chat-container {
            height: 200px;
            overflow-y: auto;
            margin-bottom: 15px;
            background: rgba(30,30,40,0.5);
            padding: 10px;
            border-radius: 6px;
          }
          .chat-message {
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          .chat-user {
            color: var(--primary);
            font-weight: 600;
          }
          .chat-time {
            color: #aaa;
            font-size: 0.8rem;
          }
          .chat-input {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
          }
          .chat-input input {
            flex: 1;
            padding: 10px;
            border-radius: 6px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
            min-width: 200px;
          }
          .settings-panel, .map-panel {
            background: var(--card);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border);
          }
          .setting-group {
            margin-bottom: 30px;
          }
          .setting-group h3 {
            margin-top: 0;
            color: var(--primary);
            border-bottom: 1px solid var(--border);
            padding-bottom: 10px;
          }
          .setting-item {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
            align-items: center;
            flex-wrap: wrap;
          }
          .setting-item label {
            min-width: 150px;
          }
          .setting-item input, .setting-item select, textarea {
            padding: 10px;
            border-radius: 6px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
            flex: 1;
            min-width: 200px;
          }
          textarea {
            height: 100px;
            resize: vertical;
          }
          .command-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .command-item {
            padding: 10px;
            background: rgba(30,30,40,0.5);
            border-radius: 6px;
            font-family: monospace;
            font-size: 0.9rem;
          }
          .map-controls {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .map-selector {
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
          }
          .map-selector label {
            font-weight: 600;
          }
          .map-selector select {
            padding: 10px;
            border-radius: 6px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
          }
          .map-preview {
            display: flex;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;
          }
          .map-image {
            flex: 1;
            min-width: 200px;
          }
          .map-placeholder {
            width: 100%;
            height: 150px;
            background: rgba(30,30,40,0.5);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #aaa;
          }
          .map-info {
            flex: 1;
            min-width: 200px;
          }

          /* Мобильная адаптация */
          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              gap: 15px;
              text-align: center;
            }
            .tabs {
              justify-content: center;
            }
            .tab {
              padding: 10px 15px;
              font-size: 0.9rem;
            }
            .stats-grid {
              grid-template-columns: 1fr;
            }
            .quick-actions {
              flex-direction: column;
            }
            .btn {
              width: 100%;
              justify-content: center;
            }
            .dashboard-grid {
              grid-template-columns: 1fr;
            }
            .action-group {
              flex-direction: column;
              align-items: flex-start;
            }
            .reason-input {
              width: 100%;
            }
            .chat-input input {
              min-width: 150px;
            }
            .setting-item {
              flex-direction: column;
              align-items: flex-start;
            }
            .setting-item label {
              margin-bottom: 5px;
            }
            .setting-item input, .setting-item select {
              width: 100%;
            }
            .map-selector {
              flex-direction: column;
              align-items: flex-start;
            }
            .map-preview {
              flex-direction: column;
            }
          }
        `}</style>
      </Head>

      <div className="admin-container">
        <div className="header">
          <div className="logo">etochno → Админ панель (Демо)</div>
          <div>Добро пожаловать, Администратор 👑</div>
        </div>

        <div className="tabs">
          <button className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>Главная 🏠</button>
          <button className={`tab ${activeTab === 'players' ? 'active' : ''}`} onClick={() => setActiveTab('players')}>Игроки 👥</button>
          <button className={`tab ${activeTab === 'bans' ? 'active' : ''}`} onClick={() => setActiveTab('bans')}>Блокировки 🔒</button>
          <button className={`tab ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => setActiveTab('logs')}>Логи 📋</button>
          <button className={`tab ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>Настройки ⚙️</button>
          <button className={`tab ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>Карта 🗺️</button>
          <button className="tab">Чат 💬</button>
        </div>

        <div className="content">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'players' && renderPlayers()}
          {activeTab === 'bans' && renderBans()}
          {activeTab === 'logs' && renderLogs()}
          {activeTab === 'settings' && renderSettings()}
          {activeTab === 'map' && renderMap()}
        </div>
      </div>
    </>
  );
}