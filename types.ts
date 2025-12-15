export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100 for chart
  category: 'Backend' | 'Frontend' | 'Tools' | 'Languages';
}

export interface Education {
  institution: string;
  degree: string;
  details?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}