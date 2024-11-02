export interface SpanishAdverb {
  id: string;
  created_at: Date;
  adverb: string;
  ipa: string;
  syllabification: string;
  audio_links: string[];
  difficulty: "easy" | "middle" | "hard";
  english_translations: string[];
  french_translations: string[];
  italian_translations: string[];
  german_translations: string[];
}
