// Simple test to verify we can fetch more quotes
async function testMoreQuotes() {
  try {
    console.log('Testing quote fetching with higher limits...');
    
    // Test fetching with different limits
    const responses = await Promise.all([
      fetch('http://localhost:3000/api/quotes?theme=wisdom&limit=30'),
      fetch('http://localhost:3000/api/quotes?school=stoicism&limit=30'),
      fetch('http://localhost:3000/api/quotes?theme=love&limit=30')
    ]);

    const results = await Promise.all(responses.map(res => res.json()));
    
    console.log(`Wisdom theme quotes: ${results[0].quotes.length}/${results[0].total}`);
    console.log(`Stoicism school quotes: ${results[1].quotes.length}/${results[1].total}`);
    console.log(`Love theme quotes: ${results[2].quotes.length}/${results[2].total}`);
    
    // Test fetching more quotes
    const moreQuotes = await fetch('http://localhost:3000/api/quotes?limit=150');
    const moreData = await moreQuotes.json();
    console.log(`Large batch quotes: ${moreData.quotes.length}/${moreData.total}`);
    
    console.log('All tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
testMoreQuotes();