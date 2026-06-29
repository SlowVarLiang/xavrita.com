'use client'

export default function BloodTypeSpinnerEmbed() {
  // V Rising 哥特暗黑风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
      50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
    }
    body { background: linear-gradient(180deg, #0f0f1a 0%, #1a0a0a 100%); }
    .blood-glow { animation: glow 2s infinite; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-6">
    <div class="text-4xl mb-2">🧛</div>
    <h1 class="text-xl font-bold text-purple-300">V Rising</h1>
    <p class="text-xs text-gray-500">Blood Type Roulette</p>
  </div>

  <div class="relative w-64 h-64 mb-6">
    <div class="absolute inset-0 rounded-full border-4 border-purple-900 shadow-lg blood-glow"></div>
    <div class="absolute inset-1 rounded-full overflow-hidden" id="wheel" style="transition-duration: 4s; transition-timing-function: cubic-bezier(0.17, 0.67, 0.12, 0.99);">
      <div class="grid grid-cols-2 grid-rows-4 h-full w-full">
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #1e40af, #3b82f6)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #3b82f6;">Worker</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #991b1b, #ef4444)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #ef4444;">Brute</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #854d0e, #eab308)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #eab308;">Scholar</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #7c3aed, #a855f7)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #a855f7;">Rogue</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #15803d, #22c55e)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #22c55e;">Merchant</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #334155, #64748b)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #64748b;">Guardian</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #c2410c, #f97316)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #f97316;">Hunter</span>
        </div>
        <div class="flex items-center justify-center border border-black/30" style="background: linear-gradient(135deg, #9d174d, #ec4899)">
          <span class="text-white font-bold text-xs" style="writing-mode: vertical-rl; transform: rotate(180deg); text-shadow: 0 0 10px #ec4899;">Dread</span>
        </div>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-950 rounded-full border-4 border-red-700 shadow-lg z-10 flex items-center justify-center" style="box-shadow: 0 0 30px rgba(220, 38, 38, 0.6);">
      <span class="text-2xl">🩸</span>
    </div>
    <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-red-600 z-20"></div>
  </div>

  <button id="spin-btn" class="px-8 py-3 bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 disabled:from-gray-700 disabled:to-gray-600 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95" style="box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);">
    SPIN TO HUNT
  </button>

  <div id="result" class="mt-6 text-center hidden">
    <div class="bg-gradient-to-b from-red-950/80 to-gray-900 rounded-xl p-6 border border-red-900 min-w-[220px]" style="box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);">
      <p class="text-xs text-gray-400 mb-2 uppercase tracking-wider">Your Blood Type</p>
      <h3 id="result-name" class="text-2xl font-bold text-white mb-1"></h3>
      <p id="result-rarity" class="text-sm mb-3"></p>
      <p id="result-bonus" class="text-purple-400 font-semibold text-sm mb-2"></p>
      <p id="result-desc" class="text-gray-400 text-xs"></p>
    </div>
  </div>

  <script>
    const bloodTypes = [
      { name: 'Worker Blood', color: '#3b82f6', bonus: '+25% Resource Gathering', description: 'Perfect for base building and progression', rarity: 'Common', rarityColor: '#6b7280' },
      { name: 'Brute Blood', color: '#ef4444', bonus: '+30% Physical Power', description: 'Dominate in PvP and melee combat', rarity: 'Common', rarityColor: '#6b7280' },
      { name: 'Scholar Blood', color: '#eab308', bonus: '+35% Spell Power', description: 'Maximize your magic build potential', rarity: 'Common', rarityColor: '#6b7280' },
      { name: 'Rogue Blood', color: '#a855f7', bonus: '+20% Move Speed, +15% Attack', description: 'Ideal for ganking and hit-and-run', rarity: 'Uncommon', rarityColor: '#22c55e' },
      { name: 'Merchant Blood', color: '#22c55e', bonus: '+40% Trade Value', description: 'Master the economy and get rich fast', rarity: 'Uncommon', rarityColor: '#22c55e' },
      { name: 'Guardian Blood', color: '#64748b', bonus: '+30% Damage Resistance', description: 'Become an unbreakable tank', rarity: 'Rare', rarityColor: '#3b82f6' },
      { name: 'Hunter Blood', color: '#f97316', bonus: '+35% Critical Chance', description: 'Strike with deadly precision', rarity: 'Rare', rarityColor: '#3b82f6' },
      { name: 'Dread Blood', color: '#ec4899', bonus: '+25% Life Steal', description: 'Sustain through any fight', rarity: 'Epic', rarityColor: '#a855f7' },
    ];

    let rotation = 0;
    let isSpinning = false;

    document.getElementById('spin-btn').addEventListener('click', function() {
      if (isSpinning) return;
      isSpinning = true;
      document.getElementById('result').classList.add('hidden');

      var randomIndex = Math.floor(Math.random() * bloodTypes.length);
      var rotations = 5 + Math.random() * 3;
      var anglePerSegment = 360 / bloodTypes.length;
      rotation = rotation + rotations * 360 + (bloodTypes.length - randomIndex) * anglePerSegment + anglePerSegment / 2;

      document.getElementById('wheel').style.transform = 'rotate(' + rotation + 'deg)';

      setTimeout(function() {
        var blood = bloodTypes[randomIndex];
        document.getElementById('result-name').textContent = blood.name;
        document.getElementById('result-name').style.textShadow = '0 0 20px ' + blood.color;
        document.getElementById('result-rarity').textContent = blood.rarity;
        document.getElementById('result-rarity').style.color = blood.rarityColor;
        document.getElementById('result-bonus').textContent = blood.bonus;
        document.getElementById('result-desc').textContent = blood.description;
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('result').style.animation = 'fade-in 0.5s ease-out';
        isSpinning = false;
      }, 4000);
    });
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="V Rising Blood Type Spinner"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
