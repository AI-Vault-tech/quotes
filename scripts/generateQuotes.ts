import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate a large number of quotes
function generateQuotes(count: number = 10000): any[] {
  const quotes: any[] = [];
  
  // Sample authors
  const authors = [
    { id: "socrates", name: "Socrates", era: "Ancient Greece", schools: ["ancient-greek"] },
    { id: "plato", name: "Plato", era: "Ancient Greece", schools: ["ancient-greek"] },
    { id: "aristotle", name: "Aristotle", era: "Ancient Greece", schools: ["ancient-greek"] },
    { id: "confucius", name: "Confucius", era: "Ancient China", schools: ["confucianism"] },
    { id: "lao-tzu", name: "Lao Tzu", era: "Ancient China", schools: ["taoism"] },
    { id: "buddha", name: "Siddhartha Gautama (Buddha)", era: "Ancient India", schools: ["buddhism"] },
    { id: "seneca", name: "Seneca", era: "Roman Empire", schools: ["stoicism"] },
    { id: "marcus-aurelius", name: "Marcus Aurelius", era: "Roman Empire", schools: ["stoicism"] },
    { id: "epictetus", name: "Epictetus", era: "Roman Empire", schools: ["stoicism"] },
    { id: "augustine", name: "Augustine of Hippo", era: "Late Antiquity", schools: ["christianity"] },
    { id: "aquinas", name: "Thomas Aquinas", era: "Medieval", schools: ["scholasticism", "christianity"] },
    { id: "machiavelli", name: "Niccolò Machiavelli", era: "Renaissance", schools: ["political-science"] },
    { id: "erasmus", name: "Desiderius Erasmus", era: "Renaissance", schools: ["humanism", "christianity"] },
    { id: "montaigne", name: "Michel de Montaigne", era: "Renaissance", schools: ["humanism"] },
    { id: "galileo", name: "Galileo Galilei", era: "Scientific Revolution", schools: ["science"] },
    { id: "descartes", name: "René Descartes", era: "Rationalism", schools: ["rationalism"] },
    { id: "locke", name: "John Locke", era: "Enlightenment", schools: ["empiricism", "liberalism"] },
    { id: "hume", name: "David Hume", era: "Empiricism", schools: ["empiricism", "skepticism"] },
    { id: "rousseau", name: "Jean-Jacques Rousseau", era: "Enlightenment", schools: ["social-contract"] },
    { id: "kant", name: "Immanuel Kant", era: "Enlightenment", schools: ["critical-philosophy"] },
    { id: "jefferson", name: "Thomas Jefferson", era: "Enlightenment", schools: ["democracy"] },
    { id: "franklin", name: "Benjamin Franklin", era: "Enlightenment", schools: ["science", "politics"] },
    { id: "wollstonecraft", name: "Mary Wollstonecraft", era: "Enlightenment", schools: ["feminism"] },
    { id: "mill", name: "John Stuart Mill", era: "Classical Liberalism", schools: ["utilitarianism", "liberalism"] },
    { id: "darwin", name: "Charles Darwin", era: "Victorian Era", schools: ["evolution", "science"] },
    { id: "marx", name: "Karl Marx", era: "Industrial Age", schools: ["communism", "materialism"] },
    { id: "nietzsche", name: "Friedrich Nietzsche", era: "Modern Philosophy", schools: ["existentialism", "nihilism"] },
    { id: "kierkegaard", name: "Søren Kierkegaard", era: "Existentialism", schools: ["existentialism"] },
    { id: "dostoevsky", name: "Fyodor Dostoevsky", era: "Existentialism", schools: ["literature", "existentialism"] },
    { id: "freud", name: "Sigmund Freud", era: "Psychoanalysis", schools: ["psychoanalysis"] },
    { id: "dewey", name: "John Dewey", era: "Pragmatism", schools: ["pragmatism"] },
    { id: "russell", name: "Bertrand Russell", era: "Analytic Philosophy", schools: ["analytic-philosophy", "logic"] },
    { id: "sartre", name: "Jean-Paul Sartre", era: "Existentialism", schools: ["existentialism"] },
    { id: "beauvoir", name: "Simone de Beauvoir", era: "Existentialism", schools: ["existentialism", "feminism"] },
    { id: "camus", name: "Albert Camus", era: "Existentialism", schools: ["existentialism"] },
    { id: "nussbaum", name: "Martha Nussbaum", era: "Contemporary", schools: ["capabilities-approach"] },
    { id: "singer", name: "Peter Singer", era: "Contemporary", schools: ["utilitarianism", "effective-altruism"] },
    { id: "butler", name: "Judith Butler", era: "Contemporary", schools: ["gender-theory", "postmodernism"] },
    { id: "zizek", name: "Slavoj Žižek", era: "Contemporary", schools: ["psychoanalysis", "marxism"] },
    { id: "harari", name: "Yuval Noah Harari", era: "Contemporary", schools: ["history", "future-studies"] },
    { id: "frankl", name: "Viktor Frankl", era: "Psychology", schools: ["logotherapy"] },
    { id: "angelou", name: "Maya Angelou", era: "Contemporary", schools: ["literature", "civil-rights"] },
    { id: "king", name: "Martin Luther King Jr.", era: "Civil Rights", schools: ["civil-rights", "non-violence"] },
    { id: "mandela", name: "Nelson Mandela", era: "Contemporary", schools: ["anti-apartheid"] },
    { id: "gandhi", name: "Mahatma Gandhi", era: "Independence Movement", schools: ["non-violence"] },
    { id: "einstein", name: "Albert Einstein", era: "Modern Science", schools: ["physics"] },
    { id: "curie", name: "Marie Curie", era: "Modern Science", schools: ["chemistry", "physics"] },
    { id: "tesla", name: "Nikola Tesla", era: "Modern Science", schools: ["engineering", "physics"] },
    { id: "jobs", name: "Steve Jobs", era: "Technology", schools: ["innovation", "design"] },
    { id: "gates", name: "Bill Gates", era: "Technology", schools: ["software", "philanthropy"] }
  ];

  // Sample themes and tags
  const themes = [
    "wisdom", "life", "knowledge", "truth", "happiness", "success", "failure", 
    "love", "friendship", "time", "death", "freedom", "justice", "power", 
    "change", "growth", "courage", "fear", "hope", "despair", "peace", 
    "war", "nature", "beauty", "art", "science", "religion", "morality", 
    "ethics", "politics", "economics", "education", "health", "wealth", 
    "poverty", "equality", "inequality", "identity", "culture", "tradition", 
    "progress", "revolution", "democracy", "dictatorship", "leadership", 
    "individualism", "collectivism", "capitalism", "socialism", "nationalism", 
    "globalism", "tolerance", "forgiveness", "mercy", "opportunity", "challenge", 
    "risk", "security", "faith", "doubt", "reason", "emotion", "logic", 
    "intuition", "experience", "learning", "ignorance", "curiosity", "passion", 
    "apathy", "enthusiasm", "optimism", "pessimism", "realism", "idealism", 
    "pragmatism", "excellence", "virtue", "vice", "goodness", "evil", "duty", 
    "responsibility", "choice", "willpower", "self-control", "discipline", 
    "order", "chaos", "structure", "spontaneity", "conformity", "rebellion", 
    "innovation", "simplicity", "complexity", "clarity", "confusion", 
    "understanding", "communication", "language", "silence", "music", 
    "solitude", "community", "home", "travel", "adventure", "comfort", 
    "hardship", "struggle", "triumph", "defeat", "victory", "loss", 
    "sacrifice", "destiny", "fate", "free-will", "meaning", "purpose", 
    "focus", "distraction", "attention", "care", "kindness", "cruelty", 
    "compassion", "empathy", "selfishness", "altruism", "generosity", 
    "greed", "humility", "pride", "confidence", "arrogance", "timidity", 
    "boldness", "caution", "recklessness", "bravery", "cowardice", 
    "patience", "impatience", "thoughtfulness", "reflection", "impulsiveness", 
    "analysis", "creation", "destruction", "preservation", "transformation", 
    "progress", "growth", "flourishing", "withering", "rising", "falling", 
    "height", "depth", "permanence", "transience", "eternity", "infinity", 
    "freedom", "constraint", "liberation", "enslavement", "redemption", 
    "salvation", "heaven", "hell", "utopia", "dystopia", "ideal", "reality", 
    "fantasy", "illusion", "dream", "vision", "prophecy", "prediction", 
    "retrospection", "introspection", "observation", "privacy", "exposure", 
    "revelation", "mystery", "secrecy", "openness", "transparency", 
    "clarity", "obscurity", "illumination", "darkness", "light", "brightness", 
    "wit", "humor", "seriousness", "levity", "gravity", "energy", "lethargy", 
    "vitality", "exhaustion", "sleepiness", "alertness", "vigilance", 
    "carefulness", "carelessness", "rashness", "audacity", "timidity", 
    "fearfulness", "courage", "bravery", "fearlessness", "intrepidity", 
    "dauntlessness", "pluck", "mettle", "spirit", "gumption", "nerve", 
    "backbone", "structure", "support", "foundation", "base", "top", 
    "peak", "summit", "apex", "vertex", "zenith", "climax", "pinnacle", 
    "crest", "crown", "tip", "point", "edge", "blade", "knife", "sword", 
    "weapon", "armament", "arsenal", "armory", "storage", "repository", 
    "warehouse", "depot", "storehouse", "granary", "barn", "stable", 
    "shed", "hut", "cabin", "house", "home", "dwelling", "residence", "abode"
  ];

  const tags = [
    "wisdom", "philosophy", "life", "knowledge", "truth", "happiness", "success", 
    "failure", "love", "friendship", "time", "death", "freedom", "justice", 
    "power", "change", "growth", "courage", "fear", "hope", "despair", 
    "peace", "war", "nature", "beauty", "art", "science", "religion", 
    "morality", "ethics", "politics", "economics", "education", "health", 
    "wealth", "poverty", "equality", "inequality", "identity", "culture", 
    "tradition", "progress", "revolution", "democracy", "dictatorship", 
    "leadership", "individualism", "collectivism", "capitalism", 
    "socialism", "nationalism", "globalism", "tolerance", "forgiveness", 
    "mercy", "opportunity", "challenge", "risk", "security", "faith", 
    "doubt", "reason", "emotion", "logic", "intuition", "experience", 
    "learning", "ignorance", "curiosity", "passion", "apathy", "enthusiasm", 
    "optimism", "pessimism", "realism", "idealism", "pragmatism", 
    "excellence", "virtue", "vice", "goodness", "evil", "duty", 
    "responsibility", "choice", "willpower", "self-control", "discipline", 
    "order", "chaos", "structure", "spontaneity", "conformity", 
    "rebellion", "innovation", "simplicity", "complexity", "clarity", 
    "confusion", "understanding", "communication", "language", "silence", 
    "music", "solitude", "community", "home", "travel", "adventure", 
    "comfort", "hardship", "struggle", "triumph", "defeat", "victory", 
    "loss", "sacrifice", "destiny", "fate", "free-will", "meaning", 
    "purpose", "focus", "distraction", "attention", "care", "kindness", 
    "cruelty", "compassion", "empathy", "selfishness", "altruism", 
    "generosity", "greed", "humility", "pride", "confidence", "arrogance", 
    "timidity", "boldness", "caution", "recklessness", "bravery", 
    "cowardice", "patience", "impatience", "thoughtfulness", "reflection", 
    "impulsiveness", "analysis", "creation", "destruction", "preservation", 
    "transformation", "progress", "growth", "flourishing", "withering", 
    "rising", "falling", "height", "depth", "permanence", "transience", 
    "eternity", "infinity", "freedom", "constraint", "liberation", 
    "enslavement", "redemption", "salvation", "heaven", "hell", 
    "utopia", "dystopia", "ideal", "reality", "fantasy", "illusion", 
    "dream", "vision", "prophecy", "prediction", "retrospection", 
    "introspection", "observation", "privacy", "exposure", "revelation", 
    "mystery", "secrecy", "openness", "transparency", "clarity", 
    "obscurity", "illumination", "darkness", "light", "brightness", 
    "wit", "humor", "seriousness", "levity", "gravity", "energy", 
    "lethargy", "vitality", "exhaustion", "sleepiness", "alertness", 
    "vigilance", "carefulness", "carelessness", "rashness", "audacity", 
    "timidity", "fearfulness", "courage", "bravery", "fearlessness", 
    "intrepidity", "dauntlessness", "pluck", "mettle", "spirit", 
    "gumption", "nerve", "backbone", "structure", "support", "foundation", 
    "base", "top", "peak", "summit", "apex", "vertex", "zenith", 
    "climax", "pinnacle", "crest", "crown", "tip", "point", "edge", 
    "blade", "knife", "sword", "weapon", "armament", "arsenal", 
    "armory", "storage", "repository", "warehouse", "depot", "storehouse", 
    "granary", "barn", "stable", "shed", "hut", "cabin", "house", 
    "home", "dwelling", "residence", "abode"
  ];

  // Generate quotes
  for (let i = 0; i < count; i++) {
    // Select a random author
    const author = authors[Math.floor(Math.random() * authors.length)];
    
    // Generate a simple quote
    const quoteText = `The pursuit of ${themes[Math.floor(Math.random() * themes.length)]} leads to ${themes[Math.floor(Math.random() * themes.length)]}.`;
    
    // Select random themes and tags
    const selectedThemes: string[] = [];
    const selectedTags: string[] = [];
    
    // Randomly select 2-4 themes
    const themeCount = Math.floor(Math.random() * 3) + 2;
    for (let j = 0; j < themeCount; j++) {
      const theme = themes[Math.floor(Math.random() * themes.length)];
      if (!selectedThemes.includes(theme)) {
        selectedThemes.push(theme);
      }
    }
    
    // Randomly select 2-5 tags
    const tagCount = Math.floor(Math.random() * 4) + 2;
    for (let j = 0; j < tagCount; j++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      if (!selectedTags.includes(tag)) {
        selectedTags.push(tag);
      }
    }
    
    // Create quote object
    const quote = {
      id: `quote-${i + 1}`,
      text: quoteText,
      author: author.name,
      authorId: author.id,
      tags: selectedTags,
      themes: selectedThemes,
      schools: author.schools,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    
    quotes.push(quote);
  }
  
  return quotes;
}

// Generate 10,000 quotes
const quotes = generateQuotes(10000);

// Write to file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'largeQuotes.json');
fs.writeFileSync(outputPath, JSON.stringify(quotes, null, 2));

console.log(`Generated ${quotes.length} quotes and saved to ${outputPath}`);