export type CareerId =
  | 'ai-engineer'
  | 'ml-engineer'
  | 'data-scientist'
  | 'ai-researcher'
  | 'nlp-engineer'
  | 'cv-engineer'
  | 'ai-pm'
  | 'ai-entrepreneur';

export interface CareerProgressionStage {
  title: string;
  experience: string;
  focus: string;
}

export interface RoadmapStage {
  stageNumber: number;
  title: string;
  description: string;
  keyTopics: string[];
  recommendedTools: string[];
  estimatedWeeks: string;
}

export interface ProjectRecommendation {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  skillsLearned: string[];
}

export interface Career {
  id: CareerId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keySkills: string[];
  technologies: string[];
  personalityFit: string[];
  whatTheyDo: string[];
  industryApplications: string[];
  careerProgression: CareerProgressionStage[];
  roadmap: RoadmapStage[];
  projects: ProjectRecommendation[];
  skillsToDevelop: string[];
}

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  scores: Partial<Record<CareerId, number>>;
  strengths: string[];
}

export interface AssessmentQuestion {
  id: number;
  category: string;
  text: string;
  helperText?: string;
  options: QuestionOption[];
}

export interface CareerMatchScore {
  careerId: CareerId;
  career: Career;
  score: number;
  percentage: number;
  fitSnippet: string;
}

export interface AssessmentResult {
  topCareer: CareerMatchScore;
  otherMatches: CareerMatchScore[];
  identifiedStrengths: string[];
  skillsToDevelop: string[];
  explanation: string;
  completedAt: string;
  rawAnswers: Record<number, string>;
}
