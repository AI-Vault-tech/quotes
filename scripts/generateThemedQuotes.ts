import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Themes and their associated keywords
const themes = {
  "love": ["love", "romance", "affection", "heart", "relationship", "partner", "intimacy", "passion", "devotion", "care"],
  "relationships": ["friendship", "family", "connection", "bond", "trust", "loyalty", "communication", "understanding", "support", "companionship"],
  "excellence": ["excellence", "perfection", "mastery", "skill", "craftsmanship", "quality", "achievement", "distinction", "superiority", "preeminence"],
  "achievement": ["success", "accomplishment", "victory", "triumph", "goal", "attainment", "realization", "fulfillment", "accomplishment", "progress"],
  "purpose": ["purpose", "meaning", "mission", "calling", "vocation", "destiny", "fate", "intention", "aim", "objective"],
  "virtue": ["virtue", "morality", "ethics", "integrity", "honor", "righteousness", "goodness", "character", "principle", "values"],
  "resilience": ["resilience", "strength", "endurance", "perseverance", "fortitude", "toughness", "grit", "tenacity", "stamina", "durability"],
  "wisdom": ["wisdom", "knowledge", "insight", "understanding", "intelligence", "sagacity", "prudence", "discernment", "enlightenment", "awareness"],
  "truth": ["truth", "honesty", "authenticity", "reality", "fact", "verity", "sincerity", "genuineness", "accuracy", "correctness"],
  "success": ["success", "prosperity", "fortune", "achievement", "accomplishment", "victory", "triumph", "winning", "accomplishment", "attainment"]
};

