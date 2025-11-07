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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contentTransition, setContentTransition] = useState('fade-in');

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

  const handleTabChange = (tab) => {
    setContentTransition('fade-out');
    setTimeout(() => {
      setActiveTab(tab);
      setMobileMenuOpen(false);
      setContentTransition('fade-in');
    }, 150);
  };

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
      <div className="mobile-players">
        {players.map(player => (
          <div key={player.id} className="player-card">
            <div className="player-header">
              <div className="player-info">
                <div className="player-name">{player.name}</div>
                <div className="player-status">
                  <span className={`status ${player.status}`}>{player.status}</span>
                  <span className="ping">Ping: {player.ping}мс</span>
                </div>
              </div>
              <div className="player-actions">
                <button className="btn-sm" onClick={() => handleKick(player.id)}>Кикнуть</button>
                <button className="btn-sm btn-danger" onClick={() => handleBan(player.id)}>Бан</button>
              </div>
            </div>
            <div className="player-details">
              <div>Роль: {player.role}</div>
              <div>Последний визит: {player.lastSeen}</div>
            </div>
            <div className="player-controls">
              <input 
                type="text" 
                placeholder="Причина кика" 
                value={newKickReason} 
                onChange={(e) => setNewKickReason(e.target.value)} 
                className="reason-input"
              />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBans = () => (
    <div className="bans-list">
      <div className="table-header">
        <h2>Список блокировок 🔒</h2>
        <button className="btn">Добавить бан ➕</button>
      </div>
      <div className="mobile-bans">
        {bans.map(ban => (
          <div key={ban.id} className="ban-card">
            <div className="ban-header">
              <div className="ban-player">{ban.player}</div>
              <div className="ban-status">
                <span className={`status ${ban.active ? 'active' : 'inactive'}`}>{ban.active ? 'Активен' : 'Завершен'}</span>
              </div>
            </div>
            <div className="ban-details">
              <div>Причина: {ban.reason}</div>
              <div>Админ: {ban.admin}</div>
              <div>Длительность: {ban.duration}</div>
              <div>Дата: {ban.date}</div>
            </div>
            <div className="ban-actions">
              {ban.active && <button className="btn-sm btn-success" onClick={() => handleUnban(ban.id)}>Разбанить</button>}
            </div>
          </div>
        ))}
      </div>
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
      <div className="mobile-logs">
        {logs.map(log => (
          <div key={log.id} className="log-card">
            <div className="log-header">
              <span className="log-time">{log.time}</span>
              <span className={`log-type ${log.type}`}>{log.type}</span>
            </div>
            <div className="log-content">
              <div className="log-action">{log.action}</div>
              <div className="log-user">Пользователь: {log.user}</div>
            </div>
          </div>
        ))}
      </div>
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
            max-width: 100%;
            margin: 0 auto;
            padding: 15px;
            position: relative;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            background: rgba(20,20,30,0.8);
            border-radius: 12px;
            margin-bottom: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            position: relative;
            z-index: 100;
          }
          .logo {
            font-size: 1.4rem;
            font-weight: bold;
            background: linear-gradient(45deg, var(--primary), #a0a0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .menu-toggle {
            display: block;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 101;
          }
          .tabs {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 999;
            flex-direction: column;
            padding: 20px;
            overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          .tabs.open {
            transform: translateX(0);
          }
          .tab-mobile {
            padding: 20px;
            background: var(--card);
            border: none;
            color: white;
            cursor: pointer;
            border-radius: 8px;
            margin-bottom: 10px;
            text-align: left;
            font-size: 1.2rem;
            transition: all 0.2s ease;
          }
          .tab-mobile:hover {
            background: rgba(50,50,70,0.8);
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }
          .stat-card {
            background: var(--card);
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid var(--border);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeInUp 0.5s ease;
          }
          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          }
          .stat-icon {
            font-size: 2rem;
            margin-bottom: 10px;
            animation: pulse 2s infinite;
          }
          .number {
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--primary);
          }
          .number span {
            font-size: 0.9rem;
            color: #aaa;
          }
          .progress-bar {
            height: 6px;
            background: #333;
            border-radius: 3px;
            margin-top: 10px;
            overflow: hidden;
          }
          .progress {
            height: 100%;
            background: var(--primary);
            border-radius: 3px;
            transition: width 0.5s ease;
          }
          .quick-actions {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          .btn {
            background: linear-gradient(45deg, var(--primary), var(--primary-dark));
            border: none;
            padding: 12px 16px;
            border-radius: 50px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1;
            justify-content: center;
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
          .dashboard-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .panel {
            background: var(--card);
            border-radius: 12px;
            padding: 15px;
            border: 1px solid var(--border);
            animation: fadeIn 0.5s ease;
          }
          .chat-container {
            height: 150px;
            overflow-y: auto;
            margin-bottom: 15px;
            background: rgba(30,30,40,0.5);
            padding: 10px;
            border-radius: 6px;
          }
          .chat-message {
            margin-bottom: 8px;
            font-size: 0.9rem;
            animation: slideIn 0.3s ease;
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
            min-width: 150px;
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
            animation: fadeIn 0.3s ease;
          }
          .time {
            color: #aaa;
            min-width: 60px;
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
          }
          .settings-panel, .map-panel {
            background: var(--card);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid var(--border);
          }
          .setting-group {
            margin-bottom: 20px;
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
            min-width: 120px;
          }
          .setting-item input, .setting-item select, textarea {
            padding: 10px;
            border-radius: 6px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
            flex: 1;
            min-width: 150px;
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
            flex: 1;
          }
          .map-preview {
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
          }
          .map-image {
            flex: 1;
            min-width: 150px;
          }
          .map-placeholder {
            width: 100%;
            height: 120px;
            background: rgba(30,30,40,0.5);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: #aaa;
          }
          .map-info {
            flex: 1;
            min-width: 150px;
          }

          /* Мобильные стили для таблиц */
          .mobile-players, .mobile-bans, .mobile-logs {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .player-card, .ban-card, .log-card {
            background: var(--card);
            border-radius: 10px;
            padding: 15px;
            border: 1px solid var(--border);
            animation: slideIn 0.3s ease;
            transition: transform 0.2s ease;
          }
          .player-card:hover, .ban-card:hover, .log-card:hover {
            transform: translateX(5px);
          }
          .player-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
            flex-wrap: wrap;
            gap: 10px;
          }
          .player-info {
            flex: 1;
          }
          .player-name {
            font-weight: 600;
            font-size: 1.1rem;
          }
          .player-status {
            display: flex;
            gap: 10px;
            margin-top: 5px;
            flex-wrap: wrap;
          }
          .ping {
            color: #aaa;
            font-size: 0.9rem;
          }
          .player-actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          .player-details {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
            font-size: 0.9rem;
            color: #aaa;
          }
          .player-controls {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .reason-input, .duration-select {
            padding: 8px 12px;
            border-radius: 6px;
            background: rgba(30,30,40,0.8);
            border: 1px solid var(--border);
            color: white;
            width: 100%;
          }
          .ban-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            flex-wrap: wrap;
            gap: 10px;
          }
          .ban-player {
            font-weight: 600;
            font-size: 1.1rem;
          }
          .ban-details {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
            font-size: 0.9rem;
            color: #aaa;
          }
          .ban-actions {
            display: flex;
            justify-content: flex-end;
          }
          .log-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
            flex-wrap: wrap;
            gap: 10px;
          }
          .log-time {
            font-weight: 600;
          }
          .log-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .log-action {
            font-weight: 600;
          }
          .log-user {
            color: #aaa;
            font-size: 0.9rem;
          }

          /* Анимации */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .fade-in {
            animation: fadeIn 0.3s ease;
          }
          .fade-out {
            animation: fadeOut 0.15s ease forwards;
          }

          /* Мобильная адаптация */
          @media (min-width: 768px) {
            .menu-toggle {
              display: none;
            }
            .tabs {
              position: static;
              height: auto;
              width: auto;
              background: transparent;
              z-index: auto;
              padding: 5px;
              border-radius: 10px;
              background: rgba(30,30,40,0.8);
              flex-wrap: wrap;
              transform: none !important;
              display: flex !important;
              overflow-y: visible;
            }
            .tab-mobile {
              display: inline-block;
              background: transparent;
              padding: 14px 24px;
              border-radius: 8px;
              margin: 0 5px;
            }
            .tab-mobile:hover {
              background: rgba(100,100,150,0.3);
            }
            .stat-card {
              padding: 25px;
            }
            .stat-icon {
              font-size: 2.5rem;
            }
            .number {
              font-size: 2.2rem;
            }
            .quick-actions {
              gap: 15px;
            }
            .btn {
              padding: 12px 28px;
            }
            .dashboard-grid {
              grid-template-columns: 1fr 1fr;
            }
            .chat-container {
              height: 200px;
            }
            .chat-input input {
              min-width: 200px;
            }
            .stats-grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
            .setting-item label {
              min-width: 150px;
            }
            .setting-item input, .setting-item select {
              min-width: 200px;
            }
          }
        `}</style>
      </Head>

      <div className="admin-container">
        <div className="header">
          <div className="logo">etochno → Админ панель</div>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
        </div>

        <div className={`tabs ${mobileMenuOpen ? 'open' : ''}`}>
          <button className="tab-mobile" onClick={() => handleTabChange('dashboard')}>🏠 Главная</button>
          <button className="tab-mobile" onClick={() => handleTabChange('players')}>👥 Игроки</button>
          <button className="tab-mobile" onClick={() => handleTabChange('bans')}>🔒 Блокировки</button>
          <button className="tab-mobile" onClick={() => handleTabChange('logs')}>📋 Логи</button>
          <button className="tab-mobile" onClick={() => handleTabChange('settings')}>⚙️ Настройки</button>
          <button className="tab-mobile" onClick={() => handleTabChange('map')}>🗺️ Карта</button>
          <button className="tab-mobile" onClick={() => handleTabChange('chat')}>💬 Чат</button>
        </div>

        <div className={`content ${contentTransition}`}>
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