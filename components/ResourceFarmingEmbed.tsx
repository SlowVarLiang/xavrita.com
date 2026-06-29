'use client'

export default function ResourceFarmingEmbed() {
  // Once Human 末日科幻军事风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes scan {
      0% { left: -100%; }
      100% { left: 100%; }
    }
    body { background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%); }
    .scan-line { animation: scan 2s linear infinite; }
    .glow-green { text-shadow: 0 0 10px #22c55e; }
    .glow-cyan { text-shadow: 0 0 10px #06b6d4; }
  </style>
</head>
<body class="min-h-screen p-4">
  <div class="max-w-md mx-auto">
    <div class="text-center mb-4 pb-3 border-b border-cyan-900">
      <div class="text-3xl mb-1">🔫</div>
      <h1 class="text-lg font-bold text-cyan-400 glow-cyan tracking-wider">ONCE HUMAN</h1>
      <p class="text-xs text-gray-500">Resource Route Planner</p>
    </div>

    <div class="bg-gray-900/80 rounded-lg p-4 border border-cyan-900 mb-4">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <p class="text-xs text-green-400 uppercase tracking-wider">Select Target Resources</p>
      </div>
      <div class="grid grid-cols-3 gap-2 mb-4" id="resources">
        <button data-name="Iron Ore" data-icon="🪨" data-eff="1.0" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">🪨</span><span class="text-xs">Iron</span>
        </button>
        <button data-name="Copper Ore" data-icon="🔶" data-eff="1.2" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">🔶</span><span class="text-xs">Copper</span>
        </button>
        <button data-name="Coal" data-icon="⚫" data-eff="1.5" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">⚫</span><span class="text-xs">Coal</span>
        </button>
        <button data-name="Crystal" data-icon="💎" data-eff="2.5" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">💎</span><span class="text-xs">Crystal</span>
        </button>
        <button data-name="Starlight Ore" data-icon="⭐" data-eff="5.0" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">⭐</span><span class="text-xs">Starlight</span>
        </button>
        <button data-name="Wood" data-icon="🪵" data-eff="0.8" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">🪵</span><span class="text-xs">Wood</span>
        </button>
        <button data-name="Fiber" data-icon="🌿" data-eff="1.0" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">🌿</span><span class="text-xs">Fiber</span>
        </button>
        <button data-name="Stone" data-icon="🪨" data-eff="0.6" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">🪨</span><span class="text-xs">Stone</span>
        </button>
        <button data-name="Gold" data-icon="🪙" data-eff="8.0" class="res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800">
          <span class="text-lg block">🪙</span><span class="text-xs">Gold</span>
        </button>
      </div>

      <div class="flex items-center gap-2 mb-3">
        <div class="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <p class="text-xs text-cyan-400 uppercase tracking-wider">Select Zone</p>
      </div>
      <div class="grid grid-cols-3 gap-2 mb-4" id="zones">
        <button data-zone="Starting" class="zone-btn p-2 rounded border text-center transition-all bg-gray-800/50 border-gray-700 hover:border-cyan-500">
          <span class="text-xs text-gray-300">📍 Starting</span>
        </button>
        <button data-zone="Mid Game" class="zone-btn p-2 rounded border text-center transition-all bg-cyan-900/50 border-cyan-500">
          <span class="text-xs text-cyan-300">🏚️ Mid Game</span>
        </button>
        <button data-zone="End Game" class="zone-btn p-2 rounded border text-center transition-all bg-gray-800/50 border-gray-700 hover:border-cyan-500">
          <span class="text-xs text-gray-300">☢️ End Game</span>
        </button>
      </div>

      <div class="flex items-center gap-2 mb-3">
        <div class="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
        <p class="text-xs text-amber-400 uppercase tracking-wider">Mission Duration: <span id="time-val">60</span> min</p>
      </div>
      <div class="relative h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
        <div id="time-bar" class="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" style="width: 30%;"></div>
        <input type="range" id="time-slider" min="15" max="180" step="15" value="60" class="absolute inset-0 w-full opacity-0 cursor-pointer">
      </div>

      <button id="calc-btn" class="w-full py-3 bg-gradient-to-r from-cyan-700 to-cyan-500 hover:from-cyan-600 hover:to-cyan-400 disabled:from-gray-700 disabled:to-gray-600 text-white font-bold rounded tracking-wider uppercase transition-all">
        ◉ Calculate Route
      </button>
    </div>

    <div id="results" class="bg-gray-900/80 rounded-lg border border-green-900 hidden">
      <div class="bg-green-900/30 p-3 border-b border-green-900 flex justify-between items-center">
        <span class="text-green-400 font-bold text-sm uppercase tracking-wider">Route Calculated</span>
        <span class="text-green-300 font-bold">Total: <span id="total" class="text-xl">0</span></span>
      </div>
      <div id="result-list" class="p-3 space-y-2"></div>
      <div class="p-2 border-t border-gray-800">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span class="text-xs text-gray-500">Efficiency optimized for selected zone</span>
        </div>
      </div>
    </div>
  </div>

  <script>
    var resources = {};
    document.querySelectorAll('.res-btn').forEach(function(btn) {
      resources[btn.dataset.name] = { icon: btn.dataset.icon, eff: parseFloat(btn.dataset.eff) };
    });

    var selectedResources = [];
    var selectedZone = 'Mid Game';
    var farmingTime = 60;

    document.querySelectorAll('.res-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var name = btn.dataset.name;
        if (selectedResources.includes(name)) {
          selectedResources = selectedResources.filter(function(r) { return r !== name; });
          btn.className = 'res-btn p-2 rounded border text-center transition-all text-xs bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500 hover:bg-gray-800';
        } else {
          selectedResources.push(name);
          btn.className = 'res-btn p-2 rounded border text-center transition-all text-xs bg-cyan-900/50 border-cyan-500 text-cyan-300';
        }
        document.getElementById('results').classList.add('hidden');
      });
    });

    document.querySelectorAll('.zone-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedZone = btn.dataset.zone;
        document.querySelectorAll('.zone-btn').forEach(function(b) {
          b.className = 'zone-btn p-2 rounded border text-center transition-all bg-gray-800/50 border-gray-700 hover:border-cyan-500';
          b.querySelector('span').className = 'text-xs text-gray-300';
        });
        btn.className = 'zone-btn p-2 rounded border text-center transition-all bg-cyan-900/50 border-cyan-500';
        btn.querySelector('span').className = 'text-xs text-cyan-300';
        document.getElementById('results').classList.add('hidden');
      });
    });

    document.getElementById('time-slider').addEventListener('input', function(e) {
      farmingTime = parseInt(e.target.value);
      document.getElementById('time-val').textContent = farmingTime;
      document.getElementById('time-bar').style.width = ((farmingTime - 15) / 165 * 100) + '%';
      document.getElementById('results').classList.add('hidden');
    });

    document.getElementById('calc-btn').addEventListener('click', function() {
      if (selectedResources.length === 0) return;

      var zoneBonus = selectedZone === 'Starting' ? 0.8 : selectedZone === 'Mid Game' ? 1.0 : 1.2;
      var timePerRes = farmingTime / selectedResources.length;
      var total = 0;
      var html = '';

      selectedResources.forEach(function(name) {
        var res = resources[name];
        var amount = Math.floor(timePerRes * res.eff * zoneBonus * (0.8 + Math.random() * 0.4));
        total += amount;
        html += '<div class="flex items-center gap-3 bg-gray-800/50 rounded p-2 border border-gray-700">' +
          '<span class="text-xl">' + res.icon + '</span>' +
          '<div class="flex-1"><p class="text-white text-sm font-medium">' + name + '</p><p class="text-gray-500 text-xs">' + Math.floor(timePerRes) + ' min allocated</p></div>' +
          '<span class="text-green-400 font-bold">×' + amount + '</span></div>';
      });

      document.getElementById('result-list').innerHTML = html;
      document.getElementById('total').textContent = total;
      document.getElementById('results').classList.remove('hidden');
    });
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Once Human Resource Farming Simulator"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
