import { CAREERS } from '../data/careersData';
import { ASSESSMENT_QUESTIONS } from '../data/assessmentQuestions';
import { CareerId, AssessmentResult, CareerMatchScore, RoadmapStage, ProjectRecommendation } from '../types';

const STORAGE_KEY = 'ai_career_navigator_result';

/**
 * Calculates career recommendations based on the user's assessment answers.
 * Uses a weighted multi-factor scoring model that aggregates points across
 * 8 distinct career paths, normalizes them into percentage match rates,
 * and extracts personalized strengths and dynamic fit explanations.
 *
 * @param answers Map of question id to chosen option id (e.g., { 1: '1a', 2: '2b', ... })
 * @returns AssessmentResult object containing top match, ranked runners-up, strengths, and explanation.
 */
export function calculateAssessmentResult(answers: Record<number, string>): AssessmentResult {
  // Initialize tally for all 8 career categories
  const scoreTally: Record<CareerId, number> = {
    'ai-engineer': 0,
    'ml-engineer': 0,
    'data-scientist': 0,
    'ai-researcher': 0,
    'nlp-engineer': 0,
    'cv-engineer': 0,
    'ai-pm': 0,
    'ai-entrepreneur': 0
  };

  const gatheredStrengths: string[] = [];
  const selectedOptionsDetails: { questionCategory: string; optionLabel: string }[] = [];

  // Iterate over each question to evaluate chosen options
  for (const question of ASSESSMENT_QUESTIONS) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const chosenOption = question.options.find(opt => opt.id === selectedOptionId);
    if (!chosenOption) continue;

    // Record selected detail for context synthesis
    selectedOptionsDetails.push({
      questionCategory: question.category,
      optionLabel: chosenOption.label
    });

    // Add points to relevant career paths
    for (const [careerId, points] of Object.entries(chosenOption.scores)) {
      if (careerId in scoreTally && points) {
        scoreTally[careerId as CareerId] += points;
      }
    }

    // Collect strengths demonstrated by this choice
    if (chosenOption.strengths) {
      gatheredStrengths.push(...chosenOption.strengths);
    }
  }

  // De-duplicate and select top representative strengths (up to 5)
  const uniqueStrengths = Array.from(new Set(gatheredStrengths)).slice(0, 5);

  // Find max theoretical or observed score for proportional normalization
  const scoresArray = Object.entries(scoreTally) as [CareerId, number][];
  const maxScore = Math.max(...scoresArray.map(([, score]) => score), 1);

  // Sort careers by raw score descending
  scoresArray.sort((a, b) => b[1] - a[1]);

  // Convert raw scores into calibrated match percentages (top score typically 85-95%)
  const rankedMatches: CareerMatchScore[] = scoresArray.map(([careerId, rawScore], index) => {
    const career = CAREERS.find(c => c.id === careerId)!;
    
    // Calibration formula: scales highest score to roughly 86-96%, and spreads others proportionally
    let percentage = Math.round((rawScore / maxScore) * 88) + (index === 0 ? 6 : Math.max(0, 4 - index));
    if (percentage > 98) percentage = 98;
    if (percentage < 35) percentage = 35;

    return {
      careerId,
      career,
      score: rawScore,
      percentage,
      fitSnippet: generateFitSnippet(careerId, rawScore, maxScore)
    };
  });

  const topMatch = rankedMatches[0];
  const otherMatches = rankedMatches.slice(1, 5); // top 4 runners-up

  // Generate dynamic explanation based on user selections
  const explanation = generateCareerExplanation(topMatch.careerId, answers, uniqueStrengths);

  // Specific skills to develop for this top career
  const skillsToDevelop = topMatch.career.skillsToDevelop;

  return {
    topCareer: topMatch,
    otherMatches,
    identifiedStrengths: uniqueStrengths,
    skillsToDevelop,
    explanation,
    completedAt: new Date().toISOString(),
    rawAnswers: answers
  };
}

/**
 * Generates a concise fit snippet for runner-up cards.
 */
function generateFitSnippet(careerId: CareerId, score: number, maxScore: number): string {
  const ratio = score / maxScore;
  const matchStrength = ratio > 0.8 ? 'Strong alternative' : ratio > 0.65 ? 'Secondary fit' : 'Adjacent interest';

  switch (careerId) {
    case 'ai-engineer':
      return `${matchStrength} for hands-on application building, API integration, and full-stack software delivery.`;
    case 'ml-engineer':
      return `${matchStrength} for model architecture scaling, training pipelines, and production MLOps.`;
    case 'data-scientist':
      return `${matchStrength} for statistical exploration, business hypothesis testing, and quantitative storytelling.`;
    case 'ai-researcher':
      return `${matchStrength} for foundational math, novel architecture experiments, and academic inquiry.`;
    case 'nlp-engineer':
      return `${matchStrength} for language model fine-tuning, tokenization nuances, and semantic text workflows.`;
    case 'cv-engineer':
      return `${matchStrength} for computer vision, real-time object detection, and multimodal spatial intelligence.`;
    case 'ai-pm':
      return `${matchStrength} for translating technical AI feasibility into customer value and product roadmaps.`;
    case 'ai-entrepreneur':
      return `${matchStrength} for high-agency prototyping, product-market validation, and commercial venture building.`;
    default:
      return `${matchStrength} based on your assessment answers.`;
  }
}

/**
 * Generates a comprehensive, personalized explanation of why this career matches the student.
 * 
 * FUTURE AI EXTENSION:
 * This function currently runs deterministic dynamic synthesis on the client side.
 * When integrating an LLM API (such as Google Gemini), this function can be replaced
 * or enhanced with an asynchronous prompt call:
 * 
 * ```typescript
 * export async function generateCareerExplanationWithAI(careerId: CareerId, answers: Record<number, string>) {
 *   const response = await fetch('/api/generate-career-insight', { ... });
 *   return response.json();
 * }
 * ```
 */
