export interface GameSeo {


  /** Custom H1 (50-60 chars). Use when default `${name} - Free ${category} Game Online` is not optimal. */


  h1?: string


  /** Short H2-style subtitle that appears under the H1. */


  subtitle?: string


  /** Custom 2-3 sentence intro paragraph shown under the H1. Replaces game.description when set. */


  intro?: string


  /** 250-400 word per-game body content (the "About" section). Authored for this specific game, NOT generated from templates. */


  body?: string


  /** 3-6 game-specific tips. Authored for this specific game. */


  tips?: string[]


  /** 3-6 game-specific FAQ Q&A pairs. Authored for this specific game. */


  faqs?: { q: string; a: string }[]


}





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


  /**


   * Per-game authored SEO content (webgogogo 精品 landing page formula).


   * When present, these fields OVERRIDE the generated per-category content.


   * When absent, the page falls back to the CATEGORY_CONTENT templates.


   *


   * To author: write 250-400 word body content + 3-6 game-specific tips


   * + 3-6 game-specific FAQs. Each field should reflect THIS game's


   * unique mechanics, not generic category text.


   */


  seo?: GameSeo


}





export const categories = [


  'All',


  'Puzzle',


  'Action',


  'Arcade',


  'Racing',


  'Sports',


  'Simulation',


  'Memory',


  'Stickman',


  'Kids',


  'Strategy',


]





// Raw catalog — DO NOT export. Apply blacklist filter before exporting.


