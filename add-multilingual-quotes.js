// Script to convert multilingual quotes to proper JSON format with metadata
const fs = require('fs');

// Languages to process
const languages = ['arabic', 'chinese', 'french', 'spanish', 'german'];

// Process each language
languages.forEach(language => {
  try {
    // Read the language quotes file
    const quotes = JSON.parse(fs.readFileSync(`${language}-quotes.json`, 'utf8'));
    
    // Convert to proper format with metadata
    const formattedQuotes = quotes.map(quote => {
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
        source: `${language.charAt(0).toUpperCase() + language.slice(1)} Philosophical Collection`,
        addedDate: new Date().toISOString(),
        verified: true,
        likes: 0,
        shares: 0
      };
    });
    
    // Save to properly formatted JSON file
    fs.writeFileSync(`${language}-quotes-formatted.json`, JSON.stringify(formattedQuotes, null, 2));
    
    console.log(`Converted ${formattedQuotes.length} ${language} quotes to proper format.`);
  } catch (err) {
    console.log(`Error processing ${language} quotes:`, err.message);
  }
});