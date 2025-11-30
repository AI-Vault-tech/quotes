// Simple test to verify we can fetch even more quotes
async function testEvenMoreQuotes() {
  try {
    console.log('Testing quote fetching with even higher limits...');
    
    // Test fetching with different limits
    const responses = await Promise.all([
      fetch('http://localhost:3000/api/quotes?theme=wisdom&limit=100'),
      fetch('http://localhost:3000/api/quotes?school=stoicism&limit=100'),
      fetch('http://localhost:3000/api/quotes?theme=love&limit=100')
    ]);

    const results = await Promise.all(responses.map(res => res.json()));
    
    console.log(`Wisdom theme quotes: ${results[0].quotes.length}/${results[0].total}`);
    console.log(`Stoicism school quotes: ${results[1].quotes.length}/${results[1].total}`);
    console.log(`Love theme quotes: ${results[2].quotes.length}/${results[2].total}`);
    
    // Test fetching more quotes
    const moreQuotes = await fetch('http://localhost:3000/api/quotes?limit=500');
    const moreResults = await moreQuotes.json();
    console.log(`All quotes (limit 500): ${moreResults.quotes.length}/${moreResults.total}`);
    
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
testEvenMoreQuotes();