const rawHtml5Games: Html5Game[] = [


  // === FEATURED (Top Quality) ===


  {


    slug: 'prism-match-3d',


    name: 'Prism Match 3D',


    category: 'Puzzle',


    emoji: '💎',


    thumbnail: 'https://img.gamepix.com/games/prism-match-3d/cover/prism-match-3d.png?w=400',


    gameUrl: 'https://play.gamepix.com/prism-match-3d/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Rotate 3D cubes to match colors. Simple concept, addictive gameplay. Can you clear all levels?',


    controls: 'Click and drag to rotate the cube',


    tags: ['match-3', '3d', 'relaxing'],


    featured: true,


  },


  {


    slug: 'merge-royal',


    name: 'Merge Royal',


    category: 'Puzzle',


    emoji: '🃏',


    thumbnail: 'https://img.gamepix.com/games/merge-royal/cover/merge-royal.png?w=400',


    gameUrl: 'https://play.gamepix.com/merge-royal/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Solitaire meets 2048. Merge cards to reach 2048. Two classics, one game.',


    controls: 'Click cards to move and merge',


    tags: ['2048', 'solitaire', 'merge'],


    seo: {


      h1: 'Merge Royal — Solitaire 2048 Puzzle Online Free',


      subtitle: 'Combine cards, clear the board, hit 2048. No download.',


      intro: 'Merge Royal takes the best ideas from Klondike Solitaire and the 2048 tile-merge puzzle, then layers them into a single satisfying loop. The result is a hybrid card game that feels instantly familiar yet rewards a different kind of strategy than either of its parents.',


      body: `Merge Royal sits at the intersection of two of the most-played casual card games of the last two decades. The bottom row of the board is a Klondike-style tableau where you can drag cards in alternating colors. When a card lands on top of a same-value card, the two merge into the next value up: two 2s become a 4, two 4s become an 8, and so on. The merge mechanic is borrowed directly from 2048, and that is where the long-term goal lives: keep merging until you spawn the elusive 2048 tile.





The strategic depth comes from choosing which cards to drag and in what order. Some players focus on building long alternating sequences in the lower rows; others try to keep the maximum-value card parked at a corner so they can drop same-value cards onto it. There is no single "best" strategy, which is what makes a quick round stretch into an unplanned half hour. Because each run is a fresh shuffle, replay value is essentially infinite.





On Xavrito, Merge Royal runs in HTML5 and works in any modern desktop or mobile browser. There is no download, no signup, and no in-app purchase. The game tracks your highest merge within a single browser session — clear your local storage if you want a fresh high-score chase. If you enjoy the card game side, you will probably also enjoy Sudoku and Mahjong, two of our most popular puzzle games. If you prefer the number-tile side, the original 2048 is right here on Xavrito too.`,


      tips: [


        'Always merge from the lowest available value up — leaving 2s stranded at the top of a column is the fastest way to lose.',


        'Keep your highest tile in a corner and build outward from there. This "corner strategy" comes from 2048 and it works just as well here.',


        'Drag cards only one column at a time when you can. Big multi-column drags look impressive but they almost always leave dead ends.',


        'If you are stuck, restart. Merge Royal is a session game, not a save game, and a fresh shuffle is sometimes the fastest path to a 2048.',


        'Focus on building alternating-color runs in the tableau. Same-color stacks will block your merges later.',


      ],


      faqs: [


        { q: 'Is Merge Royal the same as 2048 or Solitaire?', a: 'It is a hybrid. The merge mechanic is the 2048 number-tile rule, and the card layout is a simplified Klondike. Neither parent is required to play, but you will recognize both immediately.' },


        { q: 'What is the highest tile in Merge Royal?', a: 'The official cap is 2048, which matches the original 2048 puzzle. Hitting it counts as a win and resets the run.' },


        { q: 'Does Merge Royal save my progress?', a: 'Your best run is held in the browser local storage of the device you are playing on. Switching browsers or clearing site data resets it.' },


        { q: 'Can I play Merge Royal on my phone?', a: 'Yes. The HTML5 build supports touch drag and runs smoothly in both iOS Safari and Android Chrome.' },


        { q: 'How long does a typical round take?', a: 'Most rounds last between 5 and 15 minutes. Replays are short, so it works well for coffee breaks.' },


      ],


    },


  },


  {


    slug: 'war-the-knights',


    name: 'War the Knights',


    category: 'Action',


    emoji: '⚔️',


    thumbnail: 'https://img.gamepix.com/games/war-the-knights/cover/war-the-knights.png?w=400',


    gameUrl: 'https://play.gamepix.com/war-the-knights/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Deploy knights and win the battle. Strategy meets action. Outsmart your opponent.',


    controls: 'Click to deploy units',


    tags: ['battle', 'strategy', 'knights'],


  },


  {


    slug: 'bus-driver-simulator-3d',


    name: 'Bus Driver Simulator 3D',


    category: 'Simulation',


    emoji: '🚌',


    thumbnail: 'https://img.gamepix.com/games/bus-driver-simulator-3d/cover/bus-driver-simulator-3d.png?w=400',


    gameUrl: 'https://play.gamepix.com/bus-driver-simulator-3d/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Be a bus driver. Navigate city streets, pick up passengers, and deliver them safely.',


    controls: 'WASD or arrow keys to drive',


    tags: ['simulation', 'driving', '3d'],


  },


  {


    slug: 'three-cups-game',


    name: 'Three Cups Game',


    category: 'Memory',


    emoji: '🥤',


    thumbnail: 'https://img.gamepix.com/games/three-cups-game/cover/three-cups-game.png?w=400',


    gameUrl: 'https://play.gamepix.com/three-cups-game/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic shell game. Track the ball under the cups. How sharp is your eye?',


    controls: 'Click to guess cup location',


    tags: ['memory', 'guess', 'classic'],


  },


  {


    slug: 'body-drop-3d',


    name: 'Body Drop 3D',


    category: 'Simulation',


    emoji: '🎯',


    thumbnail: 'https://img.gamepix.com/games/body-drop-3d/cover/body-drop-3d.png?w=400',


    gameUrl: 'https://play.gamepix.com/body-drop-3d/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Launch crash test dummies and watch the ragdoll physics. Maximize damage with limited balls.',


    controls: 'Click to aim and shoot',


    tags: ['simulation', 'physics', 'ragdoll'],


  },


  {


    slug: 'parmesan-partisan',


    name: 'Parmesan Partisan',


    category: 'Arcade',


    emoji: '🧀',


    thumbnail: 'https://img.gamepix.com/games/parmesan-partisan/cover/parmesan-partisan.png?w=400',


    gameUrl: 'https://play.gamepix.com/parmesan-partisan/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Defend your cheese castle from rats. Shotgun action meets tower defense.',


    controls: 'Mouse to aim, click to shoot',


    tags: ['arcade', 'defense', 'shooting'],


  },


  {


    slug: 'kobadoo-emojis',


    name: 'Kobadoo Emojis',


    category: 'Memory',


    emoji: '😀',


    thumbnail: 'https://img.gamepix.com/games/kobadoo-emojis/cover/kobadoo-emojis.png?w=400',


    gameUrl: 'https://play.gamepix.com/kobadoo-emojis/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Remember emoji sequences. Gets harder as sequences grow longer. Test your memory.',


    controls: 'Click emojis in order',


    tags: ['memory', 'emoji', 'sequence'],


  },


  {


    slug: 'hoops-and-fruits',


    name: 'Hoops & Fruits',


    category: 'Puzzle',


    emoji: '🏀',


    thumbnail: 'https://img.gamepix.com/games/hoops-and-fruits/cover/hoops-and-fruits.png?w=400',


    gameUrl: 'https://play.gamepix.com/hoops-and-fruits/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Throw balls through hoops to hit fruits. Physics-based puzzle meets Fruit Ninja.',


    controls: 'Click and drag to aim and throw',


    tags: ['drawing', 'physics', 'fruit-ninja'],


  },


  {


    slug: 'turbo-crash-test',


    name: 'Turbo Crash Test',


    category: 'Stickman',


    emoji: '💥',


    thumbnail: 'https://img.gamepix.com/games/turbo-dismounting/cover/turbo-dismounting.png?w=400',


    gameUrl: 'https://play.gamepix.com/turbo-dismounting/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Create epic crashes with ragdoll physics. Unlock vehicles and watch the chaos.',


    controls: 'Click obstacles to trigger crashes',


    tags: ['stickman', 'physics', 'crash'],


  },


  {


    slug: 'cerkio',


    name: 'Cerkio',


    category: 'Arcade',


    emoji: '🎯',


    thumbnail: 'https://img.gamepix.com/games/cerkio/cover/cerkio.png?w=400',


    gameUrl: 'https://play.gamepix.com/cerkio/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Launch a ball into the target. 30 levels of precision timing. One-touch gameplay.',


    controls: 'Click to throw ball',


    tags: ['ball', 'accuracy', 'one-touch'],


  },


  {


    slug: 'gelatino',


    name: 'Gelatino',


    category: 'Arcade',


    emoji: '🍦',


    thumbnail: 'https://img.gamepix.com/games/gelatino/cover/gelatino.png?w=400',


    gameUrl: 'https://play.gamepix.com/gelatino/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Swing a popsicle past traps. Collect ice cubes, dodge heat. Will you melt or prevail?',


    controls: 'Click to swing',


    tags: ['arcade', 'timing', 'swing'],


  },


  {


    slug: 'penalty-kick-wiz',


    name: 'Penalty Kick Wiz',


    category: 'Sports',


    emoji: '⚽',


    thumbnail: 'https://img.gamepix.com/games/penalty-kick-wiz/cover/penalty-kick-wiz.png?w=400',


    gameUrl: 'https://play.gamepix.com/penalty-kick-wiz/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Penalty shootout. Goalkeeper vs striker. Every goal is satisfying.',


    controls: 'Swipe to shoot',


    tags: ['sports', 'soccer', 'penalty'],


  },


  {


    slug: 'stickman-warriors',


    name: 'Stickman Warriors',


    category: 'Stickman',


    emoji: '🦸',


    thumbnail: 'https://img.gamepix.com/games/stickman-warriors/cover/stickman-warriors.png?w=400',


    gameUrl: 'https://play.gamepix.com/stickman-warriors/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Stickman combat with special moves. Combos, ultimates, and flashy effects.',


    controls: 'Click to attack, swipe for combos',


    tags: ['stickman', 'fighting', 'action'],


  },


  {


    slug: 'kobadoo-numbers',


    name: 'Kobadoo Numbers',


    category: 'Memory',


    emoji: '🔢',


    thumbnail: 'https://img.gamepix.com/games/kobadoo-numbers/cover/kobadoo-numbers.png?w=400',


    gameUrl: 'https://play.gamepix.com/kobadoo-numbers/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Remember number sequences. Longer sequences as you progress. Brain teaser.',


    controls: 'Click numbers in order',


    tags: ['memory', 'numbers', 'sequence'],


  },


  {


    slug: 'flamit',


    name: 'Flamit',


    category: 'Action',


    emoji: '🔥',


    thumbnail: 'https://img.gamepix.com/games/flamit/cover/flamit.png?w=400',


    gameUrl: 'https://play.gamepix.com/flamit/embed?sid=7O017',


    developer: 'GamePix',


    description: 'A flaming stickman running adventure. Jump, dash, survive. Never extinguish.',


    controls: 'Tap or click to jump',


    tags: ['adventure', 'runner', 'fire'],


  },


  {


    slug: 'stickman-street-fighting-3d',


    name: 'Stickman Street Fighting 3D',


    category: 'Stickman',


    emoji: '👊',


    thumbnail: 'https://img.gamepix.com/games/stickman-street-fighting-3d/cover/stickman-street-fighting-3d.png?w=400',


    gameUrl: 'https://play.gamepix.com/stickman-street-fighting-3d/embed?sid=7O017',


    developer: 'GamePix',


    description: '3D street fighting. Punches, kicks, combos. Become the toughest stickman.',


    controls: 'Tap to punch/kick, swipe to dodge',


    tags: ['stickman', 'fighting', '3d'],


  },


  {


    slug: 'morphit',


    name: 'Morphit',


    category: 'Puzzle',


    emoji: '🟦',


    thumbnail: 'https://img.gamepix.com/games/morphit/cover/morphit.png?w=400',


    gameUrl: 'https://play.gamepix.com/morphit/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Morph shapes to pass obstacles. Adapt and transform. Flexible puzzle solving.',


    controls: 'Drag to morph shape',


    tags: ['puzzle', 'shapes', 'morph'],


  },


  {


    slug: 'robot-band-find-differences',


    name: 'Robot Band',


    category: 'Puzzle',


    emoji: '🤖',


    thumbnail: 'https://img.gamepix.com/games/robot-band/cover/robot-band.png?w=400',


    gameUrl: 'https://play.gamepix.com/robot-band/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Find the differences between two images. Robot band theme. Train your eye.',


    controls: 'Click on differences',


    tags: ['puzzle', 'difference', 'robots'],


  },


  {


    slug: 'my-first-100-words',


    name: 'My First 100 Words',


    category: 'Kids',


    emoji: '📚',


    thumbnail: 'https://img.gamepix.com/games/my-first-100-words/cover/my-first-100-words.png?w=400',


    gameUrl: 'https://play.gamepix.com/my-first-100-words/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Learn 100 words with pictures. Match words to images. Educational fun.',


    controls: 'Click on matching words',


    tags: ['educational', 'words', 'kids'],


  },


  {


    slug: 'sokoballs',


    name: 'Sokoballs',


    category: 'Puzzle',


    emoji: '🧩',


    thumbnail: 'https://img.gamepix.com/games/sokoballs/cover/sokoballs.png?w=400',


    gameUrl: 'https://play.gamepix.com/sokoballs/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Physics puzzle. Shoot balls into holes. Think before you shoot.',


    controls: 'Click to shoot ball',


    tags: ['puzzle', 'physics', 'ball'],


  },


  {


    slug: 'going-right',


    name: 'Going Right',


    category: 'Action',


    emoji: '➡️',


    thumbnail: 'https://img.gamepix.com/games/going-right/cover/going-right.png?w=400',


    gameUrl: 'https://play.gamepix.com/going-right/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Can only go right. Collect coins, avoid obstacles. Simple but challenging.',


    controls: 'Tap to jump',


    tags: ['endless', 'runner', 'simple'],


  },


  {


    slug: 'funny-shooter-2',


    name: 'Funny Shooter 2',


    category: 'Action',


    emoji: '🔫',


    thumbnail: 'https://img.gamepix.com/games/funny-shooter-2/cover/funny-shooter-2.png?w=400',


    gameUrl: 'https://play.gamepix.com/funny-shooter-2/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Shoot weird monsters with silly weapons. Zany enemies, laugh-out-loud action.',


    controls: 'Mouse to aim, click to shoot',


    tags: ['shooter', 'zombie', 'funny'],


  },


  {


    slug: 'canjump',


    name: 'Canjump',


    category: 'Action',


    emoji: '🦘',


    thumbnail: 'https://img.gamepix.com/games/canjump/cover/canjump.png?w=400',


    gameUrl: 'https://play.gamepix.com/canjump/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Jump on blocks to climb higher. How high can you go? Vertical platformer.',


    controls: 'Click to jump',


    tags: ['platformer', 'jumping', 'vertical'],


  },


  {


    slug: 'moto-x3m-spooky',


    name: 'Moto X3M Spooky',


    category: 'Racing',


    emoji: '🏍️',


    thumbnail: 'https://img.gamepix.com/games/moto-x3m-spooky-land/cover/moto-x3m-spooky-land.png?w=400',


    gameUrl: 'https://play.gamepix.com/moto-x3m-spooky-land/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Motorcycle stunts with flips and obstacles. Spooky halloween edition. Physics-based.',


    controls: 'Arrow keys to balance and accelerate',


    tags: ['racing', 'motorcycle', 'physics'],


  },


  {


    slug: 'slope-racing-3d',


    name: 'Slope Racing 3D',


    category: 'Racing',


    emoji: '🎿',


    thumbnail: 'https://img.gamepix.com/games/slope-racing-3d/cover/slope-racing-3d.png?w=400',


    gameUrl: 'https://play.gamepix.com/slope-racing-3d/embed?sid=7O017',


    developer: 'GamePix',


    description: "Slope racing down snowy hills. Control speed, don't fly off. Adrenaline rush.",


    controls: 'Arrow keys to control',


    tags: ['racing', '3d', 'slope'],


  },


  {


    slug: 'tentrix',


    name: 'TenTrix',


    category: 'Puzzle',


    emoji: '🧱',


    thumbnail: 'https://img.gamepix.com/games/tentrix/cover/tentrix.png?w=400',


    gameUrl: 'https://play.gamepix.com/tentrix/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Tetris evolved. Fill rows to clear blocks. Classic with a modern twist.',


    controls: 'Arrow keys to move and rotate',


    tags: ['tetris', 'block', 'puzzle'],


  },


  {


    slug: 'kobadoo-shapes',


    name: 'Kobadoo Shapes',


    category: 'Memory',


    emoji: '🔷',


    thumbnail: 'https://img.gamepix.com/games/kobadoo-shapes/cover/kobadoo-shapes.png?w=400',


    gameUrl: 'https://play.gamepix.com/kobadoo-shapes/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Remember shape sequences. Complex patterns as you level up. Short-term memory training.',


    controls: 'Click shapes in order',


    tags: ['memory', 'shapes', 'sequence'],


  },


  {


    slug: 'royal-couple-halloween',


    name: 'Royal Couple Halloween',


    category: 'Kids',


    emoji: '👻',


    thumbnail: 'https://img.gamepix.com/games/royal-couple-halloween-party/cover/royal-couple-halloween-party.png?w=400',


    gameUrl: 'https://play.gamepix.com/royal-couple-halloween-party/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Dress up the royal couple for Halloween. Costumes, makeup, party time!',


    controls: 'Click to dress up',


    tags: ['dress-up', 'halloween', 'kids'],


  },


  {


    slug: 'pool-8-ball',


    name: '8 Ball Pool',


    category: 'Sports',


    emoji: '🎱',


    thumbnail: 'https://img.gamepix.com/games/pool-8-ball/cover/pool-8-ball.png?w=400',


    gameUrl: 'https://play.gamepix.com/pool-8-ball/embed?sid=7O017',


    developer: 'GamePix',


    description: '8 ball pool classic. Aim, shoot, pocket. Become a pool master.',


    controls: 'Click and drag to aim and shoot',


    tags: ['pool', 'sports', 'billiards'],


  },


  {


    slug: 'candy-bubble',


    name: 'Candy Bubble',


    category: 'Puzzle',


    emoji: '🍬',


    thumbnail: 'https://img.gamepix.com/games/candy-bubble/cover/candy-bubble.png?w=400',


    gameUrl: 'https://play.gamepix.com/candy-bubble/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Bubble shooter with candy theme. Match colors, clear bubbles. Sweet puzzler.',


    controls: 'Mouse to aim, click to shoot',


    tags: ['bubble-shooter', 'match-3', 'candy'],


  },


  {


    slug: 'cut-the-rope',


    name: 'Cut the Rope',


    category: 'Puzzle',


    emoji: '🍬',


    thumbnail: 'https://img.gamepix.com/games/cut-the-rope/cover/cut-the-rope.png?w=400',


    gameUrl: 'https://play.gamepix.com/cut-the-rope/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Cut ropes to feed candy to Om Nom. Physics puzzle classic. Time your cuts.',


    controls: 'Click to cut ropes',


    tags: ['physics', 'puzzle', 'cut-rope'],


  },


  {


    slug: 'bottle-flip-challenge',


    name: 'Bottle Flip Challenge',


    category: 'Arcade',


    emoji: '🍾',


    thumbnail: 'https://img.gamepix.com/games/bottle-flip-challenge/cover/bottle-flip-challenge.png?w=400',


    gameUrl: 'https://play.gamepix.com/bottle-flip-challenge/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Flip the bottle and land it upright. TikTok viral sensation. Can you nail it?',


    controls: 'Click or space to flip',


    tags: ['flip', 'bottle', 'timing'],


  },


  {


    slug: 'fruit-ninja-slice',


    name: 'Fruit Ninja',


    category: 'Action',


    emoji: '🍉',


    thumbnail: 'https://img.gamepix.com/games/fruit-ninja/cover/fruit-ninja.png?w=400',


    gameUrl: 'https://play.gamepix.com/fruit-ninja/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Slice fruit with your blade. Swipe to cut, avoid bombs. Ninja training.',


    controls: 'Swipe to cut',


    tags: ['fruit-ninja', 'slice', 'swipe'],


  },


  {


    slug: 'bricks-breaker',


    name: 'Bricks Breaker',


    category: 'Puzzle',


    emoji: '🧱',


    thumbnail: 'https://img.gamepix.com/games/bricks-breaker/cover/bricks-breaker.png?w=400',


    gameUrl: 'https://play.gamepix.com/bricks-breaker/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Break bricks with a ball. Classic arkanoid. One ball to clear them all?',


    controls: 'Mouse to move paddle',


    tags: ['arkanoid', 'brick-breaker', 'classic'],


  },


  {


    slug: 'candy-crush',


    name: 'Candy Crush',


    category: 'Puzzle',


    emoji: '🍬',


    thumbnail: 'https://img.gamepix.com/games/candy-crush/cover/candy-crush.png?w=400',


    gameUrl: 'https://play.gamepix.com/candy-crush/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Match sweets in this colorful puzzle. Swap and crush candies for high scores.',


    controls: 'Click to swap adjacent candies',


    tags: ['match-3', 'candy', 'puzzle'],


  },


  {


    slug: 'zombie-shooter',


    name: 'Zombie Shooter',


    category: 'Action',


    emoji: '🧟',


    thumbnail: 'https://img.gamepix.com/games/zombie-shooter/cover/zombie-shooter.png?w=400',


    gameUrl: 'https://play.gamepix.com/zombie-shooter/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Survive the zombie apocalypse. Aim and shoot to stay alive.',


    controls: 'Mouse to aim and shoot',


    tags: ['zombie', 'shooter', 'survival'],


  },


  {


    slug: 'temple-run',


    name: 'Temple Run',


    category: 'Racing',


    emoji: '🏃',


    thumbnail: 'https://img.gamepix.com/games/temple-run/cover/temple-run.png?w=400',


    gameUrl: 'https://play.gamepix.com/temple-run/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Run through the ancient temple. Dodge obstacles and collect coins.',


    controls: 'Swipe to turn and jump',


    tags: ['endless-runner', 'action', 'escape'],


  },


  {


    slug: 'angry-birds',


    name: 'Angry Birds',


    category: 'Puzzle',


    emoji: '🐦',


    thumbnail: 'https://img.gamepix.com/games/angry-birds/cover/angry-birds.png?w=400',


    gameUrl: 'https://play.gamepix.com/angry-birds/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Launch birds at structures. Destroy the pigs with physics-based destruction.',


    controls: 'Click and drag to aim, release to launch',


    tags: ['physics', 'slingshot', 'destruction'],


  },


  {


    slug: 'flappy-bird',


    name: 'Flappy Bird',


    category: 'Arcade',


    emoji: '🐤',


    thumbnail: 'https://img.gamepix.com/games/flappy-bird/cover/flappy-bird.png?w=400',


    gameUrl: 'https://play.gamepix.com/flappy-bird/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Flap through pipes. One tap to fly, timing is everything.',


    controls: 'Click or tap to flap',


    tags: ['flappy', 'endless', 'timing'],


  },


  {


    slug: 'subway-surfers',


    name: 'Subway Surfers',


    category: 'Racing',


    emoji: '🏄',


    thumbnail: 'https://img.gamepix.com/games/subway-surfers/cover/subway-surfers.png?w=400',


    gameUrl: 'https://play.gamepix.com/subway-surfers/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Dash through the city subway. Jump, dodge trains, collect coins.',


    controls: 'Swipe to jump and switch lanes',


    tags: ['endless-runner', 'dodge', 'urban'],


  },


  {


    slug: 'chess',


    name: 'Chess',


    category: 'Puzzle',


    emoji: '♟️',


    thumbnail: 'https://img.gamepix.com/games/chess/cover/chess.png?w=400',


    gameUrl: 'https://play.gamepix.com/chess/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic chess against AI. Test your strategic thinking.',


    controls: 'Click to select and move pieces',


    tags: ['chess', 'strategy', 'board'],


  seo: {


    h1: 'Chess — Free Online Strategy Board Game vs AI or Friends',


    subtitle: 'Classic 8x8 chess, runs in your browser. No download.',


    intro: 'Chess is the 1500-year-old strategy game where two armies of 16 pieces each try to trap the opponent king. Every move changes the geometry of the board, and every capture narrows the possibilities until checkmate ends the game.',


    body: `Chess did not need a video game industry to become the most-played strategy game in history. The rules fit on a postcard, the board fits on a coffee table, and yet the number of possible positions is so large that no human or computer has mapped all of them. Every game you play is a journey through a tiny corner of that space, and the goal is not to memorize the corner but to read the local terrain better than your opponent.





On Xavrito, Chess is the standard 8x8 game with full rules: castling, en passant, promotion, 50-move rule, threefold repetition. The default opponent is a configurable AI that ranges from beginner to master, and you can also flip the board to play as Black. There is no clock by default, so you can think as long as you want on each move. If you want a real time-pressure game, the side menu has a timer toggle.





For new players, the most useful single habit is to check what your opponent's last move actually threatens before you start planning your own. A queen trade looks tempting until you realize it opens a back-rank mate. For more experienced players, the bread-and-butter of online chess is pawn structure: doubled, isolated, and passed pawns decide most endgames. You do not need a PhD in chess to enjoy the game, but the game rewards study more than almost any other hobby on Earth.`,


    tips: [


      'Control the center first. Knights and bishops placed on e4, d4, e5, d5 restrict the opponent and free your rooks.',


      'Castle within the first 10 moves. A king stuck in the center is the most common reason beginners lose quickly.',


      'Look at your opponent's last move before planning yours. Threats dictate responses; trying to "build a plan" without checking threats is how you hang pieces.',


      'In the endgame, an active king beats extra material. March your king toward the center once queens are exchanged.',


      'When ahead, trade pieces. When behind, keep pieces on the board. Piece count decides most endgames.',


    ],


    faqs: [


      { q: 'Can I play Chess against a friend on Xavrito?', a: 'This build supports AI play only. For friend-vs-friend, set up a real board next to your laptop and use Xavrito as your analysis tool.' }},


      { q: 'What is castling?', a: 'A single move where the king moves two squares toward a rook and the rook jumps to the other side. It cannot be done if the king has moved, the rook has moved, the king is in check, or the king would pass through check.' }},


      { q: 'How does the AI difficulty work?', a: 'Choose Easy, Medium, or Hard from the side menu. Easy makes random moves with light tactics. Hard plays a fuller engine that thinks several moves ahead.' }},


      { q: 'What is en passant?', a: 'A special pawn capture available for exactly one move after the opponent advances a pawn two squares from its starting square. It exists to preserve the rule that you cannot skip a square by jumping.' }},


      { q: 'Can I undo a move?', a: 'The Undo button is available in the side menu. The AI will also take back its reply so you can try a different line.' }},


    ],


  },


    


  {


    slug: 'snake-game',


    name: 'Snake Game',


    category: 'Arcade',


    emoji: '🐍',


    thumbnail: 'https://img.gamepix.com/games/snake-game/cover/snake-game.png?w=400',


    gameUrl: 'https://play.gamepix.com/snake-game/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Eat and grow. Classic snake gameplay with a modern twist.',


    controls: 'Arrow keys to move',


    tags: ['snake', 'classic', 'eat'],


  },


  {


    slug: 'tetris',


    name: 'Tetris',


    category: 'Puzzle',


    emoji: '🟦',


    thumbnail: 'https://img.gamepix.com/games/tetris/cover/tetris.png?w=400',


    gameUrl: 'https://play.gamepix.com/tetris/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Stack blocks and clear lines. The timeless puzzle classic.',


    controls: 'Arrow keys to move and rotate',


    tags: ['tetris', 'blocks', 'classic'],


    seo: {


      h1: 'Tetris — Free Online Block Stacking Game',


      subtitle: 'Rotate, drop, clear lines. The original falling-block puzzle.',


      intro: 'Tetris is the puzzle game that defined a genre. Seven different tetromino shapes fall from the top of a 10x20 well, and your job is to rotate, slide, and stack them into complete horizontal lines. Every cleared line vanishes and the rest drops down, and the speed keeps climbing as you clear more.',


      body: `Alexey Pajitnov designed Tetris in 1984 at the Soviet Academy of Sciences in Moscow. Within five years it had spread to every personal computer platform in the Eastern Bloc, and within ten it was on every console in the West. It is one of the best-selling video game franchises of all time, and the underlying tetromino rule set has been ported to thousands of variants. On Xavrito, we host a clean, modern HTML5 build that runs in any browser without download.





The core rule is the same one Pajitnov wrote: complete a horizontal line of ten cells, the line disappears, and everything above drops by one row. The twist is that you can rotate and move each piece as it falls, but only until it locks into place when it lands on another block or the floor. Cleared lines accelerate the drop speed, so every round is a gradually tightening contest between your dexterity and the gravity curve.





What keeps Tetris compelling after forty years is that there is no single "best" strategy. Some players keep the well flat and wait patiently for long bars. Others build tall and clear four lines at once for a "Tetris". Both work, and the right choice depends on what is in front of you. The five-level preview of upcoming pieces is the only information you have, and reading it well is half the game. On Xavrito you can also see which games share this falling-block DNA — drop our other puzzle games like Block Blast and Color Block to see how the modern descendants riff on the same core idea.`,


      tips: [


        'Always leave one column — usually the leftmost or rightmost — empty. It gives you a place to drop vertical I-pieces and rotate flat rows into them.',


        'Do not flatten the well for its own sake. A flat bottom with a single hole is great; a flat bottom with a bump in the middle costs you a turn later.',


        'When you see a long bar coming, build a flat shelf at the right height and clear four lines at once for a "Tetris" bonus.',


        'Use the hold queue (if enabled) for one piece you cannot place now but will need in two turns. Do not waste hold on the first piece you get.',


        'Tap the soft drop key for the last 2-3 cells of every drop. The millisecond saved adds up over a long session.',


      ],


      faqs: [


        { q: 'Is the Tetris on Xavrito the original?', a: 'It is a modern HTML5 rebuild of the classic gameplay, not a copy of any specific licensed release. All standard tetromino rules apply.' },


        { q: 'How do I rotate the pieces?', a: 'Arrow keys: up to rotate clockwise, left/right to slide, down for soft drop, and space for hard drop (instant placement at the bottom).' },


        { q: 'What is a "Tetris" in Tetris?', a: 'Clearing four lines simultaneously by dropping a vertical I-piece into a single-column gap. The original game rewarded it with bonus points.' },


        { q: 'Can I save my high score?', a: 'Your best score is stored in the browser local storage of the device you played on. Clearing site data will reset it.' },


        { q: 'Does Tetris work on touch screens?', a: 'Yes. Swipe left or right to slide, swipe up to rotate, and tap the screen to hard-drop the piece.' },


      ],


    },


  },


  {


    slug: 'pac-man',


    name: 'Pac-Man',


    category: 'Arcade',


    emoji: '👻',


    thumbnail: 'https://img.gamepix.com/games/pac-man/cover/pac-man.png?w=400',


    gameUrl: 'https://play.gamepix.com/pac-man/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Navigate the maze, eat dots, avoid ghosts. The arcade legend.',


    controls: 'Arrow keys to move',


    tags: ['pac-man', 'maze', 'classic'],


  },


  {


    slug: 'pinball',


    name: 'Pinball Classic',


    category: 'Arcade',


    emoji: '🎱',


    thumbnail: 'https://img.gamepix.com/games/pinball/cover/pinball.png?w=400',


    gameUrl: 'https://play.gamepix.com/pinball/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Flip and score. Classic pinball action with bouncy physics.',


    controls: 'Space or click to flip',


    tags: ['pinball', 'flipper', 'arcade'],


  },


  {


    slug: 'solitaire',


    name: 'Solitaire',


    category: 'Puzzle',


    emoji: '🃏',


    thumbnail: 'https://img.gamepix.com/games/solitaire/cover/solitaire.png?w=400',


    gameUrl: 'https://play.gamepix.com/solitaire/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic Klondike solitaire. Stack cards by suit from King to Ace.',


    controls: 'Click to move cards',


    tags: ['solitaire', 'cards', 'patience'],


  },


  {


    slug: 'soccer',


    name: 'Soccer Master',


    category: 'Sports',


    emoji: '⚽',


    thumbnail: 'https://img.gamepix.com/games/soccer/cover/soccer.png?w=400',


    gameUrl: 'https://play.gamepix.com/soccer/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Kick goals and win matches. Penalty kicks and free shots.',


    controls: 'Click and drag to aim and shoot',


    tags: ['soccer', 'football', 'sports'],


  },


  {


    slug: 'basketball',


    name: 'Basketball Stars',


    category: 'Sports',


    emoji: '🏀',


    thumbnail: 'https://img.gamepix.com/games/basketball/cover/basketball.png?w=400',


    gameUrl: 'https://play.gamepix.com/basketball/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Slam dunks and three-pointers. Basketball action at its finest.',


    controls: 'Click and drag to shoot',


    tags: ['basketball', 'sports', 'dunk'],


  },


  {


    slug: 'tennis-open',


    name: 'Tennis Open',


    category: 'Sports',


    emoji: '🎾',


    thumbnail: 'https://img.gamepix.com/games/tennis-open/cover/tennis-open.png?w=400',


    gameUrl: 'https://play.gamepix.com/tennis-open/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Serve and volley. Challenge opponents in tennis matches.',


    controls: 'Click to swing racket',


    tags: ['tennis', 'sports', 'serve'],


  },


  {


    slug: 'tower-blocks',


    name: 'Tower Blocks',


    category: 'Simulation',


    emoji: '🏗️',


    thumbnail: 'https://img.gamepix.com/games/tower-blocks/cover/tower-blocks.png?w=400',


    gameUrl: 'https://play.gamepix.com/tower-blocks/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Stack blocks to build the tallest tower. Precision placement.',


    controls: 'Click to drop blocks',


    tags: ['stacking', 'precision', 'building'],


  },


  {


    slug: 'farming-simulator',


    name: 'Farming Simulator',


    category: 'Simulation',


    emoji: '🚜',


    thumbnail: 'https://img.gamepix.com/games/farming-simulator/cover/farming-simulator.png?w=400',


    gameUrl: 'https://play.gamepix.com/farming-simulator/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Grow crops and manage your farm. Harvest时节 for profit.',


    controls: 'Click to plant and harvest',


    tags: ['farming', 'simulation', 'crops'],


  },


  {


    slug: 'memory-match',


    name: 'Memory Match',


    category: 'Memory',


    emoji: '🃏',


    thumbnail: 'https://img.gamepix.com/games/memory-match/cover/memory-match.png?w=400',


    gameUrl: 'https://play.gamepix.com/memory-match/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Match pairs of cards. Test and improve your memory.',


    controls: 'Click to flip cards',


    tags: ['memory', 'matching', 'cards'],


  },


  {


    slug: 'stickman-hook',


    name: 'Stickman Hook',


    category: 'Action',


    emoji: '🪝',


    thumbnail: 'https://img.gamepix.com/games/stickman-hook/cover/stickman-hook.png?w=400',


    gameUrl: 'https://play.gamepix.com/stickman-hook/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Swing through levels as a stickman. Time your release perfectly.',


    controls: 'Click to hook and release',


    tags: ['stickman', 'swing', 'physics'],


  },


  {


    slug: 'bubble-shooter',


    name: 'Bubble Shooter',


    category: 'Puzzle',


    emoji: '🫧',


    thumbnail: 'https://img.gamepix.com/games/bubble-shooter/cover/bubble-shooter.png?w=400',


    gameUrl: 'https://play.gamepix.com/bubble-shooter/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Pop bubbles by matching colors. Shoot and match to clear the board.',


    controls: 'Click to shoot bubbles',


    tags: ['bubble', 'shooter', 'match-3'],


  seo: {


    h1: 'Bubble Shooter — Free Online Match-3 Bubble Pop Game',


    subtitle: 'Aim, match 3, clear the board. The classic bubble pop.',


    intro: 'Bubble Shooter is the gold-standard bubble-pop puzzle. A cluster of colored bubbles sits at the top of a walled pit, and you fire single bubbles from a cannon at the bottom, aiming to land three or more of the same color so they pop and drop everything above.',


    body: `Bubble Shooter has been one of the most-played casual browser games since the early 2000s, and the formula has barely changed in two decades. The reason it lasts is that the difficulty curve is self-tuned: the more bubbles you clear, the emptier the board gets, and the more shots you have to take to rebuild a cluster. There is no time pressure and no fail screen beyond "the bubbles dropped below the line", so a new player can pick it up in thirty seconds and a veteran can spend an hour hunting the perfect game.





The strategic layer appears about ten shots in. Once you understand that every pop can chain-collapse, you start aiming for the largest existing cluster rather than the nearest match-3. The highest-level players deliberately build "walls" of one color so that a single well-aimed shot cascades through the entire wall. Learning to read the upcoming three bubbles (most versions show a queue) is the single biggest skill jump.





On Xavrito, Bubble Shooter is the modern HTML5 build. There is no download, no signup, and no in-app purchase. Your high score is held in the browser local storage of the device you are playing on. The game runs equally well on a touch phone and on a desktop with a mouse, and there is no level system to grind — you simply play until the board fills up. If you enjoy the match-3 mechanic, our other match-3 and match-4 games use the same color-matching loop in different shapes.`,


    tips: [


      'Aim at the largest existing cluster of one color, not the nearest match-3. A wall-pop is worth dozens of small pops.',


      'Shoot from the side, not the center. Side-angled shots bank off the walls and reach places a straight line cannot.',


      'Keep the queue at the top of the screen in your peripheral vision. The next 3 bubbles tell you what to set up for.',


      'Drop clusters you cannot match into the empty column on the side. The collapse is worth more than leaving a near-match stranded.',


      'Do not panic-pop a match-3. Look one or two shots ahead to see if waiting gives you a longer chain instead.',


    ],


    faqs: [


      { q: 'Is Bubble Shooter free to play?', a: 'Yes. The version on Xavrito is 100% free with no ads mid-gameplay, no in-app purchases, and no signup.' }},


      { q: 'How do I aim in Bubble Shooter?', a: 'Move the mouse (or drag a finger) to aim the cannon. Click or release to fire. The trajectory is a straight line that bounces off the side walls.' }},


      { q: 'What happens when bubbles drop below the line?', a: 'The game ends. You can restart at any time and your high score is preserved in the browser local storage.' }},


      { q: 'Can I play Bubble Shooter on mobile?', a: 'Yes. Touch controls are supported: drag to aim, tap to fire. The interface adapts to phone screens automatically.' }},


      { q: 'Is there a way to swap the next bubble?', a: 'Some variants show a swap or hold button. This HTML5 build does not, but you can use the queue preview to plan around the next shot.' }},


    ],


  },


    


  {


    slug: 'bowling',


    name: 'Bowling Master',


    category: 'Sports',


    emoji: '🎳',


    thumbnail: 'https://img.gamepix.com/games/bowling/cover/bowling.png?w=400',


    gameUrl: 'https://play.gamepix.com/bowling/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Strike! Bowl your way to victory. Roll the ball and knock down pins.',


    controls: 'Click and drag to aim and throw',


    tags: ['bowling', 'sports', 'aim'],


  },


  {


    slug: 'mario-kart',


    name: 'Mario Kart Style',


    category: 'Racing',


    emoji: '🏎️',


    thumbnail: 'https://img.gamepix.com/games/mario-kart/cover/mario-kart.png?w=400',


    gameUrl: 'https://play.gamepix.com/mario-kart/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Race through tracks and collect power-ups. Kart racing action!',


    controls: 'Arrow keys to drive',


    tags: ['racing', 'kart', 'Mario'],


  },


  {


    slug: 'monster-truck',


    name: 'Monster Truck',


    category: 'Racing',


    emoji: '🚛',


    thumbnail: 'https://img.gamepix.com/games/monster-truck/cover/monster-truck.png?w=400',


    gameUrl: 'https://play.gamepix.com/monster-truck/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Drive a powerful monster truck over rough terrain.',


    controls: 'Arrow keys to drive',


    tags: ['truck', 'monster', 'offroad'],


  },


  {


    slug: 'doodle-jump',


    name: 'Doodle Jump',


    category: 'Arcade',


    emoji: '✏️',


    thumbnail: 'https://img.gamepix.com/games/doodle-jump/cover/doodle-jump.png?w=400',


    gameUrl: 'https://play.gamepix.com/doodle-jump/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Jump higher and higher by hopping on platforms.',


    controls: 'Click or tap to jump',


    tags: ['doodle', 'jump', 'arcade'],


  },


  {


    slug: 'battle-arena',


    name: 'Battle Arena',


    category: 'Action',


    emoji: '⚔️',


    thumbnail: 'https://img.gamepix.com/games/battle-arena/cover/battle-arena.png?w=400',


    gameUrl: 'https://play.gamepix.com/battle-arena/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Fight other players in an arena. Be the last one standing.',


    controls: 'WASD to move, mouse to attack',


    tags: ['arena', 'battle', 'fighting'],


  },


  {


    slug: 'tower-defense',


    name: 'Tower Defense',


    category: 'Strategy',


    emoji: '🏰',


    thumbnail: 'https://img.gamepix.com/games/tower-defense/cover/tower-defense.png?w=400',


    gameUrl: 'https://play.gamepix.com/tower-defense/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Defend your base with towers. Stop waves of enemies.',


    controls: 'Click to place towers',


    tags: ['tower', 'defense', 'strategy'],


  seo: {


    h1: 'Tower Defense — Free Online Strategy Defense Game',


    subtitle: 'Build towers, stop the waves, defend your base. No download.',


    intro: 'Tower Defense is the broad genre of strategy games where you place defensive towers along a fixed path to stop waves of enemies from reaching the end. Each tower type has a different attack pattern, range, and cost, and every wave gets a little harder.',


    body: `The genre traces back to the 1990s "tower defense" mods for StarCraft and Warcraft III, where mapmakers built custom levels that pitted the player against endless creeps. By the 2000s the genre had its own standalone games — Desktop Tower Defense, Bloons TD, Kingdom Rush — and the formula is now everywhere. On Xavrito, our build keeps the core loop: build, upgrade, survive.





The strategic depth comes from synergy. A single arrow tower is cheap and fast, but a row of arrow towers gets overwhelmed. Mix in a cannon tower for splash damage, a frost tower to slow waves, and a magic tower for high-HP enemies, and the same wave that melted you at minute five becomes a breeze. The best players think in "wave plans" — what is coming in 10 waves, and which tower unlocks counter it — instead of reacting to the current wave.





Most tower defense games give you a fixed map and an escalating set of enemies, with a meta-progression system that lets you carry upgrades between levels. Our build follows that pattern: win a level with gold left over, and you can spend it on permanent upgrades that apply to the next level. There is no timer, no PvP, and no in-app purchase. Just you, the creeps, and the path they will take.`,


    tips: [


      'Build a balanced mix, not a single super-tower. Two arrow towers, one cannon, and one frost will outlast a single max-level tower of any type.',


      'Place towers at path CHOKES, not at straight segments. A choke forces enemies to bunch together, which lets your splash damage hit multiple creeps at once.',


      'Frost towers are underrated early game. Slowing enemies by 30% effectively gives your other towers 30% more time to shoot.',


      'Save the early game gold for upgrades rather than new towers. Level 3 of a cheap tower outperforms level 1 of an expensive one on most waves.',


      'Do not build in the middle of the path. The path is the kill zone for enemies, and a tower in the middle can only shoot enemies on one side at a time.',


    ],


    faqs: [


      { q: 'How many levels does the game have?', a: 'Our build has 12 levels plus an endless mode. Each level introduces one new enemy type and one new tower type.' }},


      { q: 'Can I refund a tower if I place it wrong?', a: 'Yes, the Refund button returns 75% of the tower cost. Use it freely while you are still learning a map.' }},


      { q: 'What is the meta-progression system?', a: 'Between levels, leftover gold becomes "stars" that you can spend on permanent upgrades (damage, range, gold income). They apply to every level from that point on.' }},


      { q: 'How long does a level take?', a: 'Most levels take 8-15 minutes. Endless mode can run for an hour or more if you survive the early waves.' }},


      { q: 'Is there a fast-forward button?', a: 'Yes, the speed toggle in the side menu switches between 1x, 2x, and 4x. Most players run 2x by default and 4x for early waves.' }},


    ],


  },


    


  {


    slug: 'mini-golf',


    name: 'Mini Golf',


    category: 'Sports',


    emoji: '⛳',


    thumbnail: 'https://img.gamepix.com/games/mini-golf/cover/mini-golf.png?w=400',


    gameUrl: 'https://play.gamepix.com/mini-golf/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Putt your way through challenging holes. Master the greens.',


    controls: 'Click and drag to aim and putt',


    tags: ['golf', 'putt', 'sports'],


  },


  {


    slug: 'ice-breaker',


    name: 'Ice Breaker',


    category: 'Puzzle',


    emoji: '🧊',


    thumbnail: 'https://img.gamepix.com/games/ice-breaker/cover/ice-breaker.png?w=400',


    gameUrl: 'https://play.gamepix.com/ice-breaker/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Break through ice and rescue trapped characters.',


    controls: 'Click to break ice',


    tags: ['ice', 'puzzle', 'rescue'],


  },


  {


    slug: 'skating-free',


    name: 'Skating Free',


    category: 'Sports',


    emoji: '🛹',


    thumbnail: 'https://img.gamepix.com/games/skating-free/cover/skating-free.png?w=400',


    gameUrl: 'https://play.gamepix.com/skating-free/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Perform tricks on your skateboard. Master the halfpipe.',


    controls: 'Arrow keys to skate and trick',


    tags: ['skateboard', 'tricks', 'sports'],


  },


  {


    slug: 'gold-miner',


    name: 'Gold Miner',


    category: 'Arcade',


    emoji: '⛏️',


    thumbnail: 'https://img.gamepix.com/games/gold-miner/cover/gold-miner.png?w=400',


    gameUrl: 'https://play.gamepix.com/gold-miner/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Grab gold and gems with your claw machine.',


    controls: 'Click and hold to lower claw',


    tags: ['miner', 'gold', 'claw'],


  },


  {


    slug: 'egg-catcher',


    name: 'Egg Catcher',


    category: 'Arcade',


    emoji: '🥚',


    thumbnail: 'https://img.gamepix.com/games/egg-catcher/cover/egg-catcher.png?w=400',


    gameUrl: 'https://play.gamepix.com/egg-catcher/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Catch falling eggs in your basket. Don't let them break!',


    controls: 'Arrow keys to move basket',


    tags: ['egg', 'catch', 'arcade'],


  },


  {


    slug: 'balloon-pop',


    name: 'Balloon Pop',


    category: 'Arcade',


    emoji: '🎈',


    thumbnail: 'https://img.gamepix.com/games/balloon-pop/cover/balloon-pop.png?w=400',


    gameUrl: 'https://play.gamepix.com/balloon-pop/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Pop balloons to score points. Time your pops perfectly.',


    controls: 'Click to pop balloons',


    tags: ['balloon', 'pop', 'timing'],


  },


  {


    slug: 'cannon-basketball',


    name: 'Cannon Basketball',


    category: 'Sports',


    emoji: '🏀',


    thumbnail: 'https://img.gamepix.com/games/cannon-basketball/cover/cannon-basketball.png?w=400',


    gameUrl: 'https://play.gamepix.com/cannon-basketball/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Shoot basketballs into the hoop using a cannon.',


    controls: 'Click and drag to aim and shoot',


    tags: ['basketball', 'cannon', 'physics'],


  },


  {


    slug: 'traffic-control',


    name: 'Traffic Control',


    category: 'Simulation',


    emoji: '🚦',


    thumbnail: 'https://img.gamepix.com/games/traffic-control/cover/traffic-control.png?w=400',


    gameUrl: 'https://play.gamepix.com/traffic-control/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Manage traffic lights and keep cars moving smoothly.',


    controls: 'Click traffic lights to change',


    tags: ['traffic', 'management', 'simulation'],


  },


  {


    slug: 'rope-swing',


    name: 'Rope Swing',


    category: 'Action',


    emoji: '🪢',


    thumbnail: 'https://img.gamepix.com/games/rope-swing/cover/rope-swing.png?w=400',


    gameUrl: 'https://play.gamepix.com/rope-swing/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Swing from rope to rope. Time your release to land safely.',


    controls: 'Click to swing and release',


    tags: ['rope', 'swing', 'timing'],


  },


  {


    slug: 'pet-save',


    name: 'Pet Save',


    category: 'Action',


    emoji: '🐾',


    thumbnail: 'https://img.gamepix.com/games/pet-save/cover/pet-save.png?w=400',


    gameUrl: 'https://play.gamepix.com/pet-save/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Rescue cute pets from danger. Act fast to save them!',


    controls: 'Click to interact',


    tags: ['pets', 'rescue', 'action'],


  },


  {


    slug: 'burger-stack',


    name: 'Burger Stack',


    category: 'Puzzle',


    emoji: '🍔',


    thumbnail: 'https://img.gamepix.com/games/burger-stack/cover/burger-stack.png?w=400',


    gameUrl: 'https://play.gamepix.com/burger-stack/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Stack burger ingredients as high as possible.',


    controls: 'Click to drop ingredients',


    tags: ['burger', 'stack', 'puzzle'],


  },


  {


    slug: 'brick-breaker',


    name: 'Brick Breaker',


    category: 'Arcade',


    emoji: '🧱',


    thumbnail: 'https://img.gamepix.com/games/brick-breaker/cover/brick-breaker.png?w=400',


    gameUrl: 'https://play.gamepix.com/brick-breaker/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Break bricks with a bouncing ball. Classic arcade action.',


    controls: 'Mouse to move paddle',


    tags: ['brick', 'breaker', 'arkanoid'],


  },


  {


    slug: 'laser-puzzle',


    name: 'Laser Puzzle',


    category: 'Puzzle',


    emoji: '💡',


    thumbnail: 'https://img.gamepix.com/games/laser-puzzle/cover/laser-puzzle.png?w=400',


    gameUrl: 'https://play.gamepix.com/laser-puzzle/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Reflect lasers to hit targets. Solve light puzzles.',


    controls: 'Click to place mirrors',


    tags: ['laser', 'puzzle', 'light'],


  },


  {


    slug: 'sushi-party',


    name: 'Sushi Party',


    category: 'Puzzle',


    emoji: '🍣',


    thumbnail: 'https://img.gamepix.com/games/sushi-party/cover/sushi-party.png?w=400',


    gameUrl: 'https://play.gamepix.com/sushi-party/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Match and serve sushi orders. Keep customers happy!',


    controls: 'Click to match sushi',


    tags: ['sushi', 'match', 'puzzle'],


  },


  // === MORE GAMES ===


  {


    slug: '2048',


    name: '2048',


    category: 'Puzzle',


    emoji: '🔢',


    thumbnail: 'https://img.gamepix.com/games/2048/cover/2048.png?w=400',


    gameUrl: 'https://play.gamepix.com/2048/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Add numbers to reach 2048. Slide tiles and merge them.',


    controls: 'Arrow keys to slide tiles',


    tags: ['2048', 'numbers', 'merge'],


  seo: {


    h1: '2048 — Free Online Number Tile Puzzle Game',


    subtitle: 'Combine matching tiles, reach 2048. The original Gabriele Cirulli game.',


    intro: '2048 is the 2014 puzzle game by Italian developer Gabriele Cirulli that took the browser-game world by storm. Slide a 4x4 grid of numbered tiles in four directions, combine any two matching numbers, and try to spawn the elusive 2048 tile without filling the board.',


    body: `2048 is a one-rule game with a deep strategy tree. Each turn, you slide every tile on the board in one of four directions; any two tiles of the same value that collide merge into one tile of double the value. The next turn, a new tile (2 or 4) appears in a random empty square. The game ends when the board fills up and no merges are possible.





The classic strategy is the "corner anchor". Pick a corner — usually the bottom-left or bottom-right — and never move your highest tile out of that corner. Build a monotonic chain toward it: 2 → 4 → 8 → 16 → 32, always in the same row or column. New tiles will keep falling on the opposite side, which you can merge into your chain. Done right, the highest tile is locked in the corner, the chain runs along one edge, and the rest of the board is the playground where you merge.





The mental trap of 2048 is that the early game feels easy and the late game feels impossible. The transition happens around the 512 → 1024 → 2048 mark, when one bad slide can end a 20-minute run. That tension is what makes 2048 so replayable. On Xavrito, the game uses the standard 4x4 board and tracks your best tile in the browser local storage. There is no signup, no timer, and no IAP. You can play one move per day or one hundred — the game does not care.`,


    tips: [


      'Pick a corner and never let your highest tile leave it. This is the single biggest skill in 2048.',


      'Build a monotonic chain toward your anchor corner: same row or same column, values ascending.',


      'Do not chase large merges at the bottom row only. The top row needs attention too, or you will run out of room there first.',


      'When two options tie, prefer the one that keeps the highest tile in its corner. "Looks fine" usually beats "looks optimal".',


      'If a 2 appears in your anchor corner, deal with it immediately by sliding the row so it merges. Never leave a 2 stranded in the corner.',


    ],


    faqs: [


      { q: 'Is 2048 on Xavrito the original?', a: 'It is an HTML5 reimplementation of Gabriele Cirulli's 2014 game, with the same 4x4 board and merge rules.' }},


      { q: 'What is the highest tile I can make?', a: 'The classic target is 2048, but the game continues past that. Skilled players regularly reach 4096 and occasionally 8192.' }},


      { q: 'How do I undo a move?', a: 'The Undo button in the side menu undoes the last slide (and removes the newly spawned tile). You can undo as many times as you like.' }},


      { q: 'Is there a "continue from where I left off" feature?', a: 'No. Each session is fresh. Your best tile is stored as a personal best, but the board does not persist between visits.' }},


      { q: 'Can I play 2048 on my phone?', a: 'Yes. Swipe in any direction to slide the board. The interface adapts to phone screens.' }},


    ],


  },


    


  {


    slug: 'drum-taps',


    name: 'Drum Taps',


    category: 'Arcade',


    emoji: '🥁',


    thumbnail: 'https://img.gamepix.com/games/drum-taps/cover/drum-taps.png?w=400',


    gameUrl: 'https://play.gamepix.com/drum-taps/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Tap to the beat. Rhythm game with drums and music.',


    controls: 'Tap drum pads in rhythm',


    tags: ['drum', 'rhythm', 'music'],


  },


  {


    slug: 'piano-tiles',


    name: 'Piano Tiles',


    category: 'Arcade',


    emoji: '🎹',


    thumbnail: 'https://img.gamepix.com/games/piano-tiles/cover/piano-tiles.png?w=400',


    gameUrl: 'https://play.gamepix.com/piano-tiles/embed?sid=7O017',


    developer: 'GamePix',


    description: "Don't step on the wrong tile! Play the piano by stepping on black tiles.",


    controls: 'Click or tap black tiles',


    tags: ['piano', 'rhythm', 'tiles'],


  },


  {


    slug: 'jump-color',


    name: 'Jump Color',


    category: 'Action',


    emoji: '🌈',


    thumbnail: 'https://img.gamepix.com/games/jump-color/cover/jump-color.png?w=400',


    gameUrl: 'https://play.gamepix.com/jump-color/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Jump through color rings. Match colors to pass through.',


    controls: 'Click to jump through matching colors',


    tags: ['color', 'jump', 'timing'],


  },


  {


    slug: 'hexa-merge',


    name: 'Hexa Merge',


    category: 'Puzzle',


    emoji: '⬡',


    thumbnail: 'https://img.gamepix.com/games/hexa-merge/cover/hexa-merge.png?w=400',


    gameUrl: 'https://play.gamepix.com/hexa-merge/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Merge hexagonal blocks. Combine matching numbers.',


    controls: 'Click to place and merge hexagons',


    tags: ['hexagon', 'merge', 'numbers'],


  },


  {


    slug: 'pixel-puzzle',


    name: 'Pixel Puzzle',


    category: 'Puzzle',


    emoji: '🎨',


    thumbnail: 'https://img.gamepix.com/games/pixel-puzzle/cover/pixel-puzzle.png?w=400',


    gameUrl: 'https://play.gamepix.com/pixel-puzzle/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Complete pixel art by guessing the image. Relaxing puzzle.',


    controls: 'Click to color pixels',


    tags: ['pixel', 'art', 'puzzle'],


  },


  {


    slug: 'gravity-balls',


    name: 'Gravity Balls',


    category: 'Puzzle',


    emoji: '🕳️',


    thumbnail: 'https://img.gamepix.com/games/gravity-balls/cover/gravity-balls.png?w=400',


    gameUrl: 'https://play.gamepix.com/gravity-balls/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Drop balls and let gravity do the work. Fill the container.',


    controls: 'Click to drop balls',


    tags: ['gravity', 'physics', 'ball'],


  },


  {


    slug: 'color-fill',


    name: 'Color Fill',


    category: 'Puzzle',


    emoji: '🖌️',


    thumbnail: 'https://img.gamepix.com/games/color-fill/cover/color-fill.png?w=400',


    gameUrl: 'https://play.gamepix.com/color-fill/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Fill shapes with color. Solve spatial puzzles.',


    controls: 'Click and drag to fill',


    tags: ['color', 'fill', 'puzzle'],


  },


  {


    slug: 'ball-sort-puzzle',


    name: 'Ball Sort Puzzle',


    category: 'Puzzle',


    emoji: '🔴',


    thumbnail: 'https://img.gamepix.com/games/ball-sort/cover/ball-sort.png?w=400',


    gameUrl: 'https://play.gamepix.com/ball-sort/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Sort colored balls into tubes. Same color in one tube.',


    controls: 'Click tube to pour balls',


    tags: ['sort', 'ball', 'puzzle'],


  },


  {


    slug: 'candy-rain',


    name: 'Candy Rain',


    category: 'Puzzle',


    emoji: '🍭',


    thumbnail: 'https://img.gamepix.com/games/candy-rain/cover/candy-rain.png?w=400',


    gameUrl: 'https://play.gamepix.com/candy-rain/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Match candies in the rain. Connect and collect sweets.',


    controls: 'Swipe to connect candies',


    tags: ['candy', 'match', 'connect'],


  },


  {


    slug: 'block-puzzle',


    name: 'Block Puzzle',


    category: 'Puzzle',


    emoji: '🟦',


    thumbnail: 'https://img.gamepix.com/games/block-puzzle/cover/block-puzzle.png?w=400',


    gameUrl: 'https://play.gamepix.com/block-puzzle/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Place blocks to complete lines. Tetris-style puzzle.',


    controls: 'Drag to place blocks',


    tags: ['block', 'puzzle', 'tetris'],


  },


  {


    slug: 'plumber',


    name: 'Plumber',


    category: 'Puzzle',


    emoji: '🔧',


    thumbnail: 'https://img.gamepix.com/games/plumber/cover/plumber.png?w=400',


    gameUrl: 'https://play.gamepix.com/plumber/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Connect pipes to flow water. Rotate and link.',


    controls: 'Click to rotate pipes',


    tags: ['pipe', 'connect', 'plumber'],


  },


  {


    slug: 'slide-puzzle',


    name: 'Slide Puzzle',


    category: 'Puzzle',


    emoji: '🧩',


    thumbnail: 'https://img.gamepix.com/games/slide-puzzle/cover/slide-puzzle.png?w=400',


    gameUrl: 'https://play.gamepix.com/slide-puzzle/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Slide tiles to solve the puzzle. Classic 15-puzzle.',


    controls: 'Click adjacent tile to slide',


    tags: ['slide', 'tile', 'classic'],


  },


  {


    slug: 'word-search',


    name: 'Word Search',


    category: 'Puzzle',


    emoji: '🔍',


    thumbnail: 'https://img.gamepix.com/games/word-search/cover/word-search.png?w=400',


    gameUrl: 'https://play.gamepix.com/word-search/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Find hidden words in the grid. Exercise your brain.',


    controls: 'Drag to highlight words',


    tags: ['word', 'search', 'brain'],


  seo: {


    h1: 'Word Search — Free Online Letter Puzzle Game',


    subtitle: 'Find hidden words in a grid of letters. The classic newspaper puzzle.',


    intro: 'Word Search is the puzzle where a square grid of letters hides a list of words running horizontally, vertically, and diagonally. Your job is to find and circle (or click) each word as fast as you can.',


    body: `Word Search has been a newspaper standby for decades because it is genuinely accessible to any age. The rules fit in one sentence: find the words. There is no math, no trivia, no language beyond basic vocabulary, and the puzzle always ends with the satisfaction of clearing the list.





On Xavrito, our Word Search build is configurable in three ways: grid size (10x10, 12x12, 15x15), difficulty (Easy = no diagonals, Hard = diagonals and backwards), and theme (Animals, Food, Sports, Technology, Mixed). Each puzzle is randomly generated and the word list is hidden until you click "Reveal". Your solve time is tracked per difficulty per theme.





The technique that separates fast solvers from slow ones is "starting letters". Scan the word list for any word whose first letter is rare in the grid — for example, Q, X, Z, J — and find it first. Once you have anchored the rare letters, the words that share them are easier to find. Most expert solvers clear a 15x15 in under two minutes. The first 30 seconds are slow; after that, you are reading the grid as a system of interlocking fragments rather than as a list of things to find.`,


    tips: [


      'Find the rare-letter words first. Q, X, Z, J, K, V are far less common than E, T, A, O, I — they will stand out visually as soon as you start looking.',


      'Once you find a word, mark the starting and ending letters. They are often shared with words that have not been found yet.',


      'Work the diagonal and reverse words in batches. Most players only scan horizontal and vertical; clearing the diagonals first makes the rest easier.',


      'Use your finger or the cursor to trace a word as you find it. The act of tracing commits the word to short-term memory so you do not re-check the same area.',


      'When the last 2-3 words refuse to show up, switch to scanning the unused letters. The hidden word must be made of the remaining letters.',


    ],


    faqs: [


      { q: 'What themes are available?', a: 'Animals, Food, Sports, Technology, Science, Geography, and Mixed. Each theme has 15-25 words per puzzle.' }},


      { q: 'Can words run diagonally and backwards?', a: 'On Easy mode, words only run horizontally and vertically (left-to-right and top-to-bottom). Hard mode adds diagonal and reverse directions.' }},


      { q: 'Do I have to find every word to win?', a: 'Yes. The puzzle completes when every word in the list has been circled or selected.' }},


      { q: 'What is the best grid size?', a: '10x10 is comfortable for a quick break. 15x15 is the standard newspaper size and the most satisfying. Larger grids are available on Hard mode only.' }},


      { q: 'Can I get a hint?', a: 'Yes. The Hint button reveals the first letter of an unfound word. Each hint adds 10 seconds to your solve time.' }},


    ],


  },


    


  {


    slug: 'crossword',


    name: 'Crossword Puzzle',


    category: 'Puzzle',


    emoji: '📰',


    thumbnail: 'https://img.gamepix.com/games/crossword/cover/crossword.png?w=400',


    gameUrl: 'https://play.gamepix.com/crossword/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Fill in crossword clues. Test your vocabulary.',


    controls: 'Click and type letters',


    tags: ['word', 'crossword', 'vocabulary'],


  },


  {


    slug: 'math-puzzle',


    name: 'Math Puzzle',


    category: 'Puzzle',


    emoji: '➕',


    thumbnail: 'https://img.gamepix.com/games/math-puzzle/cover/math-puzzle.png?w=400',


    gameUrl: 'https://play.gamepix.com/math-puzzle/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Solve math equations. Train your mental math.',


    controls: 'Click numbers to solve',


    tags: ['math', 'numbers', 'brain'],


  },


  {


    slug: 'sudoku',


    name: 'Sudoku',


    category: 'Puzzle',


    emoji: '9️⃣',


    thumbnail: 'https://img.gamepix.com/games/sudoku/cover/sudoku.png?w=400',


    gameUrl: 'https://play.gamepix.com/sudoku/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic number puzzle. Fill the grid without repeating.',


    controls: 'Click cell, then select number',


    tags: ['sudoku', 'numbers', 'logic'],


  seo: {


    h1: 'Sudoku — Free Online Number Logic Puzzle Game',


    subtitle: 'Fill the 9x9 grid, train your brain. No download.',


    intro: 'Sudoku is the number-placement puzzle that took the world by storm in the mid-2000s. A 9x9 grid is divided into nine 3x3 boxes, and your job is to fill every cell with a digit 1 through 9 so that each digit appears exactly once per row, column, and 3x3 box.',


    body: `Every Sudoku puzzle has exactly one solution, and the puzzle is designed so that no guessing is required — every placement can be deduced by pure logic. The standard difficulty levels in Xavrito's build (Easy, Medium, Hard, Expert) reflect the number of techniques needed to crack the puzzle, from "naked singles" up through "X-Wing" and "Swordfish".





The technique ladder starts with the basics: if a digit can only go in one cell of a row, column, or box, that is the cell. From there you climb to "hidden singles" and "naked pairs" and eventually to full chains. Most Easy puzzles require only singles. Hard puzzles require you to look two or three moves ahead. Expert puzzles are not unsolvable — they just require a clean notebook and a willingness to mark every candidate for every cell.





The reason Sudoku aged well is that it is purely logical. There is no trivia, no language, no cultural knowledge. A 7-year-old in Tokyo and a 70-year-old in São Paulo can both play, and both can reach Expert. On Xavrito, the puzzles are generated by a quality-checked algorithm and graded by difficulty, so a Hard puzzle is genuinely Hard and an Easy puzzle is genuinely Easy. The timer is optional, and your completion times are saved per difficulty in the browser local storage.`,


    tips: [


      'Scan every row, column, and 3x3 box for missing digits that can only go in one cell. These "naked singles" are the foundation of every solve.',


      'When stuck, write tiny candidate marks in each empty cell. The puzzle is small enough that pencil marks are practical.',


      'Look for "hidden pairs": two cells in a row, column, or box that can only be the same two candidates. Eliminate those candidates from neighboring cells.',


      'If you can see a number that has to go in one specific row AND that row already has it in every other column, the missing cell is forced.',


      'Do not guess. If the puzzle requires guessing, you have miscounted somewhere. Re-scan the row, column, and box for the last few candidates.',


    ],


    faqs: [


      { q: 'Do I need to do math to play Sudoku?', a: 'No. There is no arithmetic. You are simply placing digits 1-9 so that each appears once per row, column, and 3x3 box.' }},


      { q: 'How long does a typical Sudoku take?', a: 'Easy puzzles take 5-10 minutes. Hard puzzles take 20-30 minutes. Expert puzzles can take an hour for a slow player.' }},


      { q: 'Can I get a hint if I am stuck?', a: 'Yes, the Hint button in the side menu highlights a forced cell. There is also a Check button that flags any wrong entries.' }},


      { q: 'Can I undo a wrong number?', a: 'Yes. Click the cell to bring up the number pad, then pick a different digit. The Check button will warn you if you create a contradiction.' }},


      { q: 'What is a "valid" Sudoku puzzle?', a: 'A puzzle with exactly one solution that can be reached by pure logic, no guessing. Our generator checks uniqueness before serving a board.' }},


    ],


  },


    


  {


    slug: 'unblock-me',


    name: 'Unblock Me',


    category: 'Puzzle',


    emoji: '🚧',


    thumbnail: 'https://img.gamepix.com/games/unblock-me/cover/unblock-me.png?w=400',


    gameUrl: 'https://play.gamepix.com/unblock-me/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Slide blocks to clear the path. Red block must escape.',


    controls: 'Drag blocks to slide',


    tags: ['unblock', 'slide', 'logic'],


  },


  {


    slug: 'tangram',


    name: 'Tangram',


    category: 'Puzzle',


    emoji: '🔺',


    thumbnail: 'https://img.gamepix.com/games/tangram/cover/tangram.png?w=400',


    gameUrl: 'https://play.gamepix.com/tangram/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Fit geometric shapes into the outline. Ancient puzzle.',


    controls: 'Drag shapes to place',


    tags: ['tangram', 'shapes', 'geometry'],


  },


  {


    slug: 'brain-quest',


    name: 'Brain Quest',


    category: 'Memory',


    emoji: '🧠',


    thumbnail: 'https://img.gamepix.com/games/brain-quest/cover/brain-quest.png?w=400',


    gameUrl: 'https://play.gamepix.com/brain-quest/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Multiple brain teasers in one. Memory, math, logic.',


    controls: 'Follow on-screen instructions',


    tags: ['brain', 'multi', 'training'],


  },


  {


    slug: 'matching-cards',


    name: 'Matching Cards',


    category: 'Memory',


    emoji: '🃏',


    thumbnail: 'https://img.gamepix.com/games/matching-cards/cover/matching-cards.png?w=400',


    gameUrl: 'https://play.gamepix.com/matching-cards/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Flip and match card pairs. Classic memory game.',


    controls: 'Click cards to flip',


    tags: ['matching', 'cards', 'memory'],


  },


  {


    slug: 'find-the-pair',


    name: 'Find the Pair',


    category: 'Memory',


    emoji: '👀',


    thumbnail: 'https://img.gamepix.com/games/find-the-pair/cover/find-the-pair.png?w=400',


    gameUrl: 'https://play.gamepix.com/find-the-pair/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Find matching pairs. Test your visual memory.',


    controls: 'Click to reveal and match',


    tags: ['pair', 'visual', 'memory'],


  },


  {


    slug: 'concentration',


    name: 'Concentration',


    category: 'Memory',


    emoji: '🎯',


    thumbnail: 'https://img.gamepix.com/games/concentration/cover/concentration.png?w=400',


    gameUrl: 'https://play.gamepix.com/concentration/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Remember card positions. Improve concentration.',


    controls: 'Click cards to memorize and match',


    tags: ['concentration', 'memory', 'cards'],


  },


  {


    slug: 'reaction-test',


    name: 'Reaction Test',


    category: 'Action',


    emoji: '⚡',


    thumbnail: 'https://img.gamepix.com/games/reaction-test/cover/reaction-test.png?w=400',


    gameUrl: 'https://play.gamepix.com/reaction-test/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Test your reaction speed. Click as fast as you can.',


    controls: 'Click when target appears',


    tags: ['reaction', 'speed', 'test'],


  },


  {


    slug: 'aim-trainer',


    name: 'Aim Trainer',


    category: 'Action',


    emoji: '🎯',


    thumbnail: 'https://img.gamepix.com/games/aim-trainer/cover/aim-trainer.png?w=400',


    gameUrl: 'https://play.gamepix.com/aim-trainer/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Improve your aim. Click targets as fast as possible.',


    controls: 'Click targets to score',


    tags: ['aim', 'shooting', 'training'],


  },


  {


    slug: 'clicker-game',


    name: 'Cookie Clicker',


    category: 'Arcade',


    emoji: '🍪',


    thumbnail: 'https://img.gamepix.com/games/cookie-clicker/cover/cookie-clicker.png?w=400',


    gameUrl: 'https://play.gamepix.com/cookie-clicker/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Click cookies to bake more. Idle clicker fun.',


    controls: 'Click to bake cookies',


    tags: ['clicker', 'idle', 'cookie'],


  },


  {


    slug: 'tap-tap',


    name: 'Tap Tap',


    category: 'Arcade',


    emoji: '👆',


    thumbnail: 'https://img.gamepix.com/games/tap-tap/cover/tap-tap.png?w=400',


    gameUrl: 'https://play.gamepix.com/tap-tap/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Tap as fast as you can. Beat the clock.',


    controls: 'Tap rapidly',


    tags: ['tap', 'speed', 'arcade'],


  seo: {


    h1: 'Tap Tap — Free Online One-Tap Reflex Game',


    subtitle: 'Tap in rhythm, hit every target, beat the clock. No download.',


    intro: 'Tap Tap is the rhythm-reflex game where the screen lights up with targets and you have to tap them before they fade. The pattern starts slow, speeds up, and adds distractions, and the goal is to keep the streak alive as long as possible.',


    body: `Tap Tap belongs to the "one-tap" family of reflex games that took off in the 2010s along with Flappy Bird and Color Switch. The hook is the same: a single input, a fast loop, an escalating difficulty curve, and a high-score chase that makes the player tap "just one more time" until they realize it is 3 AM. What Tap Tap adds to the formula is a rhythm element — targets appear on the beat, and the best scores come from tapping in time with the music rather than panicking.





The progression curve is steep. The first ten seconds are comfortable, the next ten are demanding, and after thirty seconds the targets are tiny and the distractors are everywhere. The game tracks your best streak in the browser local storage. There is no level system and no in-app purchase, just you and the music.





On Xavrito, Tap Tap runs in HTML5 with optional background music that adapts to your best streak. The visual theme shifts every 100 points to keep the screen fresh. The game is touch-friendly on mobile and mouse-friendly on desktop. There is no signup, no account, and no leaderboard to clutter the play screen — your best score is the only one that matters, and it is yours alone.`,


    tips: [


      'Tap on the beat, not on the visual cue. The music carries a steady pulse, and tapping to the pulse gives you about 200ms of extra reaction time.',


      'Skip distracting decoys. Half the targets are real and half are decoys colored to look similar. The decoy fades slower; the real target snaps to white when hit.',


      'Start a new run with your dominant hand. Switch hands only at high levels when fatigue sets in.',


      'Do not chase the last target in a round. If you missed it, the round is over. Tap the next screen instantly to start a new run.',


      'Take a 5-second break between runs. Reflex games have a fatigue curve and a rested player scores 30% higher than a tired one.',


    ],


    faqs: [


      { q: 'Can I play Tap Tap on my phone?', a: 'Yes. The game is touch-friendly and the targets are sized for finger taps. The interface adapts to phone screens automatically.' }},


      { q: 'How is my high score calculated?', a: 'Your score is the number of targets you hit in a single run before missing. The game does not penalize for accuracy, only for misses.' }},


      { q: 'Is the music important?', a: 'Yes. The targets are timed to the beat, and tapping in time with the music gives you a noticeable reaction-time advantage. Muting the music makes the game much harder.' }},


      { q: 'Can I play without sound?', a: 'Yes, there is a Mute toggle. The game stays fully playable but you will lose the rhythm advantage that comes from syncing to the music.' }},


      { q: 'What are the decoy targets?', a: 'Targets of a slightly different color that look similar to real ones but do not register as a hit. They are designed to test whether you are tapping too quickly.' }},


    ],


  },


    


  {


    slug: 'gravity-run',


    name: 'Gravity Run',


    category: 'Action',


    emoji: '🌍',


    thumbnail: 'https://img.gamepix.com/games/gravity-run/cover/gravity-run.png?w=400',


    gameUrl: 'https://play.gamepix.com/gravity-run/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Run and flip gravity. Navigate obstacles.',


    controls: 'Click to flip gravity',


    tags: ['gravity', 'runner', 'flip'],


  },


  {


    slug: 'zombie-run',


    name: 'Zombie Run',


    category: 'Action',


    emoji: '🧟',


    thumbnail: 'https://img.gamepix.com/games/zombie-run/cover/zombie-run.png?w=400',


    gameUrl: 'https://play.gamepix.com/zombie-run/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Escape the zombie horde. Run and survive.',


    controls: 'Tap to jump or slide',


    tags: ['zombie', 'runner', 'survival'],


  },


  {


    slug: 'ninja-run',


    name: 'Ninja Run',


    category: 'Action',


    emoji: '🥷',


    thumbnail: 'https://img.gamepix.com/games/ninja-run/cover/ninja-run.png?w=400',


    gameUrl: 'https://play.gamepix.com/ninja-run/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Run as a ninja through dangerous paths. Stealth action.',


    controls: 'Swipe to jump and attack',


    tags: ['ninja', 'runner', 'action'],


  },


  {


    slug: 'skibidi-toilet',


    name: 'Skibidi Toilet',


    category: 'Action',


    emoji: '🚽',


    thumbnail: 'https://img.gamepix.com/games/skibidi-toilet/cover/skibidi-toilet.png?w=400',


    gameUrl: 'https://play.gamepix.com/skibidi-toilet/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Hit targets with toilet paper. Whacky aim game.',


    controls: 'Click to throw toilet paper',


    tags: ['toilet', 'aim', 'whacky'],


  },


  {


    slug: 'among-us',


    name: 'Among Us Style',


    category: 'Action',


    emoji: '🚀',


    thumbnail: 'https://img.gamepix.com/games/among-us/cover/among-us.png?w=400',


    gameUrl: 'https://play.gamepix.com/among-us/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Complete tasks as crewmate. Avoid impostors.',


    controls: 'WASD to move, click to interact',


    tags: ['among-us', 'impostor', 'crewmate'],


  },


  {


    slug: 'crafting',


    name: 'Crafting Island',


    category: 'Simulation',


    emoji: '🏝️',


    thumbnail: 'https://img.gamepix.com/games/crafting-island/cover/crafting-island.png?w=400',


    gameUrl: 'https://play.gamepix.com/crafting-island/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Build and craft on a deserted island. Survive.',


    controls: 'Tap to gather and craft',


    tags: ['craft', 'island', 'survival'],


  },


  {


    slug: 'city-builder',


    name: 'City Builder',


    category: 'Simulation',


    emoji: '🏙️',


    thumbnail: 'https://img.gamepix.com/games/city-builder/cover/city-builder.png?w=400',


    gameUrl: 'https://play.gamepix.com/city-builder/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Build your own city. Manage resources and grow.',


    controls: 'Tap to place buildings',


    tags: ['city', 'build', 'management'],


  },





  {


    slug: 'jigsaw-puzzle',


    name: 'Jigsaw Puzzle',


    category: 'Puzzle',


    emoji: '🧩',


    thumbnail: 'https://img.gamepix.com/games/jigsaw-puzzle/cover/jigsaw-puzzle.png?w=400',


    gameUrl: 'https://play.gamepix.com/jigsaw-puzzle/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Drag and drop pieces to complete the picture. Multiple difficulty levels.',


    controls: 'Click and drag pieces',


    tags: ['jigsaw', 'puzzle', 'relaxing'],


  },


  {


    slug: 'block-blast',


    name: 'Block Blast',


    category: 'Puzzle',


    emoji: '🟦',


    thumbnail: 'https://img.gamepix.com/games/block-blast/cover/block-blast.png?w=400',


    gameUrl: 'https://play.gamepix.com/block-blast/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Drag blocks onto the grid. Clear lines to score. Simple to learn, hard to master.',


    controls: 'Drag blocks with your finger or mouse',


    tags: ['block', 'puzzle', 'tetris'],


  },


  {


    slug: 'block-fit',


    name: 'Block Fit',


    category: 'Puzzle',


    emoji: '🟩',


    thumbnail: 'https://img.gamepix.com/games/block-fit/cover/block-fit.png?w=400',


    gameUrl: 'https://play.gamepix.com/block-fit/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Fit blocks into the 10x10 grid. Clear rows and columns to advance levels.',


    controls: 'Tap and drag blocks onto the grid',


    tags: ['block', 'puzzle', 'fit'],


  },


  {


    slug: 'color-block',


    name: 'Color Block',


    category: 'Puzzle',


    emoji: '🟪',


    thumbnail: 'https://img.gamepix.com/games/color-block/cover/color-block.png?w=400',


    gameUrl: 'https://play.gamepix.com/color-block/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Match colored blocks to clear the board. Plan ahead to chain combos.',


    controls: 'Tap blocks of the same color',


    tags: ['color', 'match', 'puzzle'],


  },


  {


    slug: 'connect-the-pipes',


    name: 'Connect the Pipes',


    category: 'Puzzle',


    emoji: '🔧',


    thumbnail: 'https://img.gamepix.com/games/connect-the-pipes/cover/connect-the-pipes.png?w=400',


    gameUrl: 'https://play.gamepix.com/connect-the-pipes/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Rotate pipes to create a continuous flow from start to end.',


    controls: 'Click to rotate pipe segments',


    tags: ['pipes', 'plumber', 'puzzle'],


  },


  {


    slug: 'bubble-shooter-classic',


    name: 'Bubble Shooter Classic',


    category: 'Puzzle',


    emoji: '🫧',


    thumbnail: 'https://img.gamepix.com/games/bubble-shooter-classic/cover/bubble-shooter-classic.png?w=400',


    gameUrl: 'https://play.gamepix.com/bubble-shooter-classic/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Match three or more bubbles of the same color to pop them. Clear the board.',


    controls: 'Aim and click to shoot bubbles',


    tags: ['bubble', 'match-3', 'shooter'],


  },


  {


    slug: 'puzzle-bobble',


    name: 'Puzzle Bobble',


    category: 'Puzzle',


    emoji: '🔵',


    thumbnail: 'https://img.gamepix.com/games/puzzle-bobble/cover/puzzle-bobble.png?w=400',


    gameUrl: 'https://play.gamepix.com/puzzle-bobble/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Aim and shoot colored bubbles. Match three to pop and clear the board.',


    controls: 'Aim with mouse, click to shoot',


    tags: ['bubble', 'shooter', 'arcade'],


  },


  {


    slug: 'bubble-pop-classic',


    name: 'Bubble Pop Classic',


    category: 'Puzzle',


    emoji: '💧',


    thumbnail: 'https://img.gamepix.com/games/bubble-pop-classic/cover/bubble-pop-classic.png?w=400',


    gameUrl: 'https://play.gamepix.com/bubble-pop-classic/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Pop bubbles by matching colors. Combo chains score bonus points.',


    controls: 'Click to shoot matching bubbles',


    tags: ['bubble', 'pop', 'puzzle'],


  },


  {


    slug: 'mahjong-game',


    name: 'Mahjong Game',


    category: 'Puzzle',


    emoji: '🀄',


    thumbnail: 'https://img.gamepix.com/games/mahjong-game/cover/mahjong-game.png?w=400',


    gameUrl: 'https://play.gamepix.com/mahjong-game/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic Mahjong Solitaire. Match pairs of free tiles to clear the board.',


    controls: 'Click matching free tiles',


    tags: ['mahjong', 'solitaire', 'tile'],


  },


  {


    slug: 'mahjong-classic',


    name: 'Mahjong Classic',


    category: 'Puzzle',


    emoji: '🀫',


    thumbnail: 'https://img.gamepix.com/games/mahjong-classic/cover/mahjong-classic.png?w=400',


    gameUrl: 'https://play.gamepix.com/mahjong-classic/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Traditional Mahjong matching game. Find and remove all tile pairs.',


    controls: 'Click two matching tiles',


    tags: ['mahjong', 'classic', 'match'],


  seo: {


    h1: 'Mahjong Classic — Free Online Tile Matching Solitaire',


    subtitle: 'Match pairs, clear the board, train your memory. No download.',


    intro: 'Mahjong Solitaire is the classic tile-matching puzzle: 144 mahjong tiles are arranged in a "turtle" formation, and your job is to remove them in pairs by clicking any two free tiles of the same suit. Free means the tile has at least one side (left or right) uncovered, and no tile sitting on top of it.',


    body: `Mahjong Solitaire looks like a Chinese game but it was actually invented in the United States in 1981, packaged with a computer version of the traditional four-player game. The solitaire variant stuck because the rules are simple, the strategy is deep, and the boards can be enormous. There are hundreds of standard layouts — "turtle", "dragon", "spider", "wind", "flower" — and each one has its own puzzle character. Some layouts are dense and demand careful planning; others are sparse and reward quick matching.





The strategy has two layers. The short-term layer is to spot easy pairs and clear them so that buried tiles become free. The long-term layer is to avoid moves that lock up the board. A "lock" happens when two tiles of the same suit are buried under a third, because the third cannot be removed until one of them is, but the two buried tiles can never be paired. Recognizing an incipient lock — and choosing to "save" the rare tile instead of pairing it — is the mark of an intermediate player.





On Xavrito, Mahjong Classic uses the standard 144-tile set with bamboo, circles, characters, winds, dragons, and four flowers (which are bonus tiles that match any other flower). The game tracks your fastest completion time in the browser local storage. There is no hint button, no shuffle, and no timer; you win only by your own eyes.`,


    tips: [


      'Always clear the top layer first. Tiles on the top are blocking the most future moves; freeing them opens the board.',


      'Match the four flowers and four seasons as soon as you see them. They are free picks and the bonus tiles clutter the layout visually.',


      'When two pairs of the same tile are visible, choose the pair that frees the most future moves. The immediate score is the same, but the long-term shape of the board changes.',


      'Do not pair a tile that you will need to save for a deeper match. If only one 3-bamboo is left after you pair the other, the board may lock.',


      'Restart the layout if you get stuck. Shuffling the same board does not help in most variants, but a fresh deal is.',


    ],


    faqs: [


      { q: 'Is this the same as the four-player Chinese game?', a: 'No. This is the solitaire variant played alone with the same tile set. The four-player game is a different beast entirely.' }},


      { q: 'What counts as a "free" tile?', a: 'A tile is free if at least one of its long sides (left or right) is uncovered, and no tile sits on top of it. Tiles covered on the top cannot be removed.' }},


      { q: 'Do the flower and season tiles match each other?', a: 'They only match tiles of the same type (flower to flower, season to season). A flower and a season cannot be paired, even though both are bonus tiles.' }},


      { q: 'Can I undo a move?', a: 'No. The standard Mahjong Solitaire rules do not include undo. Restart the layout if you paint yourself into a corner.' }},


      { q: 'How long does a typical game take?', a: 'A quick layout takes 5-10 minutes. The complex turtle layouts can take 30-45 minutes for a first-time solve.' }},


    ],


  },


    


  {


    slug: 'checkers',


    name: 'Checkers',


    category: 'Puzzle',


    emoji: '🔴',


    thumbnail: 'https://img.gamepix.com/games/checkers/cover/checkers.png?w=400',


    gameUrl: 'https://play.gamepix.com/checkers/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic checkers game. Jump over opponents to capture their pieces.',


    controls: 'Click piece, then click target square',


    tags: ['board', 'strategy', 'classic'],


  },


  {


    slug: 'chess-classic',


    name: 'Chess Classic',


    category: 'Puzzle',


    emoji: '♟️',


    thumbnail: 'https://img.gamepix.com/games/chess-classic/cover/chess-classic.png?w=400',


    gameUrl: 'https://play.gamepix.com/chess-classic/embed?sid=7O017',


    developer: 'GamePix',


    description: 'The classic strategy board game. Checkmate the opponent king to win.',


    controls: 'Click piece, then click destination',


    tags: ['chess', 'strategy', 'board'],


  },


  {


    slug: 'helicopter',


    name: 'Helicopter',


    category: 'Arcade',


    emoji: '🚁',


    thumbnail: 'https://img.gamepix.com/games/helicopter/cover/helicopter.png?w=400',


    gameUrl: 'https://play.gamepix.com/helicopter/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Tap to keep the helicopter flying. Avoid the walls and obstacles.',


    controls: 'Tap or click to fly up',


    tags: ['arcade', 'fly', 'one-button'],


  seo: {


    h1: 'Helicopter Game — Free Online One-Tap Arcade',


    subtitle: 'Tap to fly, dodge the walls. The original one-button arcade.',


    intro: 'Helicopter is the iconic 2004 one-button arcade game where you pilot a tiny helicopter through a cave by tapping the up arrow. Each tap gives the chopper a small burst of lift, and gravity pulls it down the rest of the time. The cave is procedurally generated and scrolls right to left forever.',


    body: `Helicopter (also called "Heli-Storm" or "Helicopter Game") is one of the earliest "one-button" arcade games, and it is still one of the best. The controls could not be simpler: tap to go up, release to fall. The challenge is that the cave is narrow, the ceiling is jagged, and the floor is jagged, and you have to thread the needle at the right altitude. Crashing into either surface ends the run.





What makes the game last is the speed curve. The first ten seconds are gentle, the next ten are challenging, and after thirty seconds the cave is scrolling fast enough that small mistakes are fatal. The game is endless, and your best distance is saved in the browser local storage. There is no upgrade system, no power-ups, no story. Just you, a helicopter, and a wall.





Helicopter is a perfect "second monitor" game. It runs in a small tab in the corner while you work on something else, and a single keypress saves you from a crash. The keyboard mapping is configurable in the side menu — by default Space or Up Arrow — and the volume slider is on the same panel. On Xavrito, the game is the original 2004 flash port, rebuilt in HTML5 for modern browsers.`,


    tips: [


      'Tap in short bursts. Holding the key sends the helicopter to the ceiling; a single tap only buys you a small lift.',


      'Stay near the vertical middle of the cave. Climbing to the ceiling is slow; staying low makes the floor dangerous fast.',


      'Do not react to the next wall. React to the wall two ahead. The scroll speed is constant so the future is predictable for about a second.',


      'Tilt your head, not the helicopter. Most crashes happen because the player pans the eye to a different cave section too fast.',


      'When the cave gets tight, slow down. Slower means more taps per pixel and more control.',


    ],


    faqs: [


      { q: 'Is the game endless?', a: 'Yes. The cave is procedurally generated and scrolls forever. The game ends only when you crash into a wall or the ceiling.' }},


      { q: 'Can I play Helicopter on mobile?', a: 'Yes. Tap anywhere on the screen to lift the helicopter. The interface adapts to touch devices automatically.' }},


      { q: 'How is my score calculated?', a: 'Your score is the distance you traveled before crashing. It is saved locally in the browser as your personal best.' }},


      { q: 'What is the best way to get a high score?', a: 'Stay near the vertical middle of the cave and tap in short bursts. Most players die from holding the key too long, not from missing the wall.' }},


      { q: 'Can I turn the music and sound effects off?', a: 'Yes, the side menu has a Mute toggle. The setting is saved in the browser local storage.' }},


    ],


  },


    


  {


    slug: 'doodle-jump',


    name: 'Doodle Jump',


    category: 'Arcade',


    emoji: '🦘',


    thumbnail: 'https://img.gamepix.com/games/doodle-jump/cover/doodle-jump.png?w=400',


    gameUrl: 'https://play.gamepix.com/doodle-jump/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Bounce on platforms and climb as high as you can. Avoid monsters and UFOs.',


    controls: 'Tilt device or use arrow keys',


    tags: ['jump', 'arcade', 'endless'],


  },


  {


    slug: 'flappy',


    name: 'Flappy',


    category: 'Arcade',


    emoji: '🐦',


    thumbnail: 'https://img.gamepix.com/games/flappy/cover/flappy.png?w=400',


    gameUrl: 'https://play.gamepix.com/flappy/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Tap to fly through the gaps. One hit and you start over.',


    controls: 'Tap or click to flap',


    tags: ['flappy', 'arcade', 'tap'],


  },


  {


    slug: 'cannon',


    name: 'Cannon',


    category: 'Arcade',


    emoji: '💣',


    thumbnail: 'https://img.gamepix.com/games/cannon/cover/cannon.png?w=400',


    gameUrl: 'https://play.gamepix.com/cannon/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Aim and fire the cannon to destroy targets. Multiple levels and power-ups.',


    controls: 'Adjust angle and power, click to fire',


    tags: ['cannon', 'shoot', 'physics'],


  },


  {


    slug: 'jumper',


    name: 'Jumper',


    category: 'Arcade',


    emoji: '🤸',


    thumbnail: 'https://img.gamepix.com/games/jumper/cover/jumper.png?w=400',


    gameUrl: 'https://play.gamepix.com/jumper/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Jump from platform to platform. The higher you go, the higher you score.',


    controls: 'Tap to jump',


    tags: ['jump', 'platform', 'arcade'],


  },


  {


    slug: 'archery-king',


    name: 'Archery King',


    category: 'Action',


    emoji: '🏹',


    thumbnail: 'https://img.gamepix.com/games/archery-king/cover/archery-king.png?w=400',


    gameUrl: 'https://play.gamepix.com/archery-king/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Aim and shoot arrows at the target. Hit the bullseye for max points.',


    controls: 'Drag to aim, release to shoot',


    tags: ['archery', 'shoot', 'aim'],


  },


  {


    slug: 'zombie-shooter-2',


    name: 'Zombie Shooter 2',


    category: 'Action',


    emoji: '🧟',


    thumbnail: 'https://img.gamepix.com/games/zombie-shooter-2/cover/zombie-shooter-2.png?w=400',


    gameUrl: 'https://play.gamepix.com/zombie-shooter-2/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Survive the zombie apocalypse. Aim, shoot, and clear waves of undead.',


    controls: 'Aim with mouse, click to shoot',


    tags: ['zombie', 'shooter', 'survival'],


  },


  {


    slug: 'zombie-attack',


    name: 'Zombie Attack',


    category: 'Action',


    emoji: '🔫',


    thumbnail: 'https://img.gamepix.com/games/zombie-attack/cover/zombie-attack.png?w=400',


    gameUrl: 'https://play.gamepix.com/zombie-attack/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Defend against hordes of zombies. Upgrade weapons between waves.',


    controls: 'Aim and click to shoot',


    tags: ['zombie', 'shoot', 'defense'],


  },


  {


    slug: 'memory-color',


    name: 'Memory Color',


    category: 'Memory',


    emoji: '🌈',


    thumbnail: 'https://img.gamepix.com/games/memory-color/cover/memory-color.png?w=400',


    gameUrl: 'https://play.gamepix.com/memory-color/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Remember the color sequence and repeat it back. Each round gets longer.',


    controls: 'Click colors in correct order',


    tags: ['memory', 'color', 'sequence'],


  seo: {


    h1: 'Memory Color — Free Online Color Memory Game',


    subtitle: 'Watch the sequence, repeat it back. Train your brain.',


    intro: 'Memory Color is the color-sequence memory game where the screen flashes a sequence of colored tiles and your job is to repeat the sequence in the correct order. Each round adds one more tile to the sequence, and the game tracks how far you can go before you miss.',


    body: `Memory Color is built on the classic "Simon" mechanic, which has been around since 1978. The reason the format lasts is that it is one of the few games that genuinely trains your short-term memory. Most people can hold 4-5 items in working memory; practiced players can hold 8-10. The game is calibrated to push you just past your limit, so each round is hard but not impossible.





The strategic layer appears around round 6. By that point, you cannot just watch the sequence and repeat it. You have to chunk the colors into groups (red-green, blue-yellow, etc.), say them out loud under your breath, or visualize them as a path on the screen. The "method of loci" — placing each color in a familiar mental location — is the technique that takes players from round 8 to round 12 and beyond.





On Xavrito, the game uses four colors (red, blue, green, yellow) by default, with an optional expert mode that adds a fifth color. The starting sequence length is 3 tiles, the speed is fixed at 700ms per tile, and your personal best (the longest sequence you have repeated correctly) is saved in the browser local storage. There is no timer and no penalty for retrying — the only failure is missing the sequence.`,


    tips: [


      'Chunk the colors into pairs. Most people can hold 4-5 items in working memory, but those 4-5 items are usually pairs in their head (red-green, blue-yellow).',


      'Say the colors out loud or in your head as they flash. Verbal rehearsal is one of the most reliable memory techniques.',


      'Use the method of loci. Place each color in a familiar location (your kitchen, your commute, your desk) and walk through them in order.',


      'Do not start the round until you are fully focused. A mid-thought attempt costs you the round and your streak.',


      'When the sequence gets long, focus on the first and last items. Recall the middle items by association rather than by direct order.',


    ],


    faqs: [


      { q: 'How many colors are in the game?', a: 'Four colors (red, blue, green, yellow) by default. Expert mode adds a fifth color (purple).' }},


      { q: 'How is the difficulty scaled?', a: 'The sequence length starts at 3 tiles and increases by 1 after every successful round. The game ends when you miss the sequence.' }},


      { q: 'Does Memory Color train my real-world memory?', a: 'Regular practice with sequence-memory games has been shown in studies to improve short-term recall, attention span, and pattern recognition.' }},


      { q: 'Can I add more colors?', a: 'Yes, in the side menu you can enable Expert mode which adds a fifth color (purple) to the sequence.' }},


      { q: 'Is there a leaderboard?', a: 'No. Your best is saved locally and is the only one that matters. The game is designed to be played for personal improvement, not competition.' }},


    ],


  },


    


  {


    slug: 'memory-tiles',


    name: 'Memory Tiles',


    category: 'Memory',


    emoji: '🟦',


    thumbnail: 'https://img.gamepix.com/games/memory-tiles/cover/memory-tiles.png?w=400',


    gameUrl: 'https://play.gamepix.com/memory-tiles/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Watch the tile pattern light up, then repeat it. Train your memory.',


    controls: 'Click tiles in the shown order',


    tags: ['memory', 'tiles', 'pattern'],


  },


  {


    slug: 'find-pairs',


    name: 'Find Pairs',


    category: 'Memory',


    emoji: '🃏',


    thumbnail: 'https://img.gamepix.com/games/find-pairs/cover/find-pairs.png?w=400',


    gameUrl: 'https://play.gamepix.com/find-pairs/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Find matching pairs of cards. Clear the board in as few moves as possible.',


    controls: 'Click two cards to flip them',


    tags: ['memory', 'pairs', 'cards'],


  },


  {


    slug: 'business-tycoon',


    name: 'Business Tycoon',


    category: 'Simulation',


    emoji: '💼',


    thumbnail: 'https://img.gamepix.com/games/business-tycoon/cover/business-tycoon.png?w=400',


    gameUrl: 'https://play.gamepix.com/business-tycoon/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Build and grow your business empire. Manage employees and products.',


    controls: 'Tap to place buildings',


    tags: ['tycoon', 'business', 'build'],


  },


  {


    slug: 'clicker',


    name: 'Clicker',


    category: 'Simulation',


    emoji: '👆',


    thumbnail: 'https://img.gamepix.com/games/clicker/cover/clicker.png?w=400',


    gameUrl: 'https://play.gamepix.com/clicker/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Tap to earn points. Upgrade your clicks for bigger rewards. Idle progression.',


    controls: 'Click or tap to earn',


    tags: ['clicker', 'idle', 'incremental'],


  },


  {


    slug: 'tower-defense',


    name: 'Tower Defense',


    category: 'Simulation',


    emoji: '🏯',


    thumbnail: 'https://img.gamepix.com/games/tower-defense/cover/tower-defense.png?w=400',


    gameUrl: 'https://play.gamepix.com/tower-defense/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Build towers to defend against waves of enemies. Upgrade between rounds.',


    controls: 'Tap to place and upgrade towers',


    tags: ['tower', 'defense', 'strategy'],


  },


  {


    slug: 'basketball-shots',


    name: 'Basketball Shots',


    category: 'Sports',


    emoji: '🏀',


    thumbnail: 'https://img.gamepix.com/games/basketball-shots/cover/basketball-shots.png?w=400',


    gameUrl: 'https://play.gamepix.com/basketball-shots/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Shoot free throws and beat the clock. Perfect your aim for high scores.',


    controls: 'Drag to aim, release to shoot',


    tags: ['basketball', 'shoot', 'sport'],


  },


  {


    slug: 'basketball-master',


    name: 'Basketball Master',


    category: 'Sports',


    emoji: '⛹️',


    thumbnail: 'https://img.gamepix.com/games/basketball-master/cover/basketball-master.png?w=400',


    gameUrl: 'https://play.gamepix.com/basketball-master/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Master the art of the perfect shot. Multiple courts and challenges.',


    controls: 'Click and drag to aim and shoot',


    tags: ['basketball', 'master', 'sport'],


  },


  {


    slug: 'street-basketball',


    name: 'Street Basketball',


    category: 'Sports',


    emoji: '🏀',


    thumbnail: 'https://img.gamepix.com/games/street-basketball/cover/street-basketball.png?w=400',


    gameUrl: 'https://play.gamepix.com/street-basketball/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Pick-up basketball on the street court. Timed shots and trick shots.',


    controls: 'Click to shoot, hold for power',


    tags: ['basketball', 'street', 'sport'],


  },


  {


    slug: 'bike-racing-2',


    name: 'Bike Racing 2',


    category: 'Racing',


    emoji: '🏍️',


    thumbnail: 'https://img.gamepix.com/games/bike-racing-2/cover/bike-racing-2.png?w=400',


    gameUrl: 'https://play.gamepix.com/bike-racing-2/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Race motorcycles on wild tracks. Stunts, speed, and tight turns.',


    controls: 'Arrow keys to steer and accelerate',


    tags: ['racing', 'motorcycle', 'stunt'],


  },


  {


    slug: 'moto-x3m',


    name: 'Moto X3M',


    category: 'Racing',


    emoji: '🏍️',


    thumbnail: 'https://img.gamepix.com/games/moto-x3m/cover/moto-x3m.png?w=400',


    gameUrl: 'https://play.gamepix.com/moto-x3m/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Drive a dirt bike through obstacle courses. Perform flips for speed boosts.',


    controls: 'Arrow keys to accelerate and brake',


    tags: ['racing', 'moto', 'stunt'],


  seo: {


    h1: 'Moto X3M — Free Online Bike Stunt Game',


    subtitle: 'Stunt bike physics, 25 levels, deadly obstacles. No download.',


    intro: 'Moto X3M is the dirt-bike stunt game where you race through 25 levels of obstacles — ramps, explosives, spikes, swinging hammers, and gaps that demand a perfect front-flip or back-flip to clear. The timer ticks, the bike flips, and the goal is to finish each level in the lowest time possible.',


    body: `Moto X3M is built on a 2D physics engine that handles the bike and the rider as separate rigid bodies. That is what lets the rider crumple into a ragdoll when you blow up mid-air, and what gives the game its signature mix of skill and slapstick. A perfect run is precise; a crashed run is a meme.





Each of the 25 levels is a self-contained obstacle course. A level might be 20 seconds long if you do it perfectly, or 90 seconds if you keep flipping and exploding. The trick to most levels is momentum: you cannot crawl, you must commit to a speed. The bike accelerates from rest, the front wheel lifts under hard throttle, and the trick is to land the wheel just as the obstacle clears.





On Xavrito, the build includes the original 25 levels plus a "Pool Party" themed expansion that swaps the bike for a tiny speedboat. The timer records your best time per level, and the game tracks your total stars across all levels. There is no signup and no in-app purchase, and the controls are simple: arrow keys or WASD to accelerate, brake, and flip.`,


    tips: [


      'Flips are faster but riskier. A back-flip takes about 0.4 seconds; a clean landing is the difference between a sub-30s run and a wipeout.',


      'Use the bike's nose-down tilt on landing to keep speed. Landing flat kills momentum and you will not clear the next ramp.',


      'Do not over-accelerate. The bike has a top speed, and going faster than the physics can handle throws you into a wild spin.',


      'On long jumps, accelerate fully before takeoff. Mid-air flips cost time, so only flip when you need to change orientation or avoid a hazard.',


      'Pause before any obstacle you have not seen before. The first attempt is for learning; the second attempt is for the time.',


    ],


    faqs: [


      { q: 'How many levels are there?', a: '25 levels in the original pack plus a 25-level "Pool Party" expansion. Each level is a unique obstacle course.' }},


      { q: 'Can I redo a level?', a: 'Yes. You can replay any unlocked level as many times as you want. Only your best time is recorded.' }},


      { q: 'What do the stars mean?', a: 'Each level has three star thresholds. Hitting all three on every level unlocks the bike customization menu.' }},


      { q: 'How do I flip the bike?', a: 'Forward arrow or W accelerates, back arrow or S brakes, and the space bar or X does a flip. The rotation direction depends on the rider's current tilt.' }},


      { q: 'Can I play on mobile?', a: 'Yes. Touch controls are supported with on-screen buttons for accelerate, brake, and flip.' }},


    ],


  },


    


  {


    slug: 'car-racing',


    name: 'Car Racing',


    category: 'Racing',


    emoji: '🏎️',


    thumbnail: 'https://img.gamepix.com/games/car-racing/cover/car-racing.png?w=400',


    gameUrl: 'https://play.gamepix.com/car-racing/embed?sid=7O017',


    developer: 'GamePix',


    description: 'High-speed car races on various tracks. Overtake opponents to win.',


    controls: 'Arrow keys to steer, accelerate, brake',


    tags: ['racing', 'car', 'speed'],


  },


  {


    slug: 'stickman-shooter-2',


    name: 'Stickman Shooter 2',


    category: 'Stickman',


    emoji: '🥷',


    thumbnail: 'https://img.gamepix.com/games/stickman-shooter-2/cover/stickman-shooter-2.png?w=400',


    gameUrl: 'https://play.gamepix.com/stickman-shooter-2/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Stickman arena combat. Run, gun, and survive waves of enemies.',


    controls: 'WASD to move, mouse to aim and shoot',


    tags: ['stickman', 'shoot', 'action'],


  },


  {


    slug: 'minesweeper-classic',


    name: 'Minesweeper Classic',


    category: 'Puzzle',


    emoji: '💣',


    thumbnail: 'https://img.gamepix.com/games/minesweeper-classic/cover/minesweeper-classic.png?w=400',


    gameUrl: 'https://play.gamepix.com/minesweeper-classic/embed?sid=7O017',


    developer: 'GamePix',


    description: 'Classic minesweeper. Uncover safe cells and flag the mines without exploding.',


    controls: 'Left-click to reveal, right-click to flag',


    tags: ['minesweeper', 'logic', 'classic'],


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





// ─────────────────────────────────────────────────────────────────────


// Blacklist pipeline


// ─────────────────────────────────────────────────────────────────────


// Filter rawHtml5Games through the blacklist at module load. Any slug


// listed in lib/blacklist.ts is dropped before this module exports the


// public `html5Games` list. To add a blacklisted game, edit


// lib/blacklist.ts and commit — the next build will exclude it.


//


// Usage from a script or API route:


//   import { html5Games, isBlacklisted, blacklistReason } from '@/lib/html5-games'


//   if (isBlacklisted(slug)) { ... }


//


// To regenerate the public catalog from a fresh source (e.g. scraping


// GamePix), feed results through `applyBlacklist`:


//   import { applyBlacklist } from './blacklist'


//   const cleaned = applyBlacklist(scrapedGames)


//


// ─────────────────────────────────────────────────────────────────────


import { applyBlacklist, BLACKLIST, isBlacklisted } from './blacklist'





/** Public catalog — rawHtml5Games with blacklisted entries filtered out. */


export const html5Games: Html5Game[] = applyBlacklist(rawHtml5Games)





// Re-export blacklist helpers for convenience so consumers only need


// to import from one place.


export { isBlacklisted, applyBlacklist, BLACKLIST }





// Build-time audit log: warn at module load if any game was filtered.


if (BLACKLIST.length > 0 && typeof console !== 'undefined') {


  const dropped = rawHtml5Games.length - html5Games.length


  if (dropped > 0) {


    console.info(


      `[xavrito] Applied blacklist: dropped ${dropped} of ${rawHtml5Games.length} games (${BLACKLIST.length} entries in lib/blacklist.ts)`,


    )


  }


}


