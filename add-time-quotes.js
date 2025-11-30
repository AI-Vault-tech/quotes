// Script to convert time quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided time quotes categorized by theme
const timeQuotes = [
  // THE VALUE OF TIME
  { text: "Time is the most valuable thing a man can spend.", author: "Diogenes", authorId: "diogenes", tags: ["value", "time", "spending"], themes: ["time", "value"], schools: ["philosophy"] },
  { text: "Lost time is never found again.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["lost", "time", "irretrievable"], themes: ["time", "value"], schools: ["wisdom"] },
  { text: "Time is money.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["time", "money", "value"], themes: ["time", "value"], schools: ["wisdom"] },
  { text: "The key is in not spending time, but in investing it.", author: "Stephen R. Covey", authorId: "stephen-covey", tags: ["investing", "time", "productivity"], themes: ["time", "value"], schools: ["self-help"] },
  { text: "Time is the coin of your life. It is the only coin you have, and only you can determine how it will be spent.", author: "Carl Sandburg", authorId: "carl-sandburg", tags: ["coin", "life", "choice"], themes: ["time", "value"], schools: ["literature"] },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs", authorId: "steve-jobs", tags: ["limited", "authenticity", "waste"], themes: ["time", "value"], schools: ["technology"] },
  { text: "Time is more valuable than money. You can get more money, but you cannot get more time.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["valuable", "money", "irreplaceable"], themes: ["time", "value"], schools: ["motivational"] },

  // THE FLEETING NATURE OF TIME
  { text: "Time flies over us, but leaves its shadow behind.", author: "Nathaniel Hawthorne", authorId: "nathaniel-hawthorne", tags: ["flies", "shadow", "passage"], themes: ["time", "fleeting"], schools: ["literature"] },
  { text: "The trouble is, you think you have time.", author: "Buddha", authorId: "buddha", tags: ["illusion", "awareness", "present"], themes: ["time", "fleeting"], schools: ["buddhism"] },
  { text: "Time is a river, and no one can step into the same river twice.", author: "Heraclitus", authorId: "heraclitus", tags: ["river", "change", "constant"], themes: ["time", "fleeting"], schools: ["philosophy"] },
  { text: "Time is the longest distance between two places.", author: "Tennessee Williams", authorId: "tennessee-williams", tags: ["distance", "longing", "separation"], themes: ["time", "fleeting"], schools: ["literature"] },
  { text: "Time is a brisk wind, for each hour it brings something new.", author: "Paracelsus", authorId: "paracelsus", tags: ["wind", "change", "novelty"], themes: ["time", "fleeting"], schools: ["medicine"] },
  { text: "Time is the most indefinable yet paradoxical of things; the past is gone, the future is not come, and the present becomes the past even while we attempt to define it.", author: "Charles Caleb Colton", authorId: "charles-caleb-colton", tags: ["paradox", "definition", "present"], themes: ["time", "fleeting"], schools: ["literature"] },

  // MAKING THE MOST OF TIME
  { text: "The bad news is time flies. The good news is you're the pilot.", author: "Michael Altshuler", authorId: "michael-altshuler", tags: ["control", "responsibility", "agency"], themes: ["time", "productivity"], schools: ["motivational"] },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", authorId: "sam-levenson", tags: ["action", "persistence", "progress"], themes: ["time", "productivity"], schools: ["humor"] },
  { text: "The way we spend our time defines who we are.", author: "Jonathan Estrin", authorId: "jonathan-estrin", tags: ["identity", "choices", "values"], themes: ["time", "productivity"], schools: ["psychology"] },
  { text: "Time you enjoy wasting is not wasted time.", author: "Marthe Troly-Curtin", authorId: "marthe-troly-curtin", tags: ["enjoyment", "waste", "perspective"], themes: ["time", "productivity"], schools: ["literature"] },
  { text: "Make use of time, let not advantage slip.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["opportunity", "seize", "moment"], themes: ["time", "productivity"], schools: ["literature"] },
  { text: "The common man is not concerned about the passage of time, the man of talent is driven by it.", author: "Arthur Schopenhauer", authorId: "arthur-schopenhauer", tags: ["talent", "driven", "awareness"], themes: ["time", "productivity"], schools: ["philosophy"] },

  // TIME AND MEMORY
  { text: "Time is a great healer, but a poor beautician.", author: "Lucille S. Harper", authorId: "lucille-harper", tags: ["healing", "beauty", "aging"], themes: ["time", "memory"], schools: ["wisdom"] },
  { text: "Time, which sees all things, has found you out.", author: "Sophocles", authorId: "sophocles", tags: ["exposure", "truth", "inevitability"], themes: ["time", "memory"], schools: ["literature"] },
  { text: "Time is the school in which we learn, time is the fire in which we burn.", author: "Delmore Schwartz", authorId: "delmore-schwartz", tags: ["learning", "experience", "consumption"], themes: ["time", "memory"], schools: ["literature"] },
  { text: "What is time? The shadow on the dial, the striking of the clock, the running of the sand...", author: "Henry Wadsworth Longfellow", authorId: "henry-wadsworth-longfellow", tags: ["definition", "metaphor", "measurement"], themes: ["time", "memory"], schools: ["literature"] },
  { text: "Time is a storm in which we are all lost.", author: "William Carlos Williams", authorId: "william-carlos-williams", tags: ["storm", "disorientation", "chaos"], themes: ["time", "memory"], schools: ["literature"] },

  // PATIENCE AND TIMING
  { text: "Everything has its own time and everything ends.", author: "Ecclesiastes", authorId: "ecclesiastes", tags: ["season", "endings", "natural"], themes: ["time", "patience"], schools: ["religion"] },
  { text: "Patience and time do more than strength or passion.", author: "Jean de La Fontaine", authorId: "jean-de-la-fontaine", tags: ["patience", "power", "virtue"], themes: ["time", "patience"], schools: ["literature"] },
  { text: "The right thing at the wrong time is the wrong thing.", author: "Joshua Harris", authorId: "joshua-harris", tags: ["timing", "appropriateness", "context"], themes: ["time", "patience"], schools: ["christianity"] },
  { text: "Time is the friend of the wonderful company, the enemy of the mediocre.", author: "Warren Buffett", authorId: "warren-buffett", tags: ["investment", "quality", "compounding"], themes: ["time", "patience"], schools: ["business"] },
  { text: "There is a time for many words, and there is also a time for sleep.", author: "Homer", authorId: "homer", tags: ["balance", "silence", "rest"], themes: ["time", "patience"], schools: ["literature"] },

  // THE PAST
  { text: "The past is a foreign country; they do things differently there.", author: "L.P. Hartley", authorId: "lp-hartley", tags: ["past", "foreign", "difference"], themes: ["time", "past"], schools: ["literature"] },
  { text: "What's past is prologue.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["past", "foundation", "setup"], themes: ["time", "past"], schools: ["literature"] },
  { text: "The past is always tense, the future perfect.", author: "Zadie Smith", authorId: "zadie-smith", tags: ["grammar", "tense", "temporal"], themes: ["time", "past"], schools: ["literature"] },
  { text: "We are products of our past, but we don't have to be prisoners of it.", author: "Rick Warren", authorId: "rick-warren", tags: ["influence", "freedom", "growth"], themes: ["time", "past"], schools: ["christianity"] },
  { text: "The past is a place of reference, not a place of residence.", author: "Roy T. Bennett", authorId: "roy-bennett", tags: ["reference", "dwelling", "moving-on"], themes: ["time", "past"], schools: ["motivational"] },

  // THE PRESENT MOMENT
  { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", author: "Thich Nhat Hanh", authorId: "thich-nhat-hanh", tags: ["present", "joy", "attention"], themes: ["time", "present"], schools: ["buddhism"] },
  { text: "Realize deeply that the present moment is all you ever have.", author: "Eckhart Tolle", authorId: "eckhart-tolle", tags: ["present", "existence", "awareness"], themes: ["time", "present"], schools: ["spirituality"] },
  { text: "Be present in all things and thankful for all things.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["presence", "gratitude", "acceptance"], themes: ["time", "present"], schools: ["literature"] },
  { text: "The ability to be in the present moment is a major component of mental wellness.", author: "Abraham Maslow", authorId: "abraham-maslow", tags: ["present", "wellness", "psychology"], themes: ["time", "present"], schools: ["psychology"] },
  { text: "Now is the only time that matters.", author: "Unknown", authorId: "unknown", tags: ["now", "importance", "focus"], themes: ["time", "present"], schools: ["motivational"] },

  // THE FUTURE
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["future", "action", "responsibility"], themes: ["time", "future"], schools: ["peace"] },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker", authorId: "peter-drucker", tags: ["prediction", "creation", "agency"], themes: ["time", "future"], schools: ["business"] },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", authorId: "eleanor-roosevelt", tags: ["future", "belief", "dreams"], themes: ["time", "future"], schools: ["politics"] },
  { text: "I like the dreams of the future better than the history of the past.", author: "Thomas Jefferson", authorId: "thomas-jefferson", tags: ["future", "dreams", "preference"], themes: ["time", "future"], schools: ["politics"] },
  { text: "Planning is bringing the future into the present so that you can do something about it now.", author: "Alan Lakein", authorId: "alan-lakein", tags: ["planning", "future", "action"], themes: ["time", "future"], schools: ["productivity"] },

  // TIME AND DEATH
  { text: "As if you could kill time without injuring eternity.", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["death", "eternity", "consequence"], themes: ["time", "death"], schools: ["transcendentalism"] },
  { text: "Time is a brisk wind, for each hour it brings something new... but who can understand and measure its sharp breath, its mystery and its design?", author: "Paracelsus", authorId: "paracelsus", tags: ["wind", "mystery", "measurement"], themes: ["time", "death"], schools: ["medicine"] },
  { text: "Our days are numbered. One of the primary goals in our lives should be to prepare for death, a destination we all share.", author: "Bryant McGill", authorId: "bryant-mcgill", tags: ["mortality", "preparation", "destination"], themes: ["time", "death"], schools: ["philosophy"] },
  { text: "Time is the substance from which I am made. Time is a river which carries me along, but I am the river; it is a tiger that devours me, but I am the tiger; it is a fire that consumes me, but I am the fire.", author: "Jorge Luis Borges", authorId: "jorge-luis-borges", tags: ["substance", "identity", "consumption"], themes: ["time", "death"], schools: ["literature"] },

  // TIME AND LOVE
  { text: "Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.", author: "Henry Van Dyke", authorId: "henry-van-dyke", tags: ["love", "eternity", "perspective"], themes: ["time", "love"], schools: ["literature"] },
  { text: "The time you spend with someone is the clearest expression of how much you value them.", author: "Unknown", authorId: "unknown", tags: ["time", "value", "relationships"], themes: ["time", "love"], schools: ["motivational"] },
  { text: "Love's greatest gift is its ability to make everything it touches sacred.", author: "Barbara De Angelis", authorId: "barbara-de-angelis", tags: ["love", "sacred", "transformation"], themes: ["time", "love"], schools: ["self-help"] },
  { text: "Time is the longest distance between two places.", author: "Tennessee Williams", authorId: "tennessee-williams", tags: ["distance", "longing", "separation"], themes: ["time", "love"], schools: ["literature"] },

  // TIME AND WORK
  { text: "Either you run the day, or the day runs you.", author: "Jim Rohn", authorId: "jim-rohn", tags: ["control", "productivity", "agency"], themes: ["time", "work"], schools: ["motivational"] },
  { text: "Don't be fooled by the calendar. There are only as many days in the year as you make use of.", author: "Charles Richards", authorId: "charles-richards", tags: ["calendar", "usage", "intention"], themes: ["time", "work"], schools: ["motivational"] },
  { text: "The surest way to be late is to have plenty of time.", author: "Leo Kennedy", authorId: "leo-kennedy", tags: ["procrastination", "lateness", "paradox"], themes: ["time", "work"], schools: ["humor"] },
  { text: "Better three hours too soon than a minute too late.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["punctuality", "preparation", "timing"], themes: ["time", "work"], schools: ["literature"] },
  { text: "The common man is not concerned about the passage of time, the man of talent is driven by it.", author: "Arthur Schopenhauer", authorId: "arthur-schopenhauer", tags: ["talent", "driven", "awareness"], themes: ["time", "work"], schools: ["philosophy"] },

  // PHILOSOPHICAL PERSPECTIVES
  { text: "Time is an illusion.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["illusion", "physics", "reality"], themes: ["time", "philosophy"], schools: ["science"] },
  { text: "The only reason for time is so that everything doesn't happen at once.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["sequence", "simultaneity", "order"], themes: ["time", "philosophy"], schools: ["science"] },
  { text: "Time is what prevents everything from happening at once.", author: "John Archibald Wheeler", authorId: "john-archibald-wheeler", tags: ["sequence", "simultaneity", "physics"], themes: ["time", "philosophy"], schools: ["science"] },
  { text: "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.'", author: "Lao Tzu", authorId: "lao-tzu", tags: ["creation", "excuse", "choice"], themes: ["time", "philosophy"], schools: ["taoism"] },
  { text: "Time you enjoy wasting is not wasted time.", author: "Bertrand Russell", authorId: "bertrand-russell", tags: ["enjoyment", "waste", "perspective"], themes: ["time", "philosophy"], schools: ["philosophy"] },

  // SEASONS AND CYCLES
  { text: "To everything there is a season, and a time to every purpose under the heaven.", author: "Ecclesiastes 3:1", authorId: "ecclesiastes", tags: ["season", "purpose", "divine"], themes: ["time", "cycles"], schools: ["religion"] },
  { text: "The timeless in you is aware of life's timelessness.", author: "Kahlil Gibran", authorId: "kahlil-gibran", tags: ["timeless", "awareness", "eternity"], themes: ["time", "cycles"], schools: ["literature"] },
  { text: "Spring passes and one remembers one's innocence. Summer passes and one remembers one's exuberance. Autumn passes and one remembers one's reverence. Winter passes and one remembers one's perseverance.", author: "Yoko Ono", authorId: "yoko-ono", tags: ["seasons", "memory", "growth"], themes: ["time", "cycles"], schools: ["art"] },
  { text: "Time as he grows old teaches many lessons.", author: "Aeschylus", authorId: "aeschylus", tags: ["age", "wisdom", "learning"], themes: ["time", "cycles"], schools: ["literature"] },

  // TIME AND REGRET
  { text: "A man who dares to waste one hour of time has not discovered the value of life.", author: "Charles Darwin", authorId: "charles-darwin", tags: ["waste", "value", "life"], themes: ["time", "regret"], schools: ["science"] },
  { text: "We must use time as a tool, not as a crutch.", author: "John F. Kennedy", authorId: "john-f-kennedy", tags: ["tool", "dependence", "productivity"], themes: ["time", "regret"], schools: ["politics"] },
  { text: "Dost thou love life? Then do not squander time, for that is the stuff life is made of.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["love", "squander", "essence"], themes: ["time", "regret"], schools: ["wisdom"] },
  { text: "Regret for wasted time is more wasted time.", author: "Mason Cooley", authorId: "mason-cooley", tags: ["regret", "waste", "cycle"], themes: ["time", "regret"], schools: ["humor"] },

  // TIME AND WISDOM
  { text: "With time and patience the mulberry leaf becomes a silk gown.", author: "Chinese Proverb", authorId: "chinese-proverb", tags: ["patience", "transformation", "process"], themes: ["time", "wisdom"], schools: ["eastern-philosophy"] },
  { text: "Time is the wisest counselor of all.", author: "Pericles", authorId: "pericles", tags: ["wisdom", "counselor", "experience"], themes: ["time", "wisdom"], schools: ["history"] },
  { text: "Time ripens all things. No man is born wise.", author: "Miguel de Cervantes", authorId: "miguel-de-cervantes", tags: ["ripening", "wisdom", "growth"], themes: ["time", "wisdom"], schools: ["literature"] },
  { text: "The years teach much which the days never know.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["years", "days", "learning"], themes: ["time", "wisdom"], schools: ["transcendentalism"] },
  { text: "Time is a great teacher, but unfortunately it kills all its pupils.", author: "Hector Berlioz", authorId: "hector-berlioz", tags: ["teacher", "mortality", "learning"], themes: ["time", "wisdom"], schools: ["music"] },

  // URGENCY AND ACTION
  { text: "The time is always right to do what is right.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["urgency", "righteousness", "justice"], themes: ["time", "action"], schools: ["civil-rights"] },
  { text: "Don't wait. The time will never be just right.", author: "Napoleon Hill", authorId: "napoleon-hill", tags: ["waiting", "opportunity", "action"], themes: ["time", "action"], schools: ["self-help"] },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", authorId: "chinese-proverb", tags: ["action", "time", "planting"], themes: ["time", "action"], schools: ["eastern-philosophy"] },
  { text: "Act quickly, think slowly.", author: "Greek Proverb", authorId: "greek-proverb", tags: ["action", "thought", "balance"], themes: ["time", "action"], schools: ["eastern-philosophy"] },
  { text: "There's never enough time to do it right, but there's always enough time to do it over.", author: "Jack Bergman", authorId: "jack-bergman", tags: ["quality", "correction", "time"], themes: ["time", "action"], schools: ["engineering"] },

  // TIME PERCEPTION
  { text: "Time is what we want most, but what we use worst.", author: "William Penn", authorId: "william-penn", tags: ["desire", "usage", "mismanagement"], themes: ["time", "perception"], schools: ["history"] },
  { text: "The days are long, but the years are short.", author: "Gretchen Rubin", authorId: "gretchen-rubin", tags: ["days", "years", "perspective"], themes: ["time", "perception"], schools: ["psychology"] },
  { text: "Time is a game played beautifully by children.", author: "Heraclitus", authorId: "heraclitus", tags: ["game", "children", "play"], themes: ["time", "perception"], schools: ["philosophy"] },
  { text: "The clock talked loud. I threw it away, it scares me what it talks.", author: "Tillie Olsen", authorId: "tillie-olsen", tags: ["clock", "pressure", "anxiety"], themes: ["time", "perception"], schools: ["literature"] },
  { text: "Time changes everything except something within us which is always surprised by change.", author: "Thomas Hardy", authorId: "thomas-hardy", tags: ["change", "surprise", "constancy"], themes: ["time", "perception"], schools: ["literature"] },

  // HISTORICAL PERSPECTIVE
  { text: "Time is the great physician.", author: "Benjamin Disraeli", authorId: "benjamin-disraeli", tags: ["healing", "physician", "patience"], themes: ["time", "history"], schools: ["politics"] },
  { text: "History is a cyclic poem written by Time upon the memories of man.", author: "Percy Bysshe Shelley", authorId: "percy-bysshe-shelley", tags: ["history", "cycle", "poem"], themes: ["time", "history"], schools: ["literature"] },
  { text: "Time, the avenger!", author: "Lord Byron", authorId: "lord-byron", tags: ["avenger", "justice", "retribution"], themes: ["time", "history"], schools: ["literature"] },
  { text: "The timeless in you is aware of life's timelessness.", author: "Kahlil Gibran", authorId: "kahlil-gibran", tags: ["timeless", "awareness", "eternity"], themes: ["time", "history"], schools: ["literature"] },
  { text: "Time will explain it all. He is a talker, and needs no questioning before he speaks.", author: "Euripides", authorId: "euripides", tags: ["explanation", "patience", "revelation"], themes: ["time", "history"], schools: ["literature"] },

  // TIME AND TRUTH
  { text: "Truth is the daughter of time.", author: "Aulus Gellius", authorId: "aulus-gellius", tags: ["truth", "daughter", "revelation"], themes: ["time", "truth"], schools: ["literature"] },
  { text: "Time discovers truth.", author: "Seneca", authorId: "seneca", tags: ["discovery", "truth", "revelation"], themes: ["time", "truth"], schools: ["philosophy"] },
  { text: "Time is the lens through which we see truth.", author: "Unknown", authorId: "unknown", tags: ["lens", "truth", "perspective"], themes: ["time", "truth"], schools: ["philosophy"] },
  { text: "Time is the justice that examines all offenders.", author: "William Shakespeare", authorId: "william-shakespeare", tags: ["justice", "examination", "judgment"], themes: ["time", "truth"], schools: ["literature"] },
  { text: "Time is the most undefinable yet paradoxical of things; the past is gone, the future is not come, and the present becomes the past even while we attempt to define it.", author: "Charles Caleb Colton", authorId: "charles-caleb-colton", tags: ["paradox", "definition", "present"], themes: ["time", "truth"], schools: ["literature"] },

  // FINAL WISDOM
  { text: "Time is the longest distance between two places.", author: "Tennessee Williams", authorId: "tennessee-williams", tags: ["distance", "longing", "separation"], themes: ["time", "wisdom"], schools: ["literature"] },
  { text: "Time is the coin of your life. You spend it. Do not allow others to spend it for you.", author: "Carl Sandburg", authorId: "carl-sandburg", tags: ["coin", "life", "autonomy"], themes: ["time", "wisdom"], schools: ["literature"] },
  { text: "Time is the most valuable thing a man can spend.", author: "Theophrastus", authorId: "theophrastus", tags: ["value", "time", "spending"], themes: ["time", "wisdom"], schools: ["philosophy"] },
  { text: "Time is the school in which we learn, time is the fire in which we burn.", author: "Delmore Schwartz", authorId: "delmore-schwartz", tags: ["learning", "experience", "consumption"], themes: ["time", "wisdom"], schools: ["literature"] },
  { text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy", authorId: "leo-tolstoy", tags: ["patience", "power", "warriors"], themes: ["time", "wisdom"], schools: ["literature"] },
  
  // Bonus Time Quote
  { text: "Time is a created thing. To say 'I don't have time' is to say 'I don't want to.'", author: "Lao Tzu", authorId: "lao-tzu", tags: ["creation", "excuse", "choice"], themes: ["time", "bonus"], schools: ["taoism"] }
];

// Add unique IDs and timestamps
const formattedQuotes = timeQuotes.map((quote, index) => ({
  ...quote,
  id: `time-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted time quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./time-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Time quotes written to time-quotes.json");