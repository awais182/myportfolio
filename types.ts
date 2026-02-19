
export enum Role {
  SOFTWARE_ENGINEER = 'Software Engineer',
  SYSTEMS_ENGINEER = 'Systems & Networking Engineer',
  DATA_ANALYST = 'Data Analyst',
  RD_ENGINEER = 'R&D & Critical Thinking',
  GRAPHIC_DESIGNER = 'Graphic Designer',
  ANNOTATION_ENGINEER = 'Annotation Engineer'
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  roles: Role[];
  image: string;
  tech: string[];
}
