export interface Quote {
  id: string;
  text: string;
  author: string;
  authorId: string;
  source?: string;
  sourceUrl?: string;
  tags: string[];
  themes: string[];
  schools: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  birthYear?: number;
  deathYear?: number;
  nationality?: string;
  era: string;
  bioShort: string;
  bioLong: string;
  schools: string[];
  imageUrl?: string;
  wikiUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export const quotes: Quote[] = [
  {
    id: "quote-1",
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    authorId: "socrates",
    source: "Apology",
    tags: ["self-reflection", "philosophy", "wisdom"],
    themes: ["life", "truth", "knowledge"],
    schools: ["ancient-greek"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-2",
    text: "You have power over your mind—not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    authorId: "marcus-aurelius",
    source: "Meditations",
    tags: ["stoicism", "resilience", "control"],
    themes: ["strength", "mind", "events"],
    schools: ["stoicism"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-3",
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    authorId: "albert-einstein",
    tags: ["opportunity", "difficulty", "growth"],
    themes: ["challenge", "opportunity", "perspective"],
    schools: ["modern-science"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-4",
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    authorId: "mahatma-gandhi",
    tags: ["change", "action", "responsibility"],
    themes: ["world", "change", "responsibility"],
    schools: ["peace", "non-violence"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-5",
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    authorId: "socrates",
    source: "Apology",
    tags: ["humility", "knowledge", "wisdom"],
    themes: ["knowledge", "humility", "truth"],
    schools: ["ancient-greek"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-6",
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    authorId: "lao-tzu",
    tags: ["journey", "progress", "beginning"],
    themes: ["journey", "progress", "perseverance"],
    schools: ["taoism"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-7",
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Eleanor Roosevelt",
    authorId: "eleanor-roosevelt",
    tags: ["present", "time", "gratitude"],
    themes: ["time", "present", "gratitude"],
    schools: ["modern-leadership"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "quote-8",
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    authorId: "aristotle",
    tags: ["hope", "darkness", "light"],
    themes: ["hope", "darkness", "perseverance"],
    schools: ["ancient-greek"],
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  }
];

export const authors: Author[] = [
  {
    id: "socrates",
    name: "Socrates",
    birthYear: 470,
    deathYear: 399,
    nationality: "Greek",
    era: "Ancient Greece",
    bioShort: "Greek philosopher from Athens, widely credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought.",
    bioLong: "Socrates was an ancient Greek philosopher and one of the founders of Western philosophy. He is among the first moral philosophers of the Western ethical tradition of thought. Socrates was allegedly a soldier in the Athenian army during the Peloponnesian War. Socrates believed that philosophy should achieve practical results for the greater well-being of society. He attempted to establish an ethical system based on human reason rather than theological doctrine. Socrates pointed out that human choice was motivated by the desire for happiness and well-being. He was notable for the fact that, despite having attracted the interest of the finest young men around him, he accepted his death sentence with composure.",
    schools: ["ancient-greek"],
    wikiUrl: "https://en.wikipedia.org/wiki/Socrates",
    featured: true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    birthYear: 121,
    deathYear: 180,
    nationality: "Roman",
    era: "Roman Empire",
    bioShort: "Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors.",
    bioLong: "Marcus Aurelius Antoninus was a Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace and stability for the Roman Empire lasting from 27 BC to 180 AD. He served as Roman consul in 140, 145, and 161. Marcus Aurelius wrote 'Meditations', which is considered one of the most important works of philosophy. In it, he reflected on how to create one's own character and live with virtue, expressing stoic beliefs about fate, remorse, and the nature of existence.",
    schools: ["stoicism"],
    wikiUrl: "https://en.wikipedia.org/wiki/Marcus_Aurelius",
    featured: true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    birthYear: 1879,
    deathYear: 1955,
    nationality: "German-American",
    era: "Modern Era",
    bioShort: "German-born theoretical physicist who developed the theory of relativity and is widely considered one of the most influential scientists of all time.",
    bioLong: "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity and is widely considered one of the most influential scientists of all time. He won the Nobel Prize in Physics in 1921 'for his services to Theoretical Physics, and especially for his discovery of the law of the photoelectric effect.' His work is also known for its influence on the philosophy of science. He published more than 300 scientific papers and more than 150 non-scientific works. His intellectual achievements and originality resulted in 'Einstein' becoming synonymous with 'genius'.",
    schools: ["modern-science"],
    wikiUrl: "https://en.wikipedia.org/wiki/Albert_Einstein",
    featured: true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    birthYear: 1869,
    deathYear: 1948,
    nationality: "Indian",
    era: "Modern Era",
    bioShort: "Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule.",
    bioLong: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. The honorific Mahātmā was applied to him first in 1914 in South Africa. In India, he was also called Bapu and Gandhiji. He is recognized as the Father of the Nation in post-colonial India. Gandhi's vision of an independent India based on religious pluralism was challenged in the early 1940s by a Muslim nationalism which demanded a separate homeland for Muslims.",
    schools: ["peace", "non-violence"],
    wikiUrl: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
    featured: true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "lao-tzu",
    name: "Lao Tzu",
    birthYear: -600,
    deathYear: -500,
    nationality: "Chinese",
    era: "Ancient China",
    bioShort: "Semi-legendary Chinese philosopher and writer, traditionally regarded as the founder of Taoism and author of the Tao Te Ching.",
    bioLong: "Laozi was a semi-legendary Chinese philosopher and writer. He is traditionally regarded as the founder of Taoism and is considered a deity in religious Taoism and various folk religions. Although a legendary figure, he is usually dated to around the 6th century BC and reckoned a contemporary of Confucius, but some historians contend that he actually lived during the Warring States period of the 5th or 4th century BC. Laozi is well known as the reputed author of the Tao Te Ching and the founder of philosophical Taoism, but he is also revered as a deity in religious Taoism and traditional Chinese folk religions.",
    schools: ["taoism"],
    wikiUrl: "https://en.wikipedia.org/wiki/Laozi",
    featured: false,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "aristotle",
    name: "Aristotle",
    birthYear: 384,
    deathYear: 322,
    nationality: "Greek",
    era: "Ancient Greece",
    bioShort: "Ancient Greek philosopher and polymath. Student of Plato and teacher of Alexander the Great.",
    bioLong: "Aristotle was an ancient Greek philosopher and polymath. He was a student of Plato and teacher of Alexander the Great. His writings cover many subjects including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theatre, music, rhetoric, psychology, linguistics, economics, politics, meteorology, geology and government. Aristotle provided a complex synthesis of the various philosophies existing prior to him. It was above all from his teachings that the West inherited its intellectual lexicon, as well as problems and methods of inquiry. As a result, his philosophy has exerted a unique influence on almost every form of knowledge in the West and it continues to be a subject of contemporary philosophical discussion.",
    schools: ["ancient-greek"],
    wikiUrl: "https://en.wikipedia.org/wiki/Aristotle",
    featured: true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  },
  {
    id: "eleanor-roosevelt",
    name: "Eleanor Roosevelt",
    birthYear: 1884,
    deathYear: 1962,
    nationality: "American",
    era: "Modern Era",
    bioShort: "American political figure, diplomat and activist. She served as the First Lady of the United States from 1933 to 1945 during her husband President Franklin D. Roosevelt's four terms in office.",
    bioLong: "Anna Eleanor Roosevelt was an American political figure, diplomat and activist. She served as the First Lady of the United States from 1933 to 1945 during her husband President Franklin D. Roosevelt's four terms in office, making her the longest-serving First Lady of the United States. President Harry S. Truman later called her the 'First Lady of the World' in tribute to her human rights achievements. Roosevelt was a delegate to the 1945 conference which drafted the UN Charter and later became the first chairperson of the UN Commission on Human Rights. In 1948, she oversaw the drafting of the Universal Declaration of Human Rights.",
    schools: ["modern-leadership"],
    wikiUrl: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt",
    featured: false,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01"
  }
];