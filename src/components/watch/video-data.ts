import type { StaticImageData } from "next/image";
import img118 from "@/assets/images/watch/118.webp";
import img119 from "@/assets/images/watch/119.webp";
import img120 from "@/assets/images/watch/120.webp";
import img121 from "@/assets/images/watch/121.webp";
import img122 from "@/assets/images/watch/122.webp";
import img123 from "@/assets/images/watch/123.webp";
import img124 from "@/assets/images/watch/124.webp";
import img125 from "@/assets/images/watch/125.webp";
import img126 from "@/assets/images/watch/126.webp";
import img131 from "@/assets/images/watch/131.webp";
import img132 from "@/assets/images/watch/132.webp";
import img133 from "@/assets/images/watch/133.webp";
import img134 from "@/assets/images/watch/134.webp";
import img135 from "@/assets/images/watch/135.webp";
import img136 from "@/assets/images/watch/136.webp";
import type { IconName } from "@/components/icons/icon-data";

export type VideoCategory = "cikoza" | "oral" | "masterclass" | "poetry" | "radio" | "grammar";

export type Video = {
  id: string;
  title: string;
  mobileTitle: string;
  description: string;
  category: VideoCategory;
  label: string;
  tone: string;
  duration: string;
  seconds: number;
  views: number;
  date: string;
  image: StaticImageData;
  mobileImage: StaticImageData;
  alt: string;
  cta: string;
};

