// Script to convert courage quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided courage quotes categorized by theme
const courageQuotes = [
  // THE NATURE OF COURAGE
  { text: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["absence", "fear", "triumph"], themes: ["courage", "nature"], schools: ["politics"] },
  { text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["stand", "speak", "listen"], themes: ["courage", "nature"], schools: ["politics"] },
  { text: "Courage is the first of human qualities because it is the quality which guarantees all others.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["first", "human", "guarantees"], themes: ["courage", "nature"], schools: ["politics"] },
  { text: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain", authorId: "mark-twain", tags: ["resistance", "mastery", "fear"], themes: ["courage", "nature"], schools: ["literature"] },
  { text: "Courage is being scared to death but saddling up anyway.", author: "John Wayne", authorId: "john-wayne", tags: ["scared", "death", "saddling"], themes: ["courage", "nature"], schools: ["entertainment"] },
  { text: "Courage is grace under pressure.", author: "Ernest Hemingway", authorId: "ernest-hemingway", tags: ["grace", "pressure", "under"], themes: ["courage", "nature"], schools: ["literature"] },
  { text: "The courage to be is the courage to accept oneself, in spite of being unacceptable.", author: "Paul Tillich", authorId: "paul-tillich", tags: ["accept", "oneself", "unacceptable"], themes: ["courage", "nature"], schools: ["philosophy"] },

  // EVERYDAY COURAGE
  { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher", authorId: "mary-anne-radmacher", tags: ["roar", "quiet", "try"], themes: ["courage", "everyday"], schools: ["motivational"] },
  { text: "Small opportunities are often the beginning of great enterprises.", author: "Demosthenes", authorId: "demosthenes", tags: ["small", "opportunities", "beginning"], themes: ["courage", "everyday"], schools: ["philosophy"] },
  { text: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.", author: "Steve Jobs", authorId: "steve-jobs", tags: ["follow", "heart", "intuition"], themes: ["courage", "everyday"], schools: ["technology"] },
  { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings", authorId: "ee-cummings", tags: ["grow", "up", "become"], themes: ["courage", "everyday"], schools: ["literature"] },
  { text: "The courage to continue counts more than the courage to start.", author: "Unknown", authorId: "unknown", tags: ["continue", "counts", "start"], themes: ["courage", "everyday"], schools: ["motivational"] },
  { text: "Sometimes the bravest thing you can do is ask for help.", author: "Unknown", authorId: "unknown", tags: ["bravest", "ask", "help"], themes: ["courage", "everyday"], schools: ["motivational"] },

  // MORAL COURAGE
  { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel", authorId: "coco-chanel", tags: ["courageous", "think", "aloud"], themes: ["courage", "moral"], schools: ["fashion"] },
  { text: "It takes courage to stand up for what is right, especially when you stand alone.", author: "Unknown", authorId: "unknown", tags: ["stand", "right", "alone"], themes: ["courage", "moral"], schools: ["motivational"] },
  { text: "Courage is contagious. When a brave man takes a stand, the spines of others are often stiffened.", author: "Billy Graham", authorId: "billy-graham", tags: ["contagious", "brave", "stand"], themes: ["courage", "moral"], schools: ["religion"] },
  { text: "Speak your mind, even if your voice shakes.", author: "Maggie Kuhn", authorId: "maggie-kuhn", tags: ["speak", "mind", "voice"], themes: ["courage", "moral"], schools: ["activism"] },
  { text: "The price of being a sheep is boredom. The price of being a wolf is loneliness. Choose one or the other with great care.", author: "Hugh MacLeod", authorId: "hugh-macleod", tags: ["sheep", "wolf", "loneliness"], themes: ["courage", "moral"], schools: ["art"] },

  // PHYSICAL COURAGE
  { text: "Bravery is the capacity to perform properly even when scared half to death.", author: "Omar Bradley", authorId: "omar-bradley", tags: ["bravery", "capacity", "scared"], themes: ["courage", "physical"], schools: ["military"] },
  { text: "A hero is no braver than an ordinary man, but he is brave five minutes longer.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["hero", "braver", "longer"], themes: ["courage", "physical"], schools: ["transcendentalism"] },
  { text: "Courage is fear holding on a minute longer.", author: "George S. Patton", authorId: "george-patton", tags: ["fear", "holding", "minute"], themes: ["courage", "physical"], schools: ["military"] },
  { text: "The brave man is not he who does not feel afraid, but he who conquers that fear.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["brave", "feel", "conquers"], themes: ["courage", "physical"], schools: ["politics"] },
  { text: "True courage is not the absence of fear, but the willingness to proceed in spite of it.", author: "Unknown", authorId: "unknown", tags: ["true", "absence", "willingness"], themes: ["courage", "physical"], schools: ["motivational"] },

  // STARTING AND BEGINNING
  { text: "The secret to getting ahead is getting started.", author: "Mark Twain", authorId: "mark-twain", tags: ["secret", "ahead", "started"], themes: ["courage", "starting"], schools: ["literature"] },
  { text: "Courage is the power to let go of the familiar.", author: "Raymond Lindquist", authorId: "raymond-lindquist", tags: ["power", "let", "familiar"], themes: ["courage", "starting"], schools: ["motivational"] },
  { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney", authorId: "walt-disney", tags: ["dreams", "come", "pursue"], themes: ["courage", "starting"], schools: ["entertainment"] },
  { text: "Beginnings take courage, endings take grace.", author: "Unknown", authorId: "unknown", tags: ["beginnings", "endings", "grace"], themes: ["courage", "starting"], schools: ["motivational"] },
  { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt", authorId: "eleanor-roosevelt", tags: ["gain", "strength", "confidence"], themes: ["courage", "starting"], schools: ["politics"] },

  // PERSEVERANCE AND ENDURANCE
  { text: "Courage doesn't always roar. Sometimes it's the little voice at the end of the day that says I'll try again tomorrow.", author: "Mary Anne Radmacher", authorId: "mary-anne-radmacher", tags: ["roar", "little", "voice"], themes: ["courage", "perseverance"], schools: ["motivational"] },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb", authorId: "japanese-proverb", tags: ["fall", "stand", "times"], themes: ["courage", "perseverance"], schools: ["folklore"] },
  { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot", authorId: "walter-elliot", tags: ["perseverance", "long", "short"], themes: ["courage", "perseverance"], schools: ["motivational"] },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", authorId: "confucius", tags: ["slowly", "matter", "stop"], themes: ["courage", "perseverance"], schools: ["philosophy"] },
  { text: "The oak fought the wind and was broken, the willow bent when it must and survived.", author: "Robert Jordan", authorId: "robert-jordan", tags: ["oak", "wind", "willow"], themes: ["courage", "perseverance"], schools: ["literature"] },

  // VULNERABILITY AND AUTHENTICITY
  { text: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.", author: "Brené Brown", authorId: "brene-brown", tags: ["vulnerability", "winning", "show"], themes: ["courage", "vulnerability"], schools: ["psychology"] },
  { text: "It takes courage to be authentic, especially when the world wants you to be someone else.", author: "Unknown", authorId: "unknown", tags: ["authentic", "world", "someone"], themes: ["courage", "vulnerability"], schools: ["motivational"] },
  { text: "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.", author: "Unknown", authorId: "unknown", tags: ["strongest", "show", "battles"], themes: ["courage", "vulnerability"], schools: ["motivational"] },
  { text: "Have the courage to be imperfect.", author: "Brené Brown", authorId: "brene-brown", tags: ["imperfect", "courage", "be"], themes: ["courage", "vulnerability"], schools: ["psychology"] },
  { text: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.", author: "Brené Brown", authorId: "brene-brown", tags: ["authenticity", "practice", "embracing"], themes: ["courage", "vulnerability"], schools: ["psychology"] },

  // LOVE AND RELATIONSHIPS
  { text: "It takes courage to love, but pain through love is the purifying fire which those who love generously know.", author: "Eleanor Roosevelt", authorId: "eleanor-roosevelt", tags: ["love", "pain", "purifying"], themes: ["courage", "love"], schools: ["politics"] },
  { text: "To love at all is to be vulnerable.", author: "C.S. Lewis", authorId: "cs-lewis", tags: ["love", "vulnerable", "at"], themes: ["courage", "love"], schools: ["literature"] },
  { text: "The courage to be vulnerable is the courage to be seen as you truly are.", author: "Unknown", authorId: "unknown", tags: ["vulnerable", "seen", "truly"], themes: ["courage", "love"], schools: ["motivational"] },
  { text: "Have the courage to open your heart even when you know it might get broken.", author: "Unknown", authorId: "unknown", tags: ["open", "heart", "broken"], themes: ["courage", "love"], schools: ["motivational"] },
  { text: "Love requires courage.", author: "Ovid", authorId: "ovid", tags: ["love", "requires", "courage"], themes: ["courage", "love"], schools: ["literature"] },

  // CREATIVE COURAGE
  { text: "Creativity takes courage.", author: "Henri Matisse", authorId: "henri-matisse", tags: ["creativity", "takes", "courage"], themes: ["courage", "creative"], schools: ["art"] },
  { text: "The artist must be free to choose what he does, certainly, but he must also never be afraid to do what he might choose.", author: "Langston Hughes", authorId: "langston-hughes", tags: ["artist", "free", "afraid"], themes: ["courage", "creative"], schools: ["literature"] },
  { text: "Every artist was first an amateur.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["artist", "first", "amateur"], themes: ["courage", "creative"], schools: ["transcendentalism"] },
  { text: "The fear of the blank canvas is the fear of possibility.", author: "Robert Genn", authorId: "robert-genn", tags: ["fear", "blank", "possibility"], themes: ["courage", "creative"], schools: ["art"] },
  { text: "Make good art.", author: "Neil Gaiman", authorId: "neil-gaiman", tags: ["make", "good", "art"], themes: ["courage", "creative"], schools: ["literature"] },

  // SILENT COURAGE
  { text: "The strongest souls are those who have weathered the most devastating storms.", author: "Unknown", authorId: "unknown", tags: ["strongest", "souls", "weathered"], themes: ["courage", "silent"], schools: ["motivational"] },
  { text: "Sometimes the bravest thing you can do is say nothing at all.", author: "Unknown", authorId: "unknown", tags: ["bravest", "say", "nothing"], themes: ["courage", "silent"], schools: ["motivational"] },
  { text: "Courage is sometimes quiet.", author: "Mary Anne Radmacher", authorId: "mary-anne-radmacher", tags: ["courage", "sometimes", "quiet"], themes: ["courage", "silent"], schools: ["motivational"] },
  { text: "The quietest people often have the loudest minds.", author: "Stephen Hawking", authorId: "stephen-hawking", tags: ["quietest", "loudest", "minds"], themes: ["courage", "silent"], schools: ["science"] },
  { text: "Still waters run deep.", author: "English Proverb", authorId: "english-proverb", tags: ["still", "waters", "deep"], themes: ["courage", "silent"], schools: ["folklore"] },

  // LEADERSHIP COURAGE
  { text: "Leadership is the capacity to translate vision into reality.", author: "Warren Bennis", authorId: "warren-bennis", tags: ["leadership", "capacity", "vision"], themes: ["courage", "leadership"], schools: ["business"] },
  { text: "The quality of a leader is reflected in the standards they set for themselves.", author: "Ray Kroc", authorId: "ray-kroc", tags: ["quality", "leader", "standards"], themes: ["courage", "leadership"], schools: ["business"] },
  { text: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell", authorId: "john-maxwell", tags: ["leader", "knows", "shows"], themes: ["courage", "leadership"], schools: ["business"] },
  { text: "It takes courage to lead when you don't have all the answers.", author: "Unknown", authorId: "unknown", tags: ["lead", "answers", "courage"], themes: ["courage", "leadership"], schools: ["motivational"] },
  { text: "The buck stops here.", author: "Harry S. Truman", authorId: "harry-truman", tags: ["buck", "stops", "here"], themes: ["courage", "leadership"], schools: ["politics"] },

  // SPIRITUAL COURAGE
  { text: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["faith", "step", "staircase"], themes: ["courage", "spiritual"], schools: ["civil-rights"] },
  { text: "Courage is the price that life exacts for granting peace.", author: "Amelia Earhart", authorId: "amelia-earhart", tags: ["price", "life", "peace"], themes: ["courage", "spiritual"], schools: ["aviation"] },
  { text: "The spiritual journey requires the courage to let go of our old selves.", author: "Unknown", authorId: "unknown", tags: ["spiritual", "journey", "let"], themes: ["courage", "spiritual"], schools: ["motivational"] },
  { text: "Have the courage to follow your spiritual path, even when others don't understand.", author: "Unknown", authorId: "unknown", tags: ["spiritual", "path", "understand"], themes: ["courage", "spiritual"], schools: ["motivational"] },
  { text: "Faith is courage; it is creative while despair is always destructive.", author: "David S. Viscott", authorId: "david-viscott", tags: ["faith", "creative", "destructive"], themes: ["courage", "spiritual"], schools: ["psychology"] },

  // INNER STRENGTH
  { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", authorId: "marcus-aurelius", tags: ["power", "mind", "strength"], themes: ["courage", "inner"], schools: ["philosophy"] },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["behind", "before", "within"], themes: ["courage", "inner"], schools: ["transcendentalism"] },
  { text: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway", authorId: "ernest-hemingway", tags: ["breaks", "everyone", "strong"], themes: ["courage", "inner"], schools: ["literature"] },
  { text: "Strength does not come from winning. Your struggles develop your strengths.", author: "Arnold Schwarzenegger", authorId: "arnold-schwarzenegger", tags: ["strength", "winning", "struggles"], themes: ["courage", "inner"], schools: ["entertainment"] },
  { text: "The oak fought the wind and was broken, the willow bent when it must and survived.", author: "Robert Jordan", authorId: "robert-jordan", tags: ["oak", "wind", "willow"], themes: ["courage", "inner"], schools: ["literature"] },

  // FACING ADVERSITY
  { text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["measure", "comfort", "challenge"], themes: ["courage", "adversity"], schools: ["civil-rights"] },
  { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca", authorId: "seneca", tags: ["difficulties", "strengthen", "mind"], themes: ["courage", "adversity"], schools: ["philosophy"] },
  { text: "The gem cannot be polished without friction, nor man perfected without trials.", author: "Chinese Proverb", authorId: "chinese-proverb", tags: ["gem", "polished", "friction"], themes: ["courage", "adversity"], schools: ["folklore"] },
  { text: "Smooth seas do not make skillful sailors.", author: "African Proverb", authorId: "african-proverb", tags: ["smooth", "seas", "sailors"], themes: ["courage", "adversity"], schools: ["folklore"] },
  { text: "Adversity causes some men to break; others to break records.", author: "William A. Ward", authorId: "william-ward", tags: ["adversity", "break", "records"], themes: ["courage", "adversity"], schools: ["education"] },

  // TRANSFORMATIONAL COURAGE
  { text: "Life shrinks or expands in proportion to one's courage.", author: "Anaïs Nin", authorId: "anais-nin", tags: ["life", "shrinks", "expands"], themes: ["courage", "transformational"], schools: ["literature"] },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["change", "wish", "world"], themes: ["courage", "transformational"], schools: ["peace"] },
  { text: "It takes courage to endure the sharp pains of self-discovery rather than choose to take the dull pain of unconsciousness that would last the rest of our lives.", author: "Marianne Williamson", authorId: "marianne-williamson", tags: ["endure", "sharp", "discovery"], themes: ["courage", "transformational"], schools: ["spirituality"] },
  { text: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell", authorId: "joseph-campbell", tags: ["cave", "fear", "treasure"], themes: ["courage", "transformational"], schools: ["mythology"] },
  { text: "Courage is the ladder on which all the other virtues mount.", author: "Clare Boothe Luce", authorId: "clare-boothe-luce", tags: ["ladder", "virtues", "mount"], themes: ["courage", "transformational"], schools: ["politics"] },

  // HISTORICAL COURAGE
  { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["learned", "absence", "triumph"], themes: ["courage", "historical"], schools: ["politics"] },
  { text: "The bravest are surely those who have the clearest vision of what is before them, glory and danger alike, and yet notwithstanding, go out to meet it.", author: "Thucydides", authorId: "thucydides", tags: ["bravest", "vision", "glory"], themes: ["courage", "historical"], schools: ["history"] },
  { text: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["freedom", "voluntarily", "oppressed"], themes: ["courage", "historical"], schools: ["civil-rights"] },
  { text: "First they ignore you, then they laugh at you, then they fight you, then you win.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["ignore", "laugh", "fight"], themes: ["courage", "historical"], schools: ["peace"] },
  { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["accept", "disappointment", "hope"], themes: ["courage", "historical"], schools: ["civil-rights"] },

  // MODERN COURAGE
  { text: "It takes courage to be different in a world that constantly pressures you to conform.", author: "Unknown", authorId: "unknown", tags: ["different", "world", "conform"], themes: ["courage", "modern"], schools: ["motivational"] },
  { text: "Have the courage to unlearn what you were taught to believe.", author: "Unknown", authorId: "unknown", tags: ["unlearn", "taught", "believe"], themes: ["courage", "modern"], schools: ["motivational"] },
  { text: "The courage to be vulnerable in a digital world is the new bravery.", author: "Unknown", authorId: "unknown", tags: ["vulnerable", "digital", "bravery"], themes: ["courage", "modern"], schools: ["technology"] },
  { text: "It takes courage to disconnect in a world that's always connected.", author: "Unknown", authorId: "unknown", tags: ["disconnect", "connected", "world"], themes: ["courage", "modern"], schools: ["technology"] },
  { text: "The bravest thing you can do in the modern world is to be present.", author: "Unknown", authorId: "unknown", tags: ["bravest", "modern", "present"], themes: ["courage", "modern"], schools: ["motivational"] },

  // WISDOM AND COURAGE
  { text: "A man of knowledge lives by acting, not by thinking about acting.", author: "Carlos Castaneda", authorId: "carlos-castaneda", tags: ["knowledge", "acting", "thinking"], themes: ["courage", "wisdom"], schools: ["anthropology"] },
  { text: "Wisdom is nothing more than healed pain.", author: "Robert Gary Lee", authorId: "robert-lee", tags: ["wisdom", "healed", "pain"], themes: ["courage", "wisdom"], schools: ["psychology"] },
  { text: "The wise man doesn't give the right answers, he poses the right questions.", author: "Claude Lévi-Strauss", authorId: "claude-levi-strauss", tags: ["wise", "answers", "questions"], themes: ["courage", "wisdom"], schools: ["anthropology"] },
  { text: "Knowledge is learning something every day. Wisdom is letting go of something every day.", author: "Zen Proverb", authorId: "zen-proverb", tags: ["knowledge", "learning", "wisdom"], themes: ["courage", "wisdom"], schools: ["philosophy"] },
  { text: "Courage is the discovery that you may not win, and trying when you know you can lose.", author: "Tom Krause", authorId: "tom-krause", tags: ["discovery", "win", "trying"], themes: ["courage", "wisdom"], schools: ["motivational"] },

  // ULTIMATE COURAGE
  { text: "The courage to be is the courage to accept oneself, in spite of being unacceptable.", author: "Paul Tillich", authorId: "paul-tillich", tags: ["accept", "oneself", "unacceptable"], themes: ["courage", "ultimate"], schools: ["philosophy"] },
  { text: "Courage is not having the strength to go on; it is going on when you don't have the strength.", author: "Theodore Roosevelt", authorId: "theodore-roosevelt", tags: ["strength", "going", "have"], themes: ["courage", "ultimate"], schools: ["politics"] },
  { text: "Courage is the price that life exacts for granting peace.", author: "Amelia Earhart", authorId: "amelia-earhart", tags: ["price", "life", "peace"], themes: ["courage", "ultimate"], schools: ["aviation"] },
  { text: "One isn't necessarily born with courage, but one is born with potential.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["born", "courage", "potential"], themes: ["courage", "ultimate"], schools: ["literature"] },
  { text: "Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.", author: "Bethany Hamilton", authorId: "bethany-hamilton", tags: ["afraid", "fear", "stop"], themes: ["courage", "ultimate"], schools: ["sports"] },

  // INSPIRATIONAL COURAGE
  { text: "Be courageous. I have seen many depressions in business. Always America has emerged from these stronger and more prosperous. Be brave as your fathers before you. Have faith! Go forward!", author: "Thomas Edison", authorId: "thomas-edison", tags: ["courageous", "depressions", "emerged"], themes: ["courage", "inspirational"], schools: ["science"] },
  { text: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner", authorId: "william-faulkner", tags: ["swim", "horizons", "shore"], themes: ["courage", "inspirational"], schools: ["literature"] },
  
  // Bonus Courage Quote
  { text: "Courage is like a muscle. We strengthen it by use.", author: "Ruth Gordo", authorId: "ruth-gordo", tags: ["muscle", "strengthen", "use"], themes: ["courage", "bonus"], schools: ["motivational"] }
];

// Add unique IDs and timestamps
const formattedQuotes = courageQuotes.map((quote, index) => ({
  ...quote,
  id: `courage-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted courage quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./courage-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Courage quotes written to courage-quotes.json");