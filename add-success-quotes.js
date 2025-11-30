// Script to convert success quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided success quotes categorized by theme
const successQuotes = [
  // MINDSET & ATTITUDE
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["mindset", "attitude", "courage"], themes: ["success", "mindset"], schools: ["leadership"] },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", authorId: "henry-ford", tags: ["mindset", "belief", "attitude"], themes: ["success", "mindset"], schools: ["business"] },
  { text: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar", authorId: "zig-ziglar", tags: ["attitude", "potential", "growth"], themes: ["success", "mindset"], schools: ["motivation"] },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", authorId: "franklin-d-roosevelt", tags: ["limit", "doubt", "future"], themes: ["success", "mindset"], schools: ["leadership"] },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["self-love", "contentment", "fulfillment"], themes: ["success", "mindset"], schools: ["literature"] },
  { text: "The mind is everything. What you think you become.", author: "Buddha", authorId: "buddha", tags: ["mind", "thought", "manifestation"], themes: ["success", "mindset"], schools: ["buddhism"] },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", authorId: "theodore-roosevelt", tags: ["belief", "confidence", "achievement"], themes: ["success", "mindset"], schools: ["leadership"] },
  { text: "Optimism is the faith that leads to achievement.", author: "Helen Keller", authorId: "helen-keller", tags: ["optimism", "faith", "achievement"], themes: ["success", "mindset"], schools: ["inspiration"] },

  // PERSISTENCE & RESILIENCE
  { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["persistence", "failure", "enthusiasm"], themes: ["success", "resilience"], schools: ["leadership"] },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", authorId: "confucius", tags: ["persistence", "progress", "continuity"], themes: ["success", "resilience"], schools: ["confucianism"] },
  { text: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine", authorId: "thomas-paine", tags: ["conflict", "triumph", "glory"], themes: ["success", "resilience"], schools: ["political-science"] },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb", authorId: "japanese-proverb", tags: ["perseverance", "resilience", "effort"], themes: ["success", "resilience"], schools: ["eastern-philosophy"] },
  { text: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews", authorId: "julie-andrews", tags: ["perseverance", "failure", "success"], themes: ["success", "resilience"], schools: ["arts"] },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["energy", "persistence", "conquest"], themes: ["success", "resilience"], schools: ["american-history"] },
  { text: "A river cuts through rock not because of its power, but because of its persistence.", author: "Jim Watkins", authorId: "jim-watkins", tags: ["persistence", "consistency", "power"], themes: ["success", "resilience"], schools: ["motivation"] },
  { text: "The difference between a successful person and others is not lack of strength, not lack of knowledge, but rather a lack in will.", author: "Vince Lombardi", authorId: "vince-lombardi", tags: ["will", "determination", "success"], themes: ["success", "resilience"], schools: ["sports"] },

  // ACTION & EXECUTION
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", authorId: "walt-disney", tags: ["action", "execution", "initiative"], themes: ["success", "action"], schools: ["business"] },
  { text: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton", authorId: "conrad-hilton", tags: ["action", "movement", "progress"], themes: ["success", "action"], schools: ["business"] },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", authorId: "sam-levenson", tags: ["time", "persistence", "action"], themes: ["success", "action"], schools: ["literature"] },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", authorId: "mark-twain", tags: ["initiative", "progress", "beginning"], themes: ["success", "action"], schools: ["literature"] },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso", authorId: "pablo-picasso", tags: ["action", "foundation", "success"], themes: ["success", "action"], schools: ["arts"] },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier", authorId: "robert-collier", tags: ["effort", "consistency", "accumulation"], themes: ["success", "action"], schools: ["motivation"] },
  { text: "The distance between your dreams and reality is called action.", author: "Unknown", authorId: "unknown", tags: ["dreams", "reality", "action"], themes: ["success", "action"], schools: ["motivation"] },
  { text: "Do something today that your future self will thank you for.", author: "Unknown", authorId: "unknown", tags: ["future", "action", "gratitude"], themes: ["success", "action"], schools: ["motivation"] },

  // PASSION & PURPOSE
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", authorId: "steve-jobs", tags: ["passion", "work", "love"], themes: ["success", "passion"], schools: ["technology"] },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", authorId: "albert-schweitzer", tags: ["happiness", "success", "fulfillment"], themes: ["success", "passion"], schools: ["philanthropy"] },
  { text: "Passion is energy. Feel the power that comes from focusing on what excites you.", author: "Oprah Winfrey", authorId: "oprah-winfrey", tags: ["passion", "energy", "focus"], themes: ["success", "passion"], schools: ["media"] },
  { text: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh", authorId: "tony-hsieh", tags: ["vision", "money", "pursuit"], themes: ["success", "passion"], schools: ["business"] },
  { text: "When you have a dream, you've got to grab it and never let go.", author: "Carol Burnett", authorId: "carol-burnett", tags: ["dream", "persistence", "commitment"], themes: ["success", "passion"], schools: ["arts"] },
  { text: "Purpose is the reason you journey. Passion is the fire that lights your way.", author: "Unknown", authorId: "unknown", tags: ["purpose", "passion", "journey"], themes: ["success", "passion"], schools: ["motivation"] },
  { text: "Follow your passion, and success will follow you.", author: "Terri Guillemets", authorId: "terri-guillemets", tags: ["passion", "success", "follow"], themes: ["success", "passion"], schools: ["motivation"] },

  // GOALS & PLANNING
  { text: "A goal properly set is halfway reached.", author: "Zig Ziglar", authorId: "zig-ziglar", tags: ["goal", "planning", "achievement"], themes: ["success", "goals"], schools: ["motivation"] },
  { text: "If you aim at nothing, you will hit it every time.", author: "Zig Ziglar", authorId: "zig-ziglar", tags: ["aim", "goal", "direction"], themes: ["success", "goals"], schools: ["motivation"] },
  { text: "The trouble with not having a goal is that you can spend your life running up and down the field and never score.", author: "Bill Copeland", authorId: "bill-copeland", tags: ["goal", "direction", "achievement"], themes: ["success", "goals"], schools: ["motivation"] },
  { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins", authorId: "tony-robbins", tags: ["goal", "visualization", "manifestation"], themes: ["success", "goals"], schools: ["motivation"] },
  { text: "A dream written down with a date becomes a goal. A goal broken down into steps becomes a plan.", author: "Unknown", authorId: "unknown", tags: ["dream", "goal", "plan"], themes: ["success", "goals"], schools: ["motivation"] },
  { text: "Plan your work and work your plan.", author: "Napoleon Hill", authorId: "napoleon-hill", tags: ["plan", "work", "execution"], themes: ["success", "goals"], schools: ["success-literature"] },

  // LEARNING & GROWTH
  { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert", authorId: "brian-herbert", tags: ["learning", "gift", "skill"], themes: ["success", "learning"], schools: ["literature"] },
  { text: "Success is the ability to go from one failure to another with no loss of enthusiasm.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["success", "failure", "enthusiasm"], themes: ["success", "learning"], schools: ["leadership"] },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes", authorId: "helen-hayes", tags: ["expert", "beginner", "growth"], themes: ["success", "learning"], schools: ["arts"] },
  { text: "Be a student as long as you still have something to learn, and this will mean all your life.", author: "Henry L. Doherty", authorId: "henry-l-doherty", tags: ["student", "learning", "lifetime"], themes: ["success", "learning"], schools: ["education"] },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King", authorId: "bb-king", tags: ["learning", "possession", "permanent"], themes: ["success", "learning"], schools: ["music"] },
  { text: "Growth and comfort do not coexist.", author: "Ginni Rometty", authorId: "ginni-rometty", tags: ["growth", "comfort", "change"], themes: ["success", "learning"], schools: ["business"] },

  // RISK & COURAGE
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg", authorId: "mark-zuckerberg", tags: ["risk", "opportunity", "growth"], themes: ["success", "risk"], schools: ["technology"] },
  { text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do.", author: "Mark Twain", authorId: "mark-twain", tags: ["regret", "action", "opportunity"], themes: ["success", "risk"], schools: ["literature"] },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["risk", "usual", "ordinary"], themes: ["success", "risk"], schools: ["motivation"] },
  { text: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain", authorId: "mark-twain", tags: ["courage", "fear", "mastery"], themes: ["success", "risk"], schools: ["literature"] },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", authorId: "john-d-rockefeller", tags: ["ambition", "excellence", "sacrifice"], themes: ["success", "risk"], schools: ["business"] },
  { text: "The fear of loss is a path to the dark side.", author: "Yoda", authorId: "yoda", tags: ["fear", "loss", "dark-side"], themes: ["success", "risk"], schools: ["fiction"] },

  // INNOVATION & CREATIVITY
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", authorId: "steve-jobs", tags: ["innovation", "leadership", "distinction"], themes: ["success", "innovation"], schools: ["technology"] },
  { text: "The way to get good ideas is to get lots of ideas and throw the bad ones away.", author: "Linus Pauling", authorId: "linus-pauling", tags: ["ideas", "creativity", "selection"], themes: ["success", "innovation"], schools: ["science"] },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["creativity", "intelligence", "fun"], themes: ["success", "innovation"], schools: ["science"] },
  { text: "The impossible is often the untried.", author: "Jim Goodwin", authorId: "jim-goodwin", tags: ["impossible", "untried", "possibility"], themes: ["success", "innovation"], schools: ["motivation"] },
  { text: "If you always do what you've always done, you'll always get what you've always got.", author: "Henry Ford", authorId: "henry-ford", tags: ["innovation", "change", "results"], themes: ["success", "innovation"], schools: ["business"] },

  // LEADERSHIP & INFLUENCE
  { text: "Leadership is the capacity to translate vision into reality.", author: "Warren Bennis", authorId: "warren-bennis", tags: ["leadership", "vision", "reality"], themes: ["success", "leadership"], schools: ["business"] },
  { text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", author: "Ronald Reagan", authorId: "ronald-reagan", tags: ["leadership", "people", "greatness"], themes: ["success", "leadership"], schools: ["politics"] },
  { text: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell", authorId: "john-c-maxwell", tags: ["leader", "knowledge", "example"], themes: ["success", "leadership"], schools: ["leadership"] },
  { text: "The key to successful leadership today is influence, not authority.", author: "Kenneth Blanchard", authorId: "kenneth-blanchard", tags: ["leadership", "influence", "authority"], themes: ["success", "leadership"], schools: ["business"] },
  { text: "Leadership is not about being in charge. It is about taking care of those in your charge.", author: "Simon Sinek", authorId: "simon-sinek", tags: ["leadership", "care", "responsibility"], themes: ["success", "leadership"], schools: ["leadership"] },

  // TIME MANAGEMENT
  { text: "Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.", author: "H. Jackson Brown Jr.", authorId: "h-jackson-brown-jr", tags: ["time", "priority", "equality"], themes: ["success", "time"], schools: ["literature"] },
  { text: "The bad news is time flies. The good news is you're the pilot.", author: "Michael Altshuler", authorId: "michael-altshuler", tags: ["time", "control", "agency"], themes: ["success", "time"], schools: ["motivation"] },
  { text: "Either you run the day, or the day runs you.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["control", "day", "management"], themes: ["success", "time"], schools: ["motivation"] },
  { text: "Time is more valuable than money. You can get more money, but you cannot get more time.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["time", "money", "value"], themes: ["success", "time"], schools: ["motivation"] },

  // HARD WORK & DEDICATION
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", authorId: "vidal-sassoon", tags: ["work", "success", "order"], themes: ["success", "dedication"], schools: ["fashion"] },
  { text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell", authorId: "colin-powell", tags: ["success", "preparation", "work"], themes: ["success", "dedication"], schools: ["military"] },
  { text: "I'm a greater believer in luck, and I find the harder I work the more I have of it.", author: "Thomas Jefferson", authorId: "thomas-jefferson", tags: ["luck", "work", "effort"], themes: ["success", "dedication"], schools: ["american-history"] },
  { text: "Success is the product of daily habits—not once-in-a-lifetime transformations.", author: "James Clear", authorId: "james-clear", tags: ["habits", "daily", "success"], themes: ["success", "dedication"], schools: ["productivity"] },
  { text: "The only thing that overcomes hard luck is hard work.", author: "Harry Golden", authorId: "harry-golden", tags: ["luck", "work", "overcome"], themes: ["success", "dedication"], schools: ["literature"] },
  { text: "Diligence is the mother of good luck.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["diligence", "luck", "mother"], themes: ["success", "dedication"], schools: ["american-history"] },

  // EXCELLENCE & QUALITY
  { text: "Quality is not an act, it is a habit.", author: "Aristotle", authorId: "aristotle", tags: ["quality", "habit", "excellence"], themes: ["success", "excellence"], schools: ["ancient-greek"] },
  { text: "If you can't do great things, do small things in a great way.", author: "Napoleon Hill", authorId: "napoleon-hill", tags: ["excellence", "small", "great"], themes: ["success", "excellence"], schools: ["success-literature"] },
  { text: "The quality of a person's life is in direct proportion to their commitment to excellence, regardless of their chosen field of endeavor.", author: "Vince Lombardi", authorId: "vince-lombardi", tags: ["quality", "excellence", "commitment"], themes: ["success", "excellence"], schools: ["sports"] },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", authorId: "will-durant", tags: ["excellence", "habit", "repetition"], themes: ["success", "excellence"], schools: ["philosophy"] },

  // VISION & STRATEGY
  { text: "The empires of the future are the empires of the mind.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["future", "mind", "empire"], themes: ["success", "vision"], schools: ["leadership"] },
  { text: "Strategy is buying a bottle of fine wine when you take a lady out for dinner. Tactics is getting her to drink it.", author: "Frank Muir", authorId: "frank-muir", tags: ["strategy", "tactics", "approach"], themes: ["success", "vision"], schools: ["humor"] },
  { text: "Vision without action is a daydream. Action without vision is a nightmare.", author: "Japanese Proverb", authorId: "japanese-proverb", tags: ["vision", "action", "balance"], themes: ["success", "vision"], schools: ["eastern-philosophy"] },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker", authorId: "peter-drucker", tags: ["future", "creation", "prediction"], themes: ["success", "vision"], schools: ["business"] },

  // TEAMWORK & COLLABORATION
  { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller", authorId: "helen-keller", tags: ["teamwork", "collaboration", "collective"], themes: ["success", "teamwork"], schools: ["inspiration"] },
  { text: "Talent wins games, but teamwork and intelligence win championships.", author: "Michael Jordan", authorId: "michael-jordan", tags: ["talent", "teamwork", "intelligence"], themes: ["success", "teamwork"], schools: ["sports"] },
  { text: "If everyone is moving forward together, then success takes care of itself.", author: "Henry Ford", authorId: "henry-ford", tags: ["teamwork", "forward", "success"], themes: ["success", "teamwork"], schools: ["business"] },
  { text: "Teamwork makes the dream work.", author: "John C. Maxwell", authorId: "john-c-maxwell", tags: ["teamwork", "dream", "collaboration"], themes: ["success", "teamwork"], schools: ["leadership"] },

  // ADAPTABILITY & CHANGE
  { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin", authorId: "charles-darwin", tags: ["adaptability", "change", "survival"], themes: ["success", "adaptability"], schools: ["science"] },
  { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["intelligence", "change", "measure"], themes: ["success", "adaptability"], schools: ["science"] },
  { text: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["life", "chance", "change"], themes: ["success", "adaptability"], schools: ["motivation"] },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["change", "world", "personal"], themes: ["success", "adaptability"], schools: ["peace"] },

  // SELF-DISCIPLINE
  { text: "With self-discipline, most anything is possible.", author: "Theodore Roosevelt", authorId: "theodore-roosevelt", tags: ["discipline", "possibility", "control"], themes: ["success", "discipline"], schools: ["leadership"] },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["discipline", "goals", "accomplishment"], themes: ["success", "discipline"], schools: ["motivation"] },
  { text: "We must all suffer from one of two pains: the pain of discipline or the pain of regret.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["discipline", "regret", "choice"], themes: ["success", "discipline"], schools: ["motivation"] },
  { text: "Self-discipline begins with the mastery of your thoughts.", author: "Napoleon Hill", authorId: "napoleon-hill", tags: ["discipline", "thoughts", "mastery"], themes: ["success", "discipline"], schools: ["success-literature"] },

  // NETWORKING & RELATIONSHIPS
  { text: "Your network is your net worth.", author: "Porter Gale", authorId: "porter-gale", tags: ["network", "worth", "relationships"], themes: ["success", "networking"], schools: ["business"] },
  { text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb", authorId: "african-proverb", tags: ["speed", "teamwork", "distance"], themes: ["success", "networking"], schools: ["african-wisdom"] },
  { text: "The richest people in the world look for and build networks.", author: "Robert Kiyosaki", authorId: "robert-kiyosaki", tags: ["wealth", "networks", "building"], themes: ["success", "networking"], schools: ["finance"] },

  // FINANCIAL SUCCESS
  { text: "The secret to wealth is simple: Find a way to do more for others than anyone else does. Become more valuable. Do more. Give more. Be more. Serve more.", author: "Tony Robbins", authorId: "tony-robbins", tags: ["wealth", "value", "service"], themes: ["success", "financial"], schools: ["motivation"] },
  { text: "Formal education will make you a living; self-education will make you a fortune.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["education", "living", "fortune"], themes: ["success", "financial"], schools: ["motivation"] },
  { text: "It's not how much money you make, but how much money you keep.", author: "Robert Kiyosaki", authorId: "robert-kiyosaki", tags: ["money", "keeping", "wealth"], themes: ["success", "financial"], schools: ["finance"] },

  // LEGACY & IMPACT
  { text: "The greatest use of a life is to spend it on something that will outlast it.", author: "William James", authorId: "william-james", tags: ["legacy", "life", "impact"], themes: ["success", "legacy"], schools: ["philosophy"] },
  { text: "Success is not about how much money you make; it's about the difference you make in people's lives.", author: "Michelle Obama", authorId: "michelle-obama", tags: ["success", "money", "difference"], themes: ["success", "legacy"], schools: ["leadership"] },
  { text: "Make your life a masterpiece; imagine no limitations on what you can be, have, or do.", author: "Brian Tracy", authorId: "brian-tracy", tags: ["life", "masterpiece", "limitation"], themes: ["success", "legacy"], schools: ["motivation"] },
  { text: "The meaning of life is to find your gift. The purpose of life is to give it away.", author: "Pablo Picasso", authorId: "pablo-picasso", tags: ["life", "gift", "purpose"], themes: ["success", "legacy"], schools: ["arts"] },
  { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["feelings", "memory", "impact"], themes: ["success", "legacy"], schools: ["literature"] },
  { text: "Success is not just about what you accomplish in your life, but about what you inspire others to do.", author: "Unknown", authorId: "unknown", tags: ["success", "inspiration", "others"], themes: ["success", "legacy"], schools: ["motivation"] }
];

// Add unique IDs and timestamps
const formattedQuotes = successQuotes.map((quote, index) => ({
  ...quote,
  id: `success-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./success-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Success quotes written to success-quotes.json");