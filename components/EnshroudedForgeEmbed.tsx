'use client'

export default function EnshroudedForgeEmbed() {
  // Enshrouded 暗黑奇幻锻造风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes forge {
      0%, 100% { box-shadow: 0 0 20px #ef4444, 0 0 40px #f97316; }
      50% { box-shadow: 0 0 40px #ef4444, 0 0 80px #f97316; }
    }
    @keyframes flame {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(1.2); }
    }
    body { background: linear-gradient(180deg, #18181b 0%, #1f1f23 100%); }
    .forge-glow { animation: forge 2s infinite; }
    .flame { animation: flame 0.5s infinite; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-4">
    <div class="text-4xl mb-1">🔥</div>
    <h1 class="text-lg font-bold text-red-400">Enshrouded</h1>
    <p class="text-xs text-gray-500">Weapon Forge</p>
  </div>

  <div class="relative w-56 h-40 mb-4">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border-4 border-gray-700 overflow-hidden">
      <div class="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-orange-900 to-transparent flex items-end justify-center">
        <div id="flames" class="flex gap-1 mb-1">
          <span class="text-2xl flame" style="animation-delay: 0s;">🔥</span>
          <span class="text-2xl flame" style="animation-delay: 0.1s;">🔥</span>
          <span class="text-2xl flame" style="animation-delay: 0.2s;">🔥</span>
        </div>
      </div>
      <div id="weapon-slot" class="absolute inset-0 flex items-center justify-center">
        <span id="weapon-icon" class="text-6xl">⚔️</span>
      </div>
    </div>
    <div class="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center border-4 border-orange-400 forge-glow">
      <span class="text-xl">🔥</span>
    </div>
  </div>

  <div id="weapon-display" class="bg-gray-800/80 rounded-xl p-4 border border-gray-700 mb-4 w-full max-w-xs">
    <p id="weapon-name" class="text-center text-lg font-bold text-white mb-1">Iron Sword</p>
    <p id="weapon-type" class="text-center text-sm text-gray-400 mb-2">One-Handed Sword</p>
    <div class="flex justify-center gap-4 text-xs">
      <span class="text-red-400">⚔️ <span id="atk">12</span></span>
      <span class="text-blue-400">🛡️ <span id="def">5</span></span>
      <span class="text-purple-400">✨ <span id="magic">3</span></span>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-2 mb-4 w-full max-w-xs">
    <button id="forge-btn" class="col-span-2 py-3 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95" style="box-shadow: 0 4px 20px rgba(239, 68, 68, 0.5);">
      🔨 FORGE WEAPON
    </button>
  </div>

  <div class="grid grid-cols-3 gap-2 w-full max-w-xs">
    <button id=" rarity-btn" class="p-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded text-xs text-gray-300 transition-all">
      🎲 Reroll Stats
    </button>
    <button id="upgrade-btn" class="p-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded text-xs text-gray-300 transition-all">
      ⬆️ Upgrade +1
    </button>
    <button id="salvage-btn" class="p-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded text-xs text-gray-300 transition-all">
      🔧 Salvage
    </button>
  </div>

  <script>
    var weapons = [
      { name: 'Iron Sword', icon: '⚔️', type: 'One-Handed Sword', atk: 12, def: 5, magic: 3 },
      { name: 'Fire Greatsword', icon: '🗡️', type: 'Two-Handed Sword', atk: 25, def: 8, magic: 5 },
      { name: 'Mystic Staff', icon: '🪄', type: 'Magic Staff', atk: 8, def: 3, magic: 20 },
      { name: 'Hunter Bow', icon: '🏹', type: 'Ranged Weapon', atk: 18, def: 2, magic: 4 },
      { name: 'Flame Dagger', icon: '🗡️', type: 'Dagger', atk: 10, def: 3, magic: 8 },
      { name: 'Guardian Shield', icon: '🛡️', type: 'Shield', atk: 5, def: 25, magic: 2 },
      { name: 'Void Axe', icon: '🪓', type: 'Two-Handed Axe', atk: 28, def: 6, magic: 0 },
      { name: 'Crystal Wand', icon: '🪄', type: 'Magic Wand', atk: 6, def: 2, magic: 15 },
    ];

    var weapon = weapons[0];
    var level = 1;

    function forgeWeapon() {
      weapon = weapons[Math.floor(Math.random() * weapons.length)];
      level = 1;
      updateDisplay();
      document.getElementById('flames').innerHTML = '<span class="text-2xl flame">🔥</span>'.repeat(5);
    }

    function updateDisplay() {
      document.getElementById('weapon-icon').textContent = weapon.icon;
      document.getElementById('weapon-name').textContent = weapon.name + ' +' + level;
      document.getElementById('weapon-type').textContent = weapon.type;
      document.getElementById('atk').textContent = weapon.atk + level * 2;
      document.getElementById('def').textContent = weapon.def + level;
      document.getElementById('magic').textContent = weapon.magic + Math.floor(level / 2);
    }

    function rerollStats() {
      weapon.atk = 10 + Math.floor(Math.random() * 20);
      weapon.def = 5 + Math.floor(Math.random() * 15);
      weapon.magic = 3 + Math.floor(Math.random() * 10);
      updateDisplay();
    }

    function upgradeWeapon() {
      level++;
      updateDisplay();
    }

    function salvageWeapon() {
      weapon = weapons[0];
      level = 1;
      updateDisplay();
    }

    document.getElementById('forge-btn').addEventListener('click', forgeWeapon);
    document.getElementById('rarity-btn').addEventListener('click', rerollStats);
    document.getElementById('upgrade-btn').addEventListener('click', upgradeWeapon);
    document.getElementById('salvage-btn').addEventListener('click', salvageWeapon);
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Enshrouded Weapon Forge"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
