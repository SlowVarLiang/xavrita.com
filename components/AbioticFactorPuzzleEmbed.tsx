'use client'

export default function AbioticFactorPuzzleEmbed() {
  // Abiotic Factor 科幻实验室谜题风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes scanline {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    body { background: linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%); }
    .scanline::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(transparent 50%, rgba(0, 255, 136, 0.03) 50%);
      background-size: 100% 4px;
      pointer-events: none;
    }
    .glow-green { text-shadow: 0 0 10px #22c55e; }
    .glow-cyan { text-shadow: 0 0 10px #06b6d4; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-4 relative scanline">
    <div class="text-4xl mb-1">🔬</div>
    <h1 class="text-lg font-bold text-cyan-400 glow-cyan tracking-wider">Abiotic Factor</h1>
    <p class="text-xs text-green-500 font-mono">DEPARTMENT ACCESS TERMINAL</p>
  </div>

  <div class="w-full max-w-sm bg-gray-900/90 rounded-xl border border-cyan-900 p-4 mb-4">
    <div class="flex items-center gap-2 mb-3">
      <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      <p class="text-sm text-green-400 font-mono">SELECT DEPARTMENT CODE</p>
    </div>

    <div id="code-display" class="flex justify-center gap-2 mb-4">
      <span class="dept-code w-12 h-12 bg-gray-800 border-2 border-cyan-800 rounded flex items-center justify-center text-2xl text-cyan-400">?</span>
      <span class="dept-code w-12 h-12 bg-gray-800 border-2 border-cyan-800 rounded flex items-center justify-center text-2xl text-cyan-400">?</span>
      <span class="dept-code w-12 h-12 bg-gray-800 border-2 border-cyan-800 rounded flex items-center justify-center text-2xl text-cyan-400">?</span>
    </div>

    <div class="grid grid-cols-3 gap-2 mb-4">
      <button data-dept="Engineering" data-icon="🔧" class="dept-btn p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 rounded-lg text-center transition-all">
        <span class="text-2xl block">🔧</span>
        <span class="text-xs text-gray-400">Engineering</span>
      </button>
      <button data-dept="Medical" data-icon="💊" class="dept-btn p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 rounded-lg text-center transition-all">
        <span class="text-2xl block">💊</span>
        <span class="text-xs text-gray-400">Medical</span>
      </button>
      <button data-dept="Security" data-icon="🔒" class="dept-btn p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 rounded-lg text-center transition-all">
        <span class="text-2xl block">🔒</span>
        <span class="text-xs text-gray-400">Security</span>
      </button>
      <button data-dept="Research" data-icon="🔬" class="dept-btn p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 rounded-lg text-center transition-all">
        <span class="text-2xl block">🔬</span>
        <span class="text-xs text-gray-400">Research</span>
      </button>
      <button data-dept="Admin" data-icon="📋" class="dept-btn p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 rounded-lg text-center transition-all">
        <span class="text-2xl block">📋</span>
        <span class="text-xs text-gray-400">Admin</span>
      </button>
      <button data-dept="Power" data-icon="⚡" class="dept-btn p-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 rounded-lg text-center transition-all">
        <span class="text-2xl block">⚡</span>
        <span class="text-xs text-gray-400">Power</span>
      </button>
    </div>

    <button id="submit-btn" class="w-full py-3 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 disabled:from-gray-700 disabled:to-gray-600 text-white font-bold rounded transition-all">
      ◉ ACCESS DEPARTMENT
    </button>
  </div>

  <div id="result" class="w-full max-w-sm bg-gray-900/90 rounded-xl border border-green-900 p-4 hidden">
    <div class="flex items-center gap-2 mb-2">
      <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      <p class="text-sm text-green-400 font-mono">ACCESS GRANTED</p>
    </div>
    <div id="dept-info" class="text-center">
      <span id="result-icon" class="text-5xl block mb-2"></span>
      <p id="result-name" class="text-lg font-bold text-white"></p>
      <p id="result-desc" class="text-sm text-gray-400 mt-2"></p>
    </div>
  </div>

  <script>
    var departments = {
      'Engineering': { icon: '🔧', desc: 'Contains workbenches, power generators, and crafting stations.' },
      'Medical': { icon: '💊', desc: 'Houses medical supplies, specimens, and healing equipment.' },
      'Security': { icon: '🔒', desc: 'Armory access, surveillance systems, and restricted items.' },
      'Research': { icon: '🔬', desc: 'Labs with experiment stations and classified documents.' },
      'Admin': { icon: '📋', desc: 'Central hub with terminals, logs, and keycards.' },
      'Power': { icon: '⚡', desc: 'Reactor control, electrical systems, and backup generators.' },
    };

    var selectedDept = null;

    document.querySelectorAll('.dept-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedDept = this.dataset.dept;
        document.querySelectorAll('.dept-btn').forEach(function(b) {
          b.classList.remove('border-cyan-500', 'bg-cyan-900/30');
          b.classList.add('border-gray-700');
        });
        this.classList.remove('border-gray-700');
        this.classList.add('border-cyan-500', 'bg-cyan-900/30');
      });
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
      if (!selectedDept) return;

      var codes = document.querySelectorAll('.dept-code');
      var dept = departments[selectedDept];

      codes[0].textContent = dept.icon;
      codes[1].textContent = dept.icon;
      codes[2].textContent = dept.icon;

      document.getElementById('result-icon').textContent = dept.icon;
      document.getElementById('result-name').textContent = selectedDept + ' Department';
      document.getElementById('result-desc').textContent = dept.desc;
      document.getElementById('result').classList.remove('hidden');
    });
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Abiotic Factor Department Puzzle"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
