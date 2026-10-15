import type { StaticImageData } from "next/image";
import img105 from "@/assets/images/lessons/105.webp";
import img106 from "@/assets/images/lessons/106.webp";
import img107 from "@/assets/images/lessons/107.webp";
import img108 from "@/assets/images/lessons/108.webp";
import img109 from "@/assets/images/lessons/109.webp";
import img110 from "@/assets/images/lessons/110.webp";
import img112 from "@/assets/images/lessons/112.webp";
import img113 from "@/assets/images/lessons/113.webp";
import img114 from "@/assets/images/lessons/114.webp";
import img115 from "@/assets/images/lessons/115.webp";
import img116 from "@/assets/images/lessons/116.webp";
import type { Cue } from "@/components/ui/player";

export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Kind = "audio" | "video";

/** The "Oral Literature & Grammar Series" course queue shown beside the player. */
export type QueueLesson = { id: number; title: string; short: string; kind: Kind; duration: string; seconds: number; level: Level };

export const QUEUE: QueueLesson[] = [
  { id: 1, title: "Lesson 01: Ndebele Phonetics & Click Sounds (C, Q, X)", short: "01. Phonetics & Click Sounds", kind: "audio", duration: "12:40", seconds: 760, level: "Beginner" },
  { id: 2, title: "Lesson 02: Greetings & Kinship Honorifics (Ukubingelela)", short: "02. Formal Greetings: Ukubingelela", kind: "video", duration: "18:15", seconds: 1095, level: "Beginner" },
  { id: 3, title: "Lesson 03: Noun Classes & Concordial Agreement (Izigaba Zamabizo)", short: "03. Noun Classes & Concords", kind: "video", duration: "22:30", seconds: 1350, level: "Intermediate" },
  { id: 4, title: "Lesson 04: Understanding Ndebele Proverbs & Metaphorical Idioms (Izaga Lezisho)", short: "04. Izaga Lezisho In Depth", kind: "video", duration: "25:00", seconds: 1500, level: "Intermediate" },
  { id: 5, title: "Lesson 05: Traditional Praise Poetry Deconstructed (Izibongo)", short: "05. Praise Poetry Deconstructed", kind: "audio", duration: "31:10", seconds: 1870, level: "Advanced" },
  { id: 6, title: "Lesson 06: Folktale Narration Techniques & Tone Modulation", short: "06. Folktale Narration & Tone", kind: "video", duration: "19:45", seconds: 1185, level: "Intermediate" },
  { id: 7, title: "Lesson 07: Modern Prose Syntax & Creative Writing", short: "07. Prose Syntax & Creative Writing", kind: "audio", duration: "28:00", seconds: 1680, level: "Advanced" },
];

export const COURSE_TOTAL = 12;

/** Caption cues for the featured lesson, built from the proverbs taught in it. */
export const CUES: Cue[] = [
  { at: 0, nde: "Izaga lezisho", en: "Proverbs and idioms of isiNdebele" },
  { at: 860, nde: "Injobo enhle ithungelwa ebandla", en: "“A good skirt is sewn in public council”" },
  { at: 900, nde: "Ukuhamba kubona", en: "“Traveling brings sight”" },
  { at: 940, nde: "Ukuphosa itshe esizibeni", en: "“To cast a stone into a deep pool”" },
  { at: 980, nde: "Isalakutshelwa sabona ngomopho", en: "“The obstinate one witnessed via blood flow”" },
  { at: 1020, nde: "Izaga lezisho", en: "Proverbs and idioms of isiNdebele" },
];

export const PROVERBS = [
  {
    term: "Injobo enhle ithungelwa ebandla",
    literal: "“A good skirt is sewn in public council”",
    meaning: "Best results are achieved when seeking wise counsel from peers and elders.",
  },
  {
    term: "Ukuhamba kubona",
    literal: "“Traveling brings sight”",
    meaning: "Experience and broader journeys broaden wisdom more than solitary reflection.",
  },
  {
    term: "Ukuphosa itshe esizibeni",
    literal: "“To cast a stone into a deep pool”",
    meaning: "Idiom: To raise a provocative topic or venture into uncharted thoughts.",
  },
  {
    term: "Isalakutshelwa sabona ngomopho",
    literal: "“The obstinate one witnessed via blood flow”",
    meaning: "Those who refuse wise warnings will invariably learn through painful consequences.",
  },
];

export type ModuleKey = "all" | "oral" | "grammar" | "conversation" | "poetry";

export const MODULES: { key: ModuleKey; label: string }[] = [
  { key: "all", label: "All Modules" },
  { key: "oral", label: "Oral Literature & Folklore" },
  { key: "grammar", label: "Grammar & Orthography" },
  { key: "conversation", label: "Conversational Syntax" },
  { key: "poetry", label: "Poetry & Praise Songs" },
];

