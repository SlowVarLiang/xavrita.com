export interface Html5Game {
  slug: string
  name: string
  category: string
  emoji: string
  thumbnail: string
  gameUrl: string
  developer?: string
  description: string
  controls?: string
  tags: string[]
  featured?: boolean
  isLocal?: boolean
}

export const categories = [
  'All',
  'Action',
  'Puzzle',
  'io',
  'Arcade',
  'Multiplayer',
  'Racing',
  'Strategy',
]

export const html5Games: Html5Game[] = [
  // === FEATURED (Homepage Hero) ===
  {
    slug: 'space-royale',
    name: 'Space Royale',
    category: 'Action',
    emoji: '🚀',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/fox/wrangler/index.html',
    developer: 'js13kGames',
    description: 'Last pilot standing wins. Grab your ship, outmaneuver rivals, and don't let the void win.',
    controls: 'WASD to move, Mouse to aim, Click to shoot',
    tags: ['battle-royale', 'space', 'shooter', 'multiplayer'],
    featured: true,
  },

  // === ACTION ===
  {
    slug: 'neon-blaster',
    name: 'Neon Blaster',
    category: 'Action',
    emoji: '⚡',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/battery/main.js',
    developer: 'js13kGames',
    description: 'Synthwave dreams, pixel nightmares. Shoot first, ask questions never.',
    controls: 'WASD to move, Mouse to aim, Click to shoot',
    tags: ['shooter', 'neon', 'arcade', 'wave-shooter'],
  },
  {
    slug: 'blade-rush',
    name: 'Blade Rush',
    category: 'Action',
    emoji: '🗡️',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=450&fit=crop',
    gameUrl: 'https://itch.io/embed/1891643?border=0',
    developer: 'Indie Dev',
    description: 'Slash, dodge, combo. Become the blade master you were born to be.',
    controls: 'WASD to move, J to attack, K to dodge',
    tags: ['hack-and-slash', 'combo', 'upgrade'],
  },
  {
    slug: 'gravity-flip',
    name: 'Gravity Flip',
    category: 'Action',
    emoji: '🌀',
    thumbnail: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/gravity/main.js',
    developer: 'js13kGames',
    description: 'Up is down, down is up. Ceiling walking has never felt this good.',
    controls: 'Space to flip gravity, WASD to move',
    tags: ['platformer', 'gravity', 'puzzle-action'],
  },
  {
    slug: 'tower-assault',
    name: 'Tower Assault',
    category: 'Action',
    emoji: '🏰',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
    gameUrl: 'https://itch.io/embed/1891600?border=0',
    developer: 'Indie Dev',
    description: 'Enemies incoming. Towers up. Let the siege begin.',
    controls: 'Click to place towers, 1-3 to select tower type',
    tags: ['tower-defense', 'strategy', 'wave'],
  },

  // === PUZZLE ===
  {
    slug: 'block-smash',
    name: 'Block Smash',
    category: 'Puzzle',
    emoji: '🧱',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/block-smash/index.html',
    developer: 'js13kGames',
    description: 'Same color, same fate. Click, boom, repeat. Dangerously satisfying.',
    controls: 'Click groups of same-colored blocks to destroy',
    tags: ['match-3', 'puzzle', 'casual'],
  },
  {
    slug: 'logic-maze',
    name: 'Logic Maze',
    category: 'Puzzle',
    emoji: '🧩',
    thumbnail: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/maze/main.js',
    developer: 'js13kGames',
    description: 'Lost? Good. That dead end you just hit? Also a path.',
    controls: 'Arrow keys to move',
    tags: ['maze', 'logic', 'brain-teaser'],
  },
  {
    slug: 'color-flow',
    name: 'Color Flow',
    category: 'Puzzle',
    emoji: '🎨',
    thumbnail: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/flow/main.js',
    developer: 'js13kGames',
    description: 'Connect the dots. Same colors only. Zen mode: activated.',
    controls: 'Click and drag to connect same-colored dots',
    tags: ['flow', 'connect', 'relaxing'],
  },
  {
    slug: 'pixel-slide',
    name: 'Pixel Slide',
    category: 'Puzzle',
    emoji: '📱',
    thumbnail: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/slide/main.js',
    developer: 'js13kGames',
    description: 'One tile out of place. Classic problem. Can you fix it?',
    controls: 'Click adjacent tile to slide',
    tags: ['sliding-puzzle', 'pixel-art', 'classic'],
  },
  {
    slug: 'word-blitz',
    name: 'Word Blitz',
    category: 'Puzzle',
    emoji: '📝',
    thumbnail: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/word/main.js',
    developer: 'js13kGames',
    description: 'Letters scattered. Timer ticking. Your vocabulary vs. your panic.',
    controls: 'Click letters or type to form words',
    tags: ['word', 'timed', 'vocabulary'],
  },

  // === IO GAMES ===
  {
    slug: 'agar-clone',
    name: 'Agar Clone',
    category: 'io',
    emoji: '🔵',
    thumbnail: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&h=450&fit=crop',
    gameUrl: 'https:// agar.io',
    developer: 'Open Source',
    description: 'Bigger blob eats smaller blob. Nature\'s rule, no exceptions.',
    controls: 'Mouse to move',
    tags: ['io', 'multiplayer', 'survival', 'agar'],
    isLocal: false,
  },
  {
    slug: 'paper-io-clone',
    name: 'Paper Trail',
    category: 'io',
    emoji: '📄',
    thumbnail: 'https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=450&fit=crop',
    gameUrl: 'https://paper-io.com',
    developer: 'paper.io',
    description: 'Draw lines, claim squares. Territory wars, one stroke at a time.',
    controls: 'Mouse to move',
    tags: ['io', 'territory', 'multiplayer'],
  },
  {
    slug: 'diep-clone',
    name: 'Diep Arena',
    category: 'io',
    emoji: '🎯',
    thumbnail: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=450&fit=crop',
    gameUrl: 'https://diep.io',
    developer: 'diep.io',
    description: 'Squares, triangles, pentagons — shoot them all. Tank upgrades await.',
    controls: 'Mouse to aim, WASD to move, Click to shoot',
    tags: ['io', 'tank', 'multiplayer', 'shooter'],
  },
  {
    slug: 'slither-clone',
    name: 'Slither Zone',
    category: 'io',
    emoji: '🐍',
    thumbnail: 'https://images.unsplash.com/photo-1550895037-1e8d64c47f6d?w=800&h=450&fit=crop',
    gameUrl: 'https://slither.io',
    developer: 'slither.io',
    description: 'Collect orbs, grow longer. Ram others, regret nothing.',
    controls: 'Mouse to control direction',
    tags: ['io', 'snake', 'multiplayer'],
  },
  {
    slug: 'hexarena',
    name: 'Hex Arena',
    category: 'io',
    emoji: '⬡',
    thumbnail: 'https://images.unsplash.com/photo-1552652893-35687a7400b6?w=800&h=450&fit=crop',
    gameUrl: 'https://hex.io',
    developer: 'hex.io',
    description: 'Hex tank. Upgrades. Mayhem. What more do you need?',
    controls: 'WASD to move, Mouse to aim',
    tags: ['io', 'hex', 'tank', 'multiplayer'],
  },

  // === ARCADE ===
  {
    slug: 'flappy-clone',
    name: 'Flappy Flight',
    category: 'Arcade',
    emoji: '🐦',
    thumbnail: 'https://images.unsplash.com/photo-1457195740896-7f345efef228?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/flappy/main.js',
    developer: 'js13kGames',
    description: 'That bird. Those pipes. How is this still fun after all these years?',
    controls: 'Space or Click to flap',
    tags: ['arcade', 'flappy-bird', 'classic'],
  },
  {
    slug: 'retro-racer',
    name: 'Retro Racer',
    category: 'Arcade',
    emoji: '🏎️',
    thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/racer/main.js',
    developer: 'js13kGames',
    description: 'Eight-bit speed, zero forgiveness. Top that high score.',
    controls: 'Arrow keys to steer, Space to brake',
    tags: ['racing', 'retro', 'arcade'],
  },
  {
    slug: 'brick-breaker',
    name: 'Brick Breaker',
    category: 'Arcade',
    emoji: '🧱',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/brick/main.js',
    developer: 'js13kGames',
    description: 'Ball goes brrr. Bricks go boom. Paddle... does its best.',
    controls: 'Mouse to move paddle',
    tags: ['arkanoid', 'classic', 'arcade'],
  },
  {
    slug: 'snake-classic',
    name: 'Snake Classic',
    category: 'Arcade',
    emoji: '🐍',
    thumbnail: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/snake/main.js',
    developer: 'js13kGames',
    description: 'Nokia approved. Pixel hunger never gets old.',
    controls: 'Arrow keys to move',
    tags: ['snake', 'classic', 'arcade'],
  },
  {
    slug: 'space-invaders-clone',
    name: 'Star Assault',
    category: 'Arcade',
    emoji: '👾',
    thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/invaders/main.js',
    developer: 'js13kGames',
    description: '1978 called. It wants its arcade back. You\'re not giving it back.',
    controls: 'Arrow keys to move, Space to shoot',
    tags: ['space-invaders', 'classic', 'shooter'],
  },

  // === MULTIPLAYER ===
  {
    slug: 'tank-battle',
    name: 'Tank Battle',
    category: 'Multiplayer',
    emoji: '🎮',
    thumbnail: 'https://images.unsplash.com/photo-1544751565-56d2c3a4ef6e?w=800&h=450&fit=crop',
    gameUrl: 'https:// tanks-mp.com',
    developer: 'Tanks MP',
    description: 'Real-time tank wars. Explosions, teamwork, and zero respawn patience.',
    controls: 'WASD to move, Mouse to aim, Click to shoot',
    tags: ['multiplayer', 'tank', 'team-deathmatch'],
  },
  {
    slug: 'card-duel',
    name: 'Card Duel',
    category: 'Multiplayer',
    emoji: '🃏',
    thumbnail: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=450&fit=crop',
    gameUrl: 'https:// itch.io/embed/card-game',
    developer: 'Indie Dev',
    description: 'Build your deck. Outsmart your opponent. May the best cards win.',
    controls: 'Click to play cards, Drag to rearrange',
    tags: ['card-game', 'strategy', 'multiplayer'],
  },

  // === RACING ===
  {
    slug: 'neon-drift',
    name: 'Neon Drift',
    category: 'Racing',
    emoji: '🏁',
    thumbnail: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/drift/main.js',
    developer: 'js13kGames',
    description: 'Handbrake on. World turns neon. You\'re already late for the checkpoint.',
    controls: 'Arrow keys to steer, Space to handbrake',
    tags: ['racing', 'drift', 'neon'],
  },
  {
    slug: 'rocket-racer',
    name: 'Rocket Racer',
    category: 'Racing',
    emoji: '🚀',
    thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/rocket/main.js',
    developer: 'js13kGames',
    description: 'Boost. Burn. Repeat. How fast can you handle it?',
    controls: 'WASD to control, Shift to boost',
    tags: ['racing', 'rocket', 'speed'],
  },

  // === STRATEGY ===
  {
    slug: 'kingdom-defense',
    name: 'Kingdom Defense',
    category: 'Strategy',
    emoji: '👑',
    thumbnail: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&h=450&fit=crop',
    gameUrl: 'https://js13kgames.com/games/kingdom/main.js',
    developer: 'js13kGames',
    description: 'They\'re coming. Your kingdom depends on your unit placement skills.',
    controls: 'Click to place units, 1-4 for unit selection',
    tags: ['strategy', 'defense', 'medieval'],
  },
  {
    slug: 'chess-pvp',
    name: 'Chess PvP',
    category: 'Strategy',
    emoji: '♟️',
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=450&fit=crop',
    gameUrl: 'https:// chess.com',
    developer: 'Chess.com',
    description: 'Queen takes pawn. Classic. Now it\'s personal.',
    controls: 'Click to select piece, Click destination to move',
    tags: ['chess', 'strategy', 'multiplayer', 'classic'],
  },
]

export function getGameBySlug(slug: string): Html5Game | undefined {
  return html5Games.find(g => g.slug === slug)
}

export function getFeaturedGame(): Html5Game | undefined {
  return html5Games.find(g => g.featured)
}

export function getGamesByCategory(category: string): Html5Game[] {
  if (category === 'All') return html5Games
  return html5Games.filter(g => g.category === category)
}

export function getRelatedGames(game: Html5Game, limit = 4): Html5Game[] {
  return html5Games
    .filter(g => g.slug !== game.slug && g.category === game.category)
    .slice(0, limit)
}