export function generateCareerExplanation(
  careerId: CareerId,
  answers: Record<number, string>,
  strengths: string[]
): string {
  const strengthsList = strengths.slice(0, 3).join(', ');

  // Analyze answer profiles to craft customized synthesis
  const hasCodingFocus = answers[2] === '2a' || answers[2] === '2d';
  const hasMathFocus = answers[3] === '3a' || answers[3] === '3b';
  const hasBusinessFocus = answers[8] === '8d' || answers[10] === '10f';
  const hasResearchFocus = answers[6] === '6b' || answers[7] === '7c';

  switch (careerId) {
    case 'ai-engineer':
      return `Your responses demonstrate a strong instinct for practical software engineering and tangible creation. You showed high enthusiasm for building usable applications and solving systemic software challenges rather than getting bogged down exclusively in theoretical proofs. Coupled with your demonstrated strengths in ${strengthsList}, AI Engineering gives you the optimal balance: you will directly wield foundation models, construct RAG knowledge systems, and deploy software that real people interact with every single day.`;

    case 'ml-engineer':
      return `You demonstrated a natural inclination toward systems engineering, computational efficiency, and production-grade reliability. Your answers showed that you care deeply about how models perform under real-world load, how training pipelines scale, and how models are benchmarked rigorously. With strengths in ${strengthsList}, Machine Learning Engineering offers the perfect home where your appreciation for math, infrastructure, and code meets high-throughput production computing.`;

    case 'data-scientist':
      return `Your assessment highlights a natural curiosity for uncovering empirical truths, questioning assumptions, and translating data into actionable decisions. You enjoy digging into complex datasets to understand the "why" behind trends and communicate compelling stories. Your strengths in ${strengthsList} position you exceptionally well for Data Science, where you will use statistics, machine learning, and visualization to guide high-stakes organizational decisions.`;

    case 'ai-researcher':
      return `You possess an exceptional drive for first-principles thinking, mathematical rigor, and foundational exploration. Your answers reflect a deep desire to understand the inner workings of neural architectures and push the boundaries of what machine intelligence can accomplish. With distinct strengths in ${strengthsList}, a path in AI Research will allow you to read frontier literature, hypothesize novel approaches, and contribute to the scientific breakthroughs of tomorrow.`;

    case 'nlp-engineer':
      return `Your answers reveal a keen fascination with human language, communication structure, and semantic reasoning. You prefer working directly with text representation, conversational systems, and specialized model fine-tuning. Backed by strengths in ${strengthsList}, Natural Language Processing engineering offers you the opportunity to shape how computers comprehend nuance, translate diverse tongues, and reason through vast libraries of human knowledge.`;

    case 'cv-engineer':
      return `You showed a distinct affinity for visual computing, spatial perception, and real-time interaction. You are excited by machines that can literally see, segment scenes, track objects, and perceive physical or augmented environments. Your strengths in ${strengthsList} align naturally with Computer Vision Engineering, where your work will directly power autonomous systems, robotics, visual diagnostics, and spatial computing interfaces.`;

    case 'ai-pm':
      return `Your assessment indicates outstanding strategic perspective, user empathy, and holistic product judgment. Rather than being confined solely to writing low-level algorithms, you are energized by understanding human pain points, prioritizing feature roadmaps, and evaluating the business ROI of AI. With your demonstrated strengths in ${strengthsList}, AI Product Management will place you at the critical intersection of technical teams, executive leaders, and delighted users.`;

    case 'ai-entrepreneur':
      return `You exhibit high agency, an entrepreneurial builder mindset, and a relentless focus on rapid problem-solving. You are drawn to shipping functional minimum viable products, finding paying customers, and turning emerging AI capabilities into self-sustaining ventures. Supported by your strengths in ${strengthsList}, your best path is AI Entrepreneurship, where your versatility, speed, and market focus allow you to create products and businesses on your own terms.`;

    default:
      return `Based on your assessment selections and key strengths in ${strengthsList}, this career represents your strongest alignment across problem-solving style, technical preferences, and long-term career aspirations.`;
  }
}

/**
 * Returns the personalized roadmap for a given career.
 * 
 * FUTURE AI EXTENSION:
 * This can be customized by an AI endpoint that takes into account the user's current
 * skill level (e.g., skip stage 1 if they already know Python) and target timeframe.
 */
export function generatePersonalizedRoadmap(careerId: CareerId): RoadmapStage[] {
  const career = CAREERS.find(c => c.id === careerId);
  return career ? career.roadmap : CAREERS[0].roadmap;
}

/**
 * Returns recommended projects for a given career.
 */
export function generateRecommendedProjects(careerId: CareerId): ProjectRecommendation[] {
  const career = CAREERS.find(c => c.id === careerId);
  return career ? career.projects : CAREERS[0].projects;
}

/**
 * Save assessment results to LocalStorage for persistence across page refreshes.
 */
export function saveAssessmentResult(result: AssessmentResult): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch (e) {
    console.error('Failed to save assessment to localStorage:', e);
  }
}

/**
 * Retrieve saved assessment results from LocalStorage if available.
 */
export function getSavedAssessmentResult(): AssessmentResult | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AssessmentResult;
  } catch (e) {
    console.error('Failed to read assessment from localStorage:', e);
    return null;
  }
}

/**
 * Clear stored assessment result.
 */
export function clearSavedAssessmentResult(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear assessment from localStorage:', e);
  }
}