export const VIDEOS: Video[] = [
  {
    id: "matobo-fireside",
    title: "Elder Fireside Stories: The Origins of Matobo Rock Formations",
    mobileTitle: "Elder Fireside Stories: Origins of Matobo Rock Formations",
    description: "Gogo MaNyathi narrates the age-old folklore describing how the giant balancing rocks of Matobo were gathered by ancient guardians.",
    category: "oral",
    label: "Oral Folktales",
    tone: "bg-primary-container text-on-primary",
    duration: "18:32",
    seconds: 1112,
    views: 8400,
    date: "2024-09-24",
    image: img118,
    mobileImage: img131,
    alt: "An Ndebele elder beside an evening fire beneath the granite boulders of the Matobo Hills",
    cta: "Watch Story",
  },
  {
    id: "makhalisa-keynote",
    title: "Dr. Barbara C. Makhalisa Keynote: Safeguarding Mother-Tongues in the Digital Age",
    mobileTitle: "Dr. Barbara C. Makhalisa Keynote: Mother-Tongues in the Digital Age",
    description: "A seminal lecture on linguistic agency, modern publishing challenges in Zimbabwe, and why digitization must preserve indigenous vocabulary.",
    category: "masterclass",
    label: "Masterclasses",
    tone: "bg-primary-container text-on-primary",
    duration: "28:10",
    seconds: 1690,
    views: 12100,
    date: "2024-09-01",
    image: img119,
    mobileImage: img132,
    alt: "Dr. Barbara Makhalisa lecturing to literature students in front of bookshelves",
    cta: "Watch Masterclass",
  },
  {
    id: "inyoni-yenkosi",
    title: "Izibongo Poetry Slam Final: Mpumelelo Sibanda Performs 'Inyoni Yenkosi'",
    mobileTitle: "Izibongo Poetry Slam Final: Mpumelelo Sibanda Performs 'Inyoni Yenkosi'",
    description: "The winning performance from the Luveve High representative, combining historical royal praise registers with modern urban youth cadence.",
    category: "poetry",
    label: "Poetry Slams",
    tone: "bg-secondary-container text-on-secondary-fixed",
    duration: "06:45",
    seconds: 405,
    views: 22300,
    date: "2024-08-15",
    image: img120,
    mobileImage: img133,
    alt: "A high school poet performing spoken word on stage under dramatic lighting",
    cta: "Watch Performance",
  },
  {
    id: "radio-ep-45",
    title: "Spheth'Imfundw'Emoyeni Ep. 45: Live Studio Dramatization of Traditional Proverbs",
    mobileTitle: "Spheth'Imfundw'Emoyeni Ep. 45: Live Studio Proverbs Dramatization",
    description: "Broadcast live from Skyz Metro FM, exploring situational conflict resolution through classic moral maxims and communal dialogues.",
    category: "radio",
    label: "Radio Broadcasts",
    tone: "bg-primary-container text-on-primary",
    duration: "42:15",
    seconds: 2535,
    views: 15600,
    date: "2024-07-20",
    image: img121,
    mobileImage: img134,
    alt: "Voice actors performing a radio drama in the Skyz Metro FM studio",
    cta: "Listen Episode",
  },
  {
    id: "idioms-clinic",
    title: "Pronunciation & Idioms Clinic: Understanding Izaga Lezisho in Daily Conversation",
    mobileTitle: "Pronunciation & Idioms Clinic: Understanding Izaga Lezisho",
    description: "Learn nuanced tone inflections, agglutinative prefixes, and figurative nuances behind twenty essential idiomatic expressions.",
    category: "grammar",
    label: "Language Clinics",
    tone: "bg-tertiary-container text-on-tertiary",
    duration: "15:50",
    seconds: 950,
    views: 9800,
    date: "2024-06-18",
    image: img122,
    mobileImage: img135,
    alt: "A linguist pointing to Ndebele idioms written on a classroom whiteboard",
    cta: "Start Lesson",
  },
  {
    id: "writing-incubator",
    title: "Youth Writing Incubator: How to Craft Compelling Short Fiction in isiNdebele",
    mobileTitle: "Youth Writing Incubator: Crafting Short Fiction in isiNdebele",
    description: "Step-by-step masterclass covering narrative pacing, dialect fidelity, and modern character arcs by Usisi Omkhulu fellowship mentors.",
    category: "masterclass",
    label: "Masterclasses",
    tone: "bg-primary-container text-on-primary",
    duration: "21:05",
    seconds: 1265,
    views: 7200,
    date: "2024-05-12",
    image: img123,
    mobileImage: img123,
    alt: "Young writers collaborating with laptops and notebooks in a workshop studio",
    cta: "Watch Masterclass",
  },
  {
    id: "mhlahlandlela-recital",
    title: "Mhlahlandlela Evening Recital: Traditional Thumb-Piano & Praise Chants",
    mobileTitle: "Mhlahlandlela Evening Recital: Thumb-Piano & Praise Chants",
    description: "A captivating acoustic evening linking melodic thumb-piano rhythms with Entumbane historical chants by Bulawayo master vocalists.",
    category: "cikoza",
    label: "Festival Highlights",
    tone: "bg-secondary-container text-on-secondary-fixed",
    duration: "12:40",
    seconds: 760,
    views: 11500,
    date: "2024-04-10",
    image: img124,
    mobileImage: img124,
    alt: "A musician playing the mbira on stage at a night festival in Bulawayo",
    cta: "Watch Recital",
  },
  {
    id: "drama-adaptation",
    title: "High School Drama Adaptation: Excerpts from Inyoka Yomthombo",
    mobileTitle: "High School Drama Adaptation: Inyoka Yomthombo",
    description: "A vibrant student stage performance exploring folklore motifs, community moral choices, and classic dramatic tension.",
    category: "cikoza",
    label: "Drama & Theatre",
    tone: "bg-primary-container text-on-primary",
    duration: "19:15",
    seconds: 1155,
    views: 14200,
    date: "2024-03-05",
    image: img125,
    mobileImage: img125,
    alt: "High school actors performing a play on a wooden auditorium stage",
    cta: "Watch Performance",
  },
  {
    id: "unogwaja-animation",
    title: "Folktale Animation: Why the Hare Has Long Ears (UNogwaja)",
    mobileTitle: "Folktale Animation: Why the Hare Has Long Ears (UNogwaja)",
    description: "A colorful illustrated adaptation designed for young learners and mother-tongue early reading classrooms across Matabeleland.",
    category: "oral",
    label: "Animated Stories",
    tone: "bg-secondary-container text-on-secondary-fixed",
    duration: "09:22",
    seconds: 562,
    views: 34100,
    date: "2024-02-14",
    image: img126,
    mobileImage: img136,
    alt: "An animated illustration of a clever hare beneath a baobab tree",
    cta: "Watch Animation",
  },
];

export const CATEGORIES: { key: VideoCategory | "all"; label: string; short: string; icon: IconName }[] = [
  { key: "all", label: "All Videos (120+)", short: "All Videos", icon: "grid_view" },
  { key: "cikoza", label: "Festival Highlights (Cikoza Sizwe)", short: "Festival Highlights", icon: "celebration" },
  { key: "oral", label: "Oral Folktales & Storytelling", short: "Oral Folktales", icon: "local_fire_department" },
  { key: "masterclass", label: "Author Masterclasses", short: "Masterclasses", icon: "school" },
  { key: "poetry", label: "High School Poetry Slams (Izibongo)", short: "Poetry (Izibongo)", icon: "mic" },
  { key: "radio", label: "Radio Broadcasts (Skyz Metro FM)", short: "Radio Lessons", icon: "radio" },
  { key: "grammar", label: "Language & Grammar Clinics", short: "Language Clinics", icon: "translate" },
];

export function formatViews(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K` : String(n);
}

export function formatMonth(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
}
