'use client'

export default function PalCatcherEmbed() {
  // Palworld 明亮卡通风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fade-in {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    body { background: linear-gradient(180deg, #87ceeb 0%, #98d8c8 50%, #7cb342 100%); }
    .bounce { animation: bounce 1s infinite; }
    .spinning { animation: spin 0.5s linear infinite; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-4">
    <div class="text-4xl mb-1">🐾</div>
    <h1 class="text-xl font-bold text-green-800">Palworld</h1>
    <p class="text-xs text-green-600">Pal Capture Device</p>
  </div>

  <div class="relative w-56 h-56 mb-4">
    <div id="capture-area" class="absolute inset-0 flex items-center justify-center">
      <div class="w-44 h-44 rounded-full bg-gradient-to-br from-green-200 to-green-400 border-8 border-green-600 flex items-center justify-center shadow-xl">
        <span id="pal-icon" class="text-7xl">🎯</span>
      </div>
    </div>
    <div id="capture-ring" class="absolute inset-0 rounded-full border-4 border-dashed border-green-500 opacity-50"></div>
  </div>

  <button id="catch-btn" class="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 mb-3" style="box-shadow: 0 4px 20px rgba(34, 197, 94, 0.5);">
    <span id="btn-text">🐾 CATCH!</span>
  </button>

  <div id="result" class="mt-4 text-center hidden">
    <div class="bg-white/90 backdrop-blur rounded-2xl p-5 border-4 border-green-400 min-w-[200px]" style="box-shadow: 0 8px 30px rgba(34, 197, 94, 0.4);">
      <div id="result-icon" class="text-6xl mb-2"></div>
      <h3 id="result-name" class="text-xl font-bold text-green-800 mb-1"></h3>
      <p id="result-type" class="text-sm text-green-600 mb-1"></p>
      <p id="result-work" class="text-xs text-gray-500 mb-2"></p>
      <span id="result-rarity" class="inline-block text-xs px-3 py-1 rounded-full font-bold"></span>
    </div>
  </div>

  <script>
    const pals = [
      { name: 'Lamball', type: 'Neutral', color: '#8B5A2B', rarity: 'Common', use: 'Ranching', icon: '🐑' },
      { name: 'Cattiva', type: 'Neutral', color: '#6B4423', rarity: 'Common', use: 'Ranching', icon: '😺' },
      { name: 'Chikipi', type: 'Neutral', color: '#F4A460', rarity: 'Common', use: 'Ranching', icon: '🐤' },
      { name: 'Lifmunk', type: 'Grass', color: '#228B22', rarity: 'Common', use: 'Planting', icon: '🦊' },
      { name: 'Foxparks', type: 'Fire', color: '#FF4500', rarity: 'Common', use: 'Kindling', icon: '🦊' },
      { name: 'Fuack', type: 'Water', color: '#1E90FF', rarity: 'Common', use: 'Watering', icon: '🐸' },
      { name: 'Sparkit', type: 'Electric', color: '#FFD700', rarity: 'Common', use: 'Generating', icon: '⚡' },
      { name: 'Woolipop', type: 'Neutral', color: '#FF69B4', rarity: 'Uncommon', use: 'Ranching', icon: '🎀' },
      { name: 'Mossanda', type: 'Grass', color: '#32CD32', rarity: 'Uncommon', use: 'Transporting', icon: '🦔' },
      { name: 'Swee', type: 'Ice', color: '#87CEEB', rarity: 'Uncommon', use: 'Cooling', icon: '❄️' },
      { name: 'Jormuntide', type: 'Water/Dragon', color: '#4169E1', rarity: 'Rare', use: 'Farming', icon: '🐉' },
      { name: 'Suzaku', type: 'Fire', color: '#FF6347', rarity: 'Rare', use: 'Ranching', icon: '🦅' },
      { name: 'Kingpaca', type: 'Neutral', color: '#D2691E', rarity: 'Rare', use: 'Mining', icon: '🦙' },
      { name: 'Elizidon', type: 'Water', color: '#00CED1', rarity: 'Rare', use: 'Farming', icon: '🦎' },
      { name: 'Incineram', type: 'Fire/Dark', color: '#8B0000', rarity: 'Rare', use: 'Ranching', icon: '👹' },
      { name: 'Anubis', type: 'Ground', color: '#DAA520', rarity: 'Epic', use: 'Mining', icon: '🐺' },
      { name: 'Faleris', type: 'Fire', color: '#DC143C', rarity: 'Epic', use: 'Kindling', icon: '🔥' },
      { name: 'Shadowbeak', type: 'Dark', color: '#4B0082', rarity: 'Epic', use: 'Night Work', icon: '🦅' },
      { name: 'Paladius', type: 'Neutral', color: '#C0C0C0', rarity: 'Legendary', use: 'Combat', icon: '⚔️' },
      { name: 'Necromus', type: 'Dark', color: '#2F4F4F', rarity: 'Legendary', use: 'Combat', icon: '💀' },
    ];

    let isCatching = false;

    function getRarityBg(rarity) {
      return { 'Common': 'bg-gray-200 text-gray-700', 'Uncommon': 'bg-green-200 text-green-800', 'Rare': 'bg-blue-200 text-blue-800', 'Epic': 'bg-purple-200 text-purple-800', 'Legendary': 'bg-amber-200 text-amber-800' }[rarity] || '';
    }

    document.getElementById('catch-btn').addEventListener('click', function() {
      if (isCatching) return;
      isCatching = true;
      document.getElementById('result').classList.add('hidden');
      document.getElementById('btn-text').textContent = '⏳ CATCHING...';
      document.getElementById('pal-icon').classList.add('spinning');

      setTimeout(function() {
        var pal = pals[Math.floor(Math.random() * pals.length)];
        document.getElementById('pal-icon').classList.remove('spinning');
        document.getElementById('pal-icon').textContent = pal.icon;
        document.getElementById('result-icon').textContent = pal.icon;
        document.getElementById('result-name').textContent = pal.name;
        document.getElementById('result-type').textContent = pal.type;
        document.getElementById('result-work').textContent = 'Work: ' + pal.use;
        document.getElementById('result-rarity').textContent = pal.rarity;
        document.getElementById('result-rarity').className = 'inline-block text-xs px-3 py-1 rounded-full font-bold ' + getRarityBg(pal.rarity);
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('result').style.animation = 'fade-in 0.5s ease-out';
        document.getElementById('btn-text').textContent = '🐾 CATCH!';
        isCatching = false;
      }, 2000);
    });
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Palworld Pal Catcher"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
