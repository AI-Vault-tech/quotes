// Script to convert struggle quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided struggle quotes categorized by theme
const struggleQuotes = [
  // PERSEVERANCE & PERSISTENCE
  { text: "The oak fought the wind and was broken, the willow bent when it must and survived.", author: "Robert Jordan", authorId: "robert-jordan", tags: ["perseverance", "adaptability", "survival"], themes: ["struggle", "perseverance"], schools: ["literature"] },
  { text: "Persistence is the twin sister of excellence. One is a matter of quality; the other, a matter of time.", author: "Marabel Morgan", authorId: "marabel-morgan", tags: ["persistence", "excellence", "time"], themes: ["struggle", "perseverance"], schools: ["motivation"] },
  { text: "It's not that I'm so smart, it's just that I stay with problems longer.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["intelligence", "persistence", "problems"], themes: ["struggle", "perseverance"], schools: ["science"] },
  { text: "When you come to the end of your rope, tie a knot and hang on.", author: "Franklin D. Roosevelt", authorId: "franklin-d-roosevelt", tags: ["hope", "persistence", "endurance"], themes: ["struggle", "perseverance"], schools: ["leadership"] },
  { text: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine", authorId: "thomas-paine", tags: ["conflict", "triumph", "glory"], themes: ["struggle", "perseverance"], schools: ["political-science"] },
  { text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung", authorId: "carl-jung", tags: ["identity", "choice", "transformation"], themes: ["struggle", "perseverance"], schools: ["psychology"] },
  { text: "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.", author: "Thomas Carlyle", authorId: "thomas-carlyle", tags: ["permanence", "perseverance", "persistence"], themes: ["struggle", "perseverance"], schools: ["literature"] },

  // OVERCOMING ADVERSITY
  { text: "The human capacity for burden is like bamboo—far more flexible than you'd ever believe at first glance.", author: "Jodi Picoult", authorId: "jodi-picoult", tags: ["flexibility", "capacity", "burden"], themes: ["struggle", "adversity"], schools: ["literature"] },
  { text: "Rock bottom became the solid foundation on which I rebuilt my life.", author: "J.K. Rowling", authorId: "jk-rowling", tags: ["foundation", "rebuilding", "rock-bottom"], themes: ["struggle", "adversity"], schools: ["literature"] },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", authorId: "oprah-winfrey", tags: ["wisdom", "wounds", "transformation"], themes: ["struggle", "adversity"], schools: ["media"] },
  { text: "The world breaks everyone, and afterward, many are strong at the broken places.", author: "Ernest Hemingway", authorId: "ernest-hemingway", tags: ["strength", "broken", "resilience"], themes: ["struggle", "adversity"], schools: ["literature"] },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["inner-strength", "past", "future"], themes: ["struggle", "adversity"], schools: ["transcendentalism"] },
  { text: "Adversity causes some men to break; others to break records.", author: "William A. Ward", authorId: "william-a-ward", tags: ["adversity", "records", "response"], themes: ["struggle", "adversity"], schools: ["education"] },

  // STRENGTH & RESILIENCE
  { text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher", authorId: "margaret-thatcher", tags: ["battle", "persistence", "victory"], themes: ["struggle", "strength"], schools: ["politics"] },
  { text: "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.", author: "Unknown", authorId: "unknown", tags: ["strength", "hidden", "battles"], themes: ["struggle", "strength"], schools: ["motivation"] },
  { text: "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up.", author: "Mary Holloway", authorId: "mary-holloway", tags: ["resilience", "power", "responsibility"], themes: ["struggle", "strength"], schools: ["psychology"] },
  { text: "She stood in the storm, and when the wind did not blow her way, she adjusted her sails.", author: "Elizabeth Edwards", authorId: "elizabeth-edwards", tags: ["adaptability", "storm", "adjustment"], themes: ["struggle", "strength"], schools: ["politics"] },
  { text: "The bamboo that bends is stronger than the oak that resists.", author: "Japanese Proverb", authorId: "japanese-proverb", tags: ["flexibility", "strength", "adaptability"], themes: ["struggle", "strength"], schools: ["eastern-philosophy"] },
  { text: "You never know how strong you are until being strong is your only choice.", author: "Bob Marley", authorId: "bob-marley", tags: ["strength", "necessity", "discovery"], themes: ["struggle", "strength"], schools: ["music"] },

  // GROWTH THROUGH STRUGGLE
  { text: "The wound is the place where the Light enters you.", author: "Rumi", authorId: "rumi", tags: ["wound", "light", "transformation"], themes: ["struggle", "growth"], schools: ["sufism"] },
  { text: "No tree, it is said, can grow to heaven unless its roots reach down to hell.", author: "Carl Jung", authorId: "carl-jung", tags: ["growth", "roots", "depth"], themes: ["struggle", "growth"], schools: ["psychology"] },
  { text: "Sometimes when you're in a dark place you think you've been buried, but you've actually been planted.", author: "Christine Caine", authorId: "christine-caine", tags: ["darkness", "planting", "growth"], themes: ["struggle", "growth"], schools: ["christianity"] },
  { text: "The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths.", author: "Elisabeth Kübler-Ross", authorId: "elisabeth-kubler-ross", tags: ["beauty", "defeat", "struggle"], themes: ["struggle", "growth"], schools: ["medicine"] },
  { text: "Smooth seas do not make skillful sailors.", author: "African Proverb", authorId: "african-proverb", tags: ["challenge", "skill", "growth"], themes: ["struggle", "growth"], schools: ["african-wisdom"] },
  { text: "What hurts you, blesses you. Darkness is your candle.", author: "Rumi", authorId: "rumi", tags: ["pain", "blessing", "darkness"], themes: ["struggle", "growth"], schools: ["sufism"] },

  // COURAGE & BRAVERY
  { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher", authorId: "mary-anne-radmacher", tags: ["courage", "quiet", "persistence"], themes: ["struggle", "courage"], schools: ["literature"] },
  { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu", authorId: "lao-tzu", tags: ["love", "strength", "courage"], themes: ["struggle", "courage"], schools: ["taoism"] },
  { text: "Bravery is not the absence of fear, but the action in the face of fear.", author: "Mark Messier", authorId: "mark-messier", tags: ["bravery", "fear", "action"], themes: ["struggle", "courage"], schools: ["sports"] },
  { text: "Fear is a reaction. Courage is a decision.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["fear", "courage", "decision"], themes: ["struggle", "courage"], schools: ["leadership"] },
  { text: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings", authorId: "ee-cummings", tags: ["courage", "growth", "authenticity"], themes: ["struggle", "courage"], schools: ["poetry"] },

  // HOPE IN DIFFICULT TIMES
  { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu", authorId: "desmond-tutu", tags: ["hope", "light", "darkness"], themes: ["struggle", "hope"], schools: ["theology"] },
  { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["hope", "disappointment", "persistence"], themes: ["struggle", "hope"], schools: ["civil-rights"] },
  { text: "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.", author: "Charles Dickens", authorId: "charles-dickens", tags: ["strength", "growth", "courage"], themes: ["struggle", "hope"], schools: ["literature"] },
  { text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo", authorId: "victor-hugo", tags: ["darkness", "light", "hope"], themes: ["struggle", "hope"], schools: ["literature"] },
  { text: "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.", author: "Emily Dickinson", authorId: "emily-dickinson", tags: ["hope", "soul", "persistence"], themes: ["struggle", "hope"], schools: ["poetry"] },

  // MENTAL HEALTH & INNER BATTLES
  { text: "Your illness is not your identity. Your chemistry is not your character.", author: "Rick Warren", authorId: "rick-warren", tags: ["identity", "illness", "character"], themes: ["struggle", "mental-health"], schools: ["christianity"] },
  { text: "The strongest souls are those who have weathered the most devastating storms.", author: "Unknown", authorId: "unknown", tags: ["strength", "storms", "soul"], themes: ["struggle", "mental-health"], schools: ["motivation"] },
  { text: "It's okay to be a glowstick: sometimes we have to break before we shine.", author: "Jasmine Warga", authorId: "jasmine-warga", tags: ["break", "shine", "transformation"], themes: ["struggle", "mental-health"], schools: ["literature"] },
  { text: "Mental health problems don't define who you are. They are something you experience. You walk in the rain and you feel the rain, but you are not the rain.", author: "Matt Haig", authorId: "matt-haig", tags: ["mental-health", "identity", "experience"], themes: ["struggle", "mental-health"], schools: ["literature"] },
  { text: "The pain you feel today is the strength you feel tomorrow.", author: "Unknown", authorId: "unknown", tags: ["pain", "strength", "transformation"], themes: ["struggle", "mental-health"], schools: ["motivation"] },

  // FAILURE & SETBACKS
  { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford", authorId: "henry-ford", tags: ["failure", "opportunity", "intelligence"], themes: ["struggle", "failure"], schools: ["business"] },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius", authorId: "confucius", tags: ["glory", "falling", "rising"], themes: ["struggle", "failure"], schools: ["confucianism"] },
  { text: "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe.", author: "Sumner Redstone", authorId: "sumner-redstone", tags: ["success", "failure", "frustration"], themes: ["struggle", "failure"], schools: ["business"] },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", authorId: "thomas-edison", tags: ["failure", "experimentation", "persistence"], themes: ["struggle", "failure"], schools: ["science"] },
  { text: "There is no failure except in no longer trying.", author: "Elbert Hubbard", authorId: "elbert-hubbard", tags: ["failure", "trying", "persistence"], themes: ["struggle", "failure"], schools: ["literature"] },

  // PAIN & SUFFERING
  { text: "The pain you've been feeling can't compare to the joy that's coming.", author: "Romans 8:18", authorId: "bible", tags: ["pain", "joy", "future"], themes: ["struggle", "pain"], schools: ["christianity"] },
  { text: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.", author: "Khalil Gibran", authorId: "khalil-gibran", tags: ["suffering", "strength", "scars"], themes: ["struggle", "pain"], schools: ["literature"] },
  { text: "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be.", author: "Charles Dickens", authorId: "charles-dickens", tags: ["suffering", "teaching", "understanding"], themes: ["struggle", "pain"], schools: ["literature"] },
  { text: "Pain is inevitable. Suffering is optional.", author: "Haruki Murakami", authorId: "haruki-murakami", tags: ["pain", "suffering", "choice"], themes: ["struggle", "pain"], schools: ["literature"] },
  { text: "Where there is ruin, there is hope for a treasure.", author: "Rumi", authorId: "rumi", tags: ["ruin", "hope", "treasure"], themes: ["struggle", "pain"], schools: ["sufism"] },

  // WARRIOR & SURVIVOR SPIRIT
  { text: "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.", author: "Christopher Reeve", authorId: "christopher-reeve", tags: ["hero", "strength", "perseverance"], themes: ["struggle", "warrior"], schools: ["entertainment"] },
  { text: "The world is full of suffering, it is also full of overcoming it.", author: "Helen Keller", authorId: "helen-keller", tags: ["suffering", "overcoming", "hope"], themes: ["struggle", "warrior"], schools: ["inspiration"] },
  { text: "You may encounter many defeats, but you must not be defeated.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["defeats", "defeated", "persistence"], themes: ["struggle", "warrior"], schools: ["literature"] },
  { text: "Stars can't shine without darkness.", author: "Unknown", authorId: "unknown", tags: ["stars", "darkness", "contrast"], themes: ["struggle", "warrior"], schools: ["motivation"] },
  { text: "The Phoenix must burn to emerge.", author: "Janet Fitch", authorId: "janet-fitch", tags: ["phoenix", "burn", "rebirth"], themes: ["struggle", "warrior"], schools: ["literature"] },

  // TRANSFORMATION & RENEWAL
  { text: "Sometimes good things fall apart so better things can fall together.", author: "Marilyn Monroe", authorId: "marilyn-monroe", tags: ["transformation", "better", "change"], themes: ["struggle", "transformation"], schools: ["cinema"] },
  { text: "When we long for life without difficulties, remind us that oaks grow strong in contrary winds and diamonds are made under pressure.", author: "Peter Marshall", authorId: "peter-marshall", tags: ["strength", "difficulty", "pressure"], themes: ["struggle", "transformation"], schools: ["leadership"] },
  { text: "The moment you're ready to quit is usually the moment right before a miracle happens.", author: "Unknown", authorId: "unknown", tags: ["quit", "miracle", "timing"], themes: ["struggle", "transformation"], schools: ["motivation"] },
  { text: "Life doesn't get easier or more forgiving, we get stronger and more resilient.", author: "Steve Maraboli", authorId: "steve-maraboli", tags: ["strength", "resilience", "growth"], themes: ["struggle", "transformation"], schools: ["motivation"] },
  { text: "Storms make trees take deeper roots.", author: "Dolly Parton", authorId: "dolly-parton", tags: ["storms", "growth", "roots"], themes: ["struggle", "transformation"], schools: ["entertainment"] },

  // INSPIRATIONAL FIGHTS
  { text: "It's not the size of the dog in the fight, but the size of the fight in the dog.", author: "Mark Twain", authorId: "mark-twain", tags: ["fight", "determination", "spirit"], themes: ["struggle", "inspiration"], schools: ["literature"] },
  { text: "You can't stop the waves, but you can learn to surf.", author: "Jon Kabat-Zinn", authorId: "jon-kabat-zinn", tags: ["adaptability", "waves", "surfing"], themes: ["struggle", "inspiration"], schools: ["mindfulness"] },
  { text: "Tough times never last, but tough people do.", author: "Robert H. Schuller", authorId: "robert-h-schuller", tags: ["tough", "persistence", "people"], themes: ["struggle", "inspiration"], schools: ["religion"] },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll", authorId: "charles-r-swindoll", tags: ["reaction", "control", "perspective"], themes: ["struggle", "inspiration"], schools: ["christianity"] },
  { text: "The gem cannot be polished without friction, nor man perfected without trials.", author: "Chinese Proverb", authorId: "chinese-proverb", tags: ["polish", "friction", "perfection"], themes: ["struggle", "inspiration"], schools: ["eastern-philosophy"] },

  // ENDURANCE & LONG BATTLES
  { text: "Endurance is not just the ability to bear a hard thing, but to turn it into glory.", author: "William Barclay", authorId: "william-barclay", tags: ["endurance", "glory", "transformation"], themes: ["struggle", "endurance"], schools: ["theology"] },
  { text: "Mountains cannot be surmounted except by winding paths.", author: "Johann Wolfgang von Goethe", authorId: "johann-wolfgang-von-goethe", tags: ["mountains", "paths", "journey"], themes: ["struggle", "endurance"], schools: ["literature"] },
  { text: "A smooth sea never made a skilled sailor.", author: "English Proverb", authorId: "english-proverb", tags: ["challenge", "skill", "growth"], themes: ["struggle", "endurance"], schools: ["western-philosophy"] },
  { text: "Fall down seven times, stand up eight.", author: "Japanese Proverb", authorId: "japanese-proverb", tags: ["perseverance", "falling", "rising"], themes: ["struggle", "endurance"], schools: ["eastern-philosophy"] },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["impossible", "achievement", "persistence"], themes: ["struggle", "endurance"], schools: ["leadership"] },

  // INNER STRENGTH & POWER
  { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", authorId: "marcus-aurelius", tags: ["power", "mind", "strength"], themes: ["struggle", "inner-strength"], schools: ["stoicism"] },
  { text: "Strength does not come from winning. Your struggles develop your strengths.", author: "Arnold Schwarzenegger", authorId: "arnold-schwarzenegger", tags: ["strength", "struggles", "development"], themes: ["struggle", "inner-strength"], schools: ["fitness"] },
  { text: "The human spirit is stronger than anything that can happen to it.", author: "C.C. Scott", authorId: "cc-scott", tags: ["spirit", "strength", "resilience"], themes: ["struggle", "inner-strength"], schools: ["literature"] },
  { text: "We acquire the strength we have overcome.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["strength", "overcoming", "acquisition"], themes: ["struggle", "inner-strength"], schools: ["transcendentalism"] },
  { text: "What does not kill me makes me stronger.", author: "Friedrich Nietzsche", authorId: "friedrich-nietzsche", tags: ["strength", "adversity", "growth"], themes: ["struggle", "inner-strength"], schools: ["philosophy"] },

  // MODERN STRUGGLES
  { text: "Your current struggles are developing the strength you need for tomorrow.", author: "Unknown", authorId: "unknown", tags: ["struggles", "strength", "future"], themes: ["struggle", "modern"], schools: ["motivation"] },
  { text: "Sometimes the bravest thing you can do is just show up.", author: "Unknown", authorId: "unknown", tags: ["bravery", "presence", "courage"], themes: ["struggle", "modern"], schools: ["motivation"] },
  { text: "Healing is not linear.", author: "Unknown", authorId: "unknown", tags: ["healing", "process", "non-linear"], themes: ["struggle", "modern"], schools: ["psychology"] },
  { text: "Your struggle is your story. Your survival is your strength.", author: "Unknown", authorId: "unknown", tags: ["struggle", "story", "survival"], themes: ["struggle", "modern"], schools: ["motivation"] },
  { text: "The comeback is always stronger than the setback.", author: "Unknown", authorId: "unknown", tags: ["comeback", "setback", "strength"], themes: ["struggle", "modern"], schools: ["motivation"] },

  // WISDOM FROM PAIN
  { text: "Good timber does not grow with ease; the stronger the wind, the stronger the trees.", author: "J. Willard Marriott", authorId: "j-willard-marriott", tags: ["growth", "challenge", "strength"], themes: ["struggle", "wisdom"], schools: ["business"] },
  { text: "Scars are just evidence of the battles you've won.", author: "Unknown", authorId: "unknown", tags: ["scars", "battles", "evidence"], themes: ["struggle", "wisdom"], schools: ["motivation"] },
  { text: "The obstacle in the path becomes the path. Never forget, within every obstacle is an opportunity to improve our condition.", author: "Ryan Holiday", authorId: "ryan-holiday", tags: ["obstacle", "opportunity", "improvement"], themes: ["struggle", "wisdom"], schools: ["stoicism"] },
  { text: "Difficulty is what wakes up the genius.", author: "Napoleon Hill", authorId: "napoleon-hill", tags: ["difficulty", "genius", "awakening"], themes: ["struggle", "wisdom"], schools: ["success-literature"] },
  { text: "No pressure, no diamonds.", author: "Thomas Carlyle", authorId: "thomas-carlyle", tags: ["pressure", "diamonds", "transformation"], themes: ["struggle", "wisdom"], schools: ["literature"] },

  // SURVIVAL & RECOVERY
  { text: "Sometimes, survival is the only victory.", author: "Unknown", authorId: "unknown", tags: ["survival", "victory", "necessity"], themes: ["struggle", "survival"], schools: ["motivation"] },
  { text: "Healing takes time, and asking for help is a courageous step.", author: "Mariska Hargitay", authorId: "mariska-hargitay", tags: ["healing", "help", "courage"], themes: ["struggle", "survival"], schools: ["entertainment"] },
  { text: "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.", author: "Unknown", authorId: "unknown", tags: ["recovery", "journey", "steps"], themes: ["struggle", "survival"], schools: ["motivation"] },
  { text: "You're allowed to scream, you're allowed to cry, but you are not allowed to give up.", author: "Unknown", authorId: "unknown", tags: ["expression", "emotion", "persistence"], themes: ["struggle", "survival"], schools: ["motivation"] },
  { text: "Sometimes, carrying on, just carrying on, is the superhuman achievement.", author: "Albert Camus", authorId: "albert-camus", tags: ["persistence", "achievement", "endurance"], themes: ["struggle", "survival"], schools: ["philosophy"] },

  // PERSPECTIVE ON STRUGGLE
  { text: "The struggle you're in today is developing the strength you need for tomorrow.", author: "Robert Tew", authorId: "robert-tew", tags: ["struggle", "strength", "future"], themes: ["struggle", "perspective"], schools: ["motivation"] },
  { text: "Don't be ashamed of your story. It will inspire others.", author: "Unknown", authorId: "unknown", tags: ["story", "inspiration", "pride"], themes: ["struggle", "perspective"], schools: ["motivation"] },
  { text: "Your most difficult times often lead to your greatest moments.", author: "Unknown", authorId: "unknown", tags: ["difficulty", "greatness", "transformation"], themes: ["struggle", "perspective"], schools: ["motivation"] },
  { text: "The only way out is through.", author: "Robert Frost", authorId: "robert-frost", tags: ["persistence", "solution", "journey"], themes: ["struggle", "perspective"], schools: ["poetry"] },
  { text: "This too shall pass.", author: "Persian Adage", authorId: "persian-adage", tags: ["transience", "patience", "hope"], themes: ["struggle", "perspective"], schools: ["eastern-philosophy"] },

  // MOTIVATIONAL PUSH
  { text: "When you feel like quitting, think about why you started.", author: "Unknown", authorId: "unknown", tags: ["persistence", "motivation", "purpose"], themes: ["struggle", "motivation"], schools: ["motivation"] },
  { text: "Don't let the fear of the time it will take to accomplish something stand in the way of your doing it.", author: "Earl Nightingale", authorId: "earl-nightingale", tags: ["fear", "time", "action"], themes: ["struggle", "motivation"], schools: ["motivation"] },
  { text: "The pain of discipline weighs ounces, but the pain of regret weighs tons.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["discipline", "regret", "weight"], themes: ["struggle", "motivation"], schools: ["motivation"] },
  { text: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown", authorId: "unknown", tags: ["persistence", "timing", "trust"], themes: ["struggle", "motivation"], schools: ["motivation"] },

  // ULTIMATE RESILIENCE
  { text: "They tried to bury us. They didn't know we were seeds.", author: "Mexican Proverb", authorId: "mexican-proverb", tags: ["resilience", "growth", "transformation"], themes: ["struggle", "resilience"], schools: ["latin-american-wisdom"] },
  
  // Bonus Struggle Quote
  { text: "The strongest steel is forged in the hottest fire. Don't pray for an easy life; pray for the strength to endure a difficult one.", author: "Bruce Lee", authorId: "bruce-lee", tags: ["strength", "fire", "endurance"], themes: ["struggle", "bonus"], schools: ["martial-arts"] }
];

// Add unique IDs and timestamps
const formattedQuotes = struggleQuotes.map((quote, index) => ({
  ...quote,
  id: `struggle-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted struggle quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./struggle-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Struggle quotes written to struggle-quotes.json");