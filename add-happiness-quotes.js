// Script to convert happiness quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided happiness quotes categorized by theme
const happinessQuotes = [
  // THE NATURE OF HAPPINESS
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama", authorId: "dalai-lama", tags: ["ready-made", "actions", "creation"], themes: ["happiness", "nature"], schools: ["buddhism"] },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", authorId: "dalai-lama", tags: ["purpose", "lives", "happy"], themes: ["happiness", "nature"], schools: ["buddhism"] },
  { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["think", "say", "harmony"], themes: ["happiness", "nature"], schools: ["peace"] },
  { text: "Happiness is not a goal... it's a by-product of a life well lived.", author: "Eleanor Roosevelt", authorId: "eleanor-roosevelt", tags: ["goal", "by-product", "life"], themes: ["happiness", "nature"], schools: ["politics"] },
  { text: "There is no path to happiness: happiness is the path.", author: "Buddha", authorId: "buddha", tags: ["path", "happiness", "journey"], themes: ["happiness", "nature"], schools: ["buddhism"] },
  { text: "Happiness is not something you postpone for the future; it is something you design for the present.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["postpone", "future", "present"], themes: ["happiness", "nature"], schools: ["motivational"] },
  { text: "The secret of happiness is not in doing what one likes, but in liking what one does.", author: "James M. Barrie", authorId: "james-barrie", tags: ["secret", "liking", "doing"], themes: ["happiness", "nature"], schools: ["literature"] },

  // SIMPLE PLEASURES
  { text: "Enjoy the little things, for one day you may look back and realize they were the big things.", author: "Robert Brault", authorId: "robert-brault", tags: ["little", "things", "big"], themes: ["happiness", "simple"], schools: ["literature"] },
  { text: "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.", author: "Nathaniel Hawthorne", authorId: "nathaniel-hawthorne", tags: ["butterfly", "pursued", "grasp"], themes: ["happiness", "simple"], schools: ["literature"] },
  { text: "The best way to cheer yourself is to try to cheer someone else up.", author: "Mark Twain", authorId: "mark-twain", tags: ["cheer", "someone", "else"], themes: ["happiness", "simple"], schools: ["literature"] },
  { text: "We act as though comfort and luxury were the chief requirements of life, when all that we need to make us really happy is something to be enthusiastic about.", author: "Charles Kingsley", authorId: "charles-kingsley", tags: ["comfort", "luxury", "enthusiastic"], themes: ["happiness", "simple"], schools: ["literature"] },
  { text: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.", author: "Franklin D. Roosevelt", authorId: "franklin-roosevelt", tags: ["money", "achievement", "creative"], themes: ["happiness", "simple"], schools: ["politics"] },

  // MINDSET & ATTITUDE
  { text: "Happiness depends upon ourselves.", author: "Aristotle", authorId: "aristotle", tags: ["depends", "ourselves", "self-reliance"], themes: ["happiness", "mindset"], schools: ["philosophy"] },
  { text: "The greatest part of our happiness depends on our dispositions, not our circumstances.", author: "Martha Washington", authorId: "martha-washington", tags: ["greatest", "dispositions", "circumstances"], themes: ["happiness", "mindset"], schools: ["history"] },
  { text: "If you want to be happy, be.", author: "Leo Tolstoy", authorId: "leo-tolstoy", tags: ["want", "happy", "be"], themes: ["happiness", "mindset"], schools: ["literature"] },
  { text: "Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is the same.", author: "Francesca Reigler", authorId: "francesca-reigler", tags: ["attitude", "miserable", "strong"], themes: ["happiness", "mindset"], schools: ["motivational"] },
  { text: "Your happiness depends on the quality of your thoughts.", author: "Marcus Aurelius", authorId: "marcus-aurelius", tags: ["depends", "quality", "thoughts"], themes: ["happiness", "mindset"], schools: ["philosophy"] },

  // GRATITUDE & CONTENTMENT
  { text: "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.", author: "Oprah Winfrey", authorId: "oprah-winfrey", tags: ["thankful", "have", "enough"], themes: ["happiness", "gratitude"], schools: ["media"] },
  { text: "Happiness is not having what you want. It is wanting what you have.", author: "Rabbi Hyman Schachtel", authorId: "rabbi-hyman-schachtel", tags: ["having", "want", "have"], themes: ["happiness", "gratitude"], schools: ["religion"] },
  { text: "The root of joy is gratefulness.", author: "David Steindl-Rast", authorId: "david-steindl-rast", tags: ["root", "joy", "gratefulness"], themes: ["happiness", "gratitude"], schools: ["religion"] },
  { text: "Contentment is natural wealth, luxury is artificial poverty.", author: "Socrates", authorId: "socrates", tags: ["contentment", "wealth", "luxury"], themes: ["happiness", "gratitude"], schools: ["philosophy"] },
  { text: "Gratitude turns what we have into enough.", author: "Aesop", authorId: "aesop", tags: ["gratitude", "have", "enough"], themes: ["happiness", "gratitude"], schools: ["literature"] },

  // LOVE & CONNECTION
  { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn", authorId: "audrey-hepburn", tags: ["important", "enjoy", "life"], themes: ["happiness", "love"], schools: ["cinema"] },
  { text: "Happiness is only real when shared.", author: "Jon Krakauer", authorId: "jon-krakauer", tags: ["real", "shared", "connection"], themes: ["happiness", "love"], schools: ["literature"] },
  { text: "Love is that condition in which the happiness of another person is essential to your own.", author: "Robert A. Heinlein", authorId: "robert-heinlein", tags: ["love", "condition", "essential"], themes: ["happiness", "love"], schools: ["literature"] },
  { text: "The greatest happiness you can have is knowing that you do not necessarily require happiness.", author: "William Saroyan", authorId: "william-saroyan", tags: ["greatest", "knowing", "require"], themes: ["happiness", "love"], schools: ["literature"] },
  { text: "To be kind to all, to like many and love a few, to be needed and wanted by those we love, is certainly the nearest we can come to happiness.", author: "Mary Stuart", authorId: "mary-stuart", tags: ["kind", "like", "needed"], themes: ["happiness", "love"], schools: ["history"] },

  // PURPOSE & MEANING
  { text: "Happiness is not the absence of problems, it's the ability to deal with them.", author: "Steve Maraboli", authorId: "steve-maraboli", tags: ["absence", "problems", "ability"], themes: ["happiness", "purpose"], schools: ["motivational"] },
  { text: "The meaning of life is to find your gift. The purpose of life is to give it away.", author: "Pablo Picasso", authorId: "pablo-picasso", tags: ["meaning", "gift", "purpose"], themes: ["happiness", "purpose"], schools: ["art"] },
  { text: "True happiness arises, in the first place, from the enjoyment of oneself.", author: "Joseph Addison", authorId: "joseph-addison", tags: ["true", "arises", "enjoyment"], themes: ["happiness", "purpose"], schools: ["literature"] },
  { text: "Happiness is not a matter of intensity but of balance, order, rhythm and harmony.", author: "Thomas Merton", authorId: "thomas-merton", tags: ["intensity", "balance", "harmony"], themes: ["happiness", "purpose"], schools: ["religion"] },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["purpose", "useful", "compassionate"], themes: ["happiness", "purpose"], schools: ["transcendentalism"] },

  // LIVING IN THE MOMENT
  { text: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.", author: "Epictetus", authorId: "epictetus", tags: ["way", "cease", "worrying"], themes: ["happiness", "moment"], schools: ["philosophy"] },
  { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["present", "joy", "attentive"], themes: ["happiness", "moment"], schools: ["buddhism"] },
  { text: "Happiness is not a station you arrive at, but a manner of traveling.", author: "Margaret Lee Runbeck", authorId: "margaret-lee-runbeck", tags: ["station", "arrive", "traveling"], themes: ["happiness", "moment"], schools: ["literature"] },
  { text: "Walk as if you are kissing the Earth with your feet.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["walk", "kissing", "earth"], themes: ["happiness", "moment"], schools: ["buddhism"] },
  { text: "Realize deeply that the present moment is all you ever have.", author: "Eckhart Tolle", authorId: "eckhart-tolle", tags: ["realize", "present", "have"], themes: ["happiness", "moment"], schools: ["spirituality"] },

  // OVERCOMING & GROWTH
  { text: "Happiness can exist only in acceptance.", author: "George Orwell", authorId: "george-orwell", tags: ["exist", "acceptance", "only"], themes: ["happiness", "overcoming"], schools: ["literature"] },
  { text: "The pain you feel today is the strength you feel tomorrow.", author: "Unknown", authorId: "unknown", tags: ["pain", "strength", "tomorrow"], themes: ["happiness", "overcoming"], schools: ["motivational"] },
  { text: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["joy", "source", "smile"], themes: ["happiness", "overcoming"], schools: ["buddhism"] },
  { text: "Happiness is not the absence of suffering; it is the ability to endure it.", author: "Pierre Teilhard de Chardin", authorId: "pierre-teilhard-de-chardin", tags: ["absence", "suffering", "endure"], themes: ["happiness", "overcoming"], schools: ["religion"] },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["behind", "before", "within"], themes: ["happiness", "overcoming"], schools: ["transcendentalism"] },

  // WISDOM & PERSPECTIVE
  { text: "Happiness is a direction, not a place.", author: "Sydney J. Harris", authorId: "sydney-harris", tags: ["direction", "place", "journey"], themes: ["happiness", "wisdom"], schools: ["journalism"] },
  { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", authorId: "marcus-aurelius", tags: ["happiness", "depends", "thoughts"], themes: ["happiness", "wisdom"], schools: ["philosophy"] },
  { text: "If you look to others for fulfillment, you will never be fulfilled. If your happiness depends on money, you will never be happy with yourself.", author: "Lao Tzu", authorId: "lao-tzu", tags: ["others", "fulfillment", "money"], themes: ["happiness", "wisdom"], schools: ["taoism"] },
  { text: "Happiness is a perfume you cannot pour on others without getting some on yourself.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["perfume", "pour", "others"], themes: ["happiness", "wisdom"], schools: ["transcendentalism"] },
  { text: "The foolish man seeks happiness in the distance; the wise grows it under his feet.", author: "James Oppenheim", authorId: "james-oppenheim", tags: ["foolish", "distance", "wise"], themes: ["happiness", "wisdom"], schools: ["literature"] },

  // ACTION & HABITS
  { text: "Action may not always bring happiness, but there is no happiness without action.", author: "Benjamin Disraeli", authorId: "benjamin-disraeli", tags: ["action", "always", "without"], themes: ["happiness", "action"], schools: ["politics"] },
  { text: "Happiness is a habit—cultivate it.", author: "Elbert Hubbard", authorId: "elbert-hubbard", tags: ["habit", "cultivate", "practice"], themes: ["happiness", "action"], schools: ["literature"] },
  { text: "The secret of being happy is accepting where you are in life and making the most out of every day.", author: "Unknown", authorId: "unknown", tags: ["secret", "accepting", "making"], themes: ["happiness", "action"], schools: ["motivational"] },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer", authorId: "albert-schweitzer", tags: ["success", "key", "love"], themes: ["happiness", "action"], schools: ["philosophy"] },
  { text: "Happiness is not something you experience; it's something you remember.", author: "Oscar Levant", authorId: "oscar-levant", tags: ["experience", "remember", "memory"], themes: ["happiness", "action"], schools: ["entertainment"] },

  // INNER PEACE
  { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Wayne Dyer", authorId: "wayne-dyer", tags: ["peace", "retraining", "process"], themes: ["happiness", "peace"], schools: ["self-help"] },
  { text: "Happiness is inner peace.", author: "Remez Sasson", authorId: "remez-sasson", tags: ["happiness", "inner", "peace"], themes: ["happiness", "peace"], schools: ["motivational"] },
  { text: "The life of inner peace, being harmonious and without stress, is the easiest type of existence.", author: "Norman Vincent Peale", authorId: "norman-vincent-peale", tags: ["life", "harmonious", "stress"], themes: ["happiness", "peace"], schools: ["religion"] },
  { text: "Nobody can bring you peace but yourself.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["nobody", "bring", "yourself"], themes: ["happiness", "peace"], schools: ["transcendentalism"] },
  { text: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam", authorId: "omar-khayyam", tags: ["happy", "moment", "life"], themes: ["happiness", "peace"], schools: ["literature"] },

  // MODERN HAPPINESS
  { text: "Happiness is not having a lot. Happiness is giving a lot.", author: "Unknown", authorId: "unknown", tags: ["having", "giving", "lot"], themes: ["happiness", "modern"], schools: ["motivational"] },
  { text: "The greatest degree of inner tranquility comes from the development of love and compassion.", author: "Dalai Lama", authorId: "dalai-lama", tags: ["greatest", "tranquility", "compassion"], themes: ["happiness", "modern"], schools: ["buddhism"] },
  { text: "Happiness is not about getting what you want all the time. It's about loving what you have and being grateful for it.", author: "Unknown", authorId: "unknown", tags: ["getting", "loving", "grateful"], themes: ["happiness", "modern"], schools: ["motivational"] },
  { text: "Happiness is the new rich. Inner peace is the new success. Health is the new wealth. Kindness is the new cool.", author: "Syed Balkhi", authorId: "syed-balkhi", tags: ["rich", "success", "wealth"], themes: ["happiness", "modern"], schools: ["technology"] },
  { text: "Stop waiting for Friday, for summer, for someone to fall in love with you, for life. Happiness is achieved when you stop waiting for it and make the most of the moment you are in now.", author: "Unknown", authorId: "unknown", tags: ["waiting", "achieved", "moment"], themes: ["happiness", "modern"], schools: ["motivational"] },

  // SCIENTIFIC PERSPECTIVES
  { text: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.", author: "Aristotle", authorId: "aristotle", tags: ["meaning", "purpose", "existence"], themes: ["happiness", "scientific"], schools: ["philosophy"] },
  { text: "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.", author: "Alfred Lord Tennyson", authorId: "alfred-tennyson", tags: ["man", "absence", "mastery"], themes: ["happiness", "scientific"], schools: ["literature"] },
  { text: "Happiness is not something you find at the end of the road. It is the road.", author: "Unknown", authorId: "unknown", tags: ["find", "end", "road"], themes: ["happiness", "scientific"], schools: ["motivational"] },
  { text: "The key to happiness is having dreams. The key to success is making dreams come true.", author: "James Allen", authorId: "james-allen", tags: ["key", "dreams", "success"], themes: ["happiness", "scientific"], schools: ["self-help"] },

  // SPIRITUAL HAPPINESS
  { text: "Joy is the simplest form of gratitude.", author: "Karl Barth", authorId: "karl-barth", tags: ["joy", "simplest", "gratitude"], themes: ["happiness", "spiritual"], schools: ["religion"] },
  { text: "Happiness is a state of mind. It's just according to the way you look at things.", author: "Walt Disney", authorId: "walt-disney", tags: ["state", "mind", "look"], themes: ["happiness", "spiritual"], schools: ["entertainment"] },
  { text: "The supreme happiness of life is the conviction that we are loved.", author: "Victor Hugo", authorId: "victor-hugo", tags: ["supreme", "conviction", "loved"], themes: ["happiness", "spiritual"], schools: ["literature"] },
  { text: "Happiness is a choice that requires effort at times.", author: "Aeschylus", authorId: "aeschylus", tags: ["choice", "requires", "effort"], themes: ["happiness", "spiritual"], schools: ["literature"] },

  // PRACTICAL HAPPINESS
  { text: "Happiness is not doing what you like, but liking what you do.", author: "Unknown", authorId: "unknown", tags: ["doing", "liking", "like"], themes: ["happiness", "practical"], schools: ["motivational"] },
  { text: "Three grand essentials to happiness in this life are something to do, something to love, and something to hope for.", author: "Joseph Addison", authorId: "joseph-addison", tags: ["essentials", "do", "love"], themes: ["happiness", "practical"], schools: ["literature"] },
  { text: "Happiness is not a possession to be prized, it is a quality of thought, a state of mind.", author: "Daphne du Maurier", authorId: "daphne-du-maurier", tags: ["possession", "prized", "quality"], themes: ["happiness", "practical"], schools: ["literature"] },
  { text: "The art of being happy lies in the power of extracting happiness from common things.", author: "Henry Ward Beecher", authorId: "henry-ward-beecher", tags: ["art", "extracting", "common"], themes: ["happiness", "practical"], schools: ["religion"] },
  { text: "Happiness is a small and simple thing. You can find it in a cup of coffee or a beautiful sunset.", author: "Unknown", authorId: "unknown", tags: ["small", "simple", "coffee"], themes: ["happiness", "practical"], schools: ["motivational"] },

  // UNIVERSAL TRUTHS
  { text: "Happiness is a journey, not a destination.", author: "Ben Sweetland", authorId: "ben-sweetland", tags: ["journey", "destination", "travel"], themes: ["happiness", "universal"], schools: ["motivational"] },
  { text: "The sun is new each day.", author: "Heraclitus", authorId: "heraclitus", tags: ["sun", "new", "day"], themes: ["happiness", "universal"], schools: ["philosophy"] },
  { text: "Happiness is not having to set the alarm clock for the next day.", author: "Unknown", authorId: "unknown", tags: ["having", "alarm", "clock"], themes: ["happiness", "universal"], schools: ["motivational"] },
  { text: "Happiness is when your life fulfills your needs.", author: "Unknown", authorId: "unknown", tags: ["life", "fulfills", "needs"], themes: ["happiness", "universal"], schools: ["motivational"] },
  { text: "The happiest people don't have the best of everything, they make the best of everything.", author: "Unknown", authorId: "unknown", tags: ["happiest", "best", "everything"], themes: ["happiness", "universal"], schools: ["motivational"] },

  // CREATIVE HAPPINESS
  { text: "Happiness lies in the joy of achievement and the thrill of creative effort.", author: "Franklin D. Roosevelt", authorId: "franklin-roosevelt", tags: ["lies", "achievement", "creative"], themes: ["happiness", "creative"], schools: ["politics"] },
  { text: "The creation of something new is not accomplished by the intellect but by the play instinct.", author: "Carl Jung", authorId: "carl-jung", tags: ["creation", "new", "play"], themes: ["happiness", "creative"], schools: ["psychology"] },
  { text: "Every artist dips his brush in his own soul, and paints his own nature into his pictures.", author: "Henry Ward Beecher", authorId: "henry-ward-beecher", tags: ["artist", "brush", "soul"], themes: ["happiness", "creative"], schools: ["religion"] },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["creativity", "intelligence", "fun"], themes: ["happiness", "creative"], schools: ["science"] },
  { text: "The world is but a canvas to the imagination.", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["world", "canvas", "imagination"], themes: ["happiness", "creative"], schools: ["transcendentalism"] },

  // RELATIONSHIP HAPPINESS
  { text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.", author: "Victor Hugo", authorId: "victor-hugo", tags: ["greatest", "conviction", "loved"], themes: ["happiness", "relationship"], schools: ["literature"] },
  { text: "A happy family is but an earlier heaven.", author: "George Bernard Shaw", authorId: "george-bernard-shaw", tags: ["family", "heaven", "happy"], themes: ["happiness", "relationship"], schools: ["literature"] },
  { text: "Friendship improves happiness and abates misery, by the doubling of our joy and the dividing of our grief.", author: "Marcus Tullius Cicero", authorId: "marcus-cicero", tags: ["friendship", "improves", "misery"], themes: ["happiness", "relationship"], schools: ["philosophy"] },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott", authorId: "david-viscott", tags: ["love", "feel", "sun"], themes: ["happiness", "relationship"], schools: ["psychology"] },
  { text: "The most important things in life are the connections you make with others.", author: "Tom Ford", authorId: "tom-ford", tags: ["important", "connections", "others"], themes: ["happiness", "relationship"], schools: ["fashion"] },

  // DAILY HAPPINESS
  { text: "Happiness is not something you put off for the future; it is something you design for the present.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["put", "future", "design"], themes: ["happiness", "daily"], schools: ["motivational"] },
  { text: "Today, give a stranger one of your smiles. It might be the only sunshine he sees all day.", author: "H. Jackson Brown Jr.", authorId: "h-jackson-brown", tags: ["today", "stranger", "smiles"], themes: ["happiness", "daily"], schools: ["literature"] },
  { text: "Write it on your heart that every day is the best day in the year.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["write", "heart", "best"], themes: ["happiness", "daily"], schools: ["transcendentalism"] },
  { text: "Each morning we are born again. What we do today is what matters most.", author: "Buddha", authorId: "buddha", tags: ["morning", "born", "today"], themes: ["happiness", "daily"], schools: ["buddhism"] },
  { text: "Morning is an important time of day, because how you spend your morning can often tell you what kind of day you are going to have.", author: "Lemony Snicket", authorId: "lemony-snicket", tags: ["morning", "important", "spend"], themes: ["happiness", "daily"], schools: ["literature"] },

  // ULTIMATE WISDOM
  { text: "Happiness is not a state to arrive at, but a manner of traveling.", author: "Margaret Lee Runbeck", authorId: "margaret-lee-runbeck", tags: ["state", "arrive", "traveling"], themes: ["happiness", "wisdom"], schools: ["literature"] },
  { text: "The secret of happiness is freedom, the secret of freedom is courage.", author: "Carrie Jones", authorId: "carrie-jones", tags: ["secret", "freedom", "courage"], themes: ["happiness", "wisdom"], schools: ["literature"] },
  { text: "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you.", author: "Nathaniel Hawthorne", authorId: "nathaniel-hawthorne", tags: ["butterfly", "pursued", "grasp"], themes: ["happiness", "wisdom"], schools: ["literature"] },
  { text: "Happiness is not having what you want. It is appreciating what you have.", author: "Unknown", authorId: "unknown", tags: ["having", "want", "appreciating"], themes: ["happiness", "wisdom"], schools: ["motivational"] },
  { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", authorId: "marcus-aurelius", tags: ["happiness", "depends", "thoughts"], themes: ["happiness", "wisdom"], schools: ["philosophy"] },
  
  // Bonus Happiness Quote
  { text: "Happiness is not about getting what you want all the time. It's about loving what you have and being grateful for it.", author: "Unknown", authorId: "unknown", tags: ["getting", "loving", "grateful"], themes: ["happiness", "bonus"], schools: ["motivational"] }
];

// Add unique IDs and timestamps
const formattedQuotes = happinessQuotes.map((quote, index) => ({
  ...quote,
  id: `happiness-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted happiness quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./happiness-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Happiness quotes written to happiness-quotes.json");