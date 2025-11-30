// Script to convert freedom quotes to proper JSON format and add them to largeQuotes.json

const fs = require('fs');

// Provided freedom quotes categorized by theme
const freedomQuotes = [
  // THE ESSENCE OF FREEDOM
  { text: "Freedom is the oxygen of the soul.", author: "Moshe Dayan", authorId: "moshe-dayan", tags: ["oxygen", "soul", "essence"], themes: ["freedom", "essence"], schools: ["politics"] },
  { text: "The only real prison is fear, and the only real freedom is freedom from fear.", author: "Aung San Suu Kyi", authorId: "aung-san-suu-kyi", tags: ["prison", "fear", "liberation"], themes: ["freedom", "essence"], schools: ["politics"] },
  { text: "Freedom is not worth having if it does not include the freedom to make mistakes.", author: "Mahatma Gandhi", authorId: "mahatma-gandhi", tags: ["mistakes", "worth", "inclusion"], themes: ["freedom", "essence"], schools: ["peace"] },
  { text: "What is freedom? To have the will to be responsible for oneself.", author: "Friedrich Nietzsche", authorId: "friedrich-nietzsche", tags: ["will", "responsibility", "self"], themes: ["freedom", "essence"], schools: ["philosophy"] },
  { text: "Freedom lies in being bold.", author: "Robert Frost", authorId: "robert-frost", tags: ["boldness", "lies", "courage"], themes: ["freedom", "essence"], schools: ["literature"] },
  { text: "The most important kind of freedom is to be what you really are.", author: "Jim Morrison", authorId: "jim-morrison", tags: ["authenticity", "important", "being"], themes: ["freedom", "essence"], schools: ["music"] },
  { text: "Freedom is the open window through which pours the sunlight of the human spirit and human dignity.", author: "Herbert Hoover", authorId: "herbert-hoover", tags: ["window", "sunlight", "spirit"], themes: ["freedom", "essence"], schools: ["politics"] },

  // PERSONAL LIBERATION
  { text: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.", author: "Nelson Mandela", authorId: "nelson-mandela", tags: ["chains", "respect", "others"], themes: ["freedom", "personal"], schools: ["politics"] },
  { text: "The secret to happiness is freedom... And the secret to freedom is courage.", author: "Thucydides", authorId: "thucydides", tags: ["happiness", "courage", "secret"], themes: ["freedom", "personal"], schools: ["history"] },
  { text: "Freedom is nothing but a chance to be better.", author: "Albert Camus", authorId: "albert-camus", tags: ["chance", "better", "opportunity"], themes: ["freedom", "personal"], schools: ["philosophy"] },
  { text: "No one outside ourselves can rule us inwardly. When we know this, we become free.", author: "Buddha", authorId: "buddha", tags: ["inward", "rule", "self"], themes: ["freedom", "personal"], schools: ["buddhism"] },
  { text: "The price of freedom is eternal vigilance.", author: "John Philpot Curran", authorId: "john-philpot-curran", tags: ["price", "vigilance", "eternal"], themes: ["freedom", "personal"], schools: ["politics"] },
  { text: "Freedom is the will to be responsible to ourselves.", author: "Friedrich Nietzsche", authorId: "friedrich-nietzsche", tags: ["will", "responsibility", "self"], themes: ["freedom", "personal"], schools: ["philosophy"] },

  // POLITICAL & SOCIAL FREEDOM
  { text: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.", author: "Martin Luther King Jr.", authorId: "martin-luther-king-jr", tags: ["voluntarily", "oppressor", "demanded"], themes: ["freedom", "political"], schools: ["civil-rights"] },
  { text: "Those who deny freedom to others deserve it not for themselves.", author: "Abraham Lincoln", authorId: "abraham-lincoln", tags: ["deny", "others", "deserve"], themes: ["freedom", "political"], schools: ["politics"] },
  { text: "Freedom is the right to tell people what they do not want to hear.", author: "George Orwell", authorId: "george-orwell", tags: ["right", "tell", "unwanted"], themes: ["freedom", "political"], schools: ["literature"] },
  { text: "In a truly free society, everyone is both a teacher and a student.", author: "Bryant McGill", authorId: "bryant-mcgill", tags: ["society", "teacher", "student"], themes: ["freedom", "political"], schools: ["philosophy"] },
  { text: "The history of free men is never really written by chance but by choice; their choice!", author: "Dwight D. Eisenhower", authorId: "dwight-eisenhower", tags: ["history", "choice", "free"], themes: ["freedom", "political"], schools: ["politics"] },

  // INNER FREEDOM
  { text: "The first step toward freedom is the realization that you are not your thoughts.", author: "Michael Singer", authorId: "michael-singer", tags: ["realization", "thoughts", "step"], themes: ["freedom", "inner"], schools: ["spirituality"] },
  { text: "True freedom is impossible without a mind made free by discipline.", author: "Mortimer J. Adler", authorId: "mortimer-adler", tags: ["discipline", "mind", "true"], themes: ["freedom", "inner"], schools: ["philosophy"] },
  { text: "He who has overcome his fears will truly be free.", author: "Aristotle", authorId: "aristotle", tags: ["overcome", "fears", "truly"], themes: ["freedom", "inner"], schools: ["philosophy"] },
  { text: "Freedom is what you do with what's been done to you.", author: "Jean-Paul Sartre", authorId: "jean-paul-sartre", tags: ["done", "response", "agency"], themes: ["freedom", "inner"], schools: ["philosophy"] },
  { text: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", author: "John Milton", authorId: "john-milton", tags: ["mind", "place", "perspective"], themes: ["freedom", "inner"], schools: ["literature"] },

  // FREEDOM OF EXPRESSION
  { text: "If liberty means anything at all, it means the right to tell people what they do not want to hear.", author: "George Orwell", authorId: "george-orwell", tags: ["liberty", "right", "unwanted"], themes: ["freedom", "expression"], schools: ["literature"] },
  { text: "Freedom of speech is the bedrock of liberty and a free society.", author: "Ayaan Hirsi Ali", authorId: "ayaan-hirsi-ali", tags: ["speech", "bedrock", "society"], themes: ["freedom", "expression"], schools: ["politics"] },
  { text: "I disapprove of what you say, but I will defend to the death your right to say it.", author: "Voltaire", authorId: "voltaire", tags: ["disapprove", "defend", "right"], themes: ["freedom", "expression"], schools: ["philosophy"] },
  { text: "Without freedom of thought, there can be no such thing as wisdom.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["thought", "wisdom", "without"], themes: ["freedom", "expression"], schools: ["politics"] },
  { text: "The press is not only free, it is powerful. That power is ours.", author: "Benjamin Disraeli", authorId: "benjamin-disraeli", tags: ["press", "powerful", "ours"], themes: ["freedom", "expression"], schools: ["politics"] },

  // SPIRITUAL FREEDOM
  { text: "You have freedom when you're easy in your harness.", author: "Robert Frost", authorId: "robert-frost", tags: ["easy", "harness", "comfort"], themes: ["freedom", "spiritual"], schools: ["literature"] },
  { text: "The truth will set you free, but first it will piss you off.", author: "Gloria Steinem", authorId: "gloria-steinem", tags: ["truth", "set", "offensive"], themes: ["freedom", "spiritual"], schools: ["feminism"] },
  { text: "Freedom is not the absence of commitments, but the ability to choose yours.", author: "Paulo Coelho", authorId: "paulo-coelho", tags: ["commitments", "absence", "choose"], themes: ["freedom", "spiritual"], schools: ["literature"] },
  { text: "Spiritual freedom is the result of strong faith.", author: "Lailah Gifty Akita", authorId: "lailah-gifty-akita", tags: ["spiritual", "faith", "result"], themes: ["freedom", "spiritual"], schools: ["religion"] },
  { text: "Let go of your attachment to the outcome, and you will be free.", author: "Unknown", authorId: "unknown", tags: ["attachment", "outcome", "let-go"], themes: ["freedom", "spiritual"], schools: ["motivational"] },

  // CREATIVE FREEDOM
  { text: "The artist must be free to choose what he does, certainly, but he must also never be afraid to do what he might choose.", author: "Langston Hughes", authorId: "langston-hughes", tags: ["artist", "choose", "afraid"], themes: ["freedom", "creative"], schools: ["literature"] },
  { text: "Creativity requires the courage to let go of certainties.", author: "Erich Fromm", authorId: "erich-fromm", tags: ["creativity", "courage", "certainties"], themes: ["freedom", "creative"], schools: ["psychology"] },
  { text: "Freedom is the opportunity to make decisions.", author: "Kenneth Hildebrand", authorId: "kenneth-hildebrand", tags: ["opportunity", "decisions", "choice"], themes: ["freedom", "creative"], schools: ["philosophy"] },
  { text: "The creative mind plays with the objects it loves.", author: "Carl Jung", authorId: "carl-jung", tags: ["creative", "mind", "love"], themes: ["freedom", "creative"], schools: ["psychology"] },
  { text: "Art is the daughter of freedom.", author: "Friedrich Schiller", authorId: "friedrich-schiller", tags: ["art", "daughter", "freedom"], themes: ["freedom", "creative"], schools: ["literature"] },

  // ECONOMIC FREEDOM
  { text: "Economic freedom is an essential requisite for political freedom.", author: "Milton Friedman", authorId: "milton-friedman", tags: ["economic", "essential", "political"], themes: ["freedom", "economic"], schools: ["economics"] },
  { text: "The freedom to do what I want is not as important as the freedom from what I don't want.", author: "Unknown", authorId: "unknown", tags: ["want", "important", "avoid"], themes: ["freedom", "economic"], schools: ["motivational"] },
  { text: "Property is the fruit of labor... property is desirable... it is a positive good in the world.", author: "Abraham Lincoln", authorId: "abraham-lincoln", tags: ["property", "labor", "fruit"], themes: ["freedom", "economic"], schools: ["politics"] },
  { text: "Freedom and responsibility are inseparable.", author: "Ben Shapiro", authorId: "ben-shapiro", tags: ["responsibility", "inseparable", "linked"], themes: ["freedom", "economic"], schools: ["politics"] },

  // FREEDOM THROUGH EDUCATION
  { text: "Education is the key to unlocking the world, a passport to freedom.", author: "Oprah Winfrey", authorId: "oprah-winfrey", tags: ["education", "key", "passport"], themes: ["freedom", "education"], schools: ["media"] },
  { text: "The only person who is educated is the one who has learned how to learn and change.", author: "Carl Rogers", authorId: "carl-rogers", tags: ["educated", "learn", "change"], themes: ["freedom", "education"], schools: ["psychology"] },
  { text: "Knowledge makes a man unfit to be a slave.", author: "Frederick Douglass", authorId: "frederick-douglass", tags: ["knowledge", "unfit", "slave"], themes: ["freedom", "education"], schools: ["history"] },
  { text: "Education is freedom.", author: "Paulo Freire", authorId: "paulo-freire", tags: ["education", "freedom", "synonymous"], themes: ["freedom", "education"], schools: ["education"] },

  // PHYSICAL FREEDOM
  { text: "Freedom is the power to choose our own chains.", author: "Jean-Jacques Rousseau", authorId: "jean-jacques-rousseau", tags: ["power", "choose", "chains"], themes: ["freedom", "physical"], schools: ["philosophy"] },
  { text: "Better to die fighting for freedom then be a prisoner all the days of your life.", author: "Bob Marley", authorId: "bob-marley", tags: ["die", "fighting", "prisoner"], themes: ["freedom", "physical"], schools: ["music"] },
  { text: "Physical freedom is nothing if you are mentally enslaved.", author: "Unknown", authorId: "unknown", tags: ["physical", "nothing", "mental"], themes: ["freedom", "physical"], schools: ["motivational"] },
  { text: "The body is the servant of the mind.", author: "James Allen", authorId: "james-allen", tags: ["body", "servant", "mind"], themes: ["freedom", "physical"], schools: ["self-help"] },

  // FREEDOM AND RESPONSIBILITY
  { text: "With great power comes great responsibility.", author: "Voltaire", authorId: "voltaire", tags: ["power", "responsibility", "great"], themes: ["freedom", "responsibility"], schools: ["philosophy"] },
  { text: "Freedom is not the right to do what we want, but what we ought.", author: "Abraham Lincoln", authorId: "abraham-lincoln", tags: ["right", "want", "ought"], themes: ["freedom", "responsibility"], schools: ["politics"] },
  { text: "Liberty means responsibility. That is why most men dread it.", author: "George Bernard Shaw", authorId: "george-bernard-shaw", tags: ["liberty", "responsibility", "dread"], themes: ["freedom", "responsibility"], schools: ["literature"] },
  { text: "The price of greatness is responsibility.", author: "Winston Churchill", authorId: "winston-churchill", tags: ["price", "greatness", "responsibility"], themes: ["freedom", "responsibility"], schools: ["politics"] },

  // HISTORICAL FREEDOM FIGHTERS
  { text: "I am no bird; and no net ensnares me: I am a free human being with an independent will.", author: "Charlotte Brontë", authorId: "charlotte-bronte", tags: ["bird", "net", "independent"], themes: ["freedom", "historical"], schools: ["literature"] },
  { text: "I prefer liberty with danger to peace with slavery.", author: "Jean-Jacques Rousseau", authorId: "jean-jacques-rousseau", tags: ["liberty", "danger", "slavery"], themes: ["freedom", "historical"], schools: ["philosophy"] },
  { text: "Give me liberty or give me death!", author: "Patrick Henry", authorId: "patrick-henry", tags: ["liberty", "death", "choice"], themes: ["freedom", "historical"], schools: ["politics"] },
  { text: "We hold these truths to be self-evident: that all men are created equal...", author: "Thomas Jefferson", authorId: "thomas-jefferson", tags: ["truths", "equal", "created"], themes: ["freedom", "historical"], schools: ["politics"] },

  // MODERN FREEDOM
  { text: "Digital freedom is the new frontier of liberty.", author: "Edward Snowden", authorId: "edward-snowden", tags: ["digital", "frontier", "liberty"], themes: ["freedom", "modern"], schools: ["technology"] },
  { text: "The internet is the first thing that humanity has built that humanity doesn't understand.", author: "Eric Schmidt", authorId: "eric-schmidt", tags: ["internet", "built", "understand"], themes: ["freedom", "modern"], schools: ["technology"] },
  { text: "Privacy is not an option, and it shouldn't be the price we accept for just getting on the internet.", author: "Gary Kovacs", authorId: "gary-kovacs", tags: ["privacy", "option", "price"], themes: ["freedom", "modern"], schools: ["technology"] },
  { text: "Information is the currency of democracy.", author: "Thomas Jefferson", authorId: "thomas-jefferson", tags: ["information", "currency", "democracy"], themes: ["freedom", "modern"], schools: ["politics"] },

  // FREEDOM FROM FEAR
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt", authorId: "franklin-roosevelt", tags: ["fear", "itself", "only"], themes: ["freedom", "fear"], schools: ["politics"] },
  { text: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain", authorId: "mark-twain", tags: ["courage", "resistance", "mastery"], themes: ["freedom", "fear"], schools: ["literature"] },
  { text: "Fear is the prison of the heart.", author: "Unknown", authorId: "unknown", tags: ["fear", "prison", "heart"], themes: ["freedom", "fear"], schools: ["motivational"] },
  { text: "Do the thing you fear and the death of fear is certain.", author: "Ralph Waldo Emerson", authorId: "ralph-waldo-emerson", tags: ["thing", "fear", "death"], themes: ["freedom", "fear"], schools: ["transcendentalism"] },

  // FREEDOM AND LOVE
  { text: "If you love something, set it free. If it comes back, it's yours. If it doesn't, it never was.", author: "Richard Bach", authorId: "richard-bach", tags: ["love", "set", "free"], themes: ["freedom", "love"], schools: ["literature"] },
  { text: "Love is the only freedom in the world because it so elevates the spirit that the laws of humanity and the phenomena of nature do not alter its course.", author: "Khalil Gibran", authorId: "khalil-gibran", tags: ["love", "elevates", "spirit"], themes: ["freedom", "love"], schools: ["literature"] },
  { text: "To love is to be free together.", author: "Søren Kierkegaard", authorId: "soren-kierkegaard", tags: ["love", "free", "together"], themes: ["freedom", "love"], schools: ["philosophy"] },
  { text: "The freest person is the one with the most love in their heart.", author: "Unknown", authorId: "unknown", tags: ["freest", "love", "heart"], themes: ["freedom", "love"], schools: ["motivational"] },

  // PHILOSOPHICAL FREEDOM
  { text: "Man is condemned to be free.", author: "Jean-Paul Sartre", authorId: "jean-paul-sartre", tags: ["condemned", "free", "man"], themes: ["freedom", "philosophical"], schools: ["philosophy"] },
  { text: "The free man is he who does not fear to go to the end of his thought.", author: "Léon Blum", authorId: "leon-blum", tags: ["free", "fear", "thought"], themes: ["freedom", "philosophical"], schools: ["philosophy"] },
  { text: "Freedom is the recognition of necessity.", author: "Georg Wilhelm Friedrich Hegel", authorId: "hegel", tags: ["recognition", "necessity", "understanding"], themes: ["freedom", "philosophical"], schools: ["philosophy"] },
  { text: "We are free only if we face the choices that shape our destiny.", author: "Ayn Rand", authorId: "ayn-rand", tags: ["free", "choices", "destiny"], themes: ["freedom", "philosophical"], schools: ["philosophy"] },

  // SIMPLE FREEDOMS
  { text: "Happiness is the absence of the striving for happiness.", author: "Chuang Tzu", authorId: "chuang-tzu", tags: ["happiness", "absence", "striving"], themes: ["freedom", "simple"], schools: ["philosophy"] },
  { text: "The simplest things are often the truest.", author: "Richard Bach", authorId: "richard-bach", tags: ["simplest", "truest", "things"], themes: ["freedom", "simple"], schools: ["literature"] },
  { text: "Freedom is not complicated—we make it so.", author: "Unknown", authorId: "unknown", tags: ["complicated", "make", "simple"], themes: ["freedom", "simple"], schools: ["motivational"] },
  { text: "The ability to simplify means to eliminate the unnecessary so that the necessary may speak.", author: "Hans Hofmann", authorId: "hans-hofmann", tags: ["simplify", "eliminate", "necessary"], themes: ["freedom", "simple"], schools: ["art"] },

  // FREEDOM THROUGH TRAVEL
  { text: "The world is a book and those who do not travel read only one page.", author: "Saint Augustine", authorId: "saint-augustine", tags: ["world", "book", "travel"], themes: ["freedom", "travel"], schools: ["religion"] },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien", authorId: "jrr-tolkien", tags: ["wander", "lost", "journey"], themes: ["freedom", "travel"], schools: ["literature"] },
  { text: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.", author: "Mark Twain", authorId: "mark-twain", tags: ["travel", "fatal", "prejudice"], themes: ["freedom", "travel"], schools: ["literature"] },
  { text: "Adventure is worthwhile in itself.", author: "Amelia Earhart", authorId: "amelia-earhart", tags: ["adventure", "worthwhile", "itself"], themes: ["freedom", "travel"], schools: ["aviation"] },

  // ULTIMATE FREEDOM
  { text: "The ultimate freedom is the freedom to be yourself.", author: "Unknown", authorId: "unknown", tags: ["ultimate", "be", "yourself"], themes: ["freedom", "ultimate"], schools: ["motivational"] },
  { text: "Freedom is what we do with what is done to us.", author: "Jean-Paul Sartre", authorId: "jean-paul-sartre", tags: ["done", "response", "agency"], themes: ["freedom", "ultimate"], schools: ["philosophy"] },
  { text: "To be free is to have achieved your life.", author: "Tennessee Williams", authorId: "tennessee-williams", tags: ["free", "achieved", "life"], themes: ["freedom", "ultimate"], schools: ["literature"] },
  { text: "Freedom is the right to be wrong, not the right to do wrong.", author: "John Diefenbaker", authorId: "john-diefenbaker", tags: ["wrong", "right", "ethics"], themes: ["freedom", "ultimate"], schools: ["politics"] },

  // INSPIRATIONAL FREEDOM
  { text: "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.", author: "Benjamin Franklin", authorId: "benjamin-franklin", tags: ["liberty", "safety", "temporary"], themes: ["freedom", "inspirational"], schools: ["politics"] },
  { text: "Freedom is never more than one generation away from extinction.", author: "Ronald Reagan", authorId: "ronald-reagan", tags: ["generation", "extinction", "never"], themes: ["freedom", "inspirational"], schools: ["politics"] },
  { text: "Live free or die: Death is not the worst of evils.", author: "John Stark", authorId: "john-stark", tags: ["live", "free", "die"], themes: ["freedom", "inspirational"], schools: ["politics"] },
  { text: "Freedom is the open window through which pours the sunlight of the human spirit and human dignity.", author: "Herbert Hoover", authorId: "herbert-hoover", tags: ["window", "sunlight", "spirit"], themes: ["freedom", "inspirational"], schools: ["politics"] },

  // FREEDOM AND NATURE
  { text: "The wild is not the opposite of civilization. It is what civilization is not.", author: "Michael Soulé", authorId: "michael-soule", tags: ["wild", "civilization", "opposite"], themes: ["freedom", "nature"], schools: ["environmentalism"] },
  { text: "In wildness is the preservation of the world.", author: "Henry David Thoreau", authorId: "henry-david-thoreau", tags: ["wildness", "preservation", "world"], themes: ["freedom", "nature"], schools: ["transcendentalism"] },
  { text: "The mountains are calling and I must go.", author: "John Muir", authorId: "john-muir", tags: ["mountains", "calling", "go"], themes: ["freedom", "nature"], schools: ["naturalism"] },
  { text: "Nature is not a place to visit. It is home.", author: "Gary Snyder", authorId: "gary-snyder", tags: ["nature", "place", "home"], themes: ["freedom", "nature"], schools: ["environmentalism"] },

  // FREEDOM OF CHOICE
  { text: "The most powerful freedom of all is the freedom to choose.", author: "Stephen Covey", authorId: "stephen-covey", tags: ["powerful", "choose", "most"], themes: ["freedom", "choice"], schools: ["self-help"] },
  { text: "Our lives are a sum total of the choices we have made.", author: "Wayne Dyer", authorId: "wayne-dyer", tags: ["lives", "sum", "choices"], themes: ["freedom", "choice"], schools: ["self-help"] },
  { text: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl", authorId: "viktor-frankl", tags: ["change", "situation", "ourselves"], themes: ["freedom", "choice"], schools: ["psychology"] },
  { text: "The doors we open and close each day decide the lives we live.", author: "Flora Whittemore", authorId: "flora-whittemore", tags: ["doors", "open", "close"], themes: ["freedom", "choice"], schools: ["motivational"] },

  // FREEDOM AND TRUTH
  { text: "You shall know the truth, and the truth shall make you free.", author: "John 8:32", authorId: "bible", tags: ["truth", "know", "make"], themes: ["freedom", "truth"], schools: ["religion"] },
  { text: "Freedom is the right to tell people what they need to hear, not what they want to hear.", author: "Unknown", authorId: "unknown", tags: ["right", "need", "want"], themes: ["freedom", "truth"], schools: ["motivational"] },
  
  // Bonus Freedom Quote
  { text: "Freedom is not the absence of commitments, but the ability to choose—and commit myself to—what is best for me.", author: "Paulo Coelho", authorId: "paulo-coelho", tags: ["commitments", "absence", "choose"], themes: ["freedom", "bonus"], schools: ["literature"] }
];

// Add unique IDs and timestamps
const formattedQuotes = freedomQuotes.map((quote, index) => ({
  ...quote,
  id: `freedom-${index + 1}`,
  createdAt: "2025-11-29",
  updatedAt: "2025-11-29"
}));

console.log("Formatted freedom quotes:", formattedQuotes.length);

// Write to a separate file for now
fs.writeFileSync('./freedom-quotes.json', JSON.stringify(formattedQuotes, null, 2));
console.log("Freedom quotes written to freedom-quotes.json");