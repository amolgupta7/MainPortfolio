export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
  featured?: boolean
  repoUrl?: string
}

export const projects: Project[] = [
  {
    slug: "hope-speech-detection",
    title: "Hope Speech Detection",
    description:
      "NLP research project fine-tuning RoBERTa to classify hope speech in YouTube comments from the Hope Speech EDI dataset (~28K labeled comments), benchmarked against Logistic Regression, SVC, and BERT baselines — reaching 94% accuracy and a 93% F1 score.",
    tags: ["NLP", "RoBERTa", "PyTorch", "Transformers"],
    image: "",
    imageAlt: "",
    featured: true,
    repoUrl: "https://github.com/amolgupta7/Hope-Speech-Detection",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio (v1)",
    description:
      "My earlier personal portfolio site, hand-built with HTML, CSS, and JavaScript and deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "",
    imageAlt: "",
    repoUrl: "https://github.com/amolgupta7/Portfolio",
  },
  {
    slug: "main-portfolio",
    title: "This Portfolio",
    description:
      "The site you're on right now — built with React, TypeScript, Tailwind CSS, and Vite, developed with AI-assisted workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "",
    imageAlt: "",
    repoUrl: "https://github.com/amolgupta7/MainPortfolio",
  },
]
