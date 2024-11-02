export interface SpanishVerb {
  id: string;
  created_at: Date;
  word: string;
  ipa: string;
  syllabification: string;
  linkToAudioFile: string;
  english_translations: string[];
  french_translations: string[];
  italian_translations: string[];
  german_translations: string[];
}
