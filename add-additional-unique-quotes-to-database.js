// add-additional-unique-quotes-to-database.js
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

// Read the additional unique quotes
const additionalQuotes = JSON.parse(fs.readFileSync('additional-unique-philosophical-quotes.json', 'utf8'));
console.log(`Loaded ${additionalQuotes.length} additional unique quotes to add`);

// Add unique quotes to largeQuotes array
const updatedQuotes = [...largeQuotes, ...additionalQuotes];

// Save updated quotes back to largeQuotes.json
fs.writeFileSync('src/data/largeQuotes.json', JSON.stringify(updatedQuotes, null, 2));

console.log(`Successfully added ${additionalQuotes.length} additional unique quotes to largeQuotes.json`);
console.log(`Total quotes now: ${updatedQuotes.length}`);

// Update the statistics in components to reflect the new total
const thematicCollectionsPath = 'src/components/UniqueThematicCollections.tsx';
const premiumFooterPath = 'src/components/PremiumFooter.tsx';

// Update UniqueThematicCollections.tsx
let thematicContent = fs.readFileSync(thematicCollectionsPath, 'utf8');
thematicContent = thematicContent.replace(/14,350\+/g, '18,350+');
fs.writeFileSync(thematicCollectionsPath, thematicContent);

// Update PremiumFooter.tsx
let footerContent = fs.readFileSync(premiumFooterPath, 'utf8');
footerContent = footerContent.replace(/14,350\+/g, '18,350+');
fs.writeFileSync(premiumFooterPath, footerContent);

console.log('Updated components with new quote statistics');