// Script to convert friendship quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided friendship quotes categorized by theme
const friendshipQuotes = [
  // THE ESSENCE OF FRIENDSHIP
  { text: "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["knows", "understands", "accepts"], themes: ["friendship", "essence"], schools: ["literature"] },
  { text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", author: "C.S. Lewis", authorId: "cs-lewis", tags: ["born", "moment", "thought"], themes: ["friendship", "essence"], schools: ["literature"] },
  { text: "True friendship comes when the silence between two people is comfortable.", author: "David Tyson", authorId: "david-tyson", tags: ["true", "silence", "comfortable"], themes: ["friendship", "essence"], schools: ["motivational"] },
  { text: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson", authorId: "woodrow-wilson", tags: ["cement", "hold", "world"], themes: ["friendship", "essence"], schools: ["politics"] },
  { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell", authorId: "walter-winchell", tags: ["real", "walks", "world"], themes: ["friendship", "essence"], schools: ["journalism"] },
  { text: "Friendship is the inexpressible comfort of feeling safe with a person, having neither to weigh thoughts nor measure words.", author: "George Eliot", authorId: "george-eliot", tags: ["comfort", "safe", "weigh"], themes: ["friendship", "essence"], schools: ["literature"] },
  { text: "The language of friendship is not words but meanings.", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["language", "words", "meanings"], themes: ["friendship", "essence"], schools: ["transcendentalism"] },

  // THE VALUE OF FRIENDSHIP
  { text: "Life is partly what we make it, and partly what it is made by the friends we choose.", author: "Tennessee Williams", authorId: "tennessee-williams", tags: ["life", "partly", "choose"], themes: ["friendship", "value"], schools: ["literature"] },
  { text: "A single rose can be my garden... a single friend, my world.", author: "Leo Buscaglia", authorId: "leo-buscaglia", tags: ["single", "rose", "world"], themes: ["friendship", "value"], schools: ["motivational"] },
  { text: "There is nothing on this earth more to be prized than true friendship.", author: "Thomas Aquinas", authorId: "thomas-aquinas", tags: ["nothing", "prized", "true"], themes: ["friendship", "value"], schools: ["philosophy"] },
  { text: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn", authorId: "john-evelyn", tags: ["golden", "thread", "heart"], themes: ["friendship", "value"], schools: ["literature"] },
  { text: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["only", "way", "be"], themes: ["friendship", "value"], schools: ["transcendentalism"] },
  { text: "Friendship doubles our joy and divides our grief.", author: "Swedish Proverb", authorId: "swedish-proverb", tags: ["doubles", "joy", "divides"], themes: ["friendship", "value"], schools: ["folklore"] },

  // TRUE FRIENDSHIP
  { text: "A true friend is someone who sees the pain in your eyes while everyone else believes the smile on your face.", author: "Unknown", authorId: "unknown", tags: ["true", "pain", "smile"], themes: ["friendship", "true"], schools: ["motivational"] },
  { text: "True friendship isn't about being inseparable, it's about being separated and nothing changes.", author: "Unknown", authorId: "unknown", tags: ["true", "inseparable", "separated"], themes: ["friendship", "true"], schools: ["motivational"] },
  { text: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison", authorId: "jim-morrison", tags: ["friend", "freedom", "yourself"], themes: ["friendship", "true"], schools: ["music"] },
  { text: "True friends are like diamonds—bright, beautiful, valuable, and always in style.", author: "Nicole Richie", authorId: "nicole-richie", tags: ["true", "diamonds", "valuable"], themes: ["friendship", "true"], schools: ["entertainment"] },
  { text: "The most beautiful discovery true friends make is that they can grow separately without growing apart.", author: "Elisabeth Foley", authorId: "elisabeth-foley", tags: ["beautiful", "discovery", "grow"], themes: ["friendship", "true"], schools: ["motivational"] },

  // FRIENDSHIP THROUGH DIFFICULT TIMES
  { text: "Friendship is the sheltering tree in all kinds of weather.", author: "Samuel Taylor Coleridge", authorId: "samuel-coleridge", tags: ["sheltering", "tree", "weather"], themes: ["friendship", "difficult"], schools: ["literature"] },
  { text: "In prosperity our friends know us; in adversity we know our friends.", author: "John Churton Collins", authorId: "john-churton-collins", tags: ["prosperity", "adversity", "know"], themes: ["friendship", "difficult"], schools: ["literature"] },
  { text: "A friend is one who overlooks your broken fence and admires the flowers in your garden.", author: "Unknown", authorId: "unknown", tags: ["overlooks", "broken", "flowers"], themes: ["friendship", "difficult"], schools: ["motivational"] },
  { text: "The friend who can be silent with us in a moment of despair or confusion, who can stay with us in an hour of grief and bereavement, who can tolerate not knowing... not healing, not curing... that is a friend who cares.", author: "Henri Nouwen", authorId: "henri-nouwen", tags: ["silent", "despair", "grief"], themes: ["friendship", "difficult"], schools: ["religion"] },
  { text: "Friends show their love in times of trouble, not in happiness.", author: "Euripides", authorId: "euripides", tags: ["show", "love", "trouble"], themes: ["friendship", "difficult"], schools: ["literature"] },

  // THE BEAUTY OF FRIENDSHIP
  { text: "Friendship is the wine of life.", author: "Edward Young", authorId: "edward-young", tags: ["wine", "life", "friendship"], themes: ["friendship", "beauty"], schools: ["literature"] },
  { text: "A garden of friendship is a place of peace, love, and beauty.", author: "Unknown", authorId: "unknown", tags: ["garden", "peace", "love"], themes: ["friendship", "beauty"], schools: ["motivational"] },
  { text: "Friends are the flowers in the garden of life.", author: "Unknown", authorId: "unknown", tags: ["flowers", "garden", "life"], themes: ["friendship", "beauty"], schools: ["motivational"] },
  { text: "Friendship is the shadow of the evening, which strengthens with the setting sun of life.", author: "Jean de La Fontaine", authorId: "jean-de-la-fontaine", tags: ["shadow", "evening", "setting"], themes: ["friendship", "beauty"], schools: ["literature"] },
  { text: "The best kind of friendship is like a fine wine—it only gets better with age.", author: "Unknown", authorId: "unknown", tags: ["best", "wine", "age"], themes: ["friendship", "beauty"], schools: ["motivational"] },

  // FRIENDSHIP AND LOVE
  { text: "I would rather walk with a friend in the dark, than alone in the light.", author: "Helen Keller", authorId: "helen-keller", tags: ["rather", "walk", "dark"], themes: ["friendship", "love"], schools: ["inspiration"] },
  { text: "A friend is what the heart needs all the time.", author: "Henry Van Dyke", authorId: "henry-van-dyke", tags: ["heart", "needs", "time"], themes: ["friendship", "love"], schools: ["literature"] },
  { text: "Love is friendship that has caught fire.", author: "Ann Landers", authorId: "ann-landers", tags: ["love", "friendship", "fire"], themes: ["friendship", "love"], schools: ["journalism"] },
  { text: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", author: "Nicholas Sparks", authorId: "nicholas-sparks", tags: ["best", "love", "soul"], themes: ["friendship", "love"], schools: ["literature"] },
  { text: "Friendship is love without his wings.", author: "Lord Byron", authorId: "lord-byron", tags: ["friendship", "love", "wings"], themes: ["friendship", "love"], schools: ["literature"] },

  // FRIENDSHIP AND TRUST
  { text: "Trust is the glue of life. It's the most essential ingredient in effective communication. It's the foundational principle that holds all relationships.", author: "Stephen Covey", authorId: "stephen-covey", tags: ["trust", "glue", "essential"], themes: ["friendship", "trust"], schools: ["self-help"] },
  { text: "A loyal friend laughs at your jokes when they're not so good, and sympathizes with your problems when they're not so bad.", author: "Arnold H. Glasgow", authorId: "arnold-glasgow", tags: ["loyal", "laughs", "sympathizes"], themes: ["friendship", "trust"], schools: ["motivational"] },
  { text: "The best time to make friends is before you need them.", author: "Ethel Barrymore", authorId: "ethel-barrymore", tags: ["best", "time", "need"], themes: ["friendship", "trust"], schools: ["entertainment"] },
  { text: "True friendship is a plant of slow growth, and must undergo and withstand the shocks of adversity before it is entitled to the appellation.", author: "George Washington", authorId: "george-washington", tags: ["true", "plant", "growth"], themes: ["friendship", "trust"], schools: ["history"] },

  // FRIENDSHIP AND GROWTH
  { text: "Surround yourself with only people who are going to lift you higher.", author: "Oprah Winfrey", authorId: "oprah-winfrey", tags: ["surround", "lift", "higher"], themes: ["friendship", "growth"], schools: ["media"] },
  { text: "Good friends are like stars. You don't always see them, but you know they're always there.", author: "Unknown", authorId: "unknown", tags: ["good", "stars", "always"], themes: ["friendship", "growth"], schools: ["motivational"] },
  { text: "Friends are those rare people who ask how we are and then wait to hear the answer.", author: "Ed Cunningham", authorId: "ed-cunningham", tags: ["rare", "ask", "wait"], themes: ["friendship", "growth"], schools: ["sports"] },
  { text: "A true friend never gets in your way unless you happen to be going down.", author: "Arnold H. Glasgow", authorId: "arnold-glasgow", tags: ["true", "gets", "way"], themes: ["friendship", "growth"], schools: ["motivational"] },
  { text: "The most I can do for my friend is simply to be his friend.", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["most", "can", "simply"], themes: ["friendship", "growth"], schools: ["transcendentalism"] },

  // FRIENDSHIP QUIRKS
  { text: "Friends buy you food. Best friends eat your food.", author: "Unknown", authorId: "unknown", tags: ["buy", "food", "eat"], themes: ["friendship", "quirks"], schools: ["humor"] },
  { text: "A good friend will help you move. A true friend will help you move a body.", author: "Stephen King", authorId: "stephen-king", tags: ["good", "help", "move"], themes: ["friendship", "quirks"], schools: ["literature"] },
  { text: "We'll be friends until we are old and senile. Then we'll be new friends.", author: "Unknown", authorId: "unknown", tags: ["friends", "old", "senile"], themes: ["friendship", "quirks"], schools: ["humor"] },
  { text: "Best friends: the ones you can only stay mad at for so long because you have important stuff to tell them.", author: "Unknown", authorId: "unknown", tags: ["best", "mad", "important"], themes: ["friendship", "quirks"], schools: ["humor"] },
  { text: "Friends are the siblings God never gave us.", author: "Mencius", authorId: "mencius", tags: ["siblings", "god", "gave"], themes: ["friendship", "quirks"], schools: ["philosophy"] },

  // FRIENDSHIP AND DISTANCE
  { text: "Distance means so little when someone means so much.", author: "Unknown", authorId: "unknown", tags: ["distance", "little", "much"], themes: ["friendship", "distance"], schools: ["motivational"] },
  { text: "True friends are never apart, maybe in distance but never in heart.", author: "Helen Keller", authorId: "helen-keller", tags: ["true", "apart", "heart"], themes: ["friendship", "distance"], schools: ["inspiration"] },
  { text: "The most beautiful discovery true friends make is that they can grow separately without growing apart.", author: "Elisabeth Foley", authorId: "elisabeth-foley", tags: ["beautiful", "discovery", "grow"], themes: ["friendship", "distance"], schools: ["motivational"] },
  { text: "Miles cannot separate true friends.", author: "Unknown", authorId: "unknown", tags: ["miles", "cannot", "separate"], themes: ["friendship", "distance"], schools: ["motivational"] },
  { text: "Friendship isn't about who you've known the longest. It's about who walked into your life, said 'I'm here for you,' and proved it.", author: "Unknown", authorId: "unknown", tags: ["longest", "walked", "proved"], themes: ["friendship", "distance"], schools: ["motivational"] },

  // FRIENDSHIP WISDOM
  { text: "One loyal friend is worth ten thousand relatives.", author: "Euripides", authorId: "euripides", tags: ["loyal", "worth", "relatives"], themes: ["friendship", "wisdom"], schools: ["literature"] },
  { text: "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.", author: "Unknown", authorId: "unknown", tags: ["understands", "believes", "accepts"], themes: ["friendship", "wisdom"], schools: ["motivational"] },
  { text: "The greatest gift of life is friendship, and I have received it.", author: "Hubert H. Humphrey", authorId: "hubert-humphrey", tags: ["greatest", "gift", "received"], themes: ["friendship", "wisdom"], schools: ["politics"] },
  { text: "Friendship is the only thing in the world concerning the usefulness of which all mankind are agreed.", author: "Cicero", authorId: "cicero", tags: ["only", "usefulness", "agreed"], themes: ["friendship", "wisdom"], schools: ["philosophy"] },
  { text: "Friendship improves happiness and abates misery, by the doubling of our joy and the dividing of our grief.", author: "Marcus Tullius Cicero", authorId: "marcus-cicero", tags: ["improves", "happiness", "abates"], themes: ["friendship", "wisdom"], schools: ["philosophy"] },

  // FRIENDSHIP AND TIME
  { text: "Time doesn't take away from friendship, nor does separation.", author: "Tennessee Williams", authorId: "tennessee-williams", tags: ["time", "take", "separation"], themes: ["friendship", "time"], schools: ["literature"] },
  { text: "Some friends come and go like a season. Others are arranged in our hearts for a lifetime.", author: "Unknown", authorId: "unknown", tags: ["come", "go", "lifetime"], themes: ["friendship", "time"], schools: ["motivational"] },
  { text: "The ornament of a house is the friends who frequent it.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["ornament", "house", "frequent"], themes: ["friendship", "time"], schools: ["transcendentalism"] },
  { text: "Old friends are the great blessings of one's later years.", author: "Horace Walpole", authorId: "horace-walpole", tags: ["old", "blessings", "later"], themes: ["friendship", "time"], schools: ["literature"] },
  { text: "Friendship is like a vintage wine—it gets better with age.", author: "Unknown", authorId: "unknown", tags: ["like", "vintage", "age"], themes: ["friendship", "time"], schools: ["motivational"] },

  // FRIENDSHIP AND SUPPORT
  { text: "Friends are those wonderful people who know all about you and still like you.", author: "Edgar A. Guest", authorId: "edgar-guest", tags: ["wonderful", "know", "like"], themes: ["friendship", "support"], schools: ["literature"] },
  { text: "A friend is someone who makes it easy to believe in yourself.", author: "Heidi Wills", authorId: "heidi-wills", tags: ["makes", "easy", "believe"], themes: ["friendship", "support"], schools: ["motivational"] },
  { text: "A true friend is the greatest of all blessings.", author: "Francois de La Rochefoucauld", authorId: "francois-de-la-rochefoucauld", tags: ["true", "greatest", "blessings"], themes: ["friendship", "support"], schools: ["literature"] },
  { text: "Friends are the family you choose for yourself.", author: "Edna Buchanan", authorId: "edna-buchanan", tags: ["family", "choose", "yourself"], themes: ["friendship", "support"], schools: ["literature"] },
  { text: "A friend is one of the nicest things you can have, and one of the best things you can be.", author: "Douglas Pagels", authorId: "douglas-pagels", tags: ["nicest", "have", "best"], themes: ["friendship", "support"], schools: ["motivational"] },

  // FRIENDSHIP AND LAUGHTER
  { text: "A day without laughter is a day wasted, and a day without a friend is even worse.", author: "Unknown", authorId: "unknown", tags: ["day", "laughter", "wasted"], themes: ["friendship", "laughter"], schools: ["humor"] },
  { text: "Friends are the people who make you smile brighter, laugh louder, and live better.", author: "Unknown", authorId: "unknown", tags: ["people", "smile", "laugh"], themes: ["friendship", "laughter"], schools: ["motivational"] },
  { text: "There is nothing better than a friend, unless it is a friend with chocolate.", author: "Linda Grayson", authorId: "linda-grayson", tags: ["nothing", "better", "chocolate"], themes: ["friendship", "laughter"], schools: ["literature"] },
  { text: "I like to listen. I have learned a great deal from listening carefully. Most people never listen.", author: "Ernest Hemingway", authorId: "ernest-hemingway", tags: ["like", "listen", "learned"], themes: ["friendship", "laughter"], schools: ["literature"] },
  { text: "Friends are the people who know the song in your heart and can sing it back to you when you have forgotten the words.", author: "Unknown", authorId: "unknown", tags: ["people", "song", "heart"], themes: ["friendship", "laughter"], schools: ["motivational"] },

  // FRIENDSHIP AND MEMORIES
  { text: "Sweet is the memory of distant friends! Like the mellow rays of the departing sun, it falls tenderly, yet sadly, on the heart.", author: "Washington Irving", authorId: "washington-irving", tags: ["sweet", "memory", "distant"], themes: ["friendship", "memories"], schools: ["literature"] },
  { text: "Memories of friendship are the photographs of our hearts, which never fade.", author: "Unknown", authorId: "unknown", tags: ["memories", "photographs", "fade"], themes: ["friendship", "memories"], schools: ["motivational"] },
  { text: "The best mirror is an old friend.", author: "George Herbert", authorId: "george-herbert", tags: ["best", "mirror", "old"], themes: ["friendship", "memories"], schools: ["literature"] },
  { text: "Friends are the most important ingredient in this recipe of life.", author: "Dior Yamasaki", authorId: "dior-yamasaki", tags: ["most", "important", "ingredient"], themes: ["friendship", "memories"], schools: ["motivational"] },
  { text: "There are no strangers here; Only friends you haven't yet met.", author: "William Butler Yeats", authorId: "william-butler-yeats", tags: ["strangers", "friends", "met"], themes: ["friendship", "memories"], schools: ["literature"] },

  // FRIENDSHIP AND UNDERSTANDING
  { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard", authorId: "elbert-hubbard", tags: ["friend", "knows", "loves"], themes: ["friendship", "understanding"], schools: ["literature"] },
  { text: "The most called-upon prerequisite of a friend is an accessible ear.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["called", "prerequisite", "accessible"], themes: ["friendship", "understanding"], schools: ["literature"] },
  { text: "Friends are the therapists you can drink with.", author: "Unknown", authorId: "unknown", tags: ["therapists", "drink", "with"], themes: ["friendship", "understanding"], schools: ["humor"] },
  { text: "A true friend is someone who thinks that you are a good egg even though he knows that you are slightly cracked.", author: "Bernard Meltzer", authorId: "bernard-meltzer", tags: ["true", "thinks", "good"], themes: ["friendship", "understanding"], schools: ["law"] },
  { text: "Friends are the people who make you feel less alone in the world.", author: "Unknown", authorId: "unknown", tags: ["people", "feel", "alone"], themes: ["friendship", "understanding"], schools: ["motivational"] },

  // FRIENDSHIP AND LOYALTY
  { text: "A loyal friend is worth more than a thousand relatives.", author: "Euripides", authorId: "euripides", tags: ["loyal", "worth", "relatives"], themes: ["friendship", "loyalty"], schools: ["literature"] },
  { text: "The friend is the man who knows all about you, and still likes you.", author: "Elbert Hubbard", authorId: "elbert-hubbard", tags: ["friend", "knows", "likes"], themes: ["friendship", "loyalty"], schools: ["literature"] },
  { text: "True friendship is like sound health; the value of it is seldom known until it is lost.", author: "Charles Caleb Colton", authorId: "charles-caleb-colton", tags: ["true", "like", "value"], themes: ["friendship", "loyalty"], schools: ["literature"] },
  { text: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison", authorId: "jim-morrison", tags: ["friend", "gives", "freedom"], themes: ["friendship", "loyalty"], schools: ["music"] },
  { text: "Friendship is the only thing in the world concerning the usefulness of which all mankind are agreed.", author: "Cicero", authorId: "cicero", tags: ["only", "usefulness", "agreed"], themes: ["friendship", "loyalty"], schools: ["philosophy"] },

  // FRIENDSHIP SIMPLICITY
  { text: "The best kind of friendship is feeling completely at home with someone.", author: "Unknown", authorId: "unknown", tags: ["best", "kind", "home"], themes: ["friendship", "simplicity"], schools: ["motivational"] },
  { text: "Friends are the sunshine of life.", author: "John Hay", authorId: "john-hay", tags: ["sunshine", "life", "friends"], themes: ["friendship", "simplicity"], schools: ["history"] },
  { text: "A hug is like a boomerang—you get it back right away.", author: "Bil Keane", authorId: "bil-keane", tags: ["hug", "boomerang", "get"], themes: ["friendship", "simplicity"], schools: ["cartoon"] },
  { text: "Friends are the family we choose for ourselves.", author: "Edna Buchanan", authorId: "edna-buchanan", tags: ["family", "choose", "ourselves"], themes: ["friendship", "simplicity"], schools: ["literature"] },
  { text: "The best things in life are the people we love, the places we've been, and the memories we've made along the way.", author: "Unknown", authorId: "unknown", tags: ["best", "things", "love"], themes: ["friendship", "simplicity"], schools: ["motivational"] },

  // FRIENDSHIP AND STRENGTH
  { text: "Friendship is a sheltering tree.", author: "Samuel Taylor Coleridge", authorId: "samuel-coleridge", tags: ["sheltering", "tree", "friendship"], themes: ["friendship", "strength"], schools: ["literature"] },
  { text: "A strong friendship doesn't need daily conversation or being together. As long as the relationship lives in the heart, true friends never part.", author: "Unknown", authorId: "unknown", tags: ["strong", "daily", "together"], themes: ["friendship", "strength"], schools: ["motivational"] },
  { text: "Friends are the pillars on your porch. Sometimes they hold you up, sometimes they lean on you, and sometimes it's just enough to know they're standing by.", author: "Unknown", authorId: "unknown", tags: ["pillars", "porch", "hold"], themes: ["friendship", "strength"], schools: ["motivational"] },
  { text: "Friendship is the strength of the soul that carries us through life's storms.", author: "Unknown", authorId: "unknown", tags: ["strength", "soul", "storms"], themes: ["friendship", "strength"], schools: ["motivational"] },
  { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell", authorId: "walter-winchell", tags: ["real", "walks", "world"], themes: ["friendship", "strength"], schools: ["journalism"] },

  // FRIENDSHIP'S LEGACY
  { text: "The greatest gift of life is friendship, and I have received it.", author: "Hubert H. Humphrey", authorId: "hubert-humphrey", tags: ["greatest", "gift", "received"], themes: ["friendship", "legacy"], schools: ["politics"] },
  { text: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn", authorId: "john-evelyn", tags: ["golden", "thread", "heart"], themes: ["friendship", "legacy"], schools: ["literature"] },
  { text: "A friend is someone who knows the song in your heart and can sing it back to you when you have forgotten the words.", author: "Unknown", authorId: "unknown", tags: ["friend", "song", "heart"], themes: ["friendship", "legacy"], schools: ["motivational"] },
  
  // Bonus Friendship Quote
  { text: "Friends are the chocolate chips in the cookie of life.", author: "Unknown", authorId: "unknown", tags: ["friends", "chocolate", "cookie"], themes: ["friendship", "bonus"], schools: ["humor"] }
];

// Add unique IDs and timestamps
const formattedQuotes = friendshipQuotes.map((quote, index) => ({
  ...quote,
  id: `friendship-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted friendship quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./friendship-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Friendship quotes written to friendship-quotes.json");