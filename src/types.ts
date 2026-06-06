export type Page = 'home' | 'about' | 'programs' | 'gallery' | 'stories' | 'donate' | 'volunteer' | 'contact';

export interface ChildrenStory {
  id: string;
  name: string;
  age: number;
  image: string;
  excerpt: string;
  fullStory: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}
