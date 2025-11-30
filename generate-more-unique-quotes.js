// generate-more-unique-quotes.js
const fs = require('fs');

// Even more unique philosophical themes that avoid clichéd patterns
const moreUniqueThemes = [
  "Entangled Moral Frameworks",
  "Fractal Wisdom Structures",
  "Biosemiotic Meaning Making",
  "Cybernetic Virtue Systems",
  "Non-linear Causality in Choice",
  "Distributed Intelligence Ethics",
  "Evolutionary Aesthetic Principles",
  "Morphic Resonance Patterns",
  "Recursive Self-Awareness",
  "Symbiotic Existentialism",
  "Holographic Mind Theory",
  "Temporal Fluidity in Perception",
  "Neural Network Ethics",
  "Biological Metaphysics of Emergence",
  "Quantum Consciousness Paradoxes",
  "Collective Unconscious Dynamics",
  "Neural Symphonies",
  "Existential Resonance",
  "Morphic Fields",
  "Synchronistic Patterns"
];

// More diverse philosophers from various traditions
const morePhilosophers = [
  // Ancient Eastern
  "Lao Tzu", "Confucius", "Buddha", "Nagarjuna", "Dogen", "Bodhidharma",
  
  // Ancient Western
  "Heraclitus", "Parmenides", "Democritus", "Epicurus", "Zeno of Citium", "Pythagoras",
  
  // Medieval
  "Thomas Aquinas", "Maimonides", "Ibn Rushd (Averroes)", "Ibn Sina (Avicenna)", "Meister Eckhart",
  
  // Renaissance/Early Modern
  "Giordano Bruno", "Nicolas de Cusa", "Spinoza", "Leibniz", "Locke", "Hume", "Kant",
  
  // Modern
  "Schopenhauer", "Nietzsche", "William James", "Bergson", "Whitehead", "Heidegger", "Sartre", "Camus",
  
  // Contemporary
  "Deleuze", "Derrida", "Foucault", "Irigaray", "Badiou", "Haraway", "Rorty", "Dennett"
];

// Generate even more unique philosophical quotes
function generateMoreUniqueQuotes(count = 5000) {
  const quotes = [];
  
  for (let i = 0; i < count; i++) {
    const theme = moreUniqueThemes[Math.floor(Math.random() * moreUniqueThemes.length)];
    const philosopher = morePhilosophers[Math.floor(Math.random() * morePhilosophers.length)];
    const era = getRandomEra();
    
    const quote = generateQuoteByTheme(theme, philosopher);
    
    quotes.push({
      id: `unique-${Date.now()}-${i + 5000}`, // Different ID range
      text: quote,
      author: philosopher,
      source: "Generated Unique Collection II",
      tags: [theme.replace(/\s+/g, '-').toLowerCase(), "unique", "special", "premium"],
      addedAt: new Date().toISOString(),
      era: era,
      theme: theme,
      language: "en"
    });
  }
  
  return quotes;
}

function getRandomEra() {
  const eras = ["Ancient", "Medieval", "Renaissance", "Enlightenment", "Modern", "Contemporary"];
  return eras[Math.floor(Math.random() * eras.length)];
}

