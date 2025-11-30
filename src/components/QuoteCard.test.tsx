import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('renders tags correctly', () => {
    render(<QuoteCard {...mockProps} />);
    
    expect(screen.getByText('wisdom')).toBeInTheDocument();
    expect(screen.getByText('knowledge')).toBeInTheDocument();
    expect(screen.getByText('humility')).toBeInTheDocument();
  });

  it('calls onSave when save button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnSave = jest.fn();
    
    render(<QuoteCard {...mockProps} onSave={mockOnSave} />);
    
    const saveButton = screen.getByRole('button', { name: /save to sanctuary/i });
    await user.click(saveButton);
    
    expect(mockOnSave).toHaveBeenCalledTimes(1);
  });

  it('shows saved state when saved prop is true', () => {
    render(<QuoteCard {...mockProps} saved={true} />);
    
    const saveButton = screen.getByRole('button', { name: /remove from sanctuary/i });
    expect(saveButton).toHaveClass('text-accent');
  });
});