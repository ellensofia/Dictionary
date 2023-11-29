interface Phonetic {
  text: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export interface Word {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
  synonyms?: string[];
  antonyms?: string[];
  license?: {
    name: string;
    url: string;
  };
  sourceUrls?: string[];
}
