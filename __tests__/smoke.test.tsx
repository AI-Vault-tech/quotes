import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

// Mock child components to isolate the test
jest.mock('../src/components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Component</div>;
  };
});

jest.mock('../src/components/DynamicQuoteSection', () => {
  return function MockDynamicQuoteSection() {
    return <div data-testid="dynamic-quote-section">Dynamic Quote Section</div>;
  };
});

describe('Home Page Smoke Test', () => {
  it('renders without crashing', () => {
    render(<Home />);
    
    // Check that the main wrapper is rendered
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    
    // Check that section titles are present
    expect(screen.getByText('Discover Timeless Wisdom')).toBeInTheDocument();
    expect(screen.getByText('Find Wisdom Instantly')).toBeInTheDocument();
  });

  it('renders featured sections', () => {
    render(<Home />);
    
    // Check that featured sections are present
    expect(screen.getByText('Quote of the Moment')).toBeInTheDocument();
    expect(screen.getByText('Wisdom Through Ages')).toBeInTheDocument();
    expect(screen.getByText('Theme of the Week')).toBeInTheDocument();
    expect(screen.getByText('Community Favorites')).toBeInTheDocument();
  });

  it('renders quick access features', () => {
    render(<Home />);
    
    // Check that quick access features are present
    expect(screen.getByPlaceholderText('Find wisdom about...')).toBeInTheDocument();
    expect(screen.getByText('Browse by Category')).toBeInTheDocument();
    expect(screen.getByText('Surprise Me With Wisdom')).toBeInTheDocument();
  });
});