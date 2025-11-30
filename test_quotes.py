import requests
import json

def test_quotes_api():
    try:
        # Test fetching quotes with different filters
        urls = [
            'http://localhost:3000/api/quotes?theme=love&limit=15',
            'http://localhost:3000/api/quotes?school=stoicism&limit=15',
            'http://localhost:3000/api/quotes?theme=wisdom&limit=15'
        ]
        
        for url in urls:
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                print(f"URL: {url}")
                print(f"Quotes fetched: {len(data['quotes'])}")
                print(f"Total quotes in database: {data['total']}")
                print("---")
            else:
                print(f"Error fetching from {url}: {response.status_code}")
                
    except Exception as e:
        print(f"Error testing API: {e}")

if __name__ == "__main__":
    test_quotes_api()