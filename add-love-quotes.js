// Script to convert love quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided love quotes categorized by theme
const loveQuotes = [
  // CLASSIC & TIMELESS LOVE
  { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle", authorId: "aristotle", tags: ["classic", "timeless", "soul"], themes: ["love", "classic-love"], schools: ["ancient-greek"] },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", authorId: "audrey-hepburn", tags: ["life", "connection", "support"], themes: ["love", "classic-love"], schools: ["cinema"] },
  { text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["love", "hate", "peace"], themes: ["love", "classic-love"], schools: ["civil-rights"] },
  { text: "Love does not consist of gazing at each other, but in looking outward together in the same direction.", author: "Antoine de Saint-Exupéry", authorId: "antoine-de-saint-exupery", tags: ["partnership", "unity", "direction"], themes: ["love", "classic-love"], schools: ["literature"] },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott", authorId: "david-viscott", tags: ["mutual", "warmth", "reciprocity"], themes: ["love", "classic-love"], schools: ["psychology"] },
  { text: "There is only one happiness in this life, to love and be loved.", author: "George Sand", authorId: "george-sand", tags: ["happiness", "fulfillment", "reciprocity"], themes: ["love", "classic-love"], schools: ["literature"] },
  { text: "Love is friendship that has caught fire.", author: "Ann Landers", authorId: "ann-landers", tags: ["friendship", "passion", "foundation"], themes: ["love", "classic-love"], schools: ["journalism"] },

  // PASSIONATE & ROMANTIC LOVE
  { text: "I love you not only for what you are, but for what I am when I am with you.", author: "Elizabeth Barrett Browning", authorId: "elizabeth-barrett-browning", tags: ["transformation", "connection", "identity"], themes: ["love", "romantic-love"], schools: ["poetry"] },
  { text: "If I had a flower for every time I thought of you... I could walk through my garden forever.", author: "Alfred Tennyson", authorId: "alfred-tennyson", tags: ["thoughtfulness", "constancy", "romance"], themes: ["love", "romantic-love"], schools: ["poetry"] },
  { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss", authorId: "dr-seuss", tags: ["reality", "dreams", "wonder"], themes: ["love", "romantic-love"], schools: ["children-literature"] },
  { text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.", author: "Angelita Lim", authorId: "angelita-lim", tags: ["imperfection", "acceptance", "growth"], themes: ["love", "romantic-love"], schools: ["modern-poetry"] },
  { text: "My heart is, and always will be, yours.", author: "Jane Austen", authorId: "jane-austen", tags: ["devotion", "constancy", "commitment"], themes: ["love", "romantic-love"], schools: ["literature"] },
  { text: "I would rather spend one lifetime with you, than face all the ages of this world alone.", author: "J.R.R. Tolkien", authorId: "jrr-tolkien", tags: ["eternity", "companionship", "choice"], themes: ["love", "romantic-love"], schools: ["fantasy-literature"] },

  // DEEP & UNCONDITIONAL LOVE
  { text: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown Jr.", authorId: "h-jackson-brown-jr", tags: ["selflessness", "altruism", "care"], themes: ["love", "unconditional-love"], schools: ["literature"] },
  { text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.", author: "Victor Hugo", authorId: "victor-hugo", tags: ["acceptance", "validation", "security"], themes: ["love", "unconditional-love"], schools: ["literature"] },
  { text: "We are most alive when we're in love.", author: "John Updike", authorId: "john-updike", tags: ["vitality", "aliveness", "connection"], themes: ["love", "unconditional-love"], schools: ["literature"] },
  { text: "Love is that condition in which the happiness of another person is essential to your own.", author: "Robert A. Heinlein", authorId: "robert-a-heinlein", tags: ["interdependence", "well-being", "connection"], themes: ["love", "unconditional-love"], schools: ["science-fiction"] },
  { text: "To be brave is to love unconditionally without expecting anything in return.", author: "Madonna", authorId: "madonna", tags: ["courage", "expectation", "generosity"], themes: ["love", "unconditional-love"], schools: ["music"] },

  // POETIC & PHILOSOPHICAL LOVE
  { text: "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.", author: "Paulo Coelho", authorId: "paulo-coelho", tags: ["force", "control", "mystery"], themes: ["love", "philosophical-love"], schools: ["literature"] },
  { text: "Love is the voice under all silences, the hope which has no opposite in fear; the strength so strong mere force is feebleness: the truth more first than sun, more last than star...", author: "E.E. Cummings", authorId: "ee-cummings", tags: ["voice", "hope", "strength"], themes: ["love", "philosophical-love"], schools: ["poetry"] },
  { text: "Love is not love which alters when it alteration finds.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["constancy", "change", "true-love"], themes: ["love", "philosophical-love"], schools: ["literature"] },
  { text: "The giving of love is an education in itself.", author: "Eleanor Roosevelt", authorId: "eleanor-roosevelt", tags: ["giving", "education", "growth"], themes: ["love", "philosophical-love"], schools: ["leadership"] },
  { text: "Love is the extremely difficult realization that something other than oneself is real.", author: "Iris Murdoch", authorId: "iris-murdoch", tags: ["realization", "otherness", "awareness"], themes: ["love", "philosophical-love"], schools: ["philosophy"] },

  // SIMPLE & TRUE LOVE
  { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe", authorId: "edgar-allan-poe", tags: ["depth", "intensity", "excess"], themes: ["love", "true-love"], schools: ["literature"] },
  { text: "Love doesn't make the world go 'round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones", authorId: "franklin-p-jones", tags: ["worth", "journey", "meaning"], themes: ["love", "true-love"], schools: ["literature"] },
  { text: "A simple 'I love you' means more than money.", author: "Marilyn Monroe", authorId: "marilyn-monroe", tags: ["simplicity", "value", "expression"], themes: ["love", "true-love"], schools: ["cinema"] },
  { text: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", author: "Nicholas Sparks", authorId: "nicholas-sparks", tags: ["awakening", "aspiration", "peace"], themes: ["love", "true-love"], schools: ["literature"] },
  { text: "Love is like the wind, you can't see it but you can feel it.", author: "Nicholas Sparks", authorId: "nicholas-sparks", tags: ["intangibility", "perception", "experience"], themes: ["love", "true-love"], schools: ["literature"] },

  // ENDURING & COMMITTED LOVE
  { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown", authorId: "unknown", tags: ["duration", "daily", "commitment"], themes: ["love", "enduring-love"], schools: ["motivation"] },
  { text: "The secret of a happy marriage is finding the right person. You know they're right if you love to be with them all the time.", author: "Julia Child", authorId: "julia-child", tags: ["compatibility", "presence", "happiness"], themes: ["love", "enduring-love"], schools: ["culinary"] },
  { text: "Grow old with me! The best is yet to be.", author: "Robert Browning", authorId: "robert-browning", tags: ["aging", "future", "optimism"], themes: ["love", "enduring-love"], schools: ["poetry"] },
  { text: "A successful marriage requires falling in love many times, always with the same person.", author: "Mignon McLaughlin", authorId: "mignon-mclaughlin", tags: ["renewal", "constancy", "marriage"], themes: ["love", "enduring-love"], schools: ["journalism"] },
  { text: "Love is not about possession. Love is about appreciation.", author: "Osho", authorId: "osho", tags: ["possession", "appreciation", "freedom"], themes: ["love", "enduring-love"], schools: ["spirituality"] },

  // HEALING & FORGIVING LOVE
  { text: "Love is an act of endless forgiveness, a tender look which becomes a habit.", author: "Peter Ustinov", authorId: "peter-ustinov", tags: ["forgiveness", "tenderness", "habit"], themes: ["love", "healing-love"], schools: ["literature"] },
  { text: "The beginning of love is to let those we love be perfectly themselves, and not to twist them to fit our own image.", author: "Thomas Merton", authorId: "thomas-merton", tags: ["acceptance", "authenticity", "freedom"], themes: ["love", "healing-love"], schools: ["spirituality"] },
  { text: "Love is when you choose to be at your best when the other person is not at their best.", author: "Unknown", authorId: "unknown", tags: ["support", "strength", "choice"], themes: ["love", "healing-love"], schools: ["motivation"] },
  { text: "Forgiveness is the final form of love.", author: "Reinhold Niebuhr", authorId: "reinhold-niebuhr", tags: ["forgiveness", "completion", "love"], themes: ["love", "healing-love"], schools: ["theology"] },

  // SELF-LOVE & INNER LOVE
  { text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha", authorId: "buddha", tags: ["self-worth", "deserving", "universe"], themes: ["love", "self-love"], schools: ["buddhism"] },
  { text: "Love yourself first and everything else falls into line.", author: "Lucille Ball", authorId: "lucille-ball", tags: ["priority", "alignment", "self-care"], themes: ["love", "self-love"], schools: ["entertainment"] },
  { text: "To fall in love with yourself is the first secret to happiness.", author: "Robert Morley", authorId: "robert-morley", tags: ["self-acceptance", "happiness", "secret"], themes: ["love", "self-love"], schools: ["literature"] },
  { text: "If you aren't good at loving yourself, you will have a difficult time loving anyone, since you'll resent the time and energy you give another person that you aren't even giving to yourself.", author: "Barbara De Angelis", authorId: "barbara-de-angelis", tags: ["self-love", "relationship", "resentment"], themes: ["love", "self-love"], schools: ["self-help"] },

  // FAMILIAL & FRIENDSHIP LOVE
  { text: "Family is not an important thing. It's everything.", author: "Michael J. Fox", authorId: "michael-j-fox", tags: ["family", "importance", "everything"], themes: ["love", "familial-love"], schools: ["entertainment"] },
  { text: "A friend knows the song in my heart and sings it to me when my memory fails.", author: "Donna Roberts", authorId: "donna-roberts", tags: ["friendship", "understanding", "memory"], themes: ["love", "friendship-love"], schools: ["literature"] },
  { text: "The love of a family is life's greatest blessing.", author: "Unknown", authorId: "unknown", tags: ["family", "blessing", "greatest"], themes: ["love", "familial-love"], schools: ["motivation"] },
  { text: "Siblings: children of the same parents, each of whom is perfectly normal until they get together.", author: "Sam Levenson", authorId: "sam-levenson", tags: ["siblings", "humor", "normalcy"], themes: ["love", "familial-love"], schools: ["humor"] },

  // MODERN & RELATABLE LOVE
  { text: "I love you and that's the beginning and end of everything.", author: "F. Scott Fitzgerald", authorId: "f-scott-fitzgerald", tags: ["simplicity", "completeness", "everything"], themes: ["love", "modern-love"], schools: ["literature"] },
  { text: "All of me loves all of you.", author: "John Legend", authorId: "john-legend", tags: ["wholeness", "devotion", "completeness"], themes: ["love", "modern-love"], schools: ["music"] },
  { text: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.", author: "F. Scott Fitzgerald", authorId: "f-scott-fitzgerald", tags: ["admiration", "beauty", "superlative"], themes: ["love", "modern-love"], schools: ["literature"] },
  { text: "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.", author: "Unknown", authorId: "unknown", tags: ["choice", "commitment", "constancy"], themes: ["love", "modern-love"], schools: ["motivation"] },
  { text: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.", author: "Oscar Wilde", authorId: "oscar-wilde", tags: ["depth", "uniqueness", "connection"], themes: ["love", "modern-love"], schools: ["literature"] },

  // Bonus Love Quote
  { text: "Love is the master key that opens the gates of happiness.", author: "Oliver Wendell Holmes Sr.", authorId: "oliver-wendell-holmes-sr", tags: ["key", "happiness", "unlocking"], themes: ["love", "bonus"], schools: ["literature"] }
];

// Add unique IDs and timestamps
const formattedQuotes = loveQuotes.map((quote, index) => ({
  ...quote,
  id: `love-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted love quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./love-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Love quotes written to love-quotes.json");