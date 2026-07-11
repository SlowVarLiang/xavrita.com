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
    slug: 'cluster-cats',
    name: 'Cluster Rush',
    category: 'Action',
    emoji: '🟩',
    thumbnail: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/cluster-rush',
    developer: 'Poki',
    description: 'Stickman fun meets parkour chaos. Grab friends or go solo — climb, dodge, survive.',
    controls: 'WASD or Arrow keys to move, Space to jump',
    tags: ['stickman', 'parkour', 'multiplayer'],
    featured: true,
  },

  // === ACTION ===
  {
    slug: 'mask-catchers',
    name: 'Mask Catchers',
    category: 'Action',
    emoji: '🎭',
    thumbnail: 'https://images.unsplash.com/photo-1600804889194-e1e1e1e1e1e1?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/mask-catchers',
    developer: 'Poki',
    description: 'Throw masks, catch masks, don\'t drop the beat. Rhythm meets reflex.',
    controls: 'Click to throw masks to the beat',
    tags: ['rhythm', 'action', 'fun'],
  },
  {
    slug: 'bottle-flip',
    name: 'Bottle Flip',
    category: 'Action',
    emoji: '🍾',
    thumbnail: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/bottle-flip',
    developer: 'Poki',
    description: 'Land the flip. Nailed it. Next bottle.',
    controls: 'Click or Space to flip',
    tags: ['flip', 'timing', 'skill'],
  },
  {
    slug: 'temple-run-2',
    name: 'Temple Run 2',
    category: 'Action',
    emoji: '🏃',
    thumbnail: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/temple-run-2',
    developer: 'Poki',
    description: 'Run. Dodge. Escape the monkeys. Classic endless runner, browser edition.',
    controls: 'Swipe or Arrow keys to turn, Up to jump, Down to slide',
    tags: ['endless-runner', 'action', 'adventure'],
  },
  {
    slug: 'subway-surfers',
    name: 'Subway Surfers',
    category: 'Action',
    emoji: '🚃',
    thumbnail: 'https://images.unsplash.com/photo-1517502884422-41f1b7fc9c83?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/subway-surfers',
    developer: 'Poki',
    description: 'Dash through the city. Hops trains, avoid the cop. Classic chase madness.',
    controls: 'Swipe to jump, roll, switch tracks',
    tags: ['endless-runner', 'action', 'city'],
  },

  // === IO GAMES ===
  {
    slug: 'agar-io',
    name: 'Agar.io',
    category: 'io',
    emoji: '🔵',
    thumbnail: 'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&h=450&fit=crop',
    gameUrl: 'https:// agar.io',
    developer: 'Agar.io',
    description: 'Bigger eats smaller. Rule number one of the petri dish.',
    controls: 'Mouse to move',
    tags: ['io', 'multiplayer', 'survival'],
  },
  {
    slug: 'slither-io',
    name: 'Slither.io',
    category: 'io',
    emoji: '🐍',
    thumbnail: 'https://images.unsplash.com/photo-1550895037-1e8d64c47f6d?w=800&h=450&fit=crop',
    gameUrl: 'https://slither.io',
    developer: 'Slither.io',
    description: 'Grow your snake. Ram others. Claim the title of biggest creep.',
    controls: 'Mouse to control direction',
    tags: ['io', 'snake', 'multiplayer'],
  },
  {
    slug: 'paper-io-2',
    name: 'Paper.io 2',
    category: 'io',
    emoji: '📄',
    thumbnail: 'https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&h=450&fit=crop',
    gameUrl: 'https://paper-io.com',
    developer: 'Paper.io',
    description: 'Draw. Claim. Conquer. Territory wars in your browser.',
    controls: 'Mouse to move',
    tags: ['io', 'territory', 'multiplayer'],
  },
  {
    slug: 'diep-io',
    name: 'Diep.io',
    category: 'io',
    emoji: '🎯',
    thumbnail: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=450&fit=crop',
    gameUrl: 'https://diep.io',
    developer: 'Diep.io',
    description: 'Squares, triangles, pentagons — destroy them all. Tank up.',
    controls: 'Mouse to aim, WASD to move, Click to shoot',
    tags: ['io', 'tank', 'shooter'],
  },
  {
    slug: 'mope-io',
    name: 'Mope.io',
    category: 'io',
    emoji: '🦊',
    thumbnail: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&h=450&fit=crop',
    gameUrl: 'https://mope.io',
    developer: 'Mope.io',
    description: 'Eat, evolve, escape. The food chain starts with you.',
    controls: 'WASD or Arrow keys to move',
    tags: ['io', 'survival', 'animals'],
  },
  {
    slug: 'ev_io',
    name: 'Ev.io',
    category: 'io',
    emoji: '🔫',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop',
    gameUrl: 'https://ev.io',
    developer: 'Ev.io',
    description: 'Arena shooter meets io. Fast rounds, instant respawn. pew pew.',
    controls: 'WASD to move, Mouse to aim, Click to shoot',
    tags: ['io', 'shooter', 'fps'],
  },

  // === ARCADE ===
  {
    slug: 'flappy-bird',
    name: 'Flappy Bird',
    category: 'Arcade',
    emoji: '🐦',
    thumbnail: 'https://images.unsplash.com/photo-1457195740896-7f345efef228?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/flappy-bird',
    developer: 'Poki',
    description: 'That bird. Those pipes. Impossible to put down.',
    controls: 'Click or Space to flap',
    tags: ['classic', 'flappy', 'hard'],
  },
  {
    slug: 'snake-game',
    name: 'Snake Game',
    category: 'Arcade',
    emoji: '🐍',
    thumbnail: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/snake-game',
    developer: 'Poki',
    description: 'Nokia approved. Pixel hunger never gets old.',
    controls: 'Arrow keys to move',
    tags: ['classic', 'snake', 'retro'],
  },
  {
    slug: 'breaklock',
    name: 'BreakLock',
    category: 'Arcade',
    emoji: '🔓',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/breaklock',
    developer: 'Poki',
    description: 'Break the lock. Combos go brrr. Brick breaker with a twist.',
    controls: 'Mouse to aim, Click to shoot',
    tags: ['arcade', 'brick-breaker', 'puzzle'],
  },
  {
    slug: 'onet-connect',
    name: 'Onet Connect',
    category: 'Arcade',
    emoji: '🀄',
    thumbnail: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/onet-connect',
    developer: 'Poki',
    description: 'Match tiles. Clear the board. Connect mahjong-style.',
    controls: 'Click two matching tiles to clear',
    tags: ['mahjong', 'match', 'puzzle'],
  },
  {
    slug: 'bubble-shooter',
    name: 'Bubble Shooter',
    category: 'Arcade',
    emoji: '🫧',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/bubble-shooter',
    developer: 'Poki',
    description: 'Pop bubbles. Clear the ceiling. Satisfying chain reactions.',
    controls: 'Mouse to aim, Click to shoot',
    tags: ['bubble-shooter', 'arcade', 'classic'],
  },

  // === PUZZLE ===
  {
    slug: '2048',
    name: '2048',
    category: 'Puzzle',
    emoji: '🎲',
    thumbnail: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/2048',
    developer: 'Poki',
    description: 'Add tiles. Double up. Hit 2048. Simple. Addictive. Dangerous.',
    controls: 'Arrow keys to slide tiles',
    tags: ['numbers', 'puzzle', 'classic'],
  },
  {
    slug: 'thumb-fighter',
    name: 'Thumb Fighter',
    category: 'Puzzle',
    emoji: '✊',
    thumbnail: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/thumb-fighter',
    developer: 'Poki',
    description: 'Thumb wars. Digital edition. Pin the opponent\'s thumb.',
    controls: 'Click or tap to attack',
    tags: ['fighting', 'quick', 'fun'],
  },
  {
    slug: 'wordscapes',
    name: 'Wordscapes',
    category: 'Puzzle',
    emoji: '📝',
    thumbnail: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/wordscapes',
    developer: 'Poki',
    description: 'Connect letters. Form words. Fill the blanks. Brain teaser bliss.',
    controls: 'Swipe to connect letters',
    tags: ['word', 'puzzle', 'vocabulary'],
  },
  {
    slug: 'sudoku',
    name: 'Sudoku',
    category: 'Puzzle',
    emoji: '🧩',
    thumbnail: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/sudoku',
    developer: 'Poki',
    description: 'Fill the grid. Numbers 1-9. No repeats. Classic logic puzzle.',
    controls: 'Click cell, then click number',
    tags: ['sudoku', 'logic', 'numbers'],
  },

  // === RACING ===
  {
    slug: 'highway-racing',
    name: 'Highway Racing',
    category: 'Racing',
    emoji: '🏎️',
    thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/highway-racing',
    developer: 'Poki',
    description: 'Speed. Weave. Survive the highway. Don\'t crash.',
    controls: 'Arrow keys to steer, Space to brake',
    tags: ['racing', 'driving', 'avoid'],
  },
  {
    slug: 'bike-racing',
    name: 'Bike Racing',
    category: 'Racing',
    emoji: '🏍️',
    thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/bike-racing',
    developer: 'Poki',
    description: 'Two wheels. One goal. Beat the track.',
    controls: 'Arrow keys to balance and accelerate',
    tags: ['racing', 'bike', 'balance'],
  },
  {
    slug: 'cartoon-mini-racing',
    name: 'Cartoon Mini Racing',
    category: 'Racing',
    emoji: '🛻',
    thumbnail: 'https://images.unsplash.com/photo-1517502884422-41f1b7fc9c83?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/cartoon-mini-racing',
    developer: 'Poki',
    description: 'Mini cars, mini tracks, maxi fun. Quick races, quick wins.',
    controls: 'Arrow keys to drive',
    tags: ['racing', 'cartoon', 'mini'],
  },

  // === STRATEGY ===
  {
    slug: 'tower-crush',
    name: 'Tower Crush',
    category: 'Strategy',
    emoji: '🏰',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/tower-crush',
    developer: 'Poki',
    description: 'Build your tower. Crush the opponent. Warfare meets stacking.',
    controls: 'Click to drop soldiers, hold to charge',
    tags: ['strategy', 'tower', 'battle'],
  },
  {
    slug: 'backyard-monsters',
    name: 'Backyard Monsters',
    category: 'Strategy',
    emoji: '👾',
    thumbnail: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/backyard-monsters',
    developer: 'Poki',
    description: 'Build defenses. Stop the invaders. Your backyard, your rules.',
    controls: 'Click to place monsters and defenses',
    tags: ['strategy', 'tower-defense', 'monsters'],
  },
  {
    slug: 'chess',
    name: 'Chess',
    category: 'Strategy',
    emoji: '♟️',
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/chess',
    developer: 'Poki',
    description: 'Queen takes pawn. Classic. Now it\'s personal.',
    controls: 'Click to select, click to move',
    tags: ['chess', 'strategy', 'classic'],
  },
  {
    slug: 'four-in-a-row',
    name: 'Four in a Row',
    category: 'Strategy',
    emoji: '🔴',
    thumbnail: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/four-in-a-row',
    developer: 'Poki',
    description: 'Connect four. Horizontally, vertically, diagonally. Go first.',
    controls: 'Click column to drop piece',
    tags: ['strategy', 'connect', 'two-player'],
  },
  {
    slug: 'darts',
    name: 'Darts',
    category: 'Strategy',
    emoji: '🎯',
    thumbnail: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=450&fit=crop',
    gameUrl: 'https://poki.com/en/g/darts',
    developer: 'Poki',
    description: 'Aim. Throw. Bullseye. Virtual darts night.',
    controls: 'Click and drag to throw',
    tags: ['darts', 'aim', 'precision'],
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
