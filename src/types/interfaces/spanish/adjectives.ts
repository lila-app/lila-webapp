export interface SpanishAdjective {
  id: string;
  created_at: Date;
  adjective_singular_masculine: string;
  ipa_singular_masculine: string;
  audio_links_singular_masculine: string[];
  syllabification_singular_masculine: string;
  adjective_singular_feminine: string;
  ipa_singular_feminine: string;
  audio_links_singular_feminine: string[];
  syllabification_singular_feminine: string;
  adjective_plural_masculine: string;
  ipa_plural_masculine: string;
  audio_links_plural_masculine: string[];
  syllabification_plural_masculine: string;
  adjective_plural_feminine: string;
  ipa_plural_feminine: string;
  audio_links_plural_feminine: string[];
  syllabification_plural_feminine: string;
  difficulty: "easy" | "middle" | "hard";
  english_translations: string[];
  french_translations: string[];
  italian_translations: string[];
  german_translations: string[];
}
