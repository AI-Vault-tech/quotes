// Script to add multilingual quotes to the largeQuotes.json file
const fs = require('fs');

// Read the existing largeQuotes.json file
let largeQuotes = [];
try {
  const data = fs.readFileSync('largeQuotes.json', 'utf8');
  largeQuotes = JSON.parse(data);
  console.log(`Loaded ${largeQuotes.length} existing quotes from largeQuotes.json`);
} catch (err) {
  console.log('largeQuotes.json not found or invalid, starting with empty array');
  largeQuotes = [];
}

// Languages to process
const languages = ['arabic', 'chinese', 'french', 'spanish', 'german'];

let totalAdded = 0;

// Process each language
languages.forEach(language => {
  try {
    // Read the formatted quotes
    const quotes = JSON.parse(fs.readFileSync(`${language}-quotes-formatted.json`, 'utf8'));
    console.log(`Loaded ${quotes.length} ${language} quotes to add`);
    
    // Add quotes to largeQuotes array
    largeQuotes = [...largeQuotes, ...quotes];
    totalAdded += quotes.length;
    
    console.log(`Successfully added ${quotes.length} ${language} quotes to largeQuotes.json`);
  } catch (err) {
    console.log(`Error processing ${language} quotes:`, err.message);
  }
});

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('largeQuotes.json', JSON.stringify(largeQuotes, null, 2));

console.log(`Successfully added ${totalAdded} multilingual quotes to largeQuotes.json`);
console.log(`Total quotes in database: ${largeQuotes.length}`);