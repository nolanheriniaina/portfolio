export interface Project {
  id: number;
  key: string;
  images: string[];
  tags: string[];
  year: string;
  duration: string;
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    key: "cfm",
    images: [
      "/images/projet/CFM/3.png",
      "/images/projet/CFM/4.png",
      "/images/projet/CFM/5.png",
      "/images/projet/CFM/8.png",
      "/images/projet/CFM/9.png",
      "/images/projet/CFM/10.png",
      "/images/projet/CFM/11.png",
    ],
    tags: ["Laravel", "Livewire", "Vue.js", "MySQL"],
    year: "2023",
    duration: "1 an",
  },
  {
    id: 2,
    key: "monument",
    images: [
      "/images/projet/GA/4.png",
      "/images/projet/GA/5.png",
      "/images/projet/GA/6.png",
      "/images/projet/GA/8.png",
      "/images/projet/GA/9.png",
      "/images/projet/GA/10.png",
      "/images/projet/GA/13.png",
      "/images/projet/GA/15.png",
      "/images/projet/GA/16.png",
      "/images/projet/GA/22.png",
    ],
    tags: ["React", "Ionic", "Capacitor", "Three.js"],
    year: "2025",
    duration: "6 mois",
  },
  {
    id: 3,
    key: "hotel",
    images: [
      "/images/projet/Matchroom/2.png",
      "/images/projet/Matchroom/3.png",
      "/images/projet/Matchroom/5.png",
      "/images/projet/Matchroom/8.png",
      "/images/projet/Matchroom/9.png",
      "/images/projet/Matchroom/11.png",
      "/images/projet/Matchroom/12.png",
      "/images/projet/Matchroom/14.png",
      "/images/projet/Matchroom/16.png",
    ],
    tags: ["Next.js", "Supabase", "Refine", "Stripe", "OpenGDS"],
    year: "2024",
    duration: "8 mois",
  },
  {
    id: 4,
    key: "events",
    images: [
      "/images/projet/Tedispo/7.png",
      "/images/projet/Tedispo/10.png",
      "/images/projet/Tedispo/11.png",
      "/images/projet/Tedispo/16.png",
      "/images/projet/Tedispo/18.png",
      "/images/projet/Tedispo/20.png",
    ],
    tags: ["React", "Ionic", "Firebase", "Capacitor", "Strapi"],
    year: "2022",
    duration: "8 mois",
  },
];