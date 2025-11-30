// Script to convert justice quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided justice quotes categorized by theme
const justiceQuotes = [
  // THE NATURE OF JUSTICE
  { text: "Justice is what love looks like in public.", author: "Cornel West", authorId: "cornel-west", tags: ["love", "public", "nature"], themes: ["justice", "nature"], schools: ["philosophy"] },
  { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["injustice", "threat", "everywhere"], themes: ["justice", "nature"], schools: ["civil-rights"] },
  { text: "Justice cannot be for one side alone, but must be for both.", author: "Eleanor Roosevelt", authorId: "eleanor-roosevelt", tags: ["both-sides", "fairness", "balance"], themes: ["justice", "nature"], schools: ["politics"] },
  { text: "The arc of the moral universe is long, but it bends toward justice.", author: "Theodore Parker", authorId: "theodore-parker", tags: ["moral", "arc", "bends"], themes: ["justice", "nature"], schools: ["religion"] },
  { text: "Justice is the constant and perpetual will to render to every man his due.", author: "Domitus Ulpian", authorId: "domitus-ulpian", tags: ["constant", "perpetual", "due"], themes: ["justice", "nature"], schools: ["law"] },
  { text: "True peace is not merely the absence of tension; it is the presence of justice.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["peace", "absence", "presence"], themes: ["justice", "nature"], schools: ["civil-rights"] },
  { text: "Justice is the first virtue of social institutions, as truth is of systems of thought.", author: "John Rawls", authorId: "john-rawls", tags: ["virtue", "social", "truth"], themes: ["justice", "nature"], schools: ["philosophy"] },

  // THE COURAGE FOR JUSTICE
  { text: "It is necessary to do justice to all, and to be fearless of all.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["necessary", "fearless", "all"], themes: ["justice", "courage"], schools: ["peace"] },
  { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke", authorId: "edmund-burke", tags: ["evil", "good", "nothing"], themes: ["justice", "courage"], schools: ["philosophy"] },
  { text: "If you are neutral in situations of injustice, you have chosen the side of the oppressor.", author: "Desmond Tutu", authorId: "desmond-tutu", tags: ["neutral", "injustice", "oppressor"], themes: ["justice", "courage"], schools: ["religion"] },
  { text: "He who does not prevent a crime when he can, encourages it.", author: "Seneca", authorId: "seneca", tags: ["prevent", "crime", "encourages"], themes: ["justice", "courage"], schools: ["philosophy"] },
  { text: "Sometimes, the only way to get justice is to take it for yourself.", author: "Leigh Bardugo", authorId: "leigh-bardugo", tags: ["take", "yourself", "way"], themes: ["justice", "courage"], schools: ["literature"] },
  { text: "Courage is of no value unless accompanied by justice; yet if all men became just, there would be no need for courage.", author: "Agesilaus II", authorId: "agesilaus-ii", tags: ["value", "accompanied", "need"], themes: ["justice", "courage"], schools: ["history"] },

  // LAW AND EQUALITY
  { text: "Justice is blind. It knows no color, no race, no religion, no gender.", author: "Unknown", authorId: "unknown", tags: ["blind", "color", "race"], themes: ["justice", "law"], schools: ["law"] },
  { text: "We must reject the idea that every time a law's broken, society is guilty rather than the lawbreaker. It is time to restore the American precept that each individual is accountable for his actions.", author: "Ronald Reagan", authorId: "ronald-reagan", tags: ["reject", "guilty", "accountable"], themes: ["justice", "law"], schools: ["politics"] },
  { text: "Where justice is denied, where poverty is enforced, where ignorance prevails, and where any one class is made to feel that society is an organized conspiracy to oppress, rob and degrade them, neither persons nor property will be safe.", author: "Frederick Douglass", authorId: "frederick-douglass", tags: ["denied", "poverty", "safe"], themes: ["justice", "law"], schools: ["history"] },
  { text: "The law, in its majestic equality, forbids the rich as well as the poor to sleep under bridges, to beg in the streets, and to steal bread.", author: "Anatole France", authorId: "anatole-france", tags: ["majestic", "equality", "forbids"], themes: ["justice", "law"], schools: ["literature"] },
  { text: "Justice that love gives is a surrender, justice that law gives is a punishment.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["love", "surrender", "punishment"], themes: ["justice", "law"], schools: ["peace"] },

  // SOCIAL AND ECONOMIC JUSTICE
  { text: "Justice will not be served until those who are unaffected are as outraged as those who are.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["served", "unaffected", "outraged"], themes: ["justice", "social"], schools: ["politics"] },
  { text: "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.", author: "Elie Wiesel", authorId: "elie-wiesel", tags: ["powerless", "prevent", "protest"], themes: ["justice", "social"], schools: ["history"] },
  { text: "The cause of justice is the cause of humanity. Its advocates should overflow with universal goodwill. We should love this cause, for it conduces to the general happiness of mankind.", author: "William Godwin", authorId: "william-godwin", tags: ["cause", "humanity", "goodwill"], themes: ["justice", "social"], schools: ["philosophy"] },
  { text: "Until the great mass of the people shall be filled with the sense of responsibility for each other's welfare, social justice can never be attained.", author: "Helen Keller", authorId: "helen-keller", tags: ["mass", "responsibility", "welfare"], themes: ["justice", "social"], schools: ["inspiration"] },
  { text: "Economic justice is the only way to achieve real and lasting political justice.", author: "Naomi Klein", authorId: "naomi-klein", tags: ["economic", "political", "lasting"], themes: ["justice", "social"], schools: ["politics"] },

  // RESTORATIVE AND MERCIFUL JUSTICE
  { text: "Mercy is the true justice, and justice is the ground of mercy.", author: "Abraham Joshua Heschel", authorId: "abraham-joshua-heschel", tags: ["mercy", "true", "ground"], themes: ["justice", "restorative"], schools: ["religion"] },
  { text: "An eye for an eye will only make the whole world blind.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["eye", "world", "blind"], themes: ["justice", "restorative"], schools: ["peace"] },
  { text: "Justice without force is powerless; force without justice is tyrannical.", author: "Blaise Pascal", authorId: "blaise-pascal", tags: ["force", "powerless", "tyrannical"], themes: ["justice", "restorative"], schools: ["philosophy"] },
  { text: "The hope of a secure and livable world lies with disciplined nonconformists who are dedicated to justice, peace and brotherhood.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["hope", "secure", "dedicated"], themes: ["justice", "restorative"], schools: ["civil-rights"] },
  { text: "Forgiveness is not an occasional act; it is a constant attitude.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["forgiveness", "occasional", "attitude"], themes: ["justice", "restorative"], schools: ["civil-rights"] },

  // THE FIGHT FOR JUSTICE
  { text: "The moral arc of the universe bends at the elbow of justice.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["moral", "arc", "elbow"], themes: ["justice", "fight"], schools: ["civil-rights"] },
  { text: "I am no longer accepting the things I cannot change. I am changing the things I cannot accept.", author: "Angela Davis", authorId: "angela-davis", tags: ["accepting", "change", "accept"], themes: ["justice", "fight"], schools: ["activism"] },
  { text: "Justice is conscience, not a personal conscience but the conscience of the whole of humanity.", author: "Alexander Solzhenitsyn", authorId: "alexander-solzhenitsyn", tags: ["conscience", "personal", "humanity"], themes: ["justice", "fight"], schools: ["literature"] },
  { text: "Never forget that justice is what love looks like in public.", author: "Cornel West", authorId: "cornel-west", tags: ["forget", "love", "public"], themes: ["justice", "fight"], schools: ["philosophy"] },
  { text: "The moment we begin to fear the opinions of others and hesitate to tell the truth that is in us, and from motives of policy are silent when we should speak, the divine floods of light and life no longer flow into our souls.", author: "Elizabeth Cady Stanton", authorId: "elizabeth-cady-stanton", tags: ["fear", "opinions", "truth"], themes: ["justice", "fight"], schools: ["feminism"] },

  // WISDOM AND PERSPECTIVE ON JUSTICE
  { text: "One of the most sincere forms of respect is actually listening to what another has to say.", author: "Bryant H. McGill", authorId: "bryant-mcgill", tags: ["sincere", "respect", "listening"], themes: ["justice", "wisdom"], schools: ["philosophy"] },
  { text: "Fairness is not about giving everyone the same thing. Fairness is giving everyone what they need to be successful.", author: "Unknown", authorId: "unknown", tags: ["fairness", "same", "need"], themes: ["justice", "wisdom"], schools: ["motivational"] },
  { text: "The dead cannot cry out for justice. It is a duty of the living to do so for them.", author: "Lois McMaster Bujold", authorId: "lois-mcmaster-bujold", tags: ["dead", "cry", "duty"], themes: ["justice", "wisdom"], schools: ["literature"] },
  { text: "Justice delayed is justice denied.", author: "William E. Gladstone", authorId: "william-gladstone", tags: ["delayed", "denied", "proverb"], themes: ["justice", "wisdom"], schools: ["politics"] },
  { text: "A society should be judged not by how it treats its outstanding citizens but by how it treats its criminals.", author: "Fyodor Dostoevsky", authorId: "fyodor-dostoevsky", tags: ["society", "judged", "criminals"], themes: ["justice", "wisdom"], schools: ["literature"] },

  // PERSONAL ACCOUNTABILITY
  { text: "The first step in the evolution of ethics is a sense of solidarity with other human beings.", author: "Albert Schweitzer", authorId: "albert-schweitzer", tags: ["evolution", "ethics", "solidarity"], themes: ["justice", "accountability"], schools: ["philosophy"] },
  { text: "He who commits injustice is ever made more wretched than he who suffers it.", author: "Plato", authorId: "plato", tags: ["commits", "injustice", "wretched"], themes: ["justice", "accountability"], schools: ["philosophy"] },
  { text: "You can't be a beacon of justice if your own light has gone out.", author: "Matshona Dhliwayo", authorId: "matshona-dhliwayo", tags: ["beacon", "light", "gone"], themes: ["justice", "accountability"], schools: ["motivational"] },
  { text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["measure", "comfort", "challenge"], themes: ["justice", "accountability"], schools: ["civil-rights"] },
  { text: "Let justice be done, though the heavens fall.", author: "Latin Maxim", authorId: "latin-maxim", tags: ["done", "heavens", "fall"], themes: ["justice", "accountability"], schools: ["law"] },

  // HISTORICAL AND LITERARY JUSTICE
  { text: "Until we are all free, we are none of us free.", author: "Emma Lazarus", authorId: "emma-lazarus", tags: ["free", "none", "until"], themes: ["justice", "historical"], schools: ["literature"] },
  { text: "The tyrant dies and his rule is over; the martyr dies and his rule begins.", author: "Søren Kierkegaard", authorId: "soren-kierkegaard", tags: ["tyrant", "martyr", "rule"], themes: ["justice", "historical"], schools: ["philosophy"] },
  { text: "I have always found that mercy bears richer fruits than strict justice.", author: "Abraham Lincoln", authorId: "abraham-lincoln", tags: ["mercy", "fruits", "strict"], themes: ["justice", "historical"], schools: ["politics"] },
  { text: "Justice is the means by which established injustices are sanctioned.", author: "Anatole France", authorId: "anatole-france", tags: ["means", "established", "sanctioned"], themes: ["justice", "historical"], schools: ["literature"] },
  { text: "The sword of justice has no scabbard.", author: "Antoine de Rivarol", authorId: "antoine-de-rivarol", tags: ["sword", "scabbard", "no"], themes: ["justice", "historical"], schools: ["philosophy"] },

  // MODERN AND ACTIVIST JUSTICE
  { text: "No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["born", "hating", "learn"], themes: ["justice", "modern"], schools: ["politics"] },
  { text: "Silence becomes cowardice when occasion demands speaking out the whole truth and acting accordingly.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["silence", "cowardice", "truth"], themes: ["justice", "modern"], schools: ["peace"] },
  { text: "Your voice is your power. Use it for those who have been silenced.", author: "Unknown", authorId: "unknown", tags: ["voice", "power", "silenced"], themes: ["justice", "modern"], schools: ["motivational"] },
  { text: "We are the ones we have been waiting for.", author: "June Jordan", authorId: "june-jordan", tags: ["ones", "waiting", "for"], themes: ["justice", "modern"], schools: ["literature"] },
  { text: "Justice is not a passive state; it is an active pursuit.", author: "Unknown", authorId: "unknown", tags: ["passive", "active", "pursuit"], themes: ["justice", "modern"], schools: ["motivational"] },

  // PHILOSOPHICAL DEPTHS
  { text: "Justice in the life and conduct of the State is possible only as first it resides in the hearts and souls of the citizens.", author: "Plato", authorId: "plato", tags: ["life", "conduct", "resides"], themes: ["justice", "philosophical"], schools: ["philosophy"] },
  { text: "I should like to be able to love my country and still love justice.", author: "Albert Camus", authorId: "albert-camus", tags: ["love", "country", "still"], themes: ["justice", "philosophical"], schools: ["philosophy"] },
  { text: "The foundation of justice is good faith.", author: "Cicero", authorId: "cicero", tags: ["foundation", "good", "faith"], themes: ["justice", "philosophical"], schools: ["philosophy"] },
  { text: "Where there is no justice, there can be no secure peace.", author: "Aung San Suu Kyi", authorId: "aung-san-suu-kyi", tags: ["no", "secure", "peace"], themes: ["justice", "philosophical"], schools: ["politics"] },
  { text: "Justice is truth in action.", author: "Benjamin Disraeli", authorId: "benjamin-disraeli", tags: ["truth", "action", "in"], themes: ["justice", "philosophical"], schools: ["politics"] },

  // HOPE AND THE FUTURE OF JUSTICE
  { text: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu", authorId: "desmond-tutu", tags: ["hope", "light", "darkness"], themes: ["justice", "hope"], schools: ["religion"] },
  { text: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["accept", "disappointment", "hope"], themes: ["justice", "hope"], schools: ["civil-rights"] },
  { text: "The good we secure for ourselves is precarious and uncertain until it is secured for all of us and incorporated into our common life.", author: "Jane Addams", authorId: "jane-addams", tags: ["good", "precarious", "secured"], themes: ["justice", "hope"], schools: ["peace"] },
  { text: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["lose", "faith", "ocean"], themes: ["justice", "hope"], schools: ["peace"] },
  { text: "The time is always right to do what is right.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["time", "right", "always"], themes: ["justice", "hope"], schools: ["civil-rights"] },

  // GLOBAL AND UNIVERSAL JUSTICE
  { text: "The rights of every man are diminished when the rights of one man are threatened.", author: "John F. Kennedy", authorId: "john-kennedy", tags: ["rights", "diminished", "threatened"], themes: ["justice", "global"], schools: ["politics"] },
  { text: "To deny people their human rights is to challenge their very humanity.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["deny", "human", "challenge"], themes: ["justice", "global"], schools: ["politics"] },
  { text: "We are all citizens of one world, we are all of one blood. To hate a man because he was born in another country, because he speaks a different language, or because he takes a different view on this subject or that, is a great folly.", author: "Desiderius Erasmus", authorId: "desiderius-erasmus", tags: ["citizens", "blood", "folly"], themes: ["justice", "global"], schools: ["philosophy"] },
  { text: "There is no such thing as a single-issue struggle because we do not live single-issue lives.", author: "Audre Lorde", authorId: "audre-lorde", tags: ["single-issue", "struggle", "lives"], themes: ["justice", "global"], schools: ["feminism"] },
  { text: "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["peace", "enemy", "partner"], themes: ["justice", "global"], schools: ["politics"] },

  // THE PRICE OF JUSTICE
  { text: "Justice is a temporary thing that must at last come to an end; but the conscience is eternal and will never die.", author: "Martin Luther", authorId: "martin-luther", tags: ["temporary", "end", "eternal"], themes: ["justice", "price"], schools: ["religion"] },
  { text: "It is reasonable that everyone who asks justice should do justice.", author: "Thomas Jefferson", authorId: "thomas-jefferson", tags: ["reasonable", "asks", "do"], themes: ["justice", "price"], schools: ["politics"] },
  { text: "Sometimes, we must interfere. When human lives are endangered, when human dignity is in jeopardy, national borders and sensitivities become irrelevant.", author: "Elie Wiesel", authorId: "elie-wiesel", tags: ["interfere", "endangered", "irrelevant"], themes: ["justice", "price"], schools: ["history"] },
  { text: "The price of justice is eternal publicity.", author: "Arnold Bennett", authorId: "arnold-bennett", tags: ["price", "eternal", "publicity"], themes: ["justice", "price"], schools: ["literature"] },

  // ULTIMATE TRUTHS
  { text: "The sun shines not on us but in us. The rivers flow not past but through us.", author: "John Muir", authorId: "john-muir", tags: ["sun", "shines", "rivers"], themes: ["justice", "truths"], schools: ["naturalism"] },
  { text: "A nation's greatness is measured by how it treats its weakest members.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["nation", "greatness", "weakest"], themes: ["justice", "truths"], schools: ["peace"] },
  { text: "The true character of a society is revealed in how it treats its children.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["character", "society", "children"], themes: ["justice", "truths"], schools: ["politics"] },
  { text: "Justice is the foundation of all social virtue.", author: "Auguste Comte", authorId: "auguste-comte", tags: ["foundation", "social", "virtue"], themes: ["justice", "truths"], schools: ["philosophy"] },
  { text: "Without justice, courage is weak.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["without", "courage", "weak"], themes: ["justice", "truths"], schools: ["politics"] },

  // INSPIRATIONAL CALLS TO ACTION
  { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["change", "wish", "world"], themes: ["justice", "inspirational"], schools: ["peace"] },
  { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["lives", "end", "silent"], themes: ["justice", "inspirational"], schools: ["civil-rights"] },
  { text: "You have to act as if it were possible to radically transform the world. And you have to do it all the time.", author: "Angela Davis", authorId: "angela-davis", tags: ["act", "transform", "time"], themes: ["justice", "inspirational"], schools: ["activism"] },
  { text: "The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing.", author: "Albert Einstein", authorId: "albert-einstein", tags: ["dangerous", "evil", "nothing"], themes: ["justice", "inspirational"], schools: ["science"] },
  { text: "Let us rise up and be thankful, for if we didn't learn a lot today, at least we learned a little.", author: "Buddha", authorId: "buddha", tags: ["rise", "thankful", "learn"], themes: ["justice", "inspirational"], schools: ["buddhism"] },

  // JUSTICE IN LITERATURE AND ART
  { text: "The powerful have always preyed upon the powerless; that is why they are called the powerful.", author: "Margaret Atwood", authorId: "margaret-atwood", tags: ["powerful", "preyed", "powerless"], themes: ["justice", "literature"], schools: ["literature"] },
  { text: "Art is not a mirror held up to reality, but a hammer with which to shape it.", author: "Bertolt Brecht", authorId: "bertolt-brecht", tags: ["art", "mirror", "hammer"], themes: ["justice", "literature"], schools: ["literature"] },
  { text: "The pen is mightier than the sword.", author: "Edward Bulwer-Lytton", authorId: "edward-bulwer-lytton", tags: ["pen", "mightier", "sword"], themes: ["justice", "literature"], schools: ["literature"] },
  { text: "We write for the same reason that we walk, talk, climb mountains or swim the oceans – because we can.", author: "Maya Angelou", authorId: "maya-angelou", tags: ["write", "reason", "can"], themes: ["justice", "literature"], schools: ["literature"] },

  // THE ROLE OF EDUCATION
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["education", "weapon", "change"], themes: ["justice", "education"], schools: ["politics"] },
  { text: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["function", "think", "goal"], themes: ["justice", "education"], schools: ["civil-rights"] },
  { text: "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.", author: "Kofi Annan", authorId: "kofi-annan", tags: ["knowledge", "power", "liberating"], themes: ["justice", "education"], schools: ["politics"] },
  { text: "If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate a person.", author: "Chinese Proverb", authorId: "chinese-proverb", tags: ["planning", "year", "educate"], themes: ["justice", "education"], schools: ["eastern-philosophy"] },

  // THE ENDURING QUEST
  { text: "The struggle for justice is a marathon, not a sprint.", author: "Unknown", authorId: "unknown", tags: ["struggle", "marathon", "sprint"], themes: ["justice", "enduring"], schools: ["motivational"] },
  { text: "We are not makers of history. We are made by history.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["makers", "history", "made"], themes: ["justice", "enduring"], schools: ["civil-rights"] },
  { text: "To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["free", "cast", "respects"], themes: ["justice", "enduring"], schools: ["politics"] },
  { text: "The hope of a secure and livable world lies with disciplined nonconformists who are dedicated to justice, peace and brotherhood.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["hope", "secure", "dedicated"], themes: ["justice", "enduring"], schools: ["civil-rights"] },
  { text: "Justice will not come until those who are not injured are as indignant as those who are.", author: "Thucydides", authorId: "thucydides", tags: ["come", "injured", "indignant"], themes: ["justice", "enduring"], schools: ["history"] },

  // FINAL WISDOM
  { text: "Let us realize the arc of the moral universe is long, but it bends toward justice.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["realize", "arc", "bends"], themes: ["justice", "final"], schools: ["civil-rights"] },
  { text: "The duty of youth is to challenge corruption.", author: "Kurt Cobain", authorId: "kurt-cobain", tags: ["duty", "youth", "challenge"], themes: ["justice", "final"], schools: ["music"] },
  { text: "A right is not what someone gives you; it's what no one can take from you.", author: "Ramsey Clark", authorId: "ramsey-clark", tags: ["right", "gives", "take"], themes: ["justice", "final"], schools: ["law"] },
  { text: "The greatest crimes in the world are not committed by people breaking the rules but by people following the rules.", author: "Banksy", authorId: "banksy", tags: ["greatest", "crimes", "rules"], themes: ["justice", "final"], schools: ["art"] },
  { text: "The moral test of government is how that government treats those who are in the dawn of life, the children; those who are in the twilight of life, the elderly; and those who are in the shadows of life, the sick, the needy and the handicapped.", author: "Hubert Humphrey", authorId: "hubert-humphrey", tags: ["moral", "test", "government"], themes: ["justice", "final"], schools: ["politics"] }
];

// Add unique IDs and timestamps
const formattedQuotes = justiceQuotes.map((quote, index) => ({
  ...quote,
  id: `justice-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted justice quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./justice-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Justice quotes written to justice-quotes.json");