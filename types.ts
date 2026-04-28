export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  techStack: string[];
  type: 'professional' | 'personal';
  platform?: 'ios' | 'web';
  image?: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Backend' | 'Frontend' | 'Tools' | 'Languages' | 'AI';
  icon: string[];
  fallback?: string;
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