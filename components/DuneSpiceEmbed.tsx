'use client'

export default function DuneSpiceEmbed() {
  // Dune: Awakening 沙漠科幻风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes sandstorm {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    body {
      background: linear-gradient(180deg, #d4a574 0%, #c4956a 50%, #8b7355 100%);
      background-size: 200% 200%;
      animation: sandstorm 10s ease infinite;
    }
    .spice-glow { text-shadow: 0 0 20px #fbbf24; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-4">
    <div class="text-4xl mb-1">🏜️</div>
    <h1 class="text-lg font-bold text-amber-900 spice-glow">Dune: Awakening</h1>
    <p class="text-xs text-amber-700">Spice Harvest Mission</p>
  </div>

  <div class="relative w-56 h-32 mb-4 overflow-hidden rounded-xl border-4 border-amber-800" style="box-shadow: 0 8px 30px rgba(0,0,0,0.4);">
    <div id="desert" class="absolute inset-0 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700">
      <div id="spice-patches" class="absolute inset-0"></div>
    </div>
    <div id="harvester" class="absolute bottom-2 left-1/2 -translate-x-1/2 text-4xl transition-all duration-300">🛷</div>
    <div class="absolute top-2 left-2 text-xs text-amber-900 font-bold">⏱️ <span id="timer">60</span>s</div>
    <div class="absolute top-2 right-2 text-xs text-amber-900 font-bold">🪙 <span id="spice-count">0</span></div>
    <div id="sandworm-warning" class="absolute inset-0 bg-red-900/80 flex items-center justify-center hidden">
      <span class="text-4xl">🐛</span>
    </div>
  </div>

  <div class="flex gap-4 mb-4">
    <div class="text-center bg-amber-900/50 rounded-lg px-4 py-2 border border-amber-700">
      <p class="text-xl font-bold text-amber-200" id="collected">0</p>
      <p class="text-xs text-amber-300">Spice Collected</p>
    </div>
    <div class="text-center bg-amber-900/50 rounded-lg px-4 py-2 border border-amber-700">
      <p class="text-xl font-bold text-amber-200" id="efficiency">100%</p>
      <p class="text-xs text-amber-300">Efficiency</p>
    </div>
  </div>

  <div class="flex gap-2 mb-4">
    <button id="left-btn" class="px-4 py-2 bg-amber-800 hover:bg-amber-700 disabled:bg-gray-600 text-white rounded-lg transition-all">⬅️</button>
    <button id="collect-btn" class="px-6 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95" style="box-shadow: 0 4px 20px rgba(251, 191, 36, 0.5);">
      🪙 COLLECT
    </button>
    <button id="right-btn" class="px-4 py-2 bg-amber-800 hover:bg-amber-700 disabled:bg-gray-600 text-white rounded-lg transition-all">➡️</button>
  </div>

  <div id="result" class="bg-amber-900/80 rounded-xl p-4 border border-amber-600 text-center hidden">
    <p class="text-amber-200 font-bold">Mission Complete!</p>
    <p class="text-white text-lg mt-2">Total Spice: <span id="total-spice" class="text-2xl text-amber-300">0</span></p>
    <p class="text-amber-300 text-sm">Efficiency Bonus: <span id="bonus">+0%</span></p>
  </div>

  <script>
    var spice = 0;
    var collected = 0;
    var timer = 60;
    var harvesterPos = 0;
    var isPlaying = false;

    function spawnSpice() {
      var patches = document.getElementById('spice-patches');
      var x = Math.random() * 80 + 10;
      var y = Math.random() * 60 + 20;
      var spiceEl = document.createElement('div');
      spiceEl.className = 'absolute text-2xl';
      spiceEl.style.left = x + '%';
      spiceEl.style.top = y + '%';
      spiceEl.textContent = '🪙';
      patches.appendChild(spiceEl);
      setTimeout(function() { spiceEl.remove(); }, 3000);
    }

    function moveHarvester(dir) {
      harvesterPos += dir * 20;
      harvesterPos = Math.max(-80, Math.min(80, harvesterPos));
      document.getElementById('harvester').style.transform = 'translateX(calc(-50% + ' + harvesterPos + '%))';
    }

    function collectSpice() {
      if (!isPlaying) {
        isPlaying = true;
        setInterval(spawnSpice, 500);
        var interval = setInterval(function() {
          timer--;
          document.getElementById('timer').textContent = timer;
          if (timer <= 0) {
            clearInterval(interval);
            endGame();
          }
          if (Math.random() < 0.05) {
            document.getElementById('sandworm-warning').classList.remove('hidden');
            setTimeout(function() { document.getElementById('sandworm-warning').classList.add('hidden'); }, 1500);
          }
        }, 1000);
      }

      collected++;
      spice += 10 + Math.floor(Math.random() * 20);
      document.getElementById('collected').textContent = collected;
      document.getElementById('spice-count').textContent = spice;
      document.getElementById('efficiency').textContent = Math.min(200, 100 + collected * 2) + '%';
    }

    function endGame() {
      document.getElementById('total-spice').textContent = spice;
      var bonus = Math.floor(collected * 1.5);
      document.getElementById('bonus').textContent = '+' + bonus + '%';
      document.getElementById('result').classList.remove('hidden');
    }

    document.getElementById('left-btn').addEventListener('click', function() { moveHarvester(-1); });
    document.getElementById('right-btn').addEventListener('click', function() { moveHarvester(1); });
    document.getElementById('collect-btn').addEventListener('click', collectSpice);
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Dune: Awakening Spice Hunter"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
