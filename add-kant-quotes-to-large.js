// Script to add Immanuel Kant quotes to the largeQuotes.json file
const fs = require('fs');

// Read the existing largeQuotes.json file
let largeQuotes = [];
try {
  const data = fs.readFileSync('src/data/largeQuotes.json', 'utf8');
  largeQuotes = JSON.parse(data);
  console.log(`Loaded ${largeQuotes.length} existing quotes from largeQuotes.json`);
} catch (err) {
  console.log('largeQuotes.json not found or invalid, starting with empty array');
  largeQuotes = [];
}

// Read the Kant quotes
const kantQuotes = JSON.parse(fs.readFileSync('kant-quotes.json', 'utf8'));
console.log(`Loaded ${kantQuotes.length} Kant quotes to add`);

// Add Kant quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...kantQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('src/data/largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${kantQuotes.length} Kant quotes to largeQuotes.json`);
console.log(`Total quotes in database: ${updatedQuotes.length}`);