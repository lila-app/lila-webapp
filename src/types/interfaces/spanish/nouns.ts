export interface SpanishNoun {
  id: string;
  created_at: Date;
  noun_singular: string;
  ipa_singular: string;
  audio_links_singular: string;
  syllabification_singular: string;
  noun_plural: string;
  ipa_plural: string;
  audio_links_plural: string;
  syllabification_plural: string;
  grammaticalGender: "masculine" | "feminine";
  difficulty: "easy" | "middle" | "hard";
  english_translations: string[];
  french_translations: string[];
  italian_translations: string[];
  german_translations: string[];
}