export type ArchiveLesson = {
  id: string;
  title: string;
  mobileTitle: string;
  blurb: string;
  mobileBlurb: string;
  kind: Kind;
  level: Level;
  mins: number;
  category: string;
  topic: string;
  module: ModuleKey;
  instructor: string;
  image: StaticImageData;
  mobileImage: StaticImageData;
  alt: string;
};

export const ARCHIVE: ArchiveLesson[] = [
  {
    id: "click-consonants",
    title: "Mastering Click Consonants (C, Q, X) in Daily Speech",
    mobileTitle: "Mastering Click Consonants (C, Q, X)",
    blurb: "Detailed acoustic exercises for dental, palatal, and lateral click production with native phonetic drills.",
    mobileBlurb: "Clear acoustic demonstrations for pronouncing dental, palatal, and lateral clicks correctly.",
    kind: "audio",
    level: "Beginner",
    mins: 15,
    category: "Phonetics Clinic",
    topic: "Phonetics",
    module: "grammar",
    instructor: "Sithandazile Dube",
    image: img105,
    mobileImage: img112,
    alt: "A vocal coach demonstrating click mouth shapes in a recording studio",
  },
  {
    id: "inyoka-analysis",
    title: "High School Literature Text Analysis: Inyoka Yomthombo",
    mobileTitle: "Text Analysis: Inyoka Yomthombo",
    blurb: "Deep thematic breakdown of plot, metaphor, social critique, and character motivations in prescribed novels.",
    mobileBlurb: "Critical literary examination of allegories, prose structure, and character metaphors in contemporary fiction.",
    kind: "video",
    level: "Advanced",
    mins: 34,
    category: "ZIMSEC Curriculum",
    topic: "Literature",
    module: "oral",
    instructor: "Dr. Thabani Moyo",
    image: img106,
    mobileImage: img113,
    alt: "An educator pointing at Ndebele literature excerpts in a sunlit seminar room",
  },
  {
    id: "market-phrases",
    title: "Everyday Conversational Phrases for Bulawayo Markets",
    mobileTitle: "Conversational Market Phrases",
    blurb: "Practical everyday dialogue, currency naming, bargaining etiquette, and polite communal greetings.",
    mobileBlurb: "Practical vocabulary for trade, asking prices, polite bargaining, and respectful social exchanges.",
    kind: "video",
    level: "Beginner",
    mins: 20,
    category: "Conversational Fluency",
    topic: "Daily Life",
    module: "conversation",
    instructor: "Gugulethu Khumalo",
    image: img107,
    mobileImage: img114,
    alt: "A lively Bulawayo market with vendors selling produce and crafts",
  },
  {
    id: "radio-folklore",
    title: "Skyz Metro FM Radio Class: Folklore Dramatic Reading",
    mobileTitle: "Skyz Metro FM Folklore Class",
    blurb: "Broadcast archive dramatizing Matabeleland legends with traditional percussion cues and voice inflections.",
    mobileBlurb: "Elders archive session featuring Mhlahlandlela and Entumbane oral traditions broadcast live from Bulawayo.",
    kind: "audio",
    level: "Intermediate",
    mins: 42,
    category: "Radio Archives",
    topic: "Broadcast",
    module: "oral",
    instructor: "Usisi Omkhulu",
    image: img108,
    mobileImage: img115,
    alt: "A radio studio booth with a condenser microphone and an elder storyteller",
  },
  {
    id: "relative-clauses",
    title: "Constructing Complex Relative Clauses & Adjectives",
    mobileTitle: "Complex Relative Clauses",
    blurb: "Unpacking concordial agreements between qualifying nouns and descriptive relative clauses with precision.",
    mobileBlurb: "Formulating descriptive subordinate clauses with precision using practical oral drills.",
    kind: "video",
    level: "Intermediate",
    mins: 27,
    category: "Morphology & Syntax",
    topic: "Grammar",
    module: "grammar",
    instructor: "Bhekizulu Nyathi",
    image: img109,
    mobileImage: img116,
    alt: "An educator diagramming grammatical prefixes on a whiteboard",
  },
  {
    id: "royal-praise-names",
    title: "The Art of Royal Praise Names (Izangelo Zamakhosi)",
    mobileTitle: "The Art of Royal Praise Names",
    blurb: "Literary analysis of praise names dedicated to King Mzilikazi and King Lobengula with rhythm notation.",
    mobileBlurb: "Literary analysis of royal praise names with rhythm notation and historical context.",
    kind: "audio",
    level: "Advanced",
    mins: 38,
    category: "Oral Epic Poetry",
    topic: "Poetry",
    module: "poetry",
    instructor: "Mthokozisi Ndlovu",
    image: img110,
    mobileImage: img110,
    alt: "Ceremonial Matabeleland attire and a carved wooden staff",
  },
];
