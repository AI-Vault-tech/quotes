const fs = require('fs');

// Buddhist quotes to add
const buddhistQuotes = [
  // Impermanence quotes
  { 
    text: "Everything that has the nature of arising has the nature of ceasing.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["impermanence", "change", "nature"], 
    themes: ["impermanence", "change"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "All compounded things are subject to vanish. Strive with earnestness.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["impermanence", "earnestness", "striving"], 
    themes: ["impermanence", "wisdom"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "What is impermanent is suffering, and what is impermanent and suffering is not fit to be regarded thus: 'This is mine, this am I, this is my self.'", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["impermanence", "suffering", "non-attachment"], 
    themes: ["impermanence", "suffering"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  
  // Compassion quotes
  { 
    text: "Radiate boundless love towards the entire world — above, below, and across — unhindered, without ill will, without enmity.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["love", "compassion", "boundless"], 
    themes: ["compassion", "love"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "Just as a mother would protect her only child with her life, even so let one cultivate a boundless love toward all beings.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["mother", "protection", "love"], 
    themes: ["compassion", "love"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "If with a pure mind a person speaks or acts, happiness follows them like a shadow that never leaves them.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["mind", "happiness", "karma"], 
    themes: ["compassion", "happiness"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  
  // Wisdom quotes
  { 
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["truth", "sun", "moon"], 
    themes: ["wisdom", "truth"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "The way is not in the sky; the way is in the heart.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["way", "heart", "inner"], 
    themes: ["wisdom", "inner-peace"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["health", "body", "mind"], 
    themes: ["wisdom", "self-improvement"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  
  // Mindfulness quotes
  { 
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["past", "future", "present"], 
    themes: ["mindfulness", "present"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "Mindfulness gives you time. Mindfulness gives you space. Mindfulness brings you back to the present moment, back to your breathing, back to your body, back to your life.", 
    author: "Thich Nhat Hanh", 
    authorId: "thich-nhat-hanh", 
    tags: ["mindfulness", "present", "breathing"], 
    themes: ["mindfulness", "present"], 
    schools: ["buddhism"],
    era: "modern"
  },
  { 
    text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", 
    author: "Thich Nhat Hanh", 
    authorId: "thich-nhat-hanh", 
    tags: ["present", "joy", "attention"], 
    themes: ["mindfulness", "happiness"], 
    schools: ["buddhism"],
    era: "modern"
  },
  
  // Suffering quotes
  { 
    text: "I do not dispute with the world; rather it is the world that disputes with me.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["world", "dispute", "conflict"], 
    themes: ["suffering", "wisdom"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "Pain is a part of life, but suffering is optional.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["pain", "suffering", "life"], 
    themes: ["suffering", "wisdom"], 
    schools: ["buddhism"],
    era: "ancient"
  },
  { 
    text: "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.", 
    author: "Buddha", 
    authorId: "buddha", 
    tags: ["hatred", "peace", "law"], 
    themes: ["suffering", "peace"], 
    schools: ["buddhism"],
    era: "ancient"
  }
];

// Read the existing largeQuotes.json file
const largeQuotesData = JSON.parse(fs.readFileSync('largeQuotes.json', 'utf8'));

// Add the new Buddhist quotes
const updatedQuotes = [...largeQuotesData, ...buddhistQuotes];

// Write the updated data back to the file
fs.writeFileSync('largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Added ${buddhistQuotes.length} new Buddhist quotes to the database.`);
console.log('Total quotes in database:', updatedQuotes.length);