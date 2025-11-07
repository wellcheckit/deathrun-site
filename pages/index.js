import React, { useState } from 'react';
import Head from 'next/head';

export default function AdminDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [players, setPlayers] = useState([
    { id: 1, name: 'Player1', status: 'online', role: 'user', lastSeen: '5 мин назад' },
    { id: 2, name: 'Player2', status: 'offline', role: 'admin', lastSeen: '2 часа назад' },
    { id: 3, name: 'Player3', status: 'online', role: 'moderator', lastSeen: '10 мин назад' },
    { id: 4, name: 'Player4', status: 'online', role: 'user', lastSeen: '1 мин назад' },
  ]);
  const [bans, setBans] = useState([
    { id: 101, player: 'BannedPlayer', reason: 'Читерство', admin: 'Admin1', date: '2025-11-05' },
    { id: 102, player: 'ToxicPlayer', reason: 'Токсичность', admin: 'Admin2', date: '2025-11-04' },
  ]);
  const [logs, setLogs] = useState([
    { id: 1, action: 'Игрок подключился', user: 'Player1', time: '12:34:56' },
    { id: 2, action: 'Игрок отключился', user: 'Player3', time: '12:35:10' },
    { id: 3, action: 'Бан на 2 часа', user: 'PlayerX', time: '12:36:22' },
  ]);

  const handleKick = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  const handleBan = (id) => {
    alert(`Игрок с ID ${id} заблокирован на 2 часа`);
  };

  const renderDashboard = () => (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>👥 Игроков онлайн</h3>
          <p className="number">{players.filter(p => p.status === 'online').length}</p>
        </div>
        <div className="stat-card">
          <h3>🔨 Блокировок</h3>
          <p className="number">{bans.length}</p>
        </div>
        <div className="stat-card">
          <h3>📋 Логов сегодня</h3>
          <p className="number">{logs.length}</p>
        </div>
      </div>
      <div className="quick-actions">
        <button className="btn">Перезапустить сервер</button>
        <button className="btn btn-secondary">Очистить чат</button>
        <button className="btn btn-secondary">Сохранить мир</button>
      </div>
    </div>
  );

  const renderPlayers = () => (
    <div className="players-list">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Статус</th>
            <th>Роль</th>
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
              <td>{player.lastSeen}</td>
              <td>
                <button className="btn-sm" onClick={() => handleKick(player.id)}>Кикнуть</button>
                <button className="btn-sm btn-danger" onClick={() => handleBan(player.id)}>Бан</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBans = () => (
    <div className="bans-list">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Игрок</th>
            <th>Причина</th>
            <th>Админ</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {bans.map(ban => (
            <tr key={ban.id}>
              <td>{ban.id}</td>
              <td>{ban.player}</td>
              <td>{ban.reason}</td>
              <td>{ban.admin}</td>
              <td>{ban.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLogs = () => (
    <div className="logs-list">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Действие</th>
            <th>Пользователь</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.action}</td>
              <td>{log.user}</td>
              <td>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>etochno - Админ панель (Демо)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #e0e0e0;
            min-height: 100vh;
          }
          .admin-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: rgba(20,20,30,0.8);
            border-radius: 10px;
            margin-bottom: 20px;
          }
          .tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
          }
          .tab {
            padding: 12px 24px;
            background: rgba(50,50,70,0.5);
            border: none;
            border-radius: 6px;
            color: #aaa;
            cursor: pointer;
            transition: all 0.3s;
          }
          .tab.active {
            background: #0077ff;
            color: white;
          }
          .tab:hover:not(.active) {
            background: rgba(60,60,90,0.7);
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }
          .stat-card {
            background: rgba(30, 30, 40, 0.6);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
          .number {
            font-size: 2rem;
            font-weight: 600;
            color: #00aaff;
          }
          .quick-actions {
            display: flex;
            gap: 15px;
            margin-bottom: 30px;
            flex-wrap: wrap;
          }
          .btn {
            background: linear-gradient(45deg, #00aaff, #0077ff);
            border: none;
            padding: 12px 28px;
            border-radius: 50px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
          }
          .btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,170,255,0.4);
          }
          .btn-secondary {
            background: rgba(255,255,255,0.1);
          }
          .btn-danger {
            background: linear-gradient(45deg, #ff4444, #cc0000);
          }
          .data-table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(30, 30, 40, 0.6);
            border-radius: 10px;
            overflow: hidden;
          }
          .data-table th, .data-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid rgba(80,80,100,0.3);
          }
          .data-table th {
            background: rgba(40, 40, 50, 0.8);
            color: #bbb;
          }
          .status {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
          }
          .status.online {
            background: rgba(0, 200, 0, 0.2);
            color: #00ff00;
          }
          .status.offline {
            background: rgba(200, 0, 0, 0.2);
            color: #ff4444;
          }
          .btn-sm {
            padding: 6px 12px;
            font-size: 0.8rem;
            margin: 0 3px;
            border-radius: 4px;
          }
          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #00aaff;
          }
        `}</style>
      </Head>

      <div className="admin-container">
        <div className="header">
          <div className="logo">etochno → Админ панель (Демо)</div>
          <div>Добро пожаловать, Администратор 👑</div>
        </div>

        <div className="tabs">
          <button className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>Главная</button>
          <button className={`tab ${activeTab === 'players' ? 'active' : ''}`} onClick={() => setActiveTab('players')}>Игроки</button>
          <button className={`tab ${activeTab === 'bans' ? 'active' : ''}`} onClick={() => setActiveTab('bans')}>Блокировки</button>
          <button className={`tab ${activeTab === 'logs' ? 'active' : ''}`} onClick={() => setActiveTab('logs')}>Логи</button>
        </div>

        <div className="content">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'players' && renderPlayers()}
          {activeTab === 'bans' && renderBans()}
          {activeTab === 'logs' && renderLogs()}
        </div>
      </div>
    </>
  );
}