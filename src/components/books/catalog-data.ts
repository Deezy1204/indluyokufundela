import type { StaticImageData } from "next/image";
import img035 from "@/assets/images/books/035.webp";
import img036 from "@/assets/images/books/036.webp";
import img037 from "@/assets/images/books/037.webp";
import img038 from "@/assets/images/books/038.webp";
import img039 from "@/assets/images/books/039.webp";
import img040 from "@/assets/images/books/040.webp";
import img045 from "@/assets/images/books/045.webp";
import img046 from "@/assets/images/books/046.webp";
import img047 from "@/assets/images/books/047.webp";
import img048 from "@/assets/images/books/048.webp";

export type CategoryKey = "folktales" | "anthologies" | "children" | "poetry" | "novels" | "reference" | "history";
export type FormatKey = "all" | "print" | "digital";
export type SortKey = "featured" | "price-asc" | "price-desc" | "newest" | "rating";

export type Book = {
  id: string;
  title: string;
  author: string;
  tags: CategoryKey[];
  label: string;
  /** Badge colours from the design for this book's category chip. */
  tone: string;
  formats: Exclude<FormatKey, "all">[];
  price: number;
  rating: number;
  reviews: number;
  released: number;
  blurb: string;
  image: StaticImageData;
  mobileImage: StaticImageData;
  alt: string;
};

export const BOOKS: Book[] = [
  {
    id: "kukhuluma-abadala",
    title: "Kukhuluma Abadala: Elder Voices",
    author: "Mthokozisi Ndebele",
    tags: ["folktales", "history"],
    label: "Folktales & Oral History",
    tone: "bg-primary text-on-primary",
    formats: ["print", "digital"],
    price: 12,
    rating: 5,
    reviews: 32,
    released: 2023,
    blurb:
      "First-hand transcriptions of 35 traditional Matabeleland fireside folktales, complete with linguistic commentary and moral parables.",
    image: img035,
    mobileImage: img045,
    alt: "Cover of Kukhuluma Abadala: Elder Voices — an elder storyteller by a village hearth under a starry sky",
  },
  {
    id: "izibongo-zenyathi",
    title: "Izibongo Zenyathi: High School Poetry Anthology",
    author: "Edited by Dr. Thabani Moyo",
    tags: ["anthologies", "poetry"],
    label: "Poetry & Curriculum",
    tone: "bg-secondary-fixed text-on-secondary-fixed",
    formats: ["print"],
    price: 10.5,
    rating: 5,
    reviews: 51,
    released: 2024,
    blurb:
      "Official competition anthology featuring winning student praise-poetry from the 4th Biennial Cikoza Sizwe Literature Festival.",
    image: img036,
    mobileImage: img046,
    alt: "Cover of Izibongo Zenyathi — red, yellow and royal blue shield silhouettes with quill feathers",
  },
  {
    id: "ugogo-nomntwana",
    title: "Ugogo Nomntwana: Bedtime Stories",
    author: "Lindiwe Sibanda",
    tags: ["children", "folktales"],
    label: "Children's Illustrated",
    tone: "bg-tertiary-fixed text-on-tertiary-fixed",
    formats: ["print"],
    price: 8.5,
    rating: 5,
    reviews: 27,
    released: 2025,
    blurb:
      "Delightful bedtime stories in accessible isiNdebele and parallel English text, designed for early childhood reading development.",
    image: img037,
    mobileImage: img047,
    alt: "Cover of Ugogo Nomntwana — a grandmother and child reading by warm lamplight",
  },
  {
    id: "inyoka-yomthombo",
    title: "Inyoka Yomthombo: Modern Prose Fiction",
    author: "Bheki Khumalo",
    tags: ["novels"],
    label: "Contemporary Novel",
    tone: "bg-primary-fixed text-on-primary-fixed",
    formats: ["print", "digital"],
    price: 13,
    rating: 4.8,
    reviews: 19,
    released: 2025,
    blurb:
      "An evocative contemporary coming-of-age novel exploring youth identity, urban migration to Bulawayo, and family ties.",
    image: img038,
    mobileImage: img048,
    alt: "Cover of Inyoka Yomthombo — Bulawayo streets under a dramatic African sunset",
  },
  {
    id: "ulilimi-lwami",
    title: "Ulilimi Lwami: Orthography & Grammar Guide",
    author: "Prof. S. Ndlovu",
    tags: ["reference", "anthologies"],
    label: "Scholastic & Reference",
    tone: "bg-surface-container text-on-surface",
    formats: ["print", "digital"],
    price: 16,
    rating: 5,
    reviews: 43,
    released: 2022,
    blurb:
      "A comprehensive grammatical reference guide standardizing modern written isiNdebele for teachers, editors, and students.",
    image: img039,
    mobileImage: img039,
    alt: "Cover of Ulilimi Lwami — navy blue with gold foil typography and a scholastic seal",
  },
  {
    id: "radio-play-scripts",
    title: "Spheth'Imfundw'Emoyeni: Radio Play Scripts",
    author: "Broadcasting Collective",
    tags: ["anthologies"],
    label: "Drama & Radio",
    tone: "bg-secondary-fixed text-on-secondary-fixed",
    formats: ["digital"],
    price: 11.5,
    rating: 5,
    reviews: 38,
    released: 2024,
    blurb:
      "Original broadcast scripts from the popular Skyz Metro FM literature radio series, arranged for school dramatic performances.",
    image: img040,
    mobileImage: img040,
    alt: "Cover of the Radio Play Scripts anthology — a retro microphone, soundwaves and theatre masks",
  },
];

/** Every purchasable or pre-orderable title, so the reading bag can price and name items. */
export const PRODUCTS: Record<string, { title: string; price: number; preorder?: boolean }> = {
  "izaga-lezisho": { title: "Izaga Lezisho: The Living Treasury of Ndebele Wisdom", price: 14.5 },
  "imilayezo-yabazali": { title: "Imilayezo Yabazali", price: 11 },
  "echoes-of-mhlahlandlela": { title: "Echoes of Mhlahlandlela", price: 13.5 },
  "childrens-folktales": { title: "Children's Folktales", price: 9 },
  "voices-of-matobo": { title: "Voices of Matobo: Sacred Hills and Unwritten Tales", price: 15, preorder: true },
  "hare-and-baboon": { title: "The Adventures of Hare & Baboon (UNogwaja LoDlovu)", price: 9.5, preorder: true },
  "cikoza-sizwe-anthology": { title: "Cikoza Sizwe: The Fifth Biennial Commemorative Anthology", price: 14, preorder: true },
  ...Object.fromEntries(BOOKS.map((b) => [b.id, { title: b.title, price: b.price }])),
};

export const DESKTOP_CATEGORIES: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "All Literature" },
  { key: "folktales", label: "Folktales & Folklore" },
  { key: "anthologies", label: "High School Anthologies" },
  { key: "children", label: "Children's Illustrated" },
  { key: "poetry", label: "Poetry (Izibongo)" },
  { key: "novels", label: "Contemporary Novels" },
  { key: "history", label: "Biographies & History" },
];

export const MOBILE_CATEGORIES: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "All Literature" },
  { key: "folktales", label: "Folktales" },
  { key: "anthologies", label: "High School" },
  { key: "children", label: "Children's" },
  { key: "poetry", label: "Poetry" },
  { key: "novels", label: "Novels" },
  { key: "reference", label: "Reference" },
];

export function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}
