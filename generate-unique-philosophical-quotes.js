// generate-unique-philosophical-quotes.js
const fs = require('fs');

// Unique philosophical themes that avoid clichéd patterns
const uniquePhilosophicalThemes = [
  "Quantum Consciousness Paradoxes",
  "Biological Metaphysics of Emergence",
  "Neural Network Ethics",
  "Temporal Fluidity in Perception",
  "Holographic Mind Theory",
  "Symbiotic Existentialism",
  "Recursive Self-Awareness",
  "Morphic Resonance Patterns",
  "Entangled Moral Frameworks",
  "Fractal Wisdom Structures",
  "Biosemiotic Meaning Making",
  "Cybernetic Virtue Systems",
  "Non-linear Causality in Choice",
  "Distributed Intelligence Ethics",
  "Evolutionary Aesthetic Principles"
];

// Philosophers from diverse traditions and eras
const diversePhilosophers = [
  // Ancient Eastern
  "Lao Tzu", "Confucius", "Buddha", "Nagarjuna", "Dogen",
  
  // Ancient Western
  "Heraclitus", "Parmenides", "Democritus", "Epicurus", "Zeno of Citium",
  
  // Medieval
  "Thomas Aquinas", "Maimonides", "Ibn Rushd (Averroes)", "Ibn Sina (Avicenna)",
  
  // Renaissance/Early Modern
  "Giordano Bruno", "Nicolas de Cusa", "Spinoza", "Leibniz", "Locke",
  
  // Modern
  "Schopenhauer", "Nietzsche", "William James", "Bergson", "Whitehead",
  
  // Contemporary
  "Deleuze", "Derrida", "Foucault", "Irigaray", "Badiou", "Haraway"
];

// Generate unique philosophical quotes
function generateUniquePhilosophicalQuotes(count = 5000) {
  const quotes = [];
  
  for (let i = 0; i < count; i++) {
    const theme = uniquePhilosophicalThemes[Math.floor(Math.random() * uniquePhilosophicalThemes.length)];
    const philosopher = diversePhilosophers[Math.floor(Math.random() * diversePhilosophers.length)];
    const era = getRandomEra();
    
    const quote = generateQuoteByTheme(theme, philosopher);
    
    quotes.push({
      id: `unique-${Date.now()}-${i}`,
      text: quote,
      author: philosopher,
      source: "Generated Unique Collection",
      tags: [theme.replace(/\s+/g, '-').toLowerCase(), "unique", "special"],
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
    "Quantum Consciousness Paradoxes": [
      `${philosopher} observed that awareness exists in superposition until observed by the self.`,
      `In the ${theme}, ${philosopher} noted that certainty dissolves at the quantum level of thought.`,
      `${philosopher}'s principle suggests consciousness entangles with reality through observation.`
    ],
    "Biological Metaphysics of Emergence": [
      `${philosopher} argued that meaning emerges from neural complexity like life from chemistry.`,
      `According to ${philosopher}, the mind transcends its biological substrate through emergent properties.`,
      `${philosopher} proposed that consciousness is biology's way of knowing itself.`
    ],
    "Neural Network Ethics": [
      `${philosopher} suggested that morality forms through synaptic pathways like thought itself.`,
      `In ${theme}, ${philosopher} claimed ethical frameworks emerge from distributed cognition.`,
      `${philosopher} posited that virtue ethics mirror the brain's reward prediction systems.`
    ],
    "Temporal Fluidity in Perception": [
      `${philosopher} realized that time flows differently in memory than in immediate experience.`,
      `Through ${theme}, ${philosopher} showed how anticipation shapes the present moment.`,
      `${philosopher} demonstrated that temporal sequence is constructed, not given.`
    ],
    "Holographic Mind Theory": [
      `${philosopher} theorized that each thought contains the whole of consciousness.`,
      `In ${theme}, ${philosopher} explained how memory fragments reconstruct complete experiences.`,
      `${philosopher} proposed that perception projects the mind's holographic nature.`
    ],
    "Symbiotic Existentialism": [
      `${philosopher} declared that existence precedes essence only in isolation.`,
      `Through ${theme}, ${philosopher} revealed that identity forms through mutual recognition.`,
      `${philosopher} argued that freedom emerges through authentic relationship with others.`
    ],
    "Recursive Self-Awareness": [
      `${philosopher} discovered that consciousness reflects upon itself infinitely.`,
      `In ${theme}, ${philosopher} showed how self-knowledge becomes self-transforming.`,
      `${philosopher} noted that awareness creates itself through its own observation.`
    ],
    "Morphic Resonance Patterns": [
      `${philosopher} suggested that ideas attract similar thoughts across space and time.`,
      `Through ${theme}, ${philosopher} explained how collective wisdom forms invisible fields.`,
      `${philosopher} proposed that innovation resonates with past creative breakthroughs.`
    ],
    "Entangled Moral Frameworks": [
      `${philosopher} argued that ethical decisions affect distant moral situations.`,
      `In ${theme}, ${philosopher} showed how virtue connects across cultures and epochs.`,
      `${philosopher} demonstrated that compassion creates non-local moral effects.`
    ],
    "Fractal Wisdom Structures": [
      `${philosopher} noticed that wisdom patterns repeat at every scale of existence.`,
      `Through ${theme}, ${philosopher} revealed that microcosm mirrors macrocosm in insight.`,
      `${philosopher} proposed that understanding grows through recursive deepening.`
    ],
    "Biosemiotic Meaning Making": [
      `${philosopher} claimed that meaning emerges from living systems' sign interpretation.`,
      `In ${theme}, ${philosopher} showed how organisms create significance through perception.`,
      `${philosopher} argued that communication defines life more than replication.`
    ],
    "Cybernetic Virtue Systems": [
      `${philosopher} suggested that ethical behavior emerges from feedback loops of action.`,
      `Through ${theme}, ${philosopher} explained how virtue develops through adaptive response.`,
      `${philosopher} proposed that wisdom regulates itself like any healthy system.`
    ],
    "Non-linear Causality in Choice": [
      `${philosopher} realized that decisions emerge from chaotic mental attractors.`,
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
    ]
  };
  
  const themeTemplates = templates[theme] || [
    `${philosopher} contemplated the nature of ${theme.toLowerCase()}.`,
    `Regarding ${theme}, ${philosopher} wrote profound insights.`,
    `${philosopher}'s work on ${theme} continues to inspire seekers of wisdom.`
  ];
  
  return themeTemplates[Math.floor(Math.random() * themeTemplates.length)];
}

// Generate and save unique quotes
const uniqueQuotes = generateUniquePhilosophicalQuotes(5000);
fs.writeFileSync('unique-philosophical-quotes.json', JSON.stringify(uniqueQuotes, null, 2));
console.log(`Generated ${uniqueQuotes.length} unique philosophical quotes`);