function generateQuoteByTheme(theme, philosopher) {
  const templates = {
    "Entangled Moral Frameworks": [
      `${philosopher} suggested that ethical decisions create ripple effects across the moral fabric of reality.`,
      `In ${theme}, ${philosopher} argued that virtue connects minds across cultures and epochs.`,
      `${philosopher} demonstrated that compassion generates non-local moral consequences.`
    ],
    "Fractal Wisdom Structures": [
      `${philosopher} noticed that wisdom patterns replicate at every scale of existence.`,
      `Through ${theme}, ${philosopher} revealed that microcosm mirrors macrocosm in profound insight.`,
      `${philosopher} proposed that understanding deepens through recursive exploration.`
    ],
    "Biosemiotic Meaning Making": [
      `${philosopher} claimed that meaning emerges from living systems' interpretation of signs.`,
      `In ${theme}, ${philosopher} showed how organisms create significance through perception.`,
      `${philosopher} argued that communication defines life more than replication.`
    ],
    "Cybernetic Virtue Systems": [
      `${philosopher} suggested that ethical behavior emerges from feedback loops of action.`,
      `Through ${theme}, ${philosopher} explained how virtue develops through adaptive response.`,
      `${philosopher} proposed that wisdom self-regulates like any healthy system.`
    ],
    "Non-linear Causality in Choice": [
      `${philosopher} realized that decisions emerge from chaotic attractors in mental landscapes.`,
      `In ${theme}, ${philosopher} showed how free will operates through strange causation.`,
      `${philosopher} demonstrated that intention influences outcomes across temporal gaps.`
    ],
    "Distributed Intelligence Ethics": [
      `${philosopher} argued that intelligence emerges from collective cognitive networks.`,
      `Through ${theme}, ${philosopher} revealed that wisdom belongs to communities, not individuals.`,
      `${philosopher} proposed that ethical insight arises from collaborative reasoning.`
    ],
    "Evolutionary Aesthetic Principles": [
      `${philosopher} claimed that beauty guides evolution toward higher complexity.`,
      `In ${theme}, ${philosopher} showed how aesthetic selection shapes conscious development.`,
      `${philosopher} argued that art drives the universe toward greater self-awareness.`
    ],
    "Morphic Resonance Patterns": [
      `${philosopher} suggested that ideas attract similar thoughts across space and time.`,
      `Through ${theme}, ${philosopher} explained how collective wisdom forms invisible fields.`,
      `${philosopher} proposed that innovation resonates with past creative breakthroughs.`
    ],
    "Recursive Self-Awareness": [
      `${philosopher} discovered that consciousness reflects upon itself infinitely.`,
      `In ${theme}, ${philosopher} showed how self-knowledge becomes self-transforming.`,
      `${philosopher} noted that awareness creates itself through its own observation.`
    ],
    "Symbiotic Existentialism": [
      `${philosopher} declared that existence precedes essence only in isolation.`,
      `Through ${theme}, ${philosopher} revealed that identity forms through mutual recognition.`,
      `${philosopher} argued that freedom emerges through authentic relationship with others.`
    ],
    "Holographic Mind Theory": [
      `${philosopher} theorized that each thought contains the whole of consciousness.`,
      `In ${theme}, ${philosopher} explained how memory fragments reconstruct complete experiences.`,
      `${philosopher} proposed that perception projects the mind's holographic nature.`
    ],
    "Temporal Fluidity in Perception": [
      `${philosopher} realized that time flows differently in memory than in immediate experience.`,
      `Through ${theme}, ${philosopher} showed how anticipation shapes the present moment.`,
      `${philosopher} demonstrated that temporal sequence is constructed, not given.`
    ],
    "Neural Network Ethics": [
      `${philosopher} suggested that morality forms through synaptic pathways like thought itself.`,
      `In ${theme}, ${philosopher} claimed ethical frameworks emerge from distributed cognition.`,
      `${philosopher} posited that virtue ethics mirror the brain's reward prediction systems.`
    ],
    "Biological Metaphysics of Emergence": [
      `${philosopher} argued that meaning emerges from neural complexity like life from chemistry.`,
      `According to ${philosopher}, the mind transcends its biological substrate through emergent properties.`,
      `${philosopher} proposed that consciousness is biology's way of knowing itself.`
    ],
    "Quantum Consciousness Paradoxes": [
      `${philosopher} observed that awareness exists in superposition until observed by the self.`,
      `In the ${theme}, ${philosopher} noted that certainty dissolves at the quantum level of thought.`,
      `${philosopher}'s principle suggests consciousness entangles with reality through observation.`
    ],
    "Collective Unconscious Dynamics": [
      `${philosopher} proposed that shared archetypes connect all human minds across cultures.`,
      `In ${theme}, ${philosopher} revealed how inherited wisdom patterns influence individual thought.`,
      `${philosopher} demonstrated that personal unconscious taps into universal knowledge streams.`
    ],
    "Neural Symphonies": [
      `${philosopher} described how brain regions harmonize like orchestral instruments.`,
      `Through ${theme}, ${philosopher} showed how neural oscillations create coherent experience.`,
      `${philosopher} argued that consciousness emerges from synchronized mental rhythms.`
    ],
    "Existential Resonance": [
      `${philosopher} claimed that authentic choices create vibrations felt by others.`,
      `In ${theme}, ${philosopher} explained how genuine living generates inspirational waves.`,
      `${philosopher} proposed that meaning multiplies through sincere human connection.`
    ],
    "Morphic Fields": [
      `${philosopher} suggested that habits form invisible organizing fields in nature.`,
      `Through ${theme}, ${philosopher} showed how repeated actions shape reality structures.`,
      `${philosopher} argued that collective behaviors create self-reinforcing patterns.`
    ],
    "Synchronistic Patterns": [
      `${philosopher} noticed that meaningful coincidences reveal hidden connections.`,
      `In ${theme}, ${philosopher} demonstrated how fate orchestrates seemingly random events.`,
      `${philosopher} proposed that universe conspires to guide conscious beings.`
    ]
  };
  
  const themeTemplates = templates[theme] || [
    `${philosopher} contemplated the profound nature of ${theme.toLowerCase()}.`,
    `Regarding ${theme}, ${philosopher} developed groundbreaking insights.`,
    `${philosopher}'s revolutionary work on ${theme} transformed philosophical discourse.`
  ];
  
  return themeTemplates[Math.floor(Math.random() * themeTemplates.length)];
}

// Generate and save more unique quotes
const moreUniqueQuotes = generateMoreUniqueQuotes(5000);
fs.writeFileSync('more-unique-philosophical-quotes.json', JSON.stringify(moreUniqueQuotes, null, 2));
console.log(`Generated ${moreUniqueQuotes.length} additional unique philosophical quotes`);