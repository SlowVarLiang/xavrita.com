'use client'

export default function CoreKeeperMiningEmbed() {
  // Core Keeper 像素挖矿风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    @keyframes mine {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(0.95); }
    }
    body { background: linear-gradient(180deg, #1c1c1c 0%, #2d1f1f 100%); }
    .pixel-border { image-rendering: pixelated; }
    .shake { animation: shake 0.1s infinite; }
    .mine { animation: mine 0.2s infinite; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-4">
    <div class="text-4xl mb-1">⛏️</div>
    <h1 class="text-lg font-bold text-amber-400">Core Keeper</h1>
    <p class="text-xs text-gray-500">Mining Challenge</p>
  </div>

  <div class="relative w-48 h-48 mb-4" id="mine-area">
    <div class="absolute inset-0 bg-gradient-to-b from-amber-900/30 to-amber-950/50 rounded-lg border-4 border-amber-800 flex items-center justify-center overflow-hidden">
      <div id="ore" class="text-7xl mine cursor-pointer">💎</div>
    </div>
    <div id="pickaxe" class="absolute -top-4 -right-4 text-4xl transform rotate-12">⛏️</div>
  </div>

  <div class="flex gap-4 mb-4">
    <div class="text-center">
      <p id="click-count" class="text-2xl font-bold text-amber-400">0</p>
      <p class="text-xs text-gray-500">Clicks</p>
    </div>
    <div class="text-center">
      <p id="damage" class="text-2xl font-bold text-red-400">1</p>
      <p class="text-xs text-gray-500">Damage</p>
    </div>
    <div class="text-center">
      <p id="ore-hp" class="text-2xl font-bold text-green-400">10</p>
      <p class="text-xs text-gray-500">Ore HP</p>
    </div>
  </div>

  <button id="mine-btn" class="px-6 py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95 mb-4" style="box-shadow: 0 4px 20px rgba(180, 83, 9, 0.5);">
    ⛏️ MINE!
  </button>

  <div id="upgrades" class="grid grid-cols-2 gap-2 w-full max-w-xs">
    <button id="upgrade-dmg" class="p-2 bg-gray-800 hover:bg-gray-700 border border-amber-700 rounded text-xs text-amber-300 transition-all">
      ⚔️ Damage +1 <span class="text-amber-500">(50)</span>
    </button>
    <button id="upgrade-crit" class="p-2 bg-gray-800 hover:bg-gray-700 border border-purple-700 rounded text-xs text-purple-300 transition-all">
      💥 Critical +5% <span class="text-purple-500">(100)</span>
    </button>
  </div>

  <div id="result" class="mt-4 text-center hidden">
    <div class="bg-amber-900/50 rounded-xl p-4 border border-amber-600">
      <p class="text-amber-400 font-bold">Ore Collected!</p>
      <p id="rewards" class="text-white text-lg mt-2"></p>
    </div>
  </div>

  <script>
    var oreHP = 10;
    var damage = 1;
    var critChance = 5;
    var clicks = 0;
    var gold = 0;

    var ores = [
      { name: 'Copper Ore', icon: '🔶', value: 5 },
      { name: 'Iron Ore', icon: '🪨', value: 10 },
      { name: 'Gold Ore', icon: '🪙', value: 25 },
      { name: 'Crystal', icon: '💎', value: 50 },
      { name: 'Ancient Fossil', icon: '🦴', value: 100 },
    ];

    function mineOre() {
      var isCrit = Math.random() * 100 < critChance;
      var dmg = isCrit ? damage * 2 : damage;
      oreHP -= dmg;
      clicks++;

      document.getElementById('click-count').textContent = clicks;
      document.getElementById('ore-hp').textContent = Math.max(0, oreHP);

      if (isCrit) {
        document.getElementById('ore').style.transform = 'scale(1.2)';
        setTimeout(function() { document.getElementById('ore').style.transform = 'scale(1)'; }, 100);
      }

      if (oreHP <= 0) {
        var ore = ores[Math.floor(Math.random() * ores.length)];
        gold += ore.value;
        document.getElementById('rewards').textContent = ore.icon + ' ' + ore.name + ' (+' + ore.value + ' gold)';
        document.getElementById('result').classList.remove('hidden');
        oreHP = 10 + Math.floor(gold / 100) * 5;
        document.getElementById('ore-hp').textContent = oreHP;
      }
    }

    document.getElementById('mine-btn').addEventListener('click', mineOre);
    document.getElementById('ore').addEventListener('click', mineOre);

    document.getElementById('upgrade-dmg').addEventListener('click', function() {
      if (gold >= 50) {
        gold -= 50;
        damage++;
        document.getElementById('damage').textContent = damage;
      }
    });

    document.getElementById('upgrade-crit').addEventListener('click', function() {
      if (gold >= 100) {
        gold -= 100;
        critChance += 5;
        document.getElementById('upgrade-crit').innerHTML = '💥 Critical +' + critChance + '% <span class="text-purple-500">(100)</span>';
      }
    });
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Core Keeper Mining Challenge"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
