// Script to convert Urdu quotes to proper JSON format with metadata
const fs = require('fs');

// Read the Urdu quotes file
const urduQuotes = JSON.parse(fs.readFileSync('urdu-quotes.json', 'utf8'));

// Convert to proper format with metadata
const formattedQuotes = urduQuotes.map(quote => {
  return {
    id: quote.id,
    text: quote.text,
    author: quote.author,
    authorId: quote.authorId,
    tags: quote.tags,
    themes: quote.themes,
    schools: quote.schools,
    era: quote.era,
    language: quote.language,
    // Add additional metadata
    source: "Urdu Philosophical Collection",
    addedDate: new Date().toISOString(),
    verified: true,
    likes: 0,
    shares: 0
  };
});

// Save to properly formatted JSON file
fs.writeFileSync('urdu-quotes-formatted.json', JSON.stringify(formattedQuotes, null, 2));

console.log(`Converted ${formattedQuotes.length} Urdu quotes to proper format.`);