export interface SpanishNoun {
  id: string;
  word: string;
  ipa: string;
  grammaticalGender: "masculine" | "feminine";
  plural: string;
  syllabification: string;
  linkToAudioFile: string;
  english_translations: string[];
  french_translations: string[];
  italian_translations: string[];
  german_translations: string[];
}
