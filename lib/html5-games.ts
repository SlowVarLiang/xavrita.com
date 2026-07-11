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
}

export const categories = [
  'All',
  'Action',
  'Puzzle',
  'io',
  'Arcade',
  'Racing',
  'Strategy',
]

export const html5Games: Html5Game[] = [
  // === FEATURED ===
  {
    slug: 'cluster-rush',
    name: 'Cluster Rush',
    category: 'Action',
    emoji: '🟩',
    thumbnail: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/cluster-rush',
    developer: 'Madbox',
    description: 'Stickman parkour chaos. Climb, dodge, survive. How far can you go?',
    controls: 'WASD or Arrow keys to move, Space to jump',
    tags: ['stickman', 'parkour', 'obstacle'],
    featured: true,
  },

  // === IO GAMES ===
  {
    slug: 'agar-io',
    name: 'Agar.io',
    category: 'io',
    emoji: '🔵',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    gameUrl: 'https:// agar.io',
    developer: 'Agar.io',
    description: 'Bigger eats smaller. You know the rule.',
    controls: 'Mouse to move',
    tags: ['io', 'multiplayer', 'survival'],
  },
  {
    slug: 'slither-io',
    name: 'Slither.io',
    category: 'io',
    emoji: '🐍',
    thumbnail: 'https://images.unsplash.com/photo-1550895037-1e8d64c47f6d?w=800&h=450&fit=crop',
    gameUrl: 'https:// slither.io',
    developer: 'Slither.io',
    description: 'Grow your snake. Ram others. Become the biggest creep.',
    controls: 'Mouse to move',
    tags: ['io', 'snake', 'multiplayer'],
  },
  {
    slug: 'paper-io',
    name: 'Paper.io',
    category: 'io',
    emoji: '📄',
    thumbnail: 'https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=450&fit=crop',
    gameUrl: 'https:// paper-io.com',
    developer: 'Paper.io',
    description: 'Draw lines. Claim territory. Don\'t get cut off.',
    controls: 'Mouse to move',
    tags: ['io', 'territory', 'multiplayer'],
  },
  {
    slug: 'diep-io',
    name: 'Diep.io',
    category: 'io',
    emoji: '🎯',
    thumbnail: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=450&fit=crop',
    gameUrl: 'https:// diep.io',
    developer: 'Diep.io',
    description: 'Shoot shapes. Level up your tank. Dominate the arena.',
    controls: 'Mouse to aim, WASD to move, Click to shoot',
    tags: ['io', 'tank', 'shooter'],
  },
  {
    slug: 'mope-io',
    name: 'Mope.io',
    category: 'io',
    emoji: '🦊',
    thumbnail: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&h=450&fit=crop',
    gameUrl: 'https:// mope.io',
    developer: 'Mope.io',
    description: 'Eat. Evolve. Escape. The food chain starts with you.',
    controls: 'WASD or Arrow keys to move',
    tags: ['io', 'survival', 'animals'],
  },
  {
    slug: 'hex-io',
    name: 'Hex.io',
    category: 'io',
    emoji: '⬡',
    thumbnail: 'https://images.unsplash.com/photo-1552652893-35687a7400b6?w=800&h=450&fit=crop',
    gameUrl: 'https:// hex.io',
    developer: 'Hex.io',
    description: 'Build your hex tank. Upgrade. Wreck others.',
    controls: 'WASD to move, Mouse to aim',
    tags: ['io', 'hex', 'tank'],
  },

  // === ACTION ===
  {
    slug: 'subway-surfers',
    name: 'Subway Surfers',
    category: 'Action',
    emoji: '🚃',
    thumbnail: 'https://images.unsplash.com/photo-1517502884422-41f1b7fc9c83?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/subway-surfers',
    developer: 'Kiloo',
    description: 'Dash through the city. Jump trains. Don\'t get caught.',
    controls: 'Swipe or Arrow keys to jump, roll, switch lanes',
    tags: ['endless-runner', 'action', 'city'],
  },
  {
    slug: 'temple-run',
    name: 'Temple Run',
    category: 'Action',
    emoji: '🏃',
    thumbnail: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/temple-run',
    developer: 'Imangi',
    description: 'Run. Dodge. Escape. Classic endless runner.',
    controls: 'Swipe to turn, Up to jump, Down to slide',
    tags: ['endless-runner', 'action', 'adventure'],
  },
  {
    slug: 'cookie-clicker',
    name: 'Cookie Clicker',
    category: 'Action',
    emoji: '🍪',
    thumbnail: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/cookie-clicker',
    developer: 'Orteil',
    description: 'Click cookies. Buy upgrades. Become a cookie empire.',
    controls: 'Click the cookie',
    tags: ['clicker', 'idle', 'addictive'],
  },
  {
    slug: 'run-3',
    name: 'Run 3',
    category: 'Action',
    emoji: '🌙',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/run-3',
    developer: 'Player 55',
    description: 'Run through space tunnels. Gravity shifts. Don\'t fall.',
    controls: 'Arrow keys or WASD to move',
    tags: ['endless-runner', 'space', 'gravity'],
  },
  {
    slug: 'zombie-tsunami',
    name: 'Zombie Tsunami',
    category: 'Action',
    emoji: '🧟',
    thumbnail: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/zombie-tsunami',
    developer: 'Mobe',
    description: 'Turn into a zombie horde. Consume. Infect. Overwhelm.',
    controls: 'Click to jump',
    tags: ['zombie', 'endless-runner', 'action'],
  },

  // === ARCADE ===
  {
    slug: 'flappy-bird',
    name: 'Flappy Bird',
    category: 'Arcade',
    emoji: '🐦',
    thumbnail: 'https://images.unsplash.com/photo-1457195740896-7f345efef228?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/flappy-bird',
    developer: 'Gears',
    description: 'That bird. Those pipes. This is your moment.',
    controls: 'Click or Space to flap',
    tags: ['classic', 'flappy', 'hard'],
  },
  {
    slug: 'snake',
    name: 'Snake',
    category: 'Arcade',
    emoji: '🐍',
    thumbnail: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/snake',
    developer: 'Snake',
    description: 'Eat. Grow. Survive. The original time waster.',
    controls: 'Arrow keys to move',
    tags: ['classic', 'snake', 'retro'],
  },
  {
    slug: 'tetris',
    name: 'Tetris',
    category: 'Arcade',
    emoji: '🟦',
    thumbnail: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/tetris',
    developer: 'Tetris',
    description: 'Stack blocks. Clear lines. Tetris never gets old.',
    controls: 'Arrow keys to move and rotate',
    tags: ['classic', 'tetris', 'puzzle'],
  },
  {
    slug: 'pong',
    name: 'Pong',
    category: 'Arcade',
    emoji: '🏓',
    thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/pong',
    developer: 'Atari',
    description: 'Paddle vs paddle. Ping vs pong. The OG arcade duel.',
    controls: 'W/S or Arrow keys to move paddle',
    tags: ['classic', 'pong', 'retro'],
  },
  {
    slug: 'breakout',
    name: 'Breakout',
    category: 'Arcade',
    emoji: '🧱',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/breakout',
    developer: 'Atari',
    description: 'Ball vs bricks. Classic arkanoid action.',
    controls: 'Mouse to move paddle',
    tags: ['arkanoid', 'brick-breaker', 'classic'],
  },

  // === PUZZLE ===
  {
    slug: '2048',
    name: '2048',
    category: 'Puzzle',
    emoji: '🎲',
    thumbnail: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/2048',
    developer: 'Gabriele',
    description: 'Add tiles. Double up. Hit 2048. Simple. Dangerous.',
    controls: 'Arrow keys to slide',
    tags: ['numbers', 'puzzle', 'classic'],
  },
  {
    slug: 'memory',
    name: 'Memory',
    category: 'Puzzle',
    emoji: '🧠',
    thumbnail: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/memory',
    developer: 'Memory',
    description: 'Match pairs. Test your memory. Find all the matches.',
    controls: 'Click to flip cards',
    tags: ['memory', 'matching', 'brain'],
  },
  {
    slug: 'mahjong',
    name: 'Mahjong',
    category: 'Puzzle',
    emoji: '🀄',
    thumbnail: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/mahjong',
    developer: 'Mahjong',
    description: 'Match tiles. Clear the board. Classic solitaire.',
    controls: 'Click matching free tiles',
    tags: ['mahjong', 'solitaire', 'tile-matching'],
  },
  {
    slug: 'bubble-shooter',
    name: 'Bubble Shooter',
    category: 'Puzzle',
    emoji: '🫧',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/bubble-shooter',
    developer: 'Bubble Shooter',
    description: 'Pop bubbles. Clear the ceiling. Chain reactions.',
    controls: 'Mouse to aim, Click to shoot',
    tags: ['bubble-shooter', 'puzzle', 'classic'],
  },

  // === RACING ===
  {
    slug: 'highway-racing',
    name: 'Highway Racing',
    category: 'Racing',
    emoji: '🏎️',
    thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/highway-racing',
    developer: 'Highway Racing',
    description: 'Speed. Weave. Survive the highway. Full throttle.',
    controls: 'Arrow keys to steer, Space to brake',
    tags: ['racing', 'driving', 'avoid'],
  },
  {
    slug: 'rally',
    name: 'Neon Rally',
    category: 'Racing',
    emoji: '🏁',
    thumbnail: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/neon-rally',
    developer: 'Rally',
    description: 'Neon tracks. Tight turns. Race against the clock.',
    controls: 'Arrow keys to drive',
    tags: ['racing', 'drift', 'neon'],
  },
  {
    slug: 'bike',
    name: 'Moto Bike',
    category: 'Racing',
    emoji: '🏍️',
    thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/moto-trial-rtg-2',
    developer: 'Moto',
    description: 'Two wheels. One goal. Master the terrain.',
    controls: 'Arrow keys to balance and accelerate',
    tags: ['racing', 'bike', 'motorcycle'],
  },

  // === STRATEGY ===
  {
    slug: 'chess',
    name: 'Chess',
    category: 'Strategy',
    emoji: '♟️',
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/chess',
    developer: 'Chess',
    description: 'Queen takes pawn. Classic. Now it\'s personal.',
    controls: 'Click to select, click to move',
    tags: ['chess', 'strategy', 'classic'],
  },
  {
    slug: 'connect-four',
    name: 'Connect Four',
    category: 'Strategy',
    emoji: '🔴',
    thumbnail: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/connect-four',
    developer: 'Connect Four',
    description: 'Four in a row. Red vs yellow. Think ahead.',
    controls: 'Click column to drop piece',
    tags: ['strategy', 'connect', 'two-player'],
  },
  {
    slug: 'darts',
    name: 'Darts',
    category: 'Strategy',
    emoji: '🎯',
    thumbnail: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/darts',
    developer: 'Darts',
    description: 'Aim. Throw. Bullseye. Virtual darts night.',
    controls: 'Click and drag to throw',
    tags: ['darts', 'aim', 'precision'],
  },
  {
    slug: 'tower-defense',
    name: 'Tower Defense',
    category: 'Strategy',
    emoji: '🏰',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
    gameUrl: 'https://www.crazygames.com/embed/tower-shulte',
    developer: 'Tower Defense',
    description: 'Place towers. Stop the wave. Defend your base.',
    controls: 'Click to place towers',
    tags: ['tower-defense', 'strategy', 'defense'],
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
