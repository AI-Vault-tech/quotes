import { render, screen } from '@testing-library/react';
import QuoteCard from './QuoteCard';

describe('QuoteCard', () => {
  const mockProps = {
    id: 'test-quote-1',
    text: 'The only true wisdom is in knowing you know nothing.',
    author: 'Socrates',
    authorId: 'socrates',
    tags: ['wisdom', 'knowledge', 'humility']
  };

  it('renders quote text correctly', () => {
    render(<QuoteCard {...mockProps} />);
    
    expect(screen.getByText('"The only true wisdom is in knowing you know nothing."')).toBeInTheDocument();
  });

  it('renders author name correctly', () => {
    render(<QuoteCard {...mockProps} />);
    
    expect(screen.getByText('Socrates')).toBeInTheDocument();
  });
});