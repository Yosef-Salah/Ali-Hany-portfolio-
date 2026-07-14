export interface Project {
  id: string;
  title: string;
  category: 'ERP' | 'Backend' | 'Frontend' | 'Graphics' | 'Systems';
  year: string;
  client: string;
  role: string;
  description: string;
  longDescription: string;
  image: string;
  secondaryImages: string[];
  tags: string[];
  brandColors: string[];
  typography: string[];
  metrics?: {
    label: string;
    value: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
