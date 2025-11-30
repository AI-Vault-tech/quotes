'use client';

import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  trait: string;
  reversed?: boolean;
}

interface TraitScore {
  [key: string]: number;
}

export default function WisdomMatch() {
  const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<TraitScore>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const questions: Question[] = [
    {
      id: 1,
      text: "I prefer to think things through carefully before acting.",
      trait: "reflection"
    },
    {
      id: 2,
      text: "I am deeply concerned with doing what is morally right.",
      trait: "ethics"
    },
    {
      id: 3,
      text: "I believe that happiness comes from within, not from external circumstances.",
      trait: "stoicism"
    },
    {
      id: 4,
      text: "I question traditional beliefs and values.",
      trait: "skepticism"
    },
    {
      id: 5,
      text: "I find meaning through connection with others and community.",
      trait: "community"
    },
    {
      id: 6,
      text: "I am driven by a desire to understand the fundamental nature of reality.",
      trait: "metaphysics"
    },
    {
      id: 7,
      text: "I believe in living in harmony with nature.",
      trait: "naturalism"
    },
    {
      id: 8,
      text: "I am motivated by a desire to reduce suffering in the world.",
      trait: "compassion"
    }
  ];
  
  const philosophers = [
    {
      name: "Marcus Aurelius",
      school: "Stoicism",
      traits: ["reflection", "ethics", "stoicism"],
      description: "Roman Emperor and Stoic philosopher whose work 'Meditations' offers timeless wisdom on resilience and self-discipline.",
      match: 95
    },
    {
      name: "Confucius",
      school: "Confucianism",
      traits: ["ethics", "community", "reflection"],
      description: "Chinese philosopher whose teachings emphasize personal and governmental morality, correctness of social relationships, and justice.",
      match: 88
    },
    {
      name: "Socrates",
      school: "Ancient Greek",
      traits: ["reflection", "ethics", "skepticism"],
      description: "Classical Greek philosopher credited as the founder of Western philosophy, known for the Socratic method of inquiry.",
      match: 85
    },
    {
      name: "Lao Tzu",
      school: "Taoism",
      traits: ["naturalism", "reflection", "stoicism"],
      description: "Semi-legendary Chinese philosopher and writer, traditionally regarded as the founder of Taoism.",
      match: 82
    },
    {
      name: "Immanuel Kant",
      school: "German Idealism",
      traits: ["ethics", "metaphysics", "reflection"],
      description: "German philosopher whose comprehensive and systematic work in epistemology, ethics, and aesthetics greatly influenced modern philosophy.",
      match: 78
    }
  ];
  
  const handleStart = () => {
    setStep('questions');
    setCurrentQuestion(0);
    setScores({});
    setSelectedOption(null);
  };
  
  const handleAnswer = (value: number) => {
    setSelectedOption(value);
    
    // Update scores
    const question = questions[currentQuestion];
    const trait = question.trait;
    const newScores = { ...scores };
    
    if (!newScores[trait]) {
      newScores[trait] = 0;
    }
    
    // Adjust for reversed questions
    const adjustedValue = question.reversed ? 6 - value : value;
    newScores[trait] += adjustedValue;
    
    setScores(newScores);
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setStep('results');
    }
  };
  
  const handleRestart = () => {
    setStep('intro');
    setCurrentQuestion(0);
    setScores({});
    setSelectedOption(null);
  };
  
  return (
    <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
      {step === 'intro' && (
        <div className="text-center">
          <h2 className="heading-text text-2xl mb-4 text-accent">Wisdom Match</h2>
          <p className="text-foreground/80 mb-6">
            Discover which philosophers align with your personality and values through our personalized assessment.
          </p>
          <div className="bg-foreground/5 p-6 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Your Philosophical DNA</h3>
            <p className="text-foreground/70 text-sm">
              Based on your responses, we'll create a unique profile that matches you with compatible philosophical traditions 
              and recommends personalized reading paths.
            </p>
          </div>
          <button 
            onClick={handleStart}
            className="bg-accent text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
          >
            Begin Assessment
          </button>
        </div>
      )}
      
      {step === 'questions' && (
        <div>
          <div className="mb-6">
            <div className="flex justify-between text-sm text-foreground/70 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-cream/30 rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h3 className="text-xl mb-6">{questions[currentQuestion].text}</h3>
          
          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={`w-full py-3 px-4 text-left rounded-lg transition-all ${
                  selectedOption === value
                    ? 'bg-accent text-foreground'
                    : 'bg-background border border-cream/30 hover:border-accent'
                }`}
                onClick={() => handleAnswer(value)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                    selectedOption === value ? 'bg-foreground' : 'bg-cream/30'
                  }`}>
                    {selectedOption === value && (
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    )}
                  </div>
                  {value === 1 && 'Strongly Disagree'}
                  {value === 2 && 'Disagree'}
                  {value === 3 && 'Neutral'}
                  {value === 4 && 'Agree'}
                  {value === 5 && 'Strongly Agree'}
                </div>
              </button>
            ))}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-lg ${
                currentQuestion === 0 
                  ? 'text-foreground/30 cursor-not-allowed' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-4 py-2 rounded-lg ${
                selectedOption === null
                  ? 'bg-foreground/30 cursor-not-allowed'
                  : 'bg-foreground text-background hover:bg-opacity-90'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
            </button>
          </div>
        </div>
      )}
      
      {step === 'results' && (
        <div>
          <h2 className="heading-text text-2xl mb-6 text-center text-accent">Your Philosophical Match</h2>
          
          <div className="bg-foreground text-background p-6 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Your Philosophical DNA</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">Reflection: 85%</span>
              <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">Ethics: 78%</span>
              <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">Stoicism: 72%</span>
              <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">Community: 65%</span>
            </div>
          </div>
          
          <h3 className="font-bold mb-4">Recommended Philosophers</h3>
          <div className="space-y-4 mb-6">
            {philosophers.map((philosopher, index) => (
              <div key={index} className="bg-background p-4 rounded-lg border border-cream/30">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold">{philosopher.name}</h4>
                    <p className="text-sm text-foreground/70">{philosopher.school}</p>
                  </div>
                  <span className="bg-accent text-foreground px-2 py-1 rounded-full text-sm">
                    {philosopher.match}% Match
                  </span>
                </div>
                <p className="text-foreground/80 text-sm mb-3">{philosopher.description}</p>
                <button className="text-accent text-sm hover:underline">
                  Explore {philosopher.name} →
                </button>
              </div>
            ))}
          </div>
          
          <h3 className="font-bold mb-4">Personalized Reading Path</h3>
          <div className="bg-cream/20 p-4 rounded-lg mb-6">
            <p className="text-foreground/80 mb-3">
              Based on your results, we recommend starting with these foundational texts:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>"Meditations" by Marcus Aurelius</li>
              <li>"The Analects" by Confucius</li>
              <li>"The Republic" by Plato</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleRestart}
              className="bg-accent text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex-1"
            >
              Retake Assessment
            </button>
            <button className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex-1">
              Save to My Sanctuary
            </button>
          </div>
        </div>
      )}
    </div>
  );
}