// Authors and their schools
const authors = [
  { id: "socrates", name: "Socrates", schools: ["ancient-greek"] },
  { id: "plato", name: "Plato", schools: ["ancient-greek"] },
  { id: "aristotle", name: "Aristotle", schools: ["ancient-greek"] },
  { id: "confucius", name: "Confucius", schools: ["confucianism"] },
  { id: "lao-tzu", name: "Lao Tzu", schools: ["taoism"] },
  { id: "buddha", name: "Siddhartha Gautama (Buddha)", schools: ["buddhism"] },
  { id: "seneca", name: "Seneca", schools: ["stoicism"] },
  { id: "marcus-aurelius", name: "Marcus Aurelius", schools: ["stoicism"] },
  { id: "epictetus", name: "Epictetus", schools: ["stoicism"] },
  { id: "augustine", name: "Augustine of Hippo", schools: ["christianity"] },
  { id: "aquinas", name: "Thomas Aquinas", schools: ["scholasticism", "christianity"] },
  { id: "machiavelli", name: "Niccolò Machiavelli", schools: ["political-science"] },
  { id: "erasmus", name: "Desiderius Erasmus", schools: ["humanism", "christianity"] },
  { id: "montaigne", name: "Michel de Montaigne", schools: ["humanism"] },
  { id: "galileo", name: "Galileo Galilei", schools: ["science"] },
  { id: "descartes", name: "René Descartes", schools: ["rationalism"] },
  { id: "locke", name: "John Locke", schools: ["empiricism", "liberalism"] },
  { id: "hume", name: "David Hume", schools: ["empiricism", "skepticism"] },
  { id: "rousseau", name: "Jean-Jacques Rousseau", schools: ["social-contract"] },
  { id: "kant", name: "Immanuel Kant", schools: ["critical-philosophy"] },
  { id: "jefferson", name: "Thomas Jefferson", schools: ["democracy"] },
  { id: "franklin", name: "Benjamin Franklin", schools: ["science", "politics"] },
  { id: "wollstonecraft", name: "Mary Wollstonecraft", schools: ["feminism"] },
  { id: "mill", name: "John Stuart Mill", schools: ["utilitarianism", "liberalism"] },
  { id: "darwin", name: "Charles Darwin", schools: ["evolution", "science"] },
  { id: "marx", name: "Karl Marx", schools: ["communism", "materialism"] },
  { id: "nietzsche", name: "Friedrich Nietzsche", schools: ["existentialism", "nihilism"] },
  { id: "kierkegaard", name: "Søren Kierkegaard", schools: ["existentialism"] },
  { id: "dostoevsky", name: "Fyodor Dostoevsky", schools: ["literature", "existentialism"] },
  { id: "freud", name: "Sigmund Freud", schools: ["psychoanalysis"] },
  { id: "dewey", name: "John Dewey", schools: ["pragmatism"] },
  { id: "russell", name: "Bertrand Russell", schools: ["analytic-philosophy", "logic"] },
  { id: "sartre", name: "Jean-Paul Sartre", schools: ["existentialism"] },
  { id: "beauvoir", name: "Simone de Beauvoir", schools: ["existentialism", "feminism"] },
  { id: "camus", name: "Albert Camus", schools: ["existentialism"] },
  { id: "nussbaum", name: "Martha Nussbaum", schools: ["capabilities-approach"] },
  { id: "singer", name: "Peter Singer", schools: ["utilitarianism", "effective-altruism"] },
  { id: "butler", name: "Judith Butler", schools: ["gender-theory", "postmodernism"] },
  { id: "zizek", name: "Slavoj Žižek", schools: ["psychoanalysis", "marxism"] },
  { id: "harari", name: "Yuval Noah Harari", schools: ["history", "future-studies"] },
  { id: "frankl", name: "Viktor Frankl", schools: ["logotherapy"] },
  { id: "angelou", name: "Maya Angelou", schools: ["literature", "civil-rights"] },
  { id: "king", name: "Martin Luther King Jr.", schools: ["civil-rights", "non-violence"] },
  { id: "mandela", name: "Nelson Mandela", schools: ["anti-apartheid"] },
  { id: "gandhi", name: "Mahatma Gandhi", schools: ["non-violence"] },
  { id: "einstein", name: "Albert Einstein", schools: ["physics"] },
  { id: "curie", name: "Marie Curie", schools: ["chemistry", "physics"] },
  { id: "tesla", name: "Nikola Tesla", schools: ["engineering", "physics"] },
  { id: "jobs", name: "Steve Jobs", schools: ["innovation", "design"] },
  { id: "gates", name: "Bill Gates", schools: ["software", "philanthropy"] }
];

// Generate quotes for each theme
function generateThemedQuotes() {
  const allQuotes = [];
  
  // For each theme, generate 500 quotes
  for (const [theme, keywords] of Object.entries(themes)) {
    console.log(`Generating quotes for theme: ${theme}`);
    
    for (let i = 0; i < 500; i++) {
      // Select a random author
      const author = authors[Math.floor(Math.random() * authors.length)];
      
      // Select a random keyword from the theme
      const keyword = keywords[Math.floor(Math.random() * keywords.length)];
      
      // Generate quote text
      const quoteText = `The essence of ${keyword} lies in understanding that ${theme} is not merely a concept but a way of being.`;
      
      // Generate tags (mix of theme keywords and random tags)
      const tags = [
        theme,
        keyword,
        ...keywords.filter(() => Math.random() > 0.7).slice(0, 2)
      ];
      
      // Create quote object
      const quote = {
        id: `quote-${theme}-${i + 1}`,
        text: quoteText,
        author: author.name,
        authorId: author.id,
        tags: [...new Set(tags)], // Remove duplicates
        themes: [theme],
        schools: author.schools,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      };
      
      allQuotes.push(quote);
    }
  }
  
  return allQuotes;
}

// Generate themed quotes
const themedQuotes = generateThemedQuotes();

// Write to file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'themedQuotes.json');
fs.writeFileSync(outputPath, JSON.stringify(themedQuotes, null, 2));

console.log(`Generated ${themedQuotes.length} themed quotes and saved to ${outputPath}`);