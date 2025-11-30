// add-final-batch-unique-quotes-to-database.js
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

// Read the final batch of unique quotes
const finalBatchQuotes = JSON.parse(fs.readFileSync('final-batch-unique-philosophical-quotes.json', 'utf8'));
console.log(`Loaded ${finalBatchQuotes.length} final batch unique quotes to add`);

// Add unique quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...finalBatchQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('src/data/largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${finalBatchQuotes.length} final batch unique quotes to largeQuotes.json`);
console.log(`Total quotes now: ${updatedQuotes.length}`);

// Also update the statistics in the home page to reflect the new total
const homePagePath = 'src/app/page.tsx';
let homePageContent = fs.readFileSync(homePagePath, 'utf8');

// Update the quote count in the stats banner
homePageContent = homePageContent.replace(/(\d+,\d+)\+/g, '11,350+');
homePageContent = homePageContent.replace(/6,350\+/g, '11,350+');

fs.writeFileSync(homePagePath, homePageContent);
console.log('Updated home page with new quote statistics');