// Script to convert nature quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided nature quotes categorized by theme
const natureQuotes = [
  // THE GRANDEUR OF NATURE
  { text: "In every walk with nature one receives far more than he seeks.", author: "John Muir", authorId: "john-muir", tags: ["walk", "nature", "reception"], themes: ["nature", "grandeur"], schools: ["naturalism"] },
  { text: "The mountains are calling and I must go.", author: "John Muir", authorId: "john-muir", tags: ["mountains", "calling", "adventure"], themes: ["nature", "grandeur"], schools: ["naturalism"] },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder", authorId: "gary-snyder", tags: ["home", "belonging", "connection"], themes: ["nature", "grandeur"], schools: ["environmentalism"] },
  { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["understanding", "depth", "wisdom"], themes: ["nature", "grandeur"], schools: ["science"] },
  { text: "The poetry of the earth is never dead.", author: "John Keats", authorId: "john-keats", tags: ["poetry", "earth", "eternal"], themes: ["nature", "grandeur"], schools: ["poetry"] },
  { text: "Nature does not hurry, yet everything is accomplished.", author: "Lao Tzu", authorId: "lao-tzu", tags: ["patience", "accomplishment", "pace"], themes: ["nature", "grandeur"], schools: ["taoism"] },
  { text: "The earth has music for those who listen.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["music", "listening", "earth"], themes: ["nature", "grandeur"], schools: ["literature"] },

  // WISDOM FROM THE NATURAL WORLD
  { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["patience", "pace", "wisdom"], themes: ["nature", "wisdom"], schools: ["transcendentalism"] },
  { text: "Nature teaches more than she preaches.", author: "John Burroughs", authorId: "john-burroughs", tags: ["teaching", "learning", "nature"], themes: ["nature", "wisdom"], schools: ["naturalism"] },
  { text: "In nature, nothing is perfect and everything is perfect.", author: "Alice Walker", authorId: "alice-walker", tags: ["perfection", "paradox", "nature"], themes: ["nature", "wisdom"], schools: ["literature"] },
  { text: "Nature is the art of God.", author: "Dante Alighieri", authorId: "dante-alighieri", tags: ["art", "divine", "creation"], themes: ["nature", "wisdom"], schools: ["literature"] },
  { text: "Study nature, love nature, stay close to nature. It will never fail you.", author: "Frank Lloyd Wright", authorId: "frank-lloyd-wright", tags: ["study", "love", "connection"], themes: ["nature", "wisdom"], schools: ["architecture"] },
  { text: "Nature is the source of all true knowledge.", author: "Leonardo da Vinci", authorId: "leonardo-da-vinci", tags: ["knowledge", "source", "truth"], themes: ["nature", "wisdom"], schools: ["science"] },

  // FORESTS & TREES
  { text: "The creation of a thousand forests is in one acorn.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["potential", "growth", "forest"], themes: ["nature", "forests"], schools: ["transcendentalism"] },
  { text: "Trees are poems that the earth writes upon the sky.", author: "Kahlil Gibran", authorId: "kahlil-gibran", tags: ["poetry", "trees", "expression"], themes: ["nature", "forests"], schools: ["literature"] },
  { text: "A forest bird never wants a cage.", author: "Henrik Ibsen", authorId: "henrik-ibsen", tags: ["freedom", "wild", "nature"], themes: ["nature", "forests"], schools: ["literature"] },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", authorId: "chinese-proverb", tags: ["action", "time", "planting"], themes: ["nature", "forests"], schools: ["eastern-philosophy"] },
  { text: "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["reflection", "humanity", "connection"], themes: ["nature", "forests"], schools: ["peace"] },
  { text: "Between every two pines is a doorway to a new world.", author: "John Muir", authorId: "john-muir", tags: ["exploration", "possibility", "nature"], themes: ["nature", "forests"], schools: ["naturalism"] },

  // OCEANS & WATER
  { text: "The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul.", author: "Robert Wyland", authorId: "robert-wyland", tags: ["ocean", "inspiration", "joy"], themes: ["nature", "oceans"], schools: ["art"] },
  { text: "To me, the sea is like a person—like a child that I've known a long time.", author: "Bob Dylan", authorId: "bob-dylan", tags: ["sea", "connection", "personification"], themes: ["nature", "oceans"], schools: ["music"] },
  { text: "We are like islands in the sea, separate on the surface but connected in the deep.", author: "William James", authorId: "william-james", tags: ["connection", "unity", "depth"], themes: ["nature", "oceans"], schools: ["philosophy"] },
  { text: "Water is the driving force of all nature.", author: "Leonardo da Vinci", authorId: "leonardo-da-vinci", tags: ["water", "force", "nature"], themes: ["nature", "oceans"], schools: ["science"] },
  { text: "The river is such a tranquil place, a place to sit and think of romance and the beauty of nature.", author: "Don Williams", authorId: "don-williams", tags: ["river", "tranquility", "beauty"], themes: ["nature", "oceans"], schools: ["music"] },
  { text: "I could never stay long enough on the shore; the tang of the untainted, fresh, and free sea air was like a cool, quieting thought.", author: "Helen Keller", authorId: "helen-keller", tags: ["sea", "freedom", "refreshment"], themes: ["nature", "oceans"], schools: ["inspiration"] },

  // MOUNTAINS & PEAKS
  { text: "Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb.", author: "Greg Child", authorId: "greg-child", tags: ["climb", "mystery", "purpose"], themes: ["nature", "mountains"], schools: ["adventure"] },
  { text: "The higher we soar, the smaller we appear to those who cannot fly.", author: "Friedrich Nietzsche", authorId: "friedrich-nietzsche", tags: ["height", "perspective", "aspiration"], themes: ["nature", "mountains"], schools: ["philosophy"] },
  { text: "Climb the mountain not to plant your flag, but to embrace the challenge, enjoy the air and behold the view.", author: "David McCullough Jr.", authorId: "david-mccullough-jr", tags: ["challenge", "enjoyment", "perspective"], themes: ["nature", "mountains"], schools: ["history"] },
  { text: "Mountains are the cathedrals where I practice my religion.", author: "Anatoli Boukreev", authorId: "anatoli-boukreev", tags: ["mountains", "spirituality", "worship"], themes: ["nature", "mountains"], schools: ["adventure"] },
  { text: "It is not the mountain we conquer, but ourselves.", author: "Sir Edmund Hillary", authorId: "sir-edmund-hillary", tags: ["conquest", "self-mastery", "challenge"], themes: ["nature", "mountains"], schools: ["adventure"] },

  // SKIES & CELESTIAL BEAUTY
  { text: "Keep your face to the sunshine and you cannot see the shadows.", author: "Helen Keller", authorId: "helen-keller", tags: ["optimism", "positivity", "light"], themes: ["nature", "skies"], schools: ["inspiration"] },
  { text: "The sun does not shine for a few trees and flowers, but for the wide world's joy.", author: "Henry Ward Beecher", authorId: "henry-ward-beecher", tags: ["sun", "joy", "universality"], themes: ["nature", "skies"], schools: ["religion"] },
  { text: "The sky is the daily bread of the eyes.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["sky", "nourishment", "perception"], themes: ["nature", "skies"], schools: ["transcendentalism"] },
  { text: "Moonlight is sculpture.", author: "Nathaniel Hawthorne", authorId: "nathaniel-hawthorne", tags: ["moonlight", "art", "beauty"], themes: ["nature", "skies"], schools: ["literature"] },
  { text: "The stars are the land-marks of the universe.", author: "Sir John Frederick William Herschel", authorId: "sir-john-frederick-william-herschel", tags: ["stars", "navigation", "universe"], themes: ["nature", "skies"], schools: ["science"] },

  // SEASONS & CYCLES
  { text: "If we had no winter, the spring would not be so pleasant.", author: "Anne Bradstreet", authorId: "anne-bradstreet", tags: ["winter", "spring", "contrast"], themes: ["nature", "seasons"], schools: ["literature"] },
  { text: "Autumn is a second spring when every leaf is a flower.", author: "Albert Camus", authorId: "albert-camus", tags: ["autumn", "spring", "transformation"], themes: ["nature", "seasons"], schools: ["philosophy"] },
  { text: "Spring is nature's way of saying, 'Let's party!'", author: "Robin Williams", authorId: "robin-williams", tags: ["spring", "celebration", "joy"], themes: ["nature", "seasons"], schools: ["entertainment"] },
  { text: "Winter is not a season, it's a celebration.", author: "Anamika Mishra", authorId: "anamika-mishra", tags: ["winter", "celebration", "perspective"], themes: ["nature", "seasons"], schools: ["literature"] },
  { text: "Summer afternoon—summer afternoon; to me those have always been the two most beautiful words in the English language.", author: "Henry James", authorId: "henry-james", tags: ["summer", "beauty", "language"], themes: ["nature", "seasons"], schools: ["literature"] },

  // WILDLIFE & CREATURES
  { text: "The clearest way into the Universe is through a forest wilderness.", author: "John Muir", authorId: "john-muir", tags: ["wilderness", "universe", "connection"], themes: ["nature", "wildlife"], schools: ["naturalism"] },
  { text: "We can judge the heart of a man by his treatment of animals.", author: "Immanuel Kant", authorId: "immanuel-kant", tags: ["compassion", "animals", "character"], themes: ["nature", "wildlife"], schools: ["philosophy"] },
  { text: "Animals are such agreeable friends—they ask no questions; they pass no criticisms.", author: "George Eliot", authorId: "george-eliot", tags: ["animals", "friendship", "simplicity"], themes: ["nature", "wildlife"], schools: ["literature"] },
  { text: "The butterfly counts not months but moments, and has time enough.", author: "Rabindranath Tagore", authorId: "rabindranath-tagore", tags: ["butterfly", "time", "presence"], themes: ["nature", "wildlife"], schools: ["literature"] },
  { text: "Birds are a miracle because they prove to us there is a finer, simpler state of being which we may strive to attain.", author: "Doug Coupland", authorId: "doug-coupland", tags: ["birds", "miracle", "simplicity"], themes: ["nature", "wildlife"], schools: ["literature"] },

  // FLOWERS & GARDENS
  { text: "The earth laughs in flowers.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["earth", "flowers", "joy"], themes: ["nature", "flowers"], schools: ["transcendentalism"] },
  { text: "Where flowers bloom, so does hope.", author: "Lady Bird Johnson", authorId: "lady-bird-johnson", tags: ["flowers", "hope", "growth"], themes: ["nature", "flowers"], schools: ["environmentalism"] },
  { text: "A flower does not think of competing with the flower next to it. It just blooms.", author: "Zen Shin", authorId: "zen-shin", tags: ["flower", "non-competition", "being"], themes: ["nature", "flowers"], schools: ["buddhism"] },
  { text: "To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn", authorId: "audrey-hepburn", tags: ["garden", "belief", "future"], themes: ["nature", "flowers"], schools: ["cinema"] },
  { text: "The glory of gardening: hands in the dirt, head in the sun, heart with nature.", author: "Alfred Austin", authorId: "alfred-austin", tags: ["gardening", "connection", "nature"], themes: ["nature", "flowers"], schools: ["literature"] },

  // ENVIRONMENTAL WISDOM
  { text: "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.", author: "Lady Bird Johnson", authorId: "lady-bird-johnson", tags: ["environment", "community", "shared"], themes: ["nature", "environmental"], schools: ["environmentalism"] },
  { text: "We do not inherit the earth from our ancestors, we borrow it from our children.", author: "Native American Proverb", authorId: "native-american-proverb", tags: ["inheritance", "responsibility", "future"], themes: ["nature", "environmental"], schools: ["indigenous-wisdom"] },
  { text: "What is the use of a house if you haven't got a tolerable planet to put it on?", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["planet", "priority", "environment"], themes: ["nature", "environmental"], schools: ["transcendentalism"] },
  { text: "The greatest threat to our planet is the belief that someone else will save it.", author: "Robert Swan", authorId: "robert-swan", tags: ["responsibility", "action", "planet"], themes: ["nature", "environmental"], schools: ["environmentalism"] },
  { text: "When one tugs at a single thing in nature, he finds it attached to the rest of the world.", author: "John Muir", authorId: "john-muir", tags: ["interconnection", "nature", "unity"], themes: ["nature", "environmental"], schools: ["naturalism"] },

  // SIMPLICITY & MINIMALISM
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", authorId: "leonardo-da-vinci", tags: ["simplicity", "sophistication", "design"], themes: ["nature", "simplicity"], schools: ["science"] },
  { text: "The simpler we are, the more complete we become.", author: "August Rodin", authorId: "august-rodin", tags: ["simplicity", "completeness", "being"], themes: ["nature", "simplicity"], schools: ["art"] },
  { text: "Nature is pleased with simplicity.", author: "Isaac Newton", authorId: "isaac-newton", tags: ["nature", "simplicity", "preference"], themes: ["nature", "simplicity"], schools: ["science"] },
  { text: "Live in each season as it passes; breathe the air, drink the drink, taste the fruit.", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["presence", "seasons", "experience"], themes: ["nature", "simplicity"], schools: ["transcendentalism"] },
  { text: "I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, 'This is what it is to be happy.'", author: "Sylvia Plath", authorId: "sylvia-plath", tags: ["happiness", "nature", "presence"], themes: ["nature", "simplicity"], schools: ["literature"] },

  // HEALING & RESTORATION
  { text: "Nature itself is the best physician.", author: "Hippocrates", authorId: "hippocrates", tags: ["nature", "healing", "physician"], themes: ["nature", "healing"], schools: ["medicine"] },
  { text: "Time spent amongst trees is never time wasted.", author: "Anonymous", authorId: "anonymous", tags: ["trees", "time", "value"], themes: ["nature", "healing"], schools: ["motivation"] },
  { text: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.", author: "John Lubbock", authorId: "john-lubbock", tags: ["rest", "nature", "presence"], themes: ["nature", "healing"], schools: ["science"] },
  { text: "There is something infinitely healing in the repeated refrains of nature—the assurance that dawn comes after night, and spring after winter.", author: "Rachel Carson", authorId: "rachel-carson", tags: ["healing", "cycles", "assurance"], themes: ["nature", "healing"], schools: ["environmentalism"] },
  { text: "The sun shines not on us but in us.", author: "John Muir", authorId: "john-muir", tags: ["sun", "inner-light", "connection"], themes: ["nature", "healing"], schools: ["naturalism"] },

  // ADVENTURE & EXPLORATION
  { text: "The wilderness holds answers to questions man has not yet learned to ask.", author: "Nancy Newhall", authorId: "nancy-newhall", tags: ["wilderness", "answers", "discovery"], themes: ["nature", "adventure"], schools: ["photography"] },
  { text: "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.", author: "Jawaharlal Nehru", authorId: "jawaharlal-nehru", tags: ["world", "adventure", "discovery"], themes: ["nature", "adventure"], schools: ["leadership"] },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien", authorId: "jrr-tolkien", tags: ["wandering", "purpose", "journey"], themes: ["nature", "adventure"], schools: ["literature"] },
  { text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust", authorId: "marcel-proust", tags: ["discovery", "perspective", "vision"], themes: ["nature", "adventure"], schools: ["literature"] },
  { text: "Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity.", author: "John Muir", authorId: "john-muir", tags: ["mountains", "home", "wildness"], themes: ["nature", "adventure"], schools: ["naturalism"] },

  // PHILOSOPHICAL INSIGHTS
  { text: "Nature always wears the colors of the spirit.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["nature", "spirit", "expression"], themes: ["nature", "philosophy"], schools: ["transcendentalism"] },
  { text: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.", author: "Rachel Carson", authorId: "rachel-carson", tags: ["attention", "wonders", "destruction"], themes: ["nature", "philosophy"], schools: ["environmentalism"] },
  { text: "Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.", author: "Kahlil Gibran", authorId: "kahlil-gibran", tags: ["earth", "connection", "sensuality"], themes: ["nature", "philosophy"], schools: ["literature"] },
  { text: "One touch of nature makes the whole world kin.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["nature", "kinship", "unity"], themes: ["nature", "philosophy"], schools: ["literature"] },
  { text: "The goal of life is to make your heartbeat match the beat of the universe, to match your nature with Nature.", author: "Joseph Campbell", authorId: "joseph-campbell", tags: ["life", "rhythm", "unity"], themes: ["nature", "philosophy"], schools: ["mythology"] },

  // MINDFULNESS & PRESENCE
  { text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["feelings", "presence", "breathing"], themes: ["nature", "mindfulness"], schools: ["buddhism"] },
  { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["present", "joy", "attention"], themes: ["nature", "mindfulness"], schools: ["buddhism"] },
  { text: "Walk as if you are kissing the Earth with your feet.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["walking", "respect", "earth"], themes: ["nature", "mindfulness"], schools: ["buddhism"] },
  { text: "Nature does not require us to be perfect; it requires us to be present.", author: "Unknown", authorId: "unknown", tags: ["nature", "presence", "perfection"], themes: ["nature", "mindfulness"], schools: ["motivation"] },
  { text: "The little things? The little moments? They aren't little.", author: "Jon Kabat-Zinn", authorId: "jon-kabat-zinn", tags: ["moments", "presence", "significance"], themes: ["nature", "mindfulness"], schools: ["mindfulness"] },

  // BEAUTY & AWE
  { text: "Never lose an opportunity of seeing anything beautiful, for beauty is God's handwriting.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["beauty", "divine", "opportunity"], themes: ["nature", "beauty"], schools: ["transcendentalism"] },
  { text: "The world is full of magic things, patiently waiting for our senses to grow sharper.", author: "W.B. Yeats", authorId: "wb-yeats", tags: ["magic", "senses", "discovery"], themes: ["nature", "beauty"], schools: ["literature"] },
  { text: "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.", author: "Jane Austen", authorId: "jane-austen", tags: ["shade", "refreshment", "nature"], themes: ["nature", "beauty"], schools: ["literature"] },
  { text: "Everything in nature invites us constantly to be what we are.", author: "Gretel Ehrlich", authorId: "gretel-ehrlich", tags: ["nature", "authenticity", "invitation"], themes: ["nature", "beauty"], schools: ["literature"] },
  { text: "The richness I achieve comes from Nature, the source of my inspiration.", author: "Claude Monet", authorId: "claude-monet", tags: ["richness", "nature", "inspiration"], themes: ["nature", "beauty"], schools: ["art"] },

  // WEATHER & ELEMENTS
  { text: "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.", author: "John Ruskin", authorId: "john-ruskin", tags: ["weather", "perspective", "appreciation"], themes: ["nature", "weather"], schools: ["art"] },
  { text: "Some people feel the rain. Others just get wet.", author: "Bob Marley", authorId: "bob-marley", tags: ["rain", "feeling", "experience"], themes: ["nature", "weather"], schools: ["music"] },
  { text: "A lot of people like snow. I find it to be an unnecessary freezing of water.", author: "Carl Reiner", authorId: "carl-reiner", tags: ["snow", "humor", "perspective"], themes: ["nature", "weather"], schools: ["entertainment"] },
  { text: "Thunder is good, thunder is impressive; but it is lightning that does the work.", author: "Mark Twain", authorId: "mark-twain", tags: ["thunder", "lightning", "effectiveness"], themes: ["nature", "weather"], schools: ["literature"] },
  { text: "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life.", author: "John Updike", authorId: "john-updike", tags: ["rain", "grace", "life"], themes: ["nature", "weather"], schools: ["literature"] },

  // CONSERVATION & STEWARDSHIP
  { text: "What is man without the beasts? If all the beasts were gone, man would die from a great loneliness of spirit.", author: "Chief Seattle", authorId: "chief-seattle", tags: ["animals", "loneliness", "connection"], themes: ["nature", "conservation"], schools: ["indigenous-wisdom"] },
  { text: "We won't have a society if we destroy the environment.", author: "Margaret Mead", authorId: "margaret-mead", tags: ["society", "environment", "consequence"], themes: ["nature", "conservation"], schools: ["anthropology"] },
  { text: "The good man is the friend of all living things.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["goodness", "animals", "friendship"], themes: ["nature", "conservation"], schools: ["peace"] },
  { text: "We are living on this planet as if we had another one to go to.", author: "Terri Swearingen", authorId: "terri-swearingen", tags: ["planet", "responsibility", "consequence"], themes: ["nature", "conservation"], schools: ["environmentalism"] },
  { text: "The environment is where we all meet; where all have a mutual interest; it is the one thing all of us share.", author: "Lady Bird Johnson", authorId: "lady-bird-johnson", tags: ["environment", "community", "shared"], themes: ["nature", "conservation"], schools: ["environmentalism"] },

  // INTERCONNECTION
  { text: "When we try to pick out anything by itself, we find it hitched to everything else in the Universe.", author: "John Muir", authorId: "john-muir", tags: ["interconnection", "universe", "unity"], themes: ["nature", "interconnection"], schools: ["naturalism"] },
  { text: "All the flowers of all the tomorrows are in the seeds of today.", author: "Indian Proverb", authorId: "indian-proverb", tags: ["future", "potential", "seeds"], themes: ["nature", "interconnection"], schools: ["indigenous-wisdom"] },
  { text: "The tree which moves some to tears of joy is in the eyes of others only a green thing that stands in the way.", author: "William Blake", authorId: "william-blake", tags: ["perspective", "tree", "beauty"], themes: ["nature", "interconnection"], schools: ["literature"] },
  { text: "One cannot be deeply responsive to the world without being saddened very often.", author: "Erich Fromm", authorId: "erich-fromm", tags: ["responsiveness", "world", "sadness"], themes: ["nature", "interconnection"], schools: ["psychology"] },

  // ULTIMATE TRUTHS
  { text: "Nature's beauty is a gift that cultivates appreciation and gratitude.", author: "Louie Schwartzberg", authorId: "louie-schwartzberg", tags: ["beauty", "appreciation", "gratitude"], themes: ["nature", "truths"], schools: ["film"] },
  
  // Bonus Nature Quote
  { text: "Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts.", author: "Rachel Carson", authorId: "rachel-carson", tags: ["beauty", "strength", "endurance"], themes: ["nature", "bonus"], schools: ["environmentalism"] }
];

// Add unique IDs and timestamps
const formattedQuotes = natureQuotes.map((quote, index) => ({
  ...quote,
  id: `nature-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted nature quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./nature-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Nature quotes written to nature-quotes.json");