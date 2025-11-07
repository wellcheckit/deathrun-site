// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center px-4">
      {/* Логотип / Название */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        <span className="text-red-500">D</span>EATH
        <span className="text-red-500">R</span>UN
      </h1>

      {/* Описание */}
      <p className="text-gray-400 text-lg mb-8 max-w-md text-center">
        Беги. Умирай. Повторяй.
      </p>

      {/* IP-адрес */}
      <div className="mb-10 text-center">
        <p className="text-gray-500 text-sm">ПОДКЛЮЧИСЬ</p>
        <p className="text-white text-xl md:text-2xl font-mono bg-gray-900 px-4 py-2 rounded inline-block">
          dr.yourserver.com:27015
        </p>
      </div>

      {/* Кнопка */}
      <a
        href="steam://connect/dr.yourserver.com:27015"
        className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-md text-lg font-bold uppercase tracking-wider overflow-hidden"
      >
        <span className="relative z-10">Играть</span>
        {/* Эффект подсветки при наведении */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </a>

      {/* Discord */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm mb-2">Или присоединяйся в Discord</p>
        <a
          href="https://discord.gg/YOUR_INVITE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors underline"
        >
          discord.gg/yourserver
        </a>
      </div>

      {/* Футер (очень минималистичный) */}
      <footer className="absolute bottom-4 text-gray-800 text-xs">
        etochto • 2025
      </footer>
    </div>
  );
}