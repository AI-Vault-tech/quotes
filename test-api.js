// Simple test script to verify API functionality
async function testApi() {
  try {
    // Test fetching quotes with different filters
    const responses = await Promise.all([
      fetch('http://localhost:3000/api/quotes?theme=love&limit=15'),
      fetch('http://localhost:3000/api/quotes?school=stoicism&limit=15'),
      fetch('http://localhost:3000/api/quotes?theme=wisdom&limit=15')
    ]);

    const results = await Promise.all(responses.map(res => res.json()));
    
    console.log('Love theme quotes:', results[0].quotes.length);
    console.log('Stoicism school quotes:', results[1].quotes.length);
    console.log('Wisdom theme quotes:', results[2].quotes.length);
    
    console.log('Total quotes in database:', results[0].total);
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testApi();