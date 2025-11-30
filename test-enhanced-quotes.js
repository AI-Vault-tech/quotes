// Test script to verify enhanced quote limits
async function testEnhancedQuotes() {
  console.log('Testing enhanced quote limits...');
  
  try {
    // Test API route with higher limit
    const response = await fetch('http://localhost:3000/api/quotes?limit=1000');
    const data = await response.json();
    
    console.log(`API returned ${data.quotes.length} quotes out of ${data.total} total`);
    console.log(`Limit used: ${data.limit}`);
    
    if (data.quotes.length >= 500) {
      console.log('✅ Enhanced quote limits are working correctly!');
    } else {
      console.log('❌ Enhanced quote limits may not be working properly.');
    }
    
    // Test a few theme pages
    const themes = ['wisdom', 'love', 'success'];
    for (const theme of themes) {
      const themeResponse = await fetch(`http://localhost:3000/api/quotes?theme=${theme}&limit=200`);
      const themeData = await themeResponse.json();
      
      console.log(`Theme "${theme}" returned ${themeData.quotes.length} quotes`);
    }
    
  } catch (error) {
    console.error('Error testing enhanced quotes:', error);
  }
}

// Run the test
testEnhancedQuotes();