'use client'

export default function SoulmaskSkillEmbed() {
  // Soulmask 部落原始风格
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes glow {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.3); }
    }
    body { background: linear-gradient(180deg, #292524 0%, #1c1917 100%); }
    .mask-glow { animation: glow 2s infinite; }
    .spinning { animation: spin 0.5s linear infinite; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
  <div class="text-center mb-4">
    <div class="text-4xl mb-1 mask-glow">🎭</div>
    <h1 class="text-lg font-bold text-orange-400">Soulmask</h1>
    <p class="text-xs text-gray-500">Mask Skill Randomizer</p>
  </div>

  <div id="mask-display" class="w-40 h-40 rounded-full bg-gradient-to-br from-orange-800 to-red-900 border-4 border-orange-600 flex items-center justify-center mb-4 shadow-xl" style="box-shadow: 0 0 40px rgba(234, 88, 12, 0.4);">
    <span id="mask-icon" class="text-6xl">🎭</span>
  </div>

  <div id="skill-slots" class="grid grid-cols-3 gap-2 mb-4 w-full max-w-xs">
    <div class="bg-gray-800/80 rounded p-2 text-center border border-gray-700">
      <p class="text-xs text-gray-500 mb-1">Skill 1</p>
      <span id="skill-1" class="text-2xl">❓</span>
    </div>
    <div class="bg-gray-800/80 rounded p-2 text-center border border-gray-700">
      <p class="text-xs text-gray-500 mb-1">Skill 2</p>
      <span id="skill-2" class="text-2xl">❓</span>
    </div>
    <div class="bg-gray-800/80 rounded p-2 text-center border border-gray-700">
      <p class="text-xs text-gray-500 mb-1">Skill 3</p>
      <span id="skill-3" class="text-2xl">❓</span>
    </div>
  </div>

  <button id="randomize-btn" class="px-8 py-3 bg-gradient-to-r from-orange-700 to-red-600 hover:from-orange-600 hover:to-red-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95 mb-4" style="box-shadow: 0 4px 20px rgba(234, 88, 12, 0.5);">
    🎲 RANDOMIZE MASK
  </button>

  <div id="result" class="bg-gray-800/80 rounded-xl p-4 border border-orange-800 w-full max-w-xs hidden">
    <p class="text-center text-orange-400 font-bold mb-2">Mask Acquired!</p>
    <p id="mask-name" class="text-center text-white text-lg mb-1"></p>
    <p id="mask-bonus" class="text-center text-gray-400 text-sm"></p>
  </div>

  <script>
    var masks = [
      { name: 'Warrior Mask', icon: '⚔️', skills: ['💥 Smash', '🛡️ Block', '⚡ Charge'], bonus: '+20% Melee Damage' },
      { name: 'Hunter Mask', icon: '🏹', skills: ['🎯 Aimed Shot', '🐾 Track', '🌲 Camouflage'], bonus: '+25% Ranged Damage' },
      { name: 'Shaman Mask', icon: '🔮', skills: ['✨ Heal', '⛈️ Storm', '🌀 Spirit Link'], bonus: '+30% Magic Power' },
      { name: 'Guardian Mask', icon: '🛡️', skills: ['💪 Fortify', '🧱 Wall', '🙌 Taunt'], bonus: '+35% Defense' },
      { name: 'Berserker Mask', icon: '😤', skills: ['🔥 Rage', '💀 Execute', '🩸 Bloodlust'], bonus: '+40% Attack Speed' },
      { name: 'Shadow Mask', icon: '🌑', skills: ['👻 Vanish', '🗡️ Backstab', '💨 Dash'], bonus: '+25% Critical Hit' },
      { name: 'Tribe Mask', icon: '👥', skills: ['📢 Rally', '🤝 Bond', '🎺 War Cry'], bonus: '+20% Tribe HP' },
      { name: 'Beast Mask', icon: '🐺', skills: ['🦷 Bite', '🐾 Pounce', '👁️ Beast Sense'], bonus: '+30% Movement Speed' },
    ];

    var acquiredMasks = [];

    document.getElementById('randomize-btn').addEventListener('click', function() {
      var mask = masks[Math.floor(Math.random() * masks.length)];
      document.getElementById('mask-icon').classList.add('spinning');
      document.getElementById('result').classList.add('hidden');

      setTimeout(function() {
        document.getElementById('mask-icon').classList.remove('spinning');
        document.getElementById('mask-icon').textContent = mask.icon;
        document.getElementById('skill-1').textContent = mask.skills[0] ? mask.skills[0].split(' ')[0] : '❓';
        document.getElementById('skill-2').textContent = mask.skills[1] ? mask.skills[1].split(' ')[0] : '❓';
        document.getElementById('skill-3').textContent = mask.skills[2] ? mask.skills[2].split(' ')[0] : '❓';
        document.getElementById('skill-1').title = mask.skills[0];
        document.getElementById('skill-2').title = mask.skills[1];
        document.getElementById('skill-3').title = mask.skills[2];
        document.getElementById('mask-name').textContent = mask.name;
        document.getElementById('mask-bonus').textContent = mask.bonus;
        document.getElementById('result').classList.remove('hidden');

        if (!acquiredMasks.includes(mask.name)) {
          acquiredMasks.push(mask.name);
        }
      }, 500);
    });
  </script>
</body>
</html>`

  return (
    <iframe
      srcDoc={html}
      className="w-full h-[520px] border-0 rounded-xl"
      title="Soulmask Skill Randomizer"
      sandbox="allow-scripts allow-same-origin"
    />
  )